"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import SignOutButton from "./SignOutButton";
import Link from "next/link";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="text-center text-black flex flex-col">
        <p className="mb-4 ">
          Welcome, <span className="font-semibold">{session.user?.email}</span>!
        </p>

        <Link href={"/dashboard"} className="text-blue-400">
          Dashboard
        </Link>

        <SignOutButton />
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("auth0", { callbackUrl: "/dashboard" })}
      className="px-6 py-2 hover:cursor-pointer font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Sign In with Auth0
    </button>
  );
}
