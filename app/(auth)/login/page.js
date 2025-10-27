import React from 'react'

function Login() {
  return (
 

 <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-800 px-6 py-12 lg:px-8">
  {/* Glass card */}
  <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-md border border-white/20">
  

    <form action="/" method="POST" className="mt-8 space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 block w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none sm:text-sm"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium text-gray-200">
            Password
          </label>
       
        </div>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-2 block w-full rounded-lg bg-white/10 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none sm:text-sm"
          placeholder="••••••••"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
        >
          Login
        </button>
      </div>
    </form>

    
  </div>
</div>


    
  )
}

export default Login