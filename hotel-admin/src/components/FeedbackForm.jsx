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
    <div className="max-w-xl mx-auto mt-16 p-8 border rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Feedback</h2>
      <p className="mb-6 text-gray-600">
        Share your feedback about our rooms or services!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
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
                className={`cursor-pointer ${i <= form.rating ? "text-yellow-300" : "text-gray-300"}`}
                onClick={() => setForm((prev) => ({ ...prev, rating: i }))}
              />
            ))}
          </div>
        </div>
        <Button type="submit" className="mt-4">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
}
