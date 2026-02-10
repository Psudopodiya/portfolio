import react from '@vitejs/plugin-react-swc';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'path';
import { defineConfig, loadEnv, type PluginOption } from 'vite';
import sendEmailHandler from './api/sendEmail.js';

type ApiRequest = IncomingMessage & {
  body?: Record<string, unknown>;
};

type ApiResponse = ServerResponse & {
  status: (code: number) => ApiResponse;
  json: (payload: unknown) => ApiResponse;
};

const readJsonBody = async (
  req: IncomingMessage
): Promise<Record<string, unknown>> =>
  new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += String(chunk);
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });

const wrapApiResponse = (res: ServerResponse): ApiResponse => {
  const response = res as ApiResponse;
  response.status = (code: number) => {
    res.statusCode = code;
    return response;
  };
  response.json = (payload: unknown) => {
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json');
    }
    res.end(JSON.stringify(payload));
    return response;
  };
  return response;
};

const localApiPlugin = (): PluginOption => ({
  name: 'local-send-email-api',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/api/sendEmail', async (req, res) => {
      const apiReq = req as ApiRequest;
      const apiRes = wrapApiResponse(res);

      if (apiReq.method === 'POST') {
        try {
          apiReq.body = await readJsonBody(apiReq);
        } catch {
          apiRes.status(400).json({ error: 'Invalid JSON payload.' });
          return;
        }
      } else {
        apiReq.body = {};
      }

      try {
        await sendEmailHandler(apiReq, apiRes);
      } catch (error) {
        console.error('Local /api/sendEmail failed:', error);
        if (!res.writableEnded) {
          apiRes.status(500).json({ error: 'Failed to send email' });
        }
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  process.env.RESEND_API_KEY = process.env.RESEND_API_KEY ?? env.RESEND_API_KEY;
  process.env.EMAIL_FROM = process.env.EMAIL_FROM ?? env.EMAIL_FROM;
  process.env.EMAIL_RECEIVER = process.env.EMAIL_RECEIVER ?? env.EMAIL_RECEIVER;

  return {
    server: {
      host: '::',
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), localApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;

            if (id.includes('@react-three/fiber')) return 'vendor-r3f';
            if (id.includes('three/examples')) return 'vendor-three-examples';
            if (id.includes('node_modules/three')) return 'vendor-three-core';

            if (id.includes('@radix-ui') || id.includes('framer-motion')) {
              return 'vendor-ui';
            }

            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }

            return 'vendor';
          },
        },
      },
    },
  };
});
