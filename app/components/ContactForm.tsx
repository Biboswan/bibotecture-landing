"use client";
import React, { useState } from "react";
import { Button } from "./Button";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full max-md:max-w-full">
        <div className="w-full leading-relaxed text-white max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="flex gap-2.5 items-center px-4 py-4 mt-2 w-full rounded-md bg-gray-950 min-h-14"
              />
            </div>
            <div className="flex-1 shrink self-stretch my-auto basis-0 min-w-60">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="flex gap-2.5 items-center px-4 py-4 mt-2 w-full rounded-md bg-gray-950 min-h-14"
              />
            </div>
          </div>
          <div className="mt-4 w-full max-md:max-w-full">
            <label htmlFor="company">Company Name (optional)</label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter company name"
              className="flex gap-2.5 items-center px-4 py-4 mt-2 w-full rounded-md bg-gray-950 min-h-14 max-md:max-w-full"
            />
          </div>
          <div className="mt-4 w-full max-md:max-w-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="flex gap-2.5 items-start px-4 pt-3.5 pb-28 mt-2 w-full rounded-md bg-gray-950 min-h-[151px] max-md:pb-24 max-md:max-w-full"
            />
          </div>
        </div>
        {error && (
          <div className="mt-4 text-red-500 text-sm">{error}</div>
        )}
        {success && (
          <div className="mt-4 text-green-500 text-sm">
            Message sent successfully! We&apos;ll get back to you soon.
          </div>
        )}
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-8 flex items-center justify-center"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};
