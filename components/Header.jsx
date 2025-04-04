import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { checkUser } from "@/lib/createUser";

const Header = async() => {
  await checkUser();
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="conatiner px-4 py-4 flex justify-between items-center mx-auto">
        <Link href="/">
          <Image
            src={"/logo.png"}
            width={200}
            height={60}
            className="w-auto h-12 object-contain"
            alt="logo"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href={"/dashboard"} className="text-gray-600 flex items-center gap-2 hover:text-blue-500">
              <Button variant='outline'>
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"} className="text-gray-600 flex items-center gap-2">
              <Button>
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
