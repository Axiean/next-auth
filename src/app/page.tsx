import AuthButton from "@/components/AuthButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Authentication System
        </h1>
        <p className="text-center text-gray-600">
          Login using Auth0 to continue.
        </p>
        <div className="flex justify-center">
          <AuthButton />
        </div>
      </div>
    </main>
  );
}
