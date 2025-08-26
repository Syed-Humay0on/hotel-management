"use client";

import { useState } from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { FaStar } from "react-icons/fa";

export default function FeedbackForm({ onNewReview }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewReview({ ...form, date: new Date() });
    setForm({ name: "", email: "", message: "", rating: 5 });
  };

  return (
    <div className="max-w-xl mx-auto mt-16 mb-20 p-8 border rounded-lg shadow-lg bg-white dark:bg-gray-900">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
        We Value Your Feedback
      </h2>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
        Share your experience with us — your thoughts help us improve our services.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="name">Name</Label>
          <TextInput
            id="name"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your feedback..."
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <div>
          <Label>Rating</Label>
          <div className="flex space-x-1 mt-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <FaStar
                key={i}
                className={`cursor-pointer ${
                  i <= form.rating ? "text-yellow-300" : "text-gray-300"
                }`}
                onClick={() => setForm((prev) => ({ ...prev, rating: i }))}
              />
            ))}
          </div>
        </div>
        <Button type="submit" className="mt-4 w-full sm:w-auto">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
}
