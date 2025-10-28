import React from "react";
import { GET } from "@/app/api/todos/route";
import TodoItem from "@/components/TodoItem";

export const dynamic = "force-dynamic"; 

export default async function Todos() {
//   const res = await GET();

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
    cache: "no-store",
  });
  const data = await res.json();
  const todos = data.todos || [];

  
//   const data = await res.json();
//   const todos = data.todos || [];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        

        <section className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
          {todos.length === 0 ? (
            <p className="text-gray-600 text-center py-10">
              No todos yet — add one to get started!
            </p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} /> 
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
