import type { IncomingMessage, ServerResponse } from 'node:http';

type ApiRequest = IncomingMessage & {
  body?: Record<string, unknown>;
};

type ApiResponse = ServerResponse & {
  status: (code: number) => ApiResponse;
  json: (payload: unknown) => ApiResponse;
};

declare const handler: (req: ApiRequest, res: ApiResponse) => Promise<void>;

export default handler;
