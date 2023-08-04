import Link from 'next/link'
import React from 'react'
import { useAuth } from '@/pages/auth/auth'

const Navbar = ({cart}) => {

  const { user, isAuthenticated, signIn, signOut } = useAuth();

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href={"/"}
          >
            <img width={23} src="/logo.svg" alt="Xoltan"></img>
            <span className="ml-3 text-xl">Xoltan</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-700">
              Home
            </Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href={"/products"} className="mr-5 hover:text-gray-900">
              Products
            </Link>
            <Link href={"/contactUs"} className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <Link href={"/checkout"} className="mr-5 hover:text-gray-900">
            Cart({cart.length})
          </Link>
          {/* Conditional rendering for Sign In/Sign Out button */}

          {isAuthenticated ? (
            <div className="flex items-center">
              <h1 className="mr-3">{user.name}</h1>
              <img
                src={user.image}
                alt={user.name + " photo"}
                className="w-8 h-8 rounded-full"
              />
              <button
                onClick={signOut}
                className="ml-3 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
              >
                Sign Out
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Sign In
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar