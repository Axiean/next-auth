"use client";

import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

interface Props {
  children: React.ReactNode;
}

export default function NextAuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
