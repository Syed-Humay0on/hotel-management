"use client";

import { FaStar } from "react-icons/fa";

export default function Testimonial({ reviews }) {
  return (
    <section className="mt-16 px-4 py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-3xl mx-auto space-y-8">
        {reviews.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">No reviews yet.</p>
        )}

        {reviews.map((review, idx) => (
          <article key={idx} className="p-6 rounded-lg border border-gray-100 dark:border-gray-700">
            {/* Avatar + Name + Date */}
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={`https://i.pravatar.cc/150?u=${review.email}`}
                alt={review.name}
              />
              <div className="font-medium dark:text-white">
                <p>
                  {review.name}{" "}
                  <time className="block text-sm text-gray-500 dark:text-gray-400">
                    {review.date.toLocaleDateString()}
                  </time>
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center mb-2 space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <FaStar
                  key={i}
                  className={i <= review.rating ? "text-yellow-300 w-4 h-4" : "text-gray-300 w-4 h-4"}
                />
              ))}
            </div>

            {/* Message */}
            <p className="mb-2 text-gray-500 dark:text-gray-400">{review.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
