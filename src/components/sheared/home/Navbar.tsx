"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-red-600">
        <Link href={"/"}>Donate Blood 🩸</Link>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/blooddonate">
          <Button
            variant="outline"
            className={
              pathName === "/blooddonate"
                ? "bg-red-400 text-white text-bold"
                : ""
            }
          >
            Donate Blood
          </Button>
        </Link>

        <Link href="/signin">
          <Button
            variant="outline"
            className={
              pathName === "/signin" ? "bg-red-400 text-white text-bold" : ""
            }
          >
            Sign In
          </Button>
        </Link>

        <Link href="/signup">
          <Button
            variant="outline"
            className={
              pathName === "/signup" ? "bg-red-400 text-white text-bold" : ""
            }
          >
            Sign Up
          </Button>
        </Link>

        
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
    </nav>
  );
}
