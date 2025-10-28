import { addTodo } from "@/lib/actions";
import React from "react";

export const AddTodo = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-800 px-6 py-12 lg:px-8">
      {/* Glass Card */}
      <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-md border border-white/20">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Add New Todo
        </h2>

        <form action={addTodo} className="space-y-6">
          {/* Todo Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-200"
            >
              Todo Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="mt-2 block w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none sm:text-sm"
              placeholder="Enter your todo title"
            />
          </div>

          {/* Todo body */}
          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-200"
            >
              Todo Body
            </label>
            <textarea
              id="body"
              name="body"
              rows="3"
              required
              className="mt-2 block w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none sm:text-sm resize-none"
              placeholder="Write something about this task..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
