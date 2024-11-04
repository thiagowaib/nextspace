import type { Metadata } from "next";
import {Montserrat} from 'next/font/google';
import NavMenu from "./NavMenu";
import 'tailwindcss/tailwind.css'
import AuthProvider from "./AuthProvider";

export const metadata: Metadata = {
  title: "NextSpace",
};

const font = Montserrat();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body style={font.style}>
          <NavMenu/>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
