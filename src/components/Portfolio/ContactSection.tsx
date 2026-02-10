import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Theme } from '@/types/types';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

type ContactSectionProps = {
  theme: Theme;
};

function ContactSection({ theme }: ContactSectionProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const parseSendEmailResponse = async (response: Response) => {
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      return response.json() as Promise<{
        success?: boolean;
        message?: string;
        error?: string;
      }>;
    }

    const text = await response.text();
    return { message: text } as {
      success?: boolean;
      message?: string;
      error?: string;
    };
  };

  const sendEmail = async (payload: {
    name: string;
    email: string;
    message: string;
  }) => {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await parseSendEmailResponse(response);
    if (!response.ok || !result.success) {
      const errorMessage =
        result.error ||
        result.message ||
        (response.status === 404
          ? 'Email API route not found. Run a backend that serves /api/sendEmail in development.'
          : 'Failed to send message');
      throw new Error(errorMessage);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validate form data
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      toast({
        title: 'Incomplete Form',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email as string)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail(payload);

      toast({
        title: 'Message Sent',
        description: 'Your message was sent successfully!',
      });
      form.reset();
    } catch (error) {
      console.error('Contact form send failed:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again later.';
      toast({
        title: 'Message Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 ${theme.text_secondary}`}
          >
            Contact Me
          </h2>
          <p className="max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {/* Form Section */}
          <form
            className="max-w-lg w-full space-y-6 flex items-center flex-col"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className={`border rounded-xl px-4 py-3 bg-transparent ${theme.text_primary}`}
            />
            <Input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className={`border rounded-xl px-4 py-3 bg-transparent ${theme.text_primary}`}
            />
            <Textarea
              name="message"
              required
              placeholder="Your Message"
              className={`border rounded-xl px-4 py-3 min-h-[150px] bg-transparent ${theme.text_primary}`}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-fit rounded-xl gap-2 hover:-translate-y-1 ease-in-out duration-200 transition-all py-3 ${theme.background_contrast} ${theme.text_contrast}`}
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>

          {/* Divider */}
          <div className={`w-px ${theme.background_contrast}`}></div>

          {/* Contact Details Section */}
          <div className="flex flex-col gap-4 my-auto">
            <h1 className="text-xl font-semibold">Contact Details</h1>
            <div className="flex items-center gap-3">
              <Phone />
              <p>+91-8817420747</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail />
              <p>raiker.chinmay@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { ContactSection };
