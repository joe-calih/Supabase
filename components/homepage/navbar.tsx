"use client"

import Link from "next/link"

function SprintMark() {
  return (
    <svg width="23" height="24" viewBox="0 0 109 113" fill="none" aria-hidden="true">
      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#nav-paint0)" />
      <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
      <defs>
        <linearGradient id="nav-paint0" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#09090B]/80 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Sprint home">
            <SprintMark />
            <span className="text-white font-semibold">Sprint</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Product
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Resources
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Customers
            </a>
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Log in
            </Link>
            <Link
              href="/signup"
              className="text-sm text-white bg-zinc-800 hover:bg-zinc-700 px-3.5 py-1.5 rounded-md border border-zinc-700 transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
