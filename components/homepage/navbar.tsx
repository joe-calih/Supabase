"use client"

import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { ChevronDown, ChevronRight } from "lucide-react"

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

export function Navbar({ fixed = true, align = "balanced" }: { fixed?: boolean; align?: "balanced" | "left" }) {
  return (
    <nav className={`${fixed ? "fixed" : "relative"} left-0 right-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-md`}>
      <div className="w-full flex justify-center px-6 py-4">
        <div className={`w-full max-w-6xl flex items-center relative ${align === "left" ? "justify-start" : "justify-between"}`}>
          
          <Link href="/" className="flex items-center gap-2" aria-label="Sprint home">
            <SprintMark />
            <span className="font-semibold text-foreground">Sprint</span>
          </Link>

          <NavigationMenu.Root className={`relative hidden items-center bg-transparent md:flex ${align === "left" ? "ml-10" : ""}`}>
            <NavigationMenu.List className="m-0 flex list-none items-center gap-8 bg-transparent p-0">
              
              {/* Product Dropdown Menu */}
              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger className="text-sm text-zinc-400 hover:text-white transition-colors group inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 font-normal">
                  Product
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenu.Trigger>
                
                <NavigationMenu.Content className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                  <div className="relative overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl md:w-240">
                    <div className="flex flex-col lg:flex-row">
                      <div className="flex flex-col bg-popover">
                        <div className="flex flex-row p-6 pt-5 gap-6">
                          
                          {/* Features Column */}
                          <div className="flex flex-col gap-4 w-70 lg:w-62.5">
                            <div className="flex items-center gap-1 text-zinc-500 text-xs uppercase tracking-widest font-mono">Features</div>
                            <ul className="flex flex-col gap-4 list-none p-0 m-0">
                              <li>
                                <a href="/database" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.18625 8.66531H19.5035V15.331H5.18625V8.66531Z M4 17.0007C4 16.0804 4.7461 15.3343 5.66645 15.3343H18.9984C19.9187 15.3343 20.6648 16.0804 20.6648 17.0007V20.3335C20.6648 21.2539 19.9187 22 18.9984 22H5.66646C4.7461 22 4 21.2539 4 20.3335V17.0007Z M4 3.66646C4 2.7461 4.7461 2 5.66645 2H18.9984C19.9187 2 20.6648 2.7461 20.6648 3.66645V6.99926C20.6648 7.91962 19.9187 8.66572 18.9984 8.66572H5.66646C4.7461 8.66572 4 7.91962 4 6.99926V3.66646Z" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Database</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">Fully portable Postgres database</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/auth" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.03305 15.8071H12.7252M5.03305 15.8071V18.884H12.7252V15.8071M5.03305 15.8071V12.7302H12.7252V15.8071M15.0419 8.15385V5.07692C15.0419 3.37759 13.6643 2 11.965 2C10.2657 2 8.88814 3.37759 8.88814 5.07692V8.15385M5 11.2307L5 18.9231C5 20.6224 6.37757 22 8.07689 22H15.769C17.4683 22 18.8459 20.6224 18.8459 18.9231V11.2307C18.8459 9.53142 17.4683 8.15385 15.769 8.15385L8.07689 8.15385C6.37757 8.15385 5 9.53142 5 11.2307Z" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Authentication</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">User Management out of the box</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/storage" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.4997 12.1386V9.15811L14.8463 3.53163H6.43717C5.57423 3.53163 4.87467 4.23119 4.87467 5.09413V9.78087M20.4447 9.13199L14.844 3.53125L14.844 7.56949C14.844 8.43243 15.5436 9.13199 16.4065 9.13199L20.4447 9.13199ZM7.12729 9.78087H4.83398C3.97104 9.78087 3.27148 10.4804 3.27148 11.3434V19.1559C3.27148 20.8818 4.67059 22.2809 6.39648 22.2809H18.8965C20.6224 22.2809 22.0215 20.8818 22.0215 19.1559V13.7011C22.0215 12.8381 21.3219 12.1386 20.459 12.1386H10.8032C10.3933 12.1386 9.99969 11.9774 9.70743 11.6899L8.22312 10.2296C7.93086 9.94202 7.53729 9.78087 7.12729 9.78087Z" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Storage</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">Serverless storage for any media</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/edge-functions" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.6594 21.8201C8.10788 22.5739 9.75418 23 11.5 23C17.299 23 22 18.299 22 12.5C22 10.7494 21.5716 9.09889 20.8139 7.64754M16.4016 3.21191C14.9384 2.43814 13.2704 2 11.5 2C5.70101 2 1 6.70101 1 12.5C1 14.287 1.44643 15.9698 2.23384 17.4428M2.23384 17.4428C1.81058 17.96 1.55664 18.6211 1.55664 19.3416C1.55664 20.9984 2.89979 22.3416 4.55664 22.3416C6.21349 22.3416 7.55664 20.9984 7.55664 19.3416C7.55664 17.6847 6.21349 16.3416 4.55664 16.3416C3.62021 16.3416 2.78399 16.7706 2.23384 17.4428ZM21.5 5.64783C21.5 7.30468 20.1569 8.64783 18.5 8.64783C16.8432 8.64783 15.5 7.30468 15.5 5.64783C15.5 3.99097 16.8432 2.64783 18.5 2.64783C20.1569 2.64783 21.5 3.99097 21.5 5.64783ZM18.25 12.5C18.25 16.2279 15.2279 19.25 11.5 19.25C7.77208 19.25 4.75 16.2279 4.75 12.5C4.75 8.77208 7.77208 5.75 11.5 5.75C15.2279 5.75 18.25 8.77208 18.25 12.5Z" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Edge Functions</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">Deploy code globally on the edge</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/compute" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 16V8C20.9996 7.6493 20.9071 7.3048 20.7316 7.0011C20.556 6.6975 20.3037 6.4453 20 6.27L13 2.27C12.696 2.0945 12.3511 2.002 12 2.002C11.6489 2.002 11.304 2.0945 11 2.27L4 6.27C3.6963 6.4453 3.444 6.6975 3.2685 7.0011C3.0929 7.3048 3.0004 7.6493 3 8V16C3.0004 16.3507 3.0929 16.6952 3.2685 16.9988C3.444 17.3025 3.6963 17.5547 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7316 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z M17.3333 14.1348V9.8672C17.3331 9.6801 17.2783 9.4964 17.1743 9.3344C17.0703 9.1724 16.9208 9.0379 16.7408 8.9443L12.5926 6.8106C12.4124 6.7169 12.208 6.6676 12 6.6676C11.792 6.6676 11.5876 6.7169 11.4074 6.8106L7.2593 8.9443C7.0793 9.0379 6.9298 9.1724 6.8258 9.3344C6.7217 9.4964 6.6669 9.6801 6.6667 9.8672V14.1348C6.6669 14.3219 6.7217 14.5056 6.8258 14.6676C6.9298 14.8296 7.0793 14.964 7.2593 15.0576L11.4074 17.1913C11.5876 17.2851 11.792 17.3343 12 17.3343C12.208 17.3343 12.4124 17.2851 12.5926 17.1913L16.7408 15.0576C16.9208 14.964 17.0703 14.8296 17.1743 14.6676C17.2783 14.5056 17.3331 14.3219 17.3333 14.1348Z M8 9.3343L12 12.001L16 9.3343 M12 16.6667V12.001" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Compute</p>
                                      <span className="inline-flex items-center justify-center rounded-full text-[9px] uppercase font-medium px-1.5 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700">Private Alpha</span>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">Sandboxes and backend services</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/realtime" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.15928 1.94531V5.84117M6.24345 5.84117L2.91385 2.40977M6.24345 8.53673H2.4248M16.7998 16.496L21.9988 15.2019C22.7217 15.022 22.8065 14.0285 22.1246 13.7286L9.73411 8.28034C9.08269 7.99391 8.41873 8.65652 8.70383 9.30851L14.0544 21.5445C14.3518 22.2247 15.341 22.1456 15.5266 21.4269L16.7998 16.496Z" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Realtime</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">Synchronize and broadcast events</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>

                          {/* Modules Column */}
                          <div className="flex flex-col gap-4 w-72">
                            <div className="flex items-center gap-1 text-zinc-500 text-xs uppercase tracking-widest font-mono">Modules</div>
                            <ul className="flex flex-col gap-4 list-none p-0 m-0">
                              <li>
                                <a href="/modules/vector" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.9983 11.4482V21.7337M11.9983 11.4482L21.0732 6.17699M11.9983 11.4482L2.92383 6.17723M2.92383 6.17723V12.4849M2.92383 6.17723V6.1232L8.35978 2.9657M21.0736 12.54V6.1232L15.6376 2.9657M17.7247 18.6107L11.9987 21.9367L6.27265 18.6107" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Vector</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">AI toolkit to manage embeddings</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/modules/cron" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.375V12H16.2188M21.375 12C21.375 17.1777 17.1777 21.375 12 21.375C6.82233 21.375 2.625 17.1777 2.625 12C2.625 6.82233 6.82233 2.625 12 2.625C17.1777 2.625 21.375 6.82233 21.375 12Z" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Cron</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">Schedule and manage recurring Jobs</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/modules/queues" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg className="h-5 w-5 text-zinc-400 group-hover/menu-item:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.625 16.2902C17.625 17.0274 17.0274 17.625 16.2902 17.625H9.375C7.71815 17.625 6.375 16.2819 6.375 14.625V8.14725C6.375 7.16846 7.16846 6.375 8.14725 6.375M13.125 20.7902C13.125 21.5274 12.5274 22.125 11.7902 22.125H4.875C3.21815 22.125 1.875 20.7819 1.875 19.125V12.6472C1.875 11.6685 2.66846 10.875 3.64725 10.875M13.875 13.125H19.125C20.7819 13.125 22.125 11.7819 22.125 10.125V4.875C22.125 3.21815 20.7819 1.875 19.125 1.875H13.875C12.2181 1.875 10.875 3.21815 10.875 4.875V10.125C10.875 11.7819 12.2181 13.125 13.875 13.125Z" stroke="currentColor"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Queues</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 group-hover/menu-item:text-zinc-300 text-xs">Durable Message Queues with guaranteed delivery</p>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a href="/features" className="group/menu-item flex text-zinc-400 text-sm hover:text-white select-none gap-3 rounded-md leading-none no-underline items-center h-fit p-0">
                                  <div className="shrink-0 border border-zinc-800 bg-zinc-800/50 min-w-10 w-10 h-10 flex items-center justify-center rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover/menu-item:text-white" aria-hidden="true">
                                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-1">
                                      <p className="leading-snug text-white font-medium">Features</p>
                                      <ChevronRight className="w-3 h-3 text-white transition-all -translate-x-1 opacity-0 group-hover/menu-item:translate-x-0 group-hover/menu-item:opacity-100" />
                                    </div>
                                    <p className="line-clamp-2 leading-snug text-zinc-400 text-xs">Explore everything you can do with Supabase.</p>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>

                      {/* Right Sidebar: Customer Stories & Comparisons */}
                      <div className="w-full flex-col gap-8 border-t border-border bg-muted/50 p-6 lg:flex lg:flex-1 lg:border-l lg:border-t-0">
                        <div>
                          <a href="/customers" className="group flex items-center gap-1 text-zinc-500 hover:text-white text-xs uppercase tracking-widest font-mono mb-4">
                            Customer Stories
                            <ChevronRight className="h-3 w-3 transition-transform -translate-x-1 group-hover:translate-x-0" />
                          </a>
                          <ul className="flex flex-row gap-2 list-none p-0 m-0">
                            <li>
                              <a href="/customers/lingodotdev" className="group flex items-center gap-3 rounded-sm">
                                <div className="relative rounded-md bg-zinc-900 border border-zinc-800 h-14 w-28 shrink-0 flex items-center justify-center p-2 text-xs text-zinc-400">
                                  Lingo.dev
                                </div>
                                <div className="flex flex-col">
                                  <h4 className="text-zinc-200 group-hover:text-white text-sm line-clamp-2 leading-tight font-medium">How Lingo.dev clears enterprise security reviews</h4>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div className="w-full">
                          <p className="text-zinc-500 text-xs uppercase tracking-widest font-mono mb-3">Compare Supabase</p>
                          <ul className="flex flex-col gap-2 list-none p-0 m-0">
                            <li>
                              <a href="/alternatives/supabase-vs-firebase" className="group/text-link text-zinc-400 block text-sm hover:text-white">
                                <div className="group flex items-center gap-1">
                                  <span>Supabase vs Firebase</span>
                                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/alternatives/supabase-vs-heroku-postgres" className="group/text-link text-zinc-400 block text-sm hover:text-white">
                                <div className="group flex items-center gap-1">
                                  <span>Supabase vs Heroku Postgres</span>
                                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/alternatives/supabase-vs-auth0" className="group/text-link text-zinc-400 block text-sm hover:text-white">
                                <div className="group flex items-center gap-1">
                                  <span>Supabase vs Auth0</span>
                                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* Resources Dropdown Menu */}
              <NavigationMenu.Item className="relative">
                <NavigationMenu.Trigger className="text-sm text-zinc-400 hover:text-white transition-colors group inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer p-0 font-normal">
                  Resources
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </NavigationMenu.Trigger>
                
                <NavigationMenu.Content className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                  <div className="relative overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl md:w-240">
                    <div className="flex flex-col lg:flex-row">
                      
                      {/* Left Side: Developers & Resources sections */}
                      <div className="grid w-full grid-cols-2 gap-3 bg-popover px-6 py-5 lg:w-117.5">
                        
                        {/* Developers Column */}
                        <div className="p-0 flex flex-col gap-6">
                          <label className="text-zinc-500 text-xs uppercase tracking-widest font-mono">Developers</label>
                          <ul className="flex flex-col gap-4 list-none p-0 m-0">
                            <li>
                              <a href="/docs" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <div className="relative" style={{ width: 16, height: 16 }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" color="currentColor" fill="none" stroke="currentColor" className="text-zinc-400 group-hover:text-white" width="100%" height="100%" strokeWidth="1.3">
                                    <path d="M4.20351 9.85778H11.7038M4.20351 7.35767H11.7038M4.20351 12.3579H9.20372M14.2498 5.00126V13C14.2498 14.3807 13.1305 15.5001 11.7497 15.5001H4.2499C2.86913 15.5001 1.74979 14.3807 1.74979 13V3.00018C1.74979 1.61941 2.86912 0.500076 4.24989 0.500076H9.72709L14.2498 5.00126ZM14.2058 4.98025L9.72549 0.500076L9.72526 3.73011C9.72522 4.42053 10.2849 4.98025 10.9753 4.98025L14.2058 4.98025Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </div>
                                <span>Documentation</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="/contribute" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-zinc-400 group-hover:text-white">
                                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                  <path d="m15 5 4 4"></path>
                                </svg>
                                <span>Contribute</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="https://supabase.com/library" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 group-hover:text-white" strokeWidth="1.3">
                                  <rect x="0.973313" y="0.64" width="14.72" height="14.72" rx="1.92" stroke="currentColor" strokeWidth="1.28"></rect>
                                  <path d="M8.56519 4.69238H9.74564V8.94966C9.74564 9.41632 9.63534 9.82678 9.41473 10.181C9.19625 10.5353 8.88867 10.8121 8.492 11.0115C8.09534 11.2087 7.63185 11.3074 7.10155 11.3074C6.56913 11.3074 6.10458 11.2087 5.70791 11.0115C5.31125 10.8121 5.00367 10.5353 4.78519 10.181C4.5667 9.82678 4.45746 9.41632 4.45746 8.94966V4.69238H5.63791V8.85102C5.63791 9.12253 5.69731 9.36435 5.81609 9.57647C5.937 9.7886 6.1067 9.95511 6.32519 10.076C6.54367 10.1948 6.80246 10.2542 7.10155 10.2542C7.40064 10.2542 7.65943 10.1948 7.87791 10.076C8.09852 9.95511 8.26822 9.7886 8.387 9.57647C8.50579 9.36435 8.56519 9.12253 8.56519 8.85102V4.69238Z" fill="currentColor"></path>
                                  <path d="M12.2092 4.69238V11.2087H11.0287V4.69238H12.2092Z" fill="currentColor"></path>
                                </svg>
                                <span>Supabase Library</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="/changelog" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white">
                                  <path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
                                </svg>
                                <span>Changelog</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="/support" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <div className="relative" style={{ width: 16, height: 16 }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" color="currentColor" fill="none" stroke="currentColor" className="text-zinc-400 group-hover:text-white" width="100%" height="100%" strokeWidth="1.3">
                                    <path d="M2.69727 2.69852L5.87727 5.87852M10.1225 10.1228L13.3025 13.3028M13.3025 2.69852L10.1225 5.87852L12.77 3.23088M2.69727 13.3028L5.87727 10.1228M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.499992 8 0.499992C12.1421 0.499992 15.5 3.85786 15.5 8ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34314 6.34315 5 8 5C9.65685 5 11 6.34314 11 8Z"></path>
                                  </svg>
                                </div>
                                <span>Support</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="p-0 flex flex-col gap-6">
                          <label className="text-zinc-500 text-xs uppercase tracking-widest font-mono">Resources</label>
                          <ul className="flex flex-col gap-4 list-none p-0 m-0">
                            <li>
                              <a href="/open-source" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <div className="relative" style={{ width: 16, height: 16 }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="none" className="text-zinc-400 group-hover:text-white" width="100%" height="100%" strokeWidth="1.3">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.5816 0 0 3.58719 0 8.01357C0 11.5535 2.292 14.5575 5.4712 15.6167C5.8712 15.6903 6.0168 15.4431 6.0168 15.2303C6.0168 15.0407 6.0104 14.5359 6.0064 13.8679C3.7808 14.3519 3.3112 12.7935 3.3112 12.7935C2.948 11.8671 2.4232 11.6207 2.4232 11.6207C1.6968 11.1247 2.4784 11.1343 2.4784 11.1343C3.2808 11.1903 3.7032 11.9599 3.7032 11.9599C4.4168 13.1839 5.576 12.8303 6.0312 12.6255C6.1048 12.1079 6.3112 11.7551 6.54 11.5551C4.764 11.3527 2.896 10.6647 2.896 7.59438C2.896 6.71998 3.208 6.00398 3.7192 5.44398C3.6368 5.24158 3.3624 4.42639 3.7976 3.32399C3.7976 3.32399 4.4696 3.10799 5.9976 4.14479C6.65022 3.9668 7.32355 3.87614 8 3.87519C8.68 3.87839 9.364 3.96719 10.0032 4.14479C11.5304 3.10799 12.2008 3.32319 12.2008 3.32319C12.6376 4.42639 12.3624 5.24158 12.2808 5.44398C12.7928 6.00398 13.1032 6.71998 13.1032 7.59438C13.1032 10.6727 11.232 11.3503 9.4504 11.5487C9.73762 11.7959 9.99282 12.2847 9.99282 13.0327C9.99282 14.1031 9.98322 14.9679 9.98322 15.2303C9.98322 15.4447 10.1272 15.6943 10.5336 15.6159C12.1266 15.0816 13.5115 14.0602 14.4924 12.696C15.4733 11.3318 16.0007 9.69382 16 8.01357C16 3.58719 12.4176 0 8 0Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                                <span>Open Source</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="/partners" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <div className="relative" style={{ width: 16, height: 16 }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="none" className="text-zinc-400 group-hover:text-white" width="100%" height="100%" strokeWidth="1.3">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.74428 3.14663C5.46222 1.86458 3.3836 1.86458 2.10154 3.14663C0.819584 4.42859 0.819484 6.50699 2.10124 7.78907L2.27149 7.95907L7.14537 12.8713L7.14694 12.8729L7.87634 13.6023C8.15986 13.8858 8.61955 13.8858 8.90307 13.6023C9.15745 13.3479 9.16915 12.8682 8.88697 12.5604L8.03584 11.7092C7.81328 11.4866 7.81331 11.1257 8.0359 10.9032C8.25849 10.6806 8.61936 10.6806 8.84191 10.9032L9.22841 11.2898C9.23606 11.2967 9.24357 11.3038 9.25093 11.3111L9.70923 11.7697L9.71224 11.7727L9.7147 11.7752L9.71692 11.7774L9.72114 11.7818L9.72525 11.7862L9.73059 11.792L9.96864 12.0301C10.2521 12.3137 10.7118 12.3137 10.9953 12.0302C11.2788 11.7467 11.2788 11.2871 10.9954 11.0036L9.82969 9.83772C9.60713 9.61513 9.60716 9.25426 9.82975 9.03171C9.95005 8.91142 10.1107 8.85615 10.2682 8.8659C10.4081 8.87019 10.5468 8.92575 10.6536 9.03256L11.8391 10.2181C12.1226 10.5016 12.5823 10.5016 12.8658 10.2181C13.1493 9.93462 13.1493 9.47498 12.8658 9.19148L11.6615 7.98724C11.439 7.76466 11.439 7.4038 11.6615 7.18122C11.8841 6.95865 12.245 6.95865 12.4676 7.18122L13.4872 8.2009L13.8987 7.78942C15.1808 6.50737 15.1808 4.42874 13.8987 3.14668C12.6166 1.86463 10.538 1.86463 9.25596 3.14668L7.88518 4.51747L7.25122 5.15138C7.25122 5.15138 7.25123 5.15137 7.25122 5.15138C6.77862 5.624 6.77861 6.39027 7.25122 6.86288C7.72384 7.3355 8.4901 7.3355 8.96272 6.86288L11.0491 4.77648C11.2717 4.5539 11.6326 4.5539 11.8551 4.77648C12.0777 4.99905 12.0777 5.35992 11.8551 5.58249L9.76874 7.6689C8.85097 8.58666 7.36298 8.58666 6.44521 7.6689C5.52744 6.75113 5.52744 5.26313 6.44521 4.34536L7.07916 3.71146L7.19413 3.59648L6.74428 3.14663ZM8.00014 2.79047L7.55029 2.34062C5.82309 0.613413 3.02273 0.613415 1.29553 2.34062C-0.431679 4.06783 -0.431679 6.86818 1.29553 8.59539L1.46232 8.76193L1.4642 8.76381L6.33777 13.6757L6.33934 13.6773L7.07032 14.4083C7.799 15.137 8.98041 15.137 9.70909 14.4083C10.0042 14.1131 10.1701 13.745 10.22 13.3643C10.7806 13.4433 11.3702 13.2673 11.8013 12.8362C12.152 12.4855 12.3339 12.03 12.3471 11.5706C12.8264 11.572 13.3061 11.3898 13.6718 11.0241C14.1758 10.5202 14.3312 9.79966 14.138 9.16214L14.7047 8.59544C16.4319 6.86823 16.4319 4.06788 14.7047 2.34067C12.9775 0.613465 10.1772 0.613464 8.44994 2.34067L8.00014 2.79047Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                                <span>Become a Partner</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="/partners/catalog" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <div className="relative" style={{ width: 16, height: 16 }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" color="currentColor" fill="none" stroke="currentColor" className="text-zinc-400 group-hover:text-white" width="100%" height="100%" strokeWidth="1.3">
                                    <path d="M12.3806 0.619116V6.85795M9.26117 3.73884L15.5 3.73884M7.20065 12.0306C7.20065 13.8809 5.70066 15.3809 3.85032 15.3809C1.99999 15.3809 0.5 13.8809 0.5 12.0306C0.5 10.1802 1.99999 8.68023 3.85032 8.68023C5.70066 8.68023 7.20065 10.1802 7.20065 12.0306ZM15.5 14.032V10.2887C15.5 9.59957 14.9414 9.04093 14.2522 9.04093H10.5089C9.81981 9.04093 9.26117 9.59957 9.26117 10.2887V14.032C9.26117 14.7211 9.81981 15.2798 10.5089 15.2798H14.2522C14.9414 15.2798 15.5 14.7211 15.5 14.032ZM1.97929 6.85795H5.72258C6.41171 6.85795 6.97035 6.2993 6.97035 5.61018V1.86688C6.97035 1.17776 6.41171 0.619116 5.72258 0.619116H1.97929C1.29016 0.619116 0.731519 1.17776 0.731519 1.86688V5.61018C0.731519 6.2993 1.29016 6.85795 1.97929 6.85795Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </div>
                                <span>Partner Catalog</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="/careers" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <div className="relative" style={{ width: 16, height: 16 }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="none" className="text-zinc-400 group-hover:text-white" width="100%" height="100%" strokeWidth="1.3">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.96967 2.7894C5.96967 1.84071 6.73873 1.07164 7.68743 1.07164H8.26001C9.20871 1.07164 9.97777 1.84071 9.97777 2.7894V3.36199H13.4881C14.8754 3.36199 16 4.48659 16 5.87385C16 6.42608 15.819 6.95031 15.5012 7.37618V12.0654C15.5012 13.6466 14.2194 14.9284 12.6383 14.9284H3.36171C1.78056 14.9284 0.498777 13.6466 0.498777 12.0654V7.37618C0.181033 6.95031 0 6.42608 0 5.87385C0 4.48659 1.1246 3.36199 2.51186 3.36199H5.96967V2.7894ZM2.51186 4.50716C1.75706 4.50716 1.14517 5.11905 1.14517 5.87385C1.14517 6.39998 1.44719 6.8794 1.92175 7.10657L5.17109 8.66205C5.45633 8.79859 5.57686 9.14051 5.44032 9.42574C5.30378 9.71098 4.96186 9.83152 4.67663 9.69497L1.64395 8.24321V12.0654C1.64395 13.0141 2.41302 13.7832 3.36171 13.7832H12.6383C13.587 13.7832 14.356 13.0141 14.356 12.0654V8.24321L11.3234 9.69497C11.0381 9.83152 10.6962 9.71098 10.5597 9.42574C10.4231 9.14051 10.5437 8.79859 10.8289 8.66205L14.0783 7.10657C14.5528 6.8794 14.8548 6.39998 14.8548 5.87385C14.8548 5.11905 14.2429 4.50716 13.4881 4.50716H2.51186ZM8.8326 3.36199H7.11484V2.7894C7.11484 2.47317 7.37119 2.21682 7.68743 2.21682H8.26001C8.57624 2.21682 8.8326 2.47317 8.8326 2.7894V3.36199ZM7.68743 9.00594C7.37119 9.00594 7.11484 9.2623 7.11484 9.57853V10.1511C7.11484 10.4673 7.37119 10.7237 7.68743 10.7237H8.26001C8.57624 10.7237 8.8326 10.4673 8.8326 10.1511V9.57853C8.8326 9.2623 8.57624 9.00594 8.26001 9.00594H7.68743ZM5.96967 9.57853C5.96967 8.62984 6.73873 7.86077 7.68743 7.86077H8.26001C9.20871 7.86077 9.97777 8.62984 9.97777 9.57853V10.1511C9.97777 11.0998 9.20871 11.8689 8.26001 11.8689H7.68743C6.73873 11.8689 5.96967 11.0998 5.96967 10.1511V9.57853Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                                <span>Careers</span>
                                <span className="text-xs text-zinc-500 -ml-1">(53)</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                            <li>
                              <a href="/events" className="flex group items-center gap-2 text-zinc-400 text-sm hover:text-white rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 group-hover:text-white">
                                  <path d="M8 2v3"></path><path d="M16 2v3"></path><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path>
                                </svg>
                                <span>Events &amp; Webinars</span>
                                <ChevronRight className="w-3 -ml-1 transition-all -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                              </a>
                            </li>
                          </ul>
                        </div>

                      </div>

                      {/* Right Side: Blog Column */}
                      <div className="flex w-full flex-col border-t border-border bg-muted/50 lg:flex-1 lg:border-l lg:border-t-0">
                        <div className="flex-col gap-2 p-5">
                          <a href="/blog" className="group flex items-center gap-1 text-zinc-500 hover:text-white text-xs uppercase tracking-widest font-mono mb-5">
                            <span>Blog</span>
                            <ChevronRight className="h-3 w-3 transition-transform -translate-x-1 group-hover:translate-x-0" />
                          </a>
                          <ul className="flex flex-col gap-5 list-none p-0 m-0">
                            <li>
                              <a href="/blog/how-a-new-branch-gets-its-config-migrations-and-functions" className="group flex flex-col rounded-sm">
                                <p className="text-zinc-300 mb-0 line-clamp-2 group-hover:text-white font-medium text-sm">How a new branch gets its config, migrations, and functions</p>
                                <p className="text-sm line-clamp-2 text-zinc-500 leading-relaxed mb-0 group-hover:text-zinc-400">What runs when you create a branch: which settings are copied, where your migrations and functions come from, and what order the steps run in.</p>
                              </a>
                            </li>
                            <li>
                              <a href="/blog/stripe-data-pipeline-now-syncs-real-time-data-to-supabase" className="group flex flex-col rounded-sm">
                                <p className="text-zinc-300 mb-0 line-clamp-2 group-hover:text-white font-medium text-sm">Sync real-time Stripe data to Supabase with Stripe Data Pipeline</p>
                                <p className="text-sm line-clamp-2 text-zinc-500 leading-relaxed mb-0 group-hover:text-zinc-400">Sync real-time Stripe data to Supabase from the Stripe Dashboard. Data Pipeline backfills and keeps it in sync, with no webhooks or rate limits to manage.</p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors block">
                    Pricing
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/customers" className="text-sm text-zinc-400 hover:text-white transition-colors block">
                    Customers
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors block">
                    Contact
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
                            <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link href="/docs" className="text-sm text-zinc-400 hover:text-white transition-colors block">
                    Docs
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

            </NavigationMenu.List>

            <NavigationMenu.Viewport className="absolute top-full left-1/2 -translate-x-1/2 mt-2" />
          </NavigationMenu.Root>

          <div className={`flex items-center gap-4 ${align === "left" ? "ml-auto" : ""}`}>
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