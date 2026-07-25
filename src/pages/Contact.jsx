import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">Contact Us</h1>
      <p className="mt-2 text-gray-600">Have questions or feedback? Reach out to us below.</p>

      {submitted ? (
        <div className="mt-6 bg-green-50 border rounded-lg p-4 text-green-700 max-w-md">
          Thanks, {form.name}! Your message has been received.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 max-w-md flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border rounded-lg px-4 py-2"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border rounded-lg px-4 py-2"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 rounded-lg w-fit"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
export default Contact;