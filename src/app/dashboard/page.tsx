"use client";

import SignOutButton from "@/components/SignOutButton";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const session = useSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-50">
      <div className="p-10 text-center bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-green-700">
          ✅ Protected Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          If you can see this, you are successfully logged in.
        </p>
        <p className="mt-6 font-semibold text-gray-800">
          Welcome, {session.data?.user?.email} !
        </p>

        {/* This is the part that displays the role */}
        {session.data?.user?.roles && session.data?.user.roles.length > 0 && (
          <p className="mt-2 text-sm text-gray-600">
            Your Role:{" "}
            <span className="font-bold text-blue-600">
              {session.data?.user.roles.join(", ")}
            </span>
          </p>
        )}

        <SignOutButton />
      </div>
    </main>
  );
}
