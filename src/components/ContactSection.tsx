import { Mail, Phone, Send } from "lucide-react";
import { Button, Textarea, Input } from "@/components/ui";

type ContactSectionProps = {
  isDarkTheme: boolean;
};

function ContactSection({ isDarkTheme }: ContactSectionProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Validate form data
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Basic validation
    if (!payload.name || !payload.email || !payload.message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email as string)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      alert("Message sent successfully!");
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p
            className={`${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
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
              placeholder="Your Name"
              className={`${
                isDarkTheme
                  ? "bg-black/50 border-white/10"
                  : "bg-white/50 border-black/10"
              } border rounded-xl ${
                isDarkTheme ? "placeholder-gray-400" : "placeholder-gray-600"
              } px-4 py-3`}
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`${
                isDarkTheme
                  ? "bg-black/50 border-white/10"
                  : "bg-white/50 border-black/10"
              } border rounded-xl ${
                isDarkTheme ? "placeholder-gray-400" : "placeholder-gray-600"
              } px-4 py-3`}
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              className={`${
                isDarkTheme
                  ? "bg-black/50 border-white/10"
                  : "bg-white/50 border-black/10"
              } border rounded-xl ${
                isDarkTheme ? "placeholder-gray-400" : "placeholder-gray-600"
              } px-4 py-3 min-h-[150px]`}
            />
            <Button
              type="submit"
              className="w-fit rounded-xl gap-2 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 hover:from-orange-500 hover:via-orange-400 hover:to-orange-500 transition-all py-3 text-white"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>

          {/* Divider */}
          <div
            className={`w-px ${isDarkTheme ? "bg-white/10" : "bg-black/10"}`}
          ></div>

          {/* Contact Details Section */}
          <div className="flex flex-col gap-4 my-auto">
            <h1 className="text-xl font-semibold">Contact Details</h1>
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500" />
              <p className={isDarkTheme ? "text-gray-400" : "text-gray-600"}>
                +91-8817420747
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-500" />
              <p className={isDarkTheme ? "text-gray-400" : "text-gray-600"}>
                raiker.chinmay@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
