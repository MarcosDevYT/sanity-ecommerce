"use client";

import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import Form from "next/form";
import Link from "next/link";
import { Button } from "../ui/button";
import useBasketStore from "@/store/store";

export const Navbar = () => {
  const { user } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="flex flwx-wrap justify-between items-center px-4 py-2 mx-auto container">
        {/* Top Row */}
        <div className="flex w-full flex-wrap justify-between items-center">
          <Link
            href={"/"}
            className="font-bold text-2xl text-blue-500 hover:opacity-50 cursor-pointer mx-auto md:mx-0"
          >
            Shop
          </Link>

          <Form
            action="/search"
            className="w-full md:w-auto md:flex-1 md:mx-4 mt-2 md:mt-0"
          >
            <input
              type="text"
              name="query"
              placeholder="Search for products"
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
            />
          </Form>

          <div className="flex items-center space-x-4 mt-4 md:mt-0 flex-1 md:flex-none">
            <Link
              href={"/basket"}
              className="flex-1 relative flex justify-center md:justify-start md:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <TrolleyIcon className="size-6" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full size-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
              <span>My Basket</span>
            </Link>

            {/* User Area */}
            <ClerkLoaded>
              <SignedIn>
                <Link
                  href={"/orders"}
                  className="flex-1 relative flex justify-center md:justify-start md:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  <PackageIcon className="size-6" />
                  <span>My Orders</span>
                </Link>
              </SignedIn>

              {user ? (
                <div className="flex items-center space-x-2">
                  <UserButton />

                  <div className="hidden md:block items-center text-xs">
                    <p className="text-gray-600">Welcome Back</p>
                    <p className="font-bold">{user.firstName}!</p>
                  </div>
                </div>
              ) : (
                <SignInButton mode="modal">
                  <Button>Sign In</Button>
                </SignInButton>
              )}
            </ClerkLoaded>
          </div>
        </div>
      </nav>
    </header>
  );
};
