"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">My App</h1>

      <div>
        {session?.user ? (
          <div className="flex items-center gap-4">
            <span>{session.user.email}</span>
            <button
              onClick={() => signOut()}
              className="px-3 py-1 bg-red-500 rounded-lg text-sm"
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="px-3 py-1 bg-blue-500 rounded-lg text-sm"
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}
