"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user)
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex gap-3 items-center">
          <Image
            className="rounded-full"
            src={user?.picture || ""}
            width={50}
            height={50}
            alt="user picture"
          />
          <span>{user.name}!</span>
          <a
            className="p-2 bg-red-500 text-white rounded-md"
            href="/api/auth/logout"
          >
            Logout
          </a>
        </div>
      </div>
    );
  return <a href="/api/auth/login">Login</a>;
}
