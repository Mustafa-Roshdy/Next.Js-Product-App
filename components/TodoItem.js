"use client";

import React, { useState, useTransition } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "@/lib/actions";

export default function TodoItem({ todo }) {
  const [isPending, startTransition] = useTransition();
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [body, setBody] = useState(todo.body || "");

  // Toggle done status
  const toggleData = () => {
    startTransition(async () => {
      await toggleTodo(todo._id, !todo.isDone);
    });
  };

  // Update todo
  const handleUpdate = (e) => {
    e.preventDefault();
    startTransition(async () => {
      await updateTodo(todo._id, { title, body });
      setShowModal(false); 
    });
  };

  // Delete todo
  const handleDelete = () => {
      startTransition(async () => {
        await deleteTodo(todo._id);
      });
    
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Edit Todo</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full border rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Description
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={3}
                  className="w-full border rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isPending ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Todo Item */}
      <li className="flex items-center justify-between py-4 px-3 hover:bg-gray-50 rounded-lg transition">
        {/* Left side: checkbox + info */}
        <div className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={toggleData}
            className="w-5 h-5 mt-1 accent-indigo-600"
            disabled={isPending}
          />
          <div>
            <h3
              className={`text-lg font-medium ${
                todo.isDone ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {todo.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {todo.body || "No description provided."}
            </p>
          </div>
        </div>

        {/* Right side: actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="text-sm px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
