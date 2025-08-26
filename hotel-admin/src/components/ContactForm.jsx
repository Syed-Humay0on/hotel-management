import React from "react";

export default function ContactForm() {
  return (
    <section className="bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              placeholder-gray-500"
              placeholder="name@luxurystay.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-200 bg-gray-800 rounded-lg border border-gray-700 shadow-sm 
              focus:ring-blue-500 focus:border-blue-500 
              placeholder-gray-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-200 bg-gray-800 rounded-lg shadow-sm border border-gray-700 
              focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg 
             bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none 
             focus:ring-blue-800 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
