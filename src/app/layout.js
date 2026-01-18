import { Geist, Geist_Mono } from "next/font/google"; // Keep existing requested fonts
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { isAuthenticated } from "@/utils/auth";
import { logout } from "@/actions/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechStore - Premium Gadgets",
  description: "Your one-stop shop for premium tech gadgets.",
};

export default async function RootLayout({ children }) {
  const isLoggedIn = await isAuthenticated();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <Navbar isLoggedIn={isLoggedIn} onLogout={logout} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
