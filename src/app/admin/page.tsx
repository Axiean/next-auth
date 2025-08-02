"use client";

import { redirect } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function AdminPage() {
  const session = useSession();

  if (!session.data?.user?.roles?.includes("admin")) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-red-50">
      <div className="p-10 text-center bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-red-700">🔑 Admin Panel</h1>
        <p className="mt-2 text-gray-600">
          Welcome, powerful admin! You can see this page because your role is
          'admin'.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block text-blue-500 hover:underline"
        >
          Go back to Dashboard
        </Link>
      </div>
    </main>
  );
}
