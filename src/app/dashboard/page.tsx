import SignOutButton from "@/components/SignOutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession();

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
          Welcome, {session.user?.email}!
        </p>

        <SignOutButton />
      </div>
    </main>
  );
}
