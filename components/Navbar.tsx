import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-slate-700 transition-colors duration-300 flex items-center justify-between px-6 py-4">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={46}
            height={44}
            className="dark:invert"
          />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        {<NavItems />}
        <ThemeToggle />
        <SignedOut>
          <SignInButton>
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
