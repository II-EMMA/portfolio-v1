"use client";
import { useState } from "react";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const textarea = formData.get("textarea");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message: textarea }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSuccessMessage("Your message has been sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Submission error:", error.message);
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="px-6 max-w-[1000px] mx-auto grid md:grid-cols-2 place-items-center relative z-10"
      id="contact"
    >
      <div className="max-w-[600px] -skew-y-6 font-bold dark:text-gray-300 text-gray-700 mb-16 lg:mb-0 ">
        <div className="flex flex-row">
          <p className="mt-6 text-4xl">We can connect on</p>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ii-emma"
            className="ml-4 text-7xl dark:text-gray-300 text-gray-700"
          >
            <AiFillLinkedin />
          </Link>
        </div>

        <p className="mt-8 text-4xl">
          or you can send me an email via this form!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl p-5 md:p-12 w-full relative z-20 pointer-events-auto"
        id="form"
      >
        <input
          type="text"
          id="name"
          placeholder="Your Name ..."
          name="name"
          required
          className="dark:placeholder:text-white placeholder:text-black mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 bg-transparent dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email ..."
          name="email"
          required
          className="dark:placeholder:text-white placeholder:text-black mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 bg-transparent dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          name="textarea"
          id="textarea"
          cols={30}
          rows={4}
          placeholder="Your Message ..."
          required
          className="dark:placeholder:text-white placeholder:text-black mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 bg-transparent dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-md text-gray-200 font-semibold text-xl
            bg-gradient-to-r from-[#a56cc1] via-[#7e4ca0] to-[#5a2e7e] transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {successMessage && (
          <p className="mt-4 text-green-500 text-center font-medium">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center font-medium">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
