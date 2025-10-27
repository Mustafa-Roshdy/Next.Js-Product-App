import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 px-6">
      <div className="text-center p-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        <h1 className="text-5xl mb-10 font-extrabold text-white drop-shadow-md animate-bounce">
          Hello from{" "}
          <span className="text-yellow-300">Home Page</span>
        </h1>

        <Link href={"/product"}
          className="mt-8 px-6 py-3 bg-yellow-400 text-indigo-800 font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
