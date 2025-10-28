import axios from "axios";
import React from "react";

async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI}/users/users`,{
    next:{
        revalidate:10
    }
  })
  return res.json();
}

export default async function User() {
  const users = await getUsers();

  return (
    <div className="py-20 min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 p-10 flex items-center justify-center">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-6xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-indigo-500/40"
          >
         

            {/* Username */}
            <h2 className="text-xl font-bold text-white drop-shadow-lg z-10">
              {user.name}
            </h2>

          </div>
        ))}
      </div>
    </div>
  );
}
