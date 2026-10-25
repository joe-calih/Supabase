import Link from "next/link"
import { Search } from "lucide-react"
import { DocsHeader } from "@/components/docs/docs-header"

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background">
      <DocsHeader />
      
      {/* Hero Section */}
      <section className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Supabase Documentation</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-medium tracking-tight sm:text-7xl">
            Build in a weekend.<br /><span className="text-muted-foreground">Scale to millions.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Learn how to use Supabase to build secure, scalable applications with Postgres, Auth, Storage, Realtime, and Edge Functions.
          </p>
          <div className="mx-auto mt-9 flex max-w-xl items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 shadow-sm">
            <Search className="size-5 text-muted-foreground" />
            <input 
              aria-label="Search documentation" 
              placeholder="Search the documentation..." 
              className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0" 
            />
            <kbd className="hidden rounded border px-2 py-1 text-xs text-muted-foreground sm:block">⌘ K</kbd>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="px-6 mx-auto pt-12 pb-6 max-w-7xl">
        <div className="relative transition-all ease-out duration-150">
          <div className="prose max-w-none">
            <div className="flex flex-col">

              {/* Connect a framework */}
              <div className="flex flex-col gap-6 border-b py-12 lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0">
                  <h2 id="connect-a-framework" className="group scroll-mt-24 text-2xl font-semibold">Connect a framework</h2>
                  <p className="m-0 p-0 text-sm text-foreground-light">Start with a quickstart guide to connect your project in minutes.</p>
                </div>
                <div className="col-span-8 not-prose">
                  <ul className="grid grid-cols-12 gap-6" aria-labelledby="connect-a-framework">
                    {[
                      ["React", "/docs/guides/getting-started/quickstarts/reactjs", "/SVG/react-icon.svg"],
                      ["Next.js", "/docs/guides/getting-started/quickstarts/nextjs", "/SVG/nextjs-icon-light.svg"],
                      ["TanStack Start", "/docs/guides/getting-started/quickstarts/tanstack", "/SVG/tanstack-icon-light.svg"],
                      ["Astro", "/docs/guides/getting-started/quickstarts/astrojs", "/SVG/astro-icon-light.svg"],
                      ["Vue", "/docs/guides/getting-started/quickstarts/vue", "/SVG/vuejs-icon.svg"],
                      ["Nuxt", "/docs/guides/getting-started/quickstarts/nuxtjs", "/SVG/nuxt-icon.svg"],
                      ["SvelteKit", "/docs/guides/getting-started/quickstarts/sveltekit", "/SVG/svelte-icon.svg"],
                      ["SolidJS", "/docs/guides/getting-started/quickstarts/solidjs", "/SVG/solidjs-icon.svg"],
                      ["RedwoodJS", "/docs/guides/getting-started/quickstarts/redwoodjs", "/SVG/redwood-icon.svg"],
                      ["Refine", "/docs/guides/getting-started/quickstarts/refine", "/SVG/refine-icon.svg"],
                      ["Hono", "/docs/guides/getting-started/quickstarts/hono", "/SVG/hono-icon.svg"],
                      ["iOS Swift", "/docs/guides/getting-started/quickstarts/ios-swiftui", "/SVG/swift-icon-orange.svg"],
                      ["Android Kotlin", "/docs/guides/getting-started/quickstarts/kotlin", "/SVG/kotlin-icon.svg"],
                      ["Expo React Native", "/docs/guides/getting-started/quickstarts/expo-icon-light", "/SVG/expo-icon-light.svg"],
                      ["Flutter", "/docs/guides/getting-started/quickstarts/flutter", "/SVG/flutter-icon.svg"],
                      ["Python", "/docs/guides/getting-started/quickstarts/flask", "/SVG/python-icon.svg"],
                      ["Reflex", "/docs/guides/getting-started/quickstarts/reflex", "/SVG/reflex-icon-light.svg"],
                      ["Laravel", "/docs/guides/getting-started/quickstarts/laravel", "/SVG/laravel-icon.svg"],
                      ["Ruby on Rails", "/docs/guides/getting-started/quickstarts/ruby-on-rails", "/SVG/rails-icon.svg"],
                      ["Spring Boot", "/docs/guides/getting-started/quickstarts/spring-boot", "/SVG/spring-boot-icon.svg"],
                    ].map(([name, href, iconSrc]) => (
                      <li key={name} className="col-span-6 md:col-span-4">
                        <Link 
                          className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" 
                          href={href}
                        >
                          <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10 sm:h-16 sm:w-16">
                            <img src={iconSrc} alt="" className="w-5 sm:w-8" />
                          </div>
                          <span className="text-base text-foreground">{name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Build your backend Section */}
              <div className="flex flex-col gap-6 border-b py-12 lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0">
                  <h2 id="products" className="group scroll-mt-24 text-2xl font-semibold">Build your backend</h2>
                  <p className="m-0 p-0 text-sm text-foreground-light">Build with a complete backend platform, from your database to your application logic.</p>
                </div>
                <ul aria-labelledby="products" className="col-span-8 grid grid-cols-12 gap-6 not-prose [&_svg]:text-brand-600">
                  
                  {/* Database */}
                  <li className="col-span-12">
                    <a href="/docs/guides/database/overview">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.99915C2.5 2.17072 3.17157 1.49915 4 1.49915H12C12.8284 1.49915 13.5 2.17072 13.5 2.99915V4.99915C13.5 5.53212 13.222 6.00017 12.8032 6.26623V9.73377C13.222 9.99983 13.5 10.4679 13.5 11.0009V13.0009C13.5 13.8293 12.8284 14.5009 12 14.5009H4C3.17157 14.5009 2.5 13.8293 2.5 13.0009V11.0009C2.5 10.4615 2.78461 9.98872 3.21183 9.72437V6.27563C2.78461 6.01128 2.5 5.53845 2.5 4.99915V2.99915ZM12.0158 5.4989H3.98422C3.71538 5.49057 3.5 5.27001 3.5 4.99915V2.99915C3.5 2.723 3.72386 2.49915 4 2.49915H12C12.2761 2.49915 12.5 2.723 12.5 2.99915V4.99915C12.5 5.27001 12.2846 5.49057 12.0158 5.4989ZM4.21183 6.49915V9.4989H11.8032V6.49915H4.21183ZM4 10.5009C3.72386 10.5009 3.5 10.7247 3.5 11.0009V13.0009C3.5 13.277 3.72386 13.5009 4 13.5009H12C12.2761 13.5009 12.5 13.277 12.5 13.0009V11.0009C12.5 10.7247 12.2761 10.5009 12 10.5009H4Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Database</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Supabase provides a full Postgres database for every project with Realtime functionality, database backups, extensions, and more.</span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* Auth */}
                  <li className="col-span-12 md:col-span-6">
                    <a href="/docs/guides/auth">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.49414 9.97461H8.49414M3.49414 9.97461V11.9746H8.49414V9.97461M3.49414 9.97461V7.97461H8.49414V9.97461M10 5V3C10 1.89543 9.10457 1 8 1C6.89543 1 6 1.89543 6 3V5M3.47266 7L3.47266 12C3.47266 13.1046 4.36809 14 5.47266 14H10.4727C11.5772 14 12.4727 13.1046 12.4727 12V7C12.4727 5.89543 11.5772 5 10.4727 5L5.47266 5C4.36809 5 3.47266 5.89543 3.47266 7Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Auth</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Add and manage email and password, passwordless, OAuth, and mobile logins to your project through a suite of identity providers and APIs.</span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* Storage */}
                  <li className="col-span-12 md:col-span-6">
                    <a href="/docs/guides/storage">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9997 7.50869V5.60119L9.38151 2.00024H3.99967C3.44739 2.00024 2.99967 2.44796 2.99967 3.00024V5.99976M12.9645 5.58447L9.38004 2L9.38004 4.58447C9.38004 5.13676 9.82776 5.58447 10.38 5.58447L12.9645 5.58447ZM4.44135 5.99976H2.97363C2.42135 5.99976 1.97363 6.44747 1.97363 6.99976V11.9998C1.97363 13.1043 2.86906 13.9998 3.97363 13.9998H11.9736C13.0782 13.9998 13.9736 13.1043 13.9736 11.9998V8.50869C13.9736 7.95641 13.5259 7.50869 12.9736 7.50869H6.79396C6.53157 7.50869 6.27968 7.40556 6.09263 7.22153L5.14268 6.28692C4.95563 6.10289 4.70375 5.99976 4.44135 5.99976Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Storage</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Store, organize, transform, and serve large files—fully integrated with your Postgres database with Row Level Security access policies.</span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* Realtime */}
                  <li className="col-span-12 md:col-span-6">
                    <a href="/docs/guides/realtime">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.85669 1.07837C6.13284 1.07837 6.35669 1.30223 6.35669 1.57837V4.07172C6.35669 4.34786 6.13284 4.57172 5.85669 4.57172C5.58055 4.57172 5.35669 4.34786 5.35669 4.07172V1.57837C5.35669 1.30223 5.58055 1.07837 5.85669 1.07837ZM1.51143 1.51679C1.70961 1.32449 2.02615 1.32925 2.21845 1.52743L4.3494 3.72353C4.5417 3.9217 4.53694 4.23825 4.33876 4.43055C4.14058 4.62285 3.82403 4.61809 3.63173 4.41991L1.50078 2.22381C1.30848 2.02564 1.31325 1.70909 1.51143 1.51679ZM5.10709 6.49114C4.74216 5.65659 5.59204 4.80844 6.42584 5.17508L14.3557 8.66199C15.2287 9.04582 15.1201 10.3175 14.1948 10.5478L11.1563 11.3041L10.4159 14.1716C10.1783 15.0916 8.91212 15.1928 8.53142 14.3222L5.10709 6.49114ZM13.9532 9.5774L6.02332 6.09049L9.44766 13.9216L10.2625 10.7658C10.3083 10.5882 10.4478 10.4499 10.6258 10.4056L13.9532 9.5774ZM1.04663 5.79688C1.04663 5.52073 1.27049 5.29688 1.54663 5.29688H3.99057C4.26671 5.29688 4.49057 5.52073 4.49057 5.79688C4.49057 6.07302 4.26671 6.29688 3.99057 6.29688H1.54663C1.27049 6.29688 1.04663 6.07302 1.04663 5.79688Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Realtime</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Listen to database changes, store and sync user states across clients, broadcast data to clients subscribed to a channel, and more.</span>
                        </div>
                      </div>
                    </a>
                  </li>

                  {/* Edge Functions */}
                  <li className="col-span-12 md:col-span-6">
                    <a href="/docs/guides/functions">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.62624 10.8978C1.22391 10.0142 1 9.03261 1 8C1 4.13401 4.13401 1 8 1C9.03686 1 10.0223 1.22575 10.9087 1.63122C11.2997 1.37784 11.766 1.23071 12.2665 1.23071C13.6473 1.23071 14.7665 2.35 14.7665 3.73071C14.7665 4.23073 14.6197 4.69646 14.3669 5.08716C14.7736 5.97467 15 6.96155 15 8C15 11.866 11.866 15 8 15C6.94896 15 5.95081 14.768 5.05508 14.3521C4.67477 14.5858 4.22715 14.7206 3.74805 14.7206C2.36733 14.7206 1.24805 13.6013 1.24805 12.2206C1.24805 11.7349 1.38656 11.2815 1.62624 10.8978ZM2 8C2 4.68629 4.68629 2 8 2C8.75898 2 9.48416 2.14069 10.1515 2.39715C9.90768 2.7831 9.76654 3.24042 9.76654 3.73071C9.76654 3.77457 9.76768 3.81815 9.76991 3.86145C9.22664 3.6288 8.62833 3.5 7.99994 3.5C5.51466 3.5 3.49994 5.51472 3.49994 8C3.49994 8.61006 3.62134 9.19177 3.8413 9.72228C3.81035 9.72115 3.77927 9.72058 3.74805 9.72058C3.24584 9.72058 2.77822 9.86866 2.38647 10.1235C2.13679 9.46389 2 8.74838 2 8ZM5.83493 13.5976C6.50608 13.8574 7.23593 14 8 14C11.3137 14 14 11.3137 14 8C14 7.23965 13.8588 6.51324 13.6015 5.84486C13.2152 6.08924 12.7574 6.23071 12.2665 6.23071C12.2232 6.23071 12.1802 6.22961 12.1374 6.22743C12.3707 6.77139 12.4999 7.3706 12.4999 8C12.4999 10.4853 10.4852 12.5 7.99994 12.5C7.37809 12.5 6.78569 12.3739 6.24695 12.1458C6.24768 12.1706 6.24805 12.1956 6.24805 12.2206C6.24805 12.7294 6.09603 13.2027 5.83493 13.5976ZM10.7665 3.73071C10.7665 2.90229 11.4381 2.23071 12.2665 2.23071C13.095 2.23071 13.7665 2.90229 13.7665 3.73071C13.7665 4.55914 13.095 5.23071 12.2665 5.23071C11.4381 5.23071 10.7665 4.55914 10.7665 3.73071ZM5.40407 10.3477C5.48532 10.4196 5.56185 10.4967 5.63315 10.5785C6.25623 11.1507 7.08729 11.5 7.99994 11.5C9.93294 11.5 11.4999 9.933 11.4999 8C11.4999 6.067 9.93294 4.5 7.99994 4.5C6.06695 4.5 4.49994 6.067 4.49994 8C4.49994 8.90336 4.84218 9.72678 5.40407 10.3477ZM3.74805 10.7206C4.11285 10.7206 4.44724 10.8508 4.70725 11.0673C4.77215 11.1369 4.83923 11.2045 4.90838 11.2699C5.12065 11.5287 5.24805 11.8598 5.24805 12.2206C5.24805 13.049 4.57647 13.7206 3.74805 13.7206C2.91962 13.7206 2.24805 13.049 2.24805 12.2206C2.24805 11.3921 2.91962 10.7206 3.74805 10.7206Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Edge Functions</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Globally distributed, server-side functions to execute your code closest to your users for the lowest latency.</span>
                        </div>
                      </div>
                    </a>
                  </li>

                </ul>
              </div>

              {/* Extend your database Section */}
              <div className="flex flex-col gap-6 border-b py-12 lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0">
                  <h2 id="postgres-integrations" className="scroll-mt-24 text-2xl font-semibold">Extend your database</h2>
                  <p className="m-0 p-0 text-sm text-foreground-light">Extend your database with built-in tools for AI, APIs, scheduled jobs, and queues.</p>
                </div>
                <ul className="grid grid-cols-12 gap-6 col-span-8 not-prose" aria-labelledby="postgres-integrations">
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/guides/ai">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.99886 7.63216V14.4892M7.99886 7.63216L14.0488 4.11804M7.99886 7.63216L1.94922 4.11819M1.94922 4.11819V8.32332M1.94922 4.11819V4.08217L5.57319 1.97717M14.049 8.36007V4.08217L10.4251 1.97717M11.8165 12.4072L7.99913 14.6245L4.18177 12.4072" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">AI & Vectors</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/guides/cron">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 6v6l4 2"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Cron</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/guides/queues">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-stack" aria-hidden="true">
                          <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path>
                          <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path>
                          <rect width="8" height="8" x="14" y="14" rx="2"></rect>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Queues</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/guides/api">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.923 9.927A5.833 5.833 0 0 1 1.14 7m2.877-5.046A5.833 5.833 0 0 1 7 1.14m5.13 3.025c.465.84.73 1.807.73 2.835m-2.883 5.049A5.832 5.832 0 0 1 7 12.859m6.172-10.027a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4.81 11.148a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8.362 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM4.81 2.832a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Data REST API</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/guides/graphql">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.21137 1.92134C6.28852 1.02614 7.03964 0.323608 7.95483 0.323608C8.86444 0.323608 9.61196 1.01759 9.69681 1.90496L12.3474 3.43531C12.6053 3.28572 12.9048 3.20007 13.2244 3.20007C14.1909 3.20007 14.9744 3.98357 14.9744 4.95007C14.9744 5.59861 14.6216 6.16476 14.0974 6.46706V9.50144C14.6216 9.80375 14.9744 10.3699 14.9744 11.0184C14.9744 11.9849 14.1909 12.7684 13.2244 12.7684C12.9049 12.7684 12.6054 12.6828 12.3476 12.5333L9.69965 14.0621C9.6304 14.9652 8.87567 15.6764 7.95483 15.6764C7.0285 15.6764 6.27027 14.9567 6.20885 14.0459L3.62036 12.5514C3.36992 12.6897 3.08197 12.7684 2.77563 12.7684C1.80914 12.7684 1.02563 11.9849 1.02563 11.0184C1.02563 10.3964 1.35015 9.8502 1.83911 9.53985V6.42866C1.35015 6.1183 1.02563 5.57209 1.02563 4.95007C1.02563 3.98357 1.80914 3.20007 2.77563 3.20007C3.08203 3.20007 3.37004 3.27882 3.62052 3.41717L6.21137 1.92134ZM7.95483 1.32361C7.54062 1.32361 7.20483 1.65939 7.20483 2.07361C7.20483 2.48782 7.54062 2.82361 7.95483 2.82361C8.36905 2.82361 8.70483 2.48782 8.70483 2.07361C8.70483 1.65939 8.36905 1.32361 7.95483 1.32361ZM6.43724 2.94564L4.33673 4.15837C4.45754 4.39611 4.52563 4.66514 4.52563 4.95007C4.52563 5.89532 3.77621 6.66553 2.83911 6.69894V9.26956C3.05189 9.27715 3.255 9.32272 3.44186 9.39971L6.71835 3.45706C6.73586 3.4253 6.75631 3.3962 6.77918 3.36991C6.64435 3.24755 6.52869 3.10445 6.43724 2.94564ZM4.33666 11.8103L6.45095 13.031C6.75634 12.5192 7.31555 12.1764 7.95483 12.1764C8.59892 12.1764 9.16173 12.5243 9.46556 13.0425L11.6492 11.7818C11.5644 11.6072 11.5078 11.4164 11.4853 11.2153H4.51469C4.49094 11.4274 4.42929 11.628 4.33666 11.8103ZM13.358 10.2803C13.4132 10.3105 13.4749 10.3306 13.5403 10.338C13.7967 10.4573 13.9744 10.7171 13.9744 11.0184C13.9744 11.4326 13.6386 11.7684 13.2244 11.7684C12.8102 11.7684 12.4744 11.4326 12.4744 11.0184C12.4744 10.6042 12.8102 10.2684 13.2244 10.2684C13.27 10.2684 13.3146 10.2725 13.358 10.2803ZM13.0974 9.27296V6.69554C12.1902 6.63052 11.4744 5.87389 11.4744 4.95007C11.4744 4.67645 11.5372 4.4175 11.6491 4.18683L9.47909 2.93396C9.38768 3.09558 9.2713 3.2412 9.1352 3.36561L12.4851 9.4318C12.6734 9.34391 12.8799 9.28856 13.0974 9.27296ZM11.6775 10.038C11.6921 10.0645 11.7088 10.0891 11.7272 10.1118C11.7027 10.1522 11.6798 10.1936 11.6586 10.236C11.6133 10.2225 11.5652 10.2153 11.5155 10.2153H4.43738C4.40269 10.2153 4.36882 10.2188 4.33612 10.2255C4.30402 10.1625 4.2682 10.1016 4.22896 10.0433L7.59407 3.93989C7.61946 3.89383 7.63683 3.84552 7.64663 3.79656C7.74668 3.81433 7.84968 3.82361 7.95483 3.82361C8.0497 3.82361 8.1428 3.81606 8.23358 3.80153L11.6775 10.038ZM2.02563 4.95007C2.02563 4.53586 2.36142 4.20007 2.77563 4.20007C3.18985 4.20007 3.52563 4.53586 3.52563 4.95007C3.52563 5.36429 3.18985 5.70007 2.77563 5.70007C2.36142 5.70007 2.02563 5.36429 2.02563 4.95007ZM7.20483 13.9264C7.20483 13.5122 7.54062 13.1764 7.95483 13.1764C8.36905 13.1764 8.70483 13.5122 8.70483 13.9264C8.70483 14.3406 8.36905 14.6764 7.95483 14.6764C7.54062 14.6764 7.20483 14.3406 7.20483 13.9264ZM2.77563 10.2684C2.36142 10.2684 2.02563 10.6042 2.02563 11.0184C2.02563 11.4326 2.36142 11.7684 2.77563 11.7684C3.18985 11.7684 3.52563 11.4326 3.52563 11.0184C3.52563 10.6042 3.18985 10.2684 2.77563 10.2684ZM12.4744 4.95007C12.4744 4.53586 12.8102 4.20007 13.2244 4.20007C13.6386 4.20007 13.9744 4.53586 13.9744 4.95007C13.9744 5.36429 13.6386 5.70007 13.2244 5.70007C12.8102 5.70007 12.4744 5.36429 12.4744 4.95007Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">GraphQL API</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Use a client library Section */}
              <div className="flex flex-col gap-6 border-b py-12 lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0 [&_h3]:m-0">
                  <h2 id="client-libraries" className="group scroll-mt-24 text-2xl font-semibold">Use a client library</h2>
                  <p className="m-0 p-0 text-sm text-foreground-light">Use Supabase from the language and framework your application is built with.</p>
                </div>
                <ul className="grid grid-cols-12 gap-6 col-span-8 not-prose" aria-labelledby="client-libraries">
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/javascript/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path fillRule="evenodd" clipRule="evenodd" d="M2 2h12v12H2V2Zm9.173 10.06c-.556 0-.87-.29-1.112-.685l-.916.533c.33.654 1.007 1.153 2.054 1.153 1.071 0 1.869-.556 1.869-1.572 0-.941-.541-1.36-1.5-1.771l-.281-.12c-.484-.21-.693-.347-.693-.686 0-.273.209-.483.54-.483.323 0 .532.137.725.483l.878-.563c-.371-.654-.887-.903-1.604-.903-1.007 0-1.651.644-1.651 1.49 0 .917.54 1.352 1.354 1.698l.282.121c.514.225.821.362.821.749 0 .322-.299.556-.766.556Zm-4.37-.007c-.387 0-.548-.266-.726-.58l-.917.556c.265.562.788 1.03 1.691 1.03 1 0 1.684-.532 1.684-1.7V7.51H7.407v3.834c0 .564-.233.709-.604.709Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">JavaScript</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/dart/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="m11.857 2-3.718.004L2.143 8l1.85 1.852 1.626-1.617L11.857 2ZM8.245 7.531c-.052-.002-.107-.005-.14.04l-3.198 3.197 1.836 1.825-.002.002 1.315 1.316a.549.549 0 0 1 .026.025c.035.036.074.074.13.062.607-.002 1.214-.002 1.821-.001l1.822-.001-3.232-3.235 3.23-3.23H8.31a.39.39 0 0 1-.064 0Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Flutter</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/python/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.424 1.627A9.05 9.05 0 0 1 7.923 1.5a9.885 9.885 0 0 1 1.633.127c.851.14 1.568.771 1.568 1.612v2.953a1.57 1.57 0 0 1-1.568 1.576H6.424c-1.063 0-1.959.903-1.959 1.927v1.416H3.387c-.911 0-1.443-.654-1.666-1.572-.3-1.233-.288-1.97 0-3.152.25-1.03 1.047-1.572 1.959-1.572h4.312V4.42H4.856V3.239c0-.895.241-1.38 1.568-1.612Zm.391 1.417a.592.592 0 0 0-.588-.593.59.59 0 0 0 0 1.182.59.59 0 0 0 .588-.59Zm4.7 3.148V4.815h1.177c.912 0 1.342.675 1.568 1.572.313 1.246.327 2.18 0 3.152-.317.944-.657 1.572-1.568 1.572h-4.7v.394h3.132v1.182c0 .896-.778 1.35-1.568 1.577-1.187.34-2.14.288-3.132 0-.829-.242-1.568-.736-1.568-1.576V9.733c0-.85.71-1.576 1.568-1.576h3.132c1.044 0 1.96-.898 1.96-1.966Zm-1.173 6.69a.589.589 0 1 0-1.177 0c0 .328.265.594.589.594a.59.59 0 0 0 .588-.593Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Python</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/csharp/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="m2.242 11.3.004-.003a1.191 1.191 0 0 1-.134-.57V5.27c0-.442.185-.784.57-1.005.444-.259 1.393-.804 2.33-1.343 1.019-.587 2.024-1.165 2.35-1.356.42-.247.826-.254 1.25-.01l2.37 1.364 2.336 1.345c.189.109.33.247.425.414.098.167.145.366.145.587V10.73c-.001.216-.048.407-.138.573a1.089 1.089 0 0 1-.432.428l-1.786 1.028c-.973.56-1.947 1.12-2.92 1.682-.388.228-.767.236-1.155.042a1.65 1.65 0 0 1-.103-.056c-.382-.227-1.702-.986-2.881-1.664-.747-.429-1.437-.826-1.799-1.036a1.137 1.137 0 0 1-.432-.428Zm7.452-2.351a1.95 1.95 0 0 1-1.698.994 1.94 1.94 0 0 1-1.69-.983A1.946 1.946 0 0 1 9.68 7.02l1.7-.98a3.91 3.91 0 1 0-3.385 5.866 3.913 3.913 0 0 0 3.4-1.974l-1.701-.983Zm2.151-1.88h-.388v.316h-.312v.388h.312v.468h-.312v.388h.312v.316h.388v-.316h.472v.316h.388v-.316h.316v-.388h-.316v-.468h.316v-.388h-.316V7.07h-.388v.316h-.472V7.07Zm0 1.172v-.468h.472v.468h-.472Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">C#</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/swift/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.364 4.774c.004.128.005.256.006.384l.001.439v5.245c-.002.128-.003.256-.007.384-.007.28-.024.561-.073.837-.05.28-.133.541-.263.796a2.673 2.673 0 0 1-1.17 1.17c-.254.13-.514.211-.795.262-.276.05-.558.066-.837.073-.128.004-.256.005-.384.006l-.408.001H5.565l-.407-.001c-.128 0-.256-.002-.384-.006a5.571 5.571 0 0 1-.837-.073c-.28-.05-.541-.133-.796-.262a2.674 2.674 0 0 1-1.17-1.17 2.824 2.824 0 0 1-.262-.796 5.582 5.582 0 0 1-.073-.837 18.375 18.375 0 0 1-.006-.384l-.001-.404V5.158c.002-.128.003-.256.007-.384.007-.28.024-.561.073-.837.05-.28.133-.541.262-.796a2.673 2.673 0 0 1 1.362-1.258c.194-.08.393-.136.604-.174.207-.037.417-.056.627-.066.07-.003.14-.006.21-.007.128-.004.256-.005.384-.006l.457-.001H10.842l.384.006c.28.008.561.024.837.074.28.05.541.133.796.262a2.671 2.671 0 0 1 1.17 1.17c.13.255.212.515.262.796.05.276.066.558.073.837Zm-2.64 4.72h.002c1.094 1.347.797 2.791.656 2.519-.572-1.114-1.638-.83-2.178-.55-.044.028-.09.053-.136.078l-.008.004a.306.306 0 0 0-.01.006l.002-.002c-1.124.597-2.632.642-4.149-.01A6.673 6.673 0 0 1 2.908 8.97c.345.255.718.48 1.114.665 1.603.75 3.213.697 4.352 0C6.753 8.386 5.4 6.762 4.361 5.446a5.644 5.644 0 0 1-.534-.736C5.07 5.85 7.033 7.277 7.737 7.672c-1.494-1.58-2.812-3.525-2.75-3.462 2.355 2.372 4.527 3.714 4.527 3.714.082.045.143.081.192.113.044-.114.084-.232.118-.355.376-1.374-.047-2.946-1.004-4.243 2.184 1.311 3.474 3.802 2.946 5.91a75.282 75.282 0 0 0-.041.145Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Swift</span>
                    </Link>
                  </li>
                  <li className="col-span-6 md:col-span-4">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/kotlin/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M14 14H2V2H14L8 8L14 14Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Kotlin</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Migrate to Supabase Section */}
              <div className="flex flex-col gap-6 border-b py-12 lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0">
                  <h2 id="migrate-to-supabase" className="group scroll-mt-24 text-2xl font-semibold">Migrate to Supabase</h2>
                  <p className="text-foreground-light text-sm p-0 m-0">Bring your existing data, auth and storage to Supabase following our migration guides.</p>
                  <Link className="group/text-link hover:text-foreground mt-3 block cursor-pointer focus-ring focus-visible:rounded-xs focus-visible:text-foreground no-underline text-primary text-sm" target="_self" href="/docs/guides/resources">
                    <div className="group flex items-center gap-1">
                      <span className="sr-only">Explore more resources about /guides/resources</span>
                      <span>Explore more resources</span>
                      <div className="transition-all group-hover:ml-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <ul className="grid grid-cols-12 gap-6 col-span-8 not-prose" aria-labelledby="migrate-to-supabase">
                  {([
                    ["Amazon RDS", "/docs/guides/platform/migrating-to-supabase/amazon-rds", "/SVG/aws-rds-icon.svg"],
                    ["Auth0", "/docs/guides/platform/migrating-to-supabase/auth0", "/SVG/auth0-icon.svg", true],
                    ["Firebase Auth", "/docs/guides/platform/migrating-to-supabase/firebase-auth", "/SVG/firebase-icon.svg"],
                    ["Firebase Storage", "/docs/guides/platform/migrating-to-supabase/firebase-storage", "/SVG/firebase-icon.svg"],
                    ["Firestore Data", "/docs/guides/platform/migrating-to-supabase/firestore-data", "/SVG/firebase-icon.svg"],
                    ["Heroku", "/docs/guides/platform/migrating-to-supabase/heroku", "/SVG/heroku-icon.svg"],
                    ["MSSQL", "/docs/guides/platform/migrating-to-supabase/mssql", "/SVG/mssql-icon.svg"],
                    ["MySQL", "/docs/guides/platform/migrating-to-supabase/mysql", "/SVG/mysql-icon.svg"],
                    ["Neon", "/docs/guides/platform/migrating-to-supabase/neon", "/SVG/neon-icon.svg", true],
                    ["Postgres", "/docs/guides/platform/migrating-to-supabase/postgres", "/SVG/postgres-icon.svg"],
                    ["Render", "/docs/guides/platform/migrating-to-supabase/render", "/SVG/render-icon.svg"],
                    ["Vercel Postgres", "/docs/guides/platform/migrating-to-supabase/vercel-postgres", "/SVG/vercel-icon.svg", true],
                  ] as const).map(([name, href, iconSrc, hasDark]) => (
                    <li key={name} className="col-span-6 md:col-span-4">
                      <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href={href}>
                        <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                          {hasDark ? (
                            <>
                              <img src={iconSrc.replace('-icon.svg', '-icon-light.svg')} alt="" className="w-5 dark:hidden" />
                              <img src={iconSrc} alt="" className="w-5 hidden dark:block" />
                            </>
                          ) : (
                            <img src={iconSrc} alt="" className="w-5" />
                          )}
                        </div>
                        <span className="text-base text-foreground">{name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore more Section */}
              <div className="flex flex-col gap-6 border-b py-12 lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="col-span-4 flex flex-col gap-1 [&_h2]:m-0">
                  <h2 id="additional-resources" className="group scroll-mt-24 text-2xl font-semibold">Explore more</h2>
                  <p className="m-0 p-0 text-sm text-foreground-light">Explore the tools, integrations, and guides that help you get more from Supabase.</p>
                </div>
                <ul aria-labelledby="additional-resources" className="col-span-8 grid grid-cols-12 gap-6 not-prose">
                  <li className="col-span-12 md:col-span-6">
                    <Link href="/docs/guides/ai-tools">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.7156 1.77258C7.58712 1.14341 8.76326 1.14175 9.63655 1.76846L12.0629 3.50974C12.7162 3.97855 12.8569 4.83994 12.4888 5.4786L13.0896 5.9098C13.7748 6.4015 13.8962 7.32509 13.4579 7.97059L14.1753 8.4882C15.0124 9.09219 15.0035 10.3415 14.1578 10.9335L9.42209 14.2484C8.5592 14.8524 7.41031 14.8508 6.54911 14.2444L1.83872 10.9276C0.999787 10.3368 0.988308 9.09703 1.81616 8.49086L2.80076 7.76992C2.50724 7.14639 2.66597 6.35556 3.27999 5.91229L3.88264 5.47721C3.51614 4.83981 3.65602 3.98138 4.30587 3.51223L6.7156 1.77258ZM5.00242 5.21218C4.95761 5.16341 4.90473 5.12529 4.84735 5.09839C4.61595 4.88922 4.62987 4.51169 4.8912 4.32303L7.30093 2.58337C7.82385 2.20587 8.52953 2.20487 9.0535 2.5809L11.4799 4.32218C11.7403 4.50906 11.7564 4.88309 11.5302 5.09348C11.4651 5.12213 11.4054 5.16499 11.3562 5.22122L9.03905 6.84318C8.52132 7.20559 7.83199 7.20462 7.31527 6.84078L5.00242 5.21218ZM4.62864 6.17202L3.86532 6.72308C3.58687 6.92411 3.58931 7.33956 3.87012 7.53729L7.31263 9.96135C7.82935 10.3252 8.51869 10.3262 9.03642 9.96376L12.5018 7.53808C12.7841 7.34045 12.7866 6.92317 12.5066 6.72224L11.7408 6.17267L9.6125 7.66242C8.74962 8.26643 7.60073 8.26482 6.73953 7.65841L4.62864 6.17202ZM3.49834 8.49855L2.40694 9.29769C2.13099 9.49975 2.13482 9.91301 2.41446 10.1099L7.12485 13.4268C7.64157 13.7906 8.3309 13.7916 8.84864 13.4292L13.5844 10.1143C13.8663 9.91694 13.8692 9.50049 13.5902 9.29916L12.674 8.63814L9.60987 10.783C8.74698 11.387 7.59809 11.3854 6.7369 10.779L3.49834 8.49855Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">AI tools</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Develop with Supabase AI-first using plugins, MCP, and skills.</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="col-span-12 md:col-span-6">
                    <Link href="/docs/guides/platform">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.7156 1.77258C7.58712 1.14341 8.76326 1.14175 9.63655 1.76846L12.0629 3.50974C12.7162 3.97855 12.8569 4.83994 12.4888 5.4786L13.0896 5.9098C13.7748 6.4015 13.8962 7.32509 13.4579 7.97059L14.1753 8.4882C15.0124 9.09219 15.0035 10.3415 14.1578 10.9335L9.42209 14.2484C8.5592 14.8524 7.41031 14.8508 6.54911 14.2444L1.83872 10.9276C0.999787 10.3368 0.988308 9.09703 1.81616 8.49086L2.80076 7.76992C2.50724 7.14639 2.66597 6.35556 3.27999 5.91229L3.88264 5.47721C3.51614 4.83981 3.65602 3.98138 4.30587 3.51223L6.7156 1.77258ZM5.00242 5.21218C4.95761 5.16341 4.90473 5.12529 4.84735 5.09839C4.61595 4.88922 4.62987 4.51169 4.8912 4.32303L7.30093 2.58337C7.82385 2.20587 8.52953 2.20487 9.0535 2.5809L11.4799 4.32218C11.7403 4.50906 11.7564 4.88309 11.5302 5.09348C11.4651 5.12213 11.4054 5.16499 11.3562 5.22122L9.03905 6.84318C8.52132 7.20559 7.83199 7.20462 7.31527 6.84078L5.00242 5.21218ZM4.62864 6.17202L3.86532 6.72308C3.58687 6.92411 3.58931 7.33956 3.87012 7.53729L7.31263 9.96135C7.82935 10.3252 8.51869 10.3262 9.03642 9.96376L12.5018 7.53808C12.7841 7.34045 12.7866 6.92317 12.5066 6.72224L11.7408 6.17267L9.6125 7.66242C8.74962 8.26643 7.60073 8.26482 6.73953 7.65841L4.62864 6.17202ZM3.49834 8.49855L2.40694 9.29769C2.13099 9.49975 2.13482 9.91301 2.41446 10.1099L7.12485 13.4268C7.64157 13.7906 8.3309 13.7916 8.84864 13.4292L13.5844 10.1143C13.8663 9.91694 13.8692 9.50049 13.5902 9.29916L12.674 8.63814L9.60987 10.783C8.74698 11.387 7.59809 11.3854 6.7369 10.779L3.49834 8.49855Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Platform guides</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Learn more about the tools and services powering Supabase.</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="col-span-12 md:col-span-6">
                    <Link href="/docs/reference/cli/introduction">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path d="M8.68972 4.35753C8.96122 4.40797 9.14042 4.66896 9.08998 4.94045L7.9225 11.2244C7.87206 11.4959 7.61107 11.6751 7.33958 11.6246C7.06808 11.5742 6.88888 11.3132 6.93932 11.0417L8.1068 4.75779C8.15724 4.48629 8.41822 4.30709 8.68972 4.35753ZM10.0165 6.07223C10.2118 5.87695 10.5284 5.87693 10.7236 6.07218L12.2979 7.64617C12.3916 7.73993 12.4443 7.86711 12.4443 7.99973C12.4443 8.13234 12.3917 8.25953 12.2979 8.3533L10.7237 9.92752C10.5284 10.1228 10.2118 10.1228 10.0166 9.92752C9.8213 9.73226 9.8213 9.41568 10.0166 9.22042L11.2372 7.99977L10.0166 6.77933C9.82131 6.58409 9.82129 6.2675 10.0165 6.07223ZM6.01227 9.9275C5.81702 10.1228 5.50044 10.1228 5.30516 9.92755L3.73094 8.35356C3.63716 8.2598 3.58447 8.13262 3.58447 8C3.58446 7.86739 3.63714 7.7402 3.73091 7.64643L5.30514 6.07221C5.5004 5.87694 5.81698 5.87694 6.01225 6.07221C6.20751 6.26747 6.20751 6.58405 6.01225 6.77931L4.7916 7.99996L6.01222 9.2204C6.2075 9.41564 6.20752 9.73223 6.01227 9.9275ZM1.5 4C1.5 2.61929 2.61929 1.5 4 1.5H12C13.3807 1.5 14.5 2.61929 14.5 4V12C14.5 13.3807 13.3807 14.5 12 14.5H4C2.61929 14.5 1.5 13.3807 1.5 12V4ZM4 2.5C3.17157 2.5 2.5 3.17157 2.5 4V12C2.5 12.8284 3.17157 13.5 4 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V4C13.5 3.17157 12.8284 2.5 12 2.5H4Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Supabase CLI</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Use the CLI to develop, manage and deploy your projects.</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="col-span-12 md:col-span-6">
                    <Link href="/docs/reference/api/introduction">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path d="M8.00018 1.98145C7.56432 1.98145 7.13983 2.02769 6.73114 2.11537C6.46114 2.1733 6.19531 2.00138 6.13738 1.73138C6.07946 1.46138 6.25138 1.19554 6.52138 1.13762C6.99858 1.03524 7.49338 0.981445 8.00018 0.981445C8.50698 0.981445 9.00178 1.03524 9.47898 1.13762C9.74898 1.19555 9.9209 1.46138 9.86297 1.73138C9.80505 2.00138 9.53921 2.1733 9.26921 2.11537C8.86053 2.02769 8.43603 1.98145 8.00018 1.98145Z" fill="currentColor"></path>
                                <path d="M1.73138 6.1372C2.00138 6.19513 2.1733 6.46096 2.11537 6.73096C2.02769 7.13965 1.98145 7.56414 1.98145 8C1.98145 8.43586 2.02769 8.86035 2.11537 9.26904C2.1733 9.53904 2.00138 9.80487 1.73138 9.8628C1.46138 9.92072 1.19555 9.7488 1.13762 9.4788C1.03524 9.0016 0.981445 8.5068 0.981445 8C0.981445 7.4932 1.03524 6.9984 1.13762 6.5212C1.19555 6.2512 1.46138 6.07928 1.73138 6.1372Z" fill="currentColor"></path>
                                <path d="M14.2686 6.1372C14.5386 6.07928 14.8045 6.2512 14.8624 6.5212C14.9648 6.9984 15.0186 7.4932 15.0186 8C15.0186 8.5068 14.9648 9.0016 14.8624 9.4788C14.8045 9.7488 14.5386 9.92072 14.2686 9.86279C13.9986 9.80487 13.8267 9.53903 13.8846 9.26904C13.9723 8.86035 14.0186 8.43586 14.0186 8C14.0186 7.56414 13.9723 7.13965 13.8846 6.73096C13.8267 6.46096 13.9986 6.19513 14.2686 6.1372Z" fill="currentColor"></path>
                                <path d="M6.13738 14.2686C6.19531 13.9986 6.46114 13.8267 6.73114 13.8846C7.13983 13.9723 7.56432 14.0186 8.00018 14.0186C8.43603 14.0186 8.86053 13.9723 9.26922 13.8846C9.53922 13.8267 9.80505 13.9986 9.86297 14.2686C9.9209 14.5386 9.74898 14.8045 9.47898 14.8624C9.00178 14.9648 8.50698 15.0186 8.00018 15.0186C7.49337 15.0186 6.99858 14.9648 6.52137 14.8624C6.25138 14.8045 6.07946 14.5386 6.13738 14.2686Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8048 1.75216C12.4795 1.0774 13.5735 1.07741 14.2483 1.75216C14.923 2.42691 14.923 3.52091 14.2483 4.19566C13.6764 4.76755 12.8033 4.85474 12.1396 4.45721L10.6936 5.90323C11.1446 6.48183 11.4133 7.20953 11.4133 7.99999C11.4133 8.76199 11.1636 9.46567 10.7416 10.0337L12.2103 11.5024C12.8642 11.152 13.6961 11.2526 14.2478 11.8043C14.9225 12.479 14.9225 13.573 14.2478 14.2478C13.573 14.9226 12.479 14.9226 11.8043 14.2478C11.2523 13.6958 11.1519 12.8633 11.503 12.2092L10.0346 10.7409C9.46646 11.1634 8.76241 11.4134 7.99997 11.4134C7.20951 11.4134 6.4818 11.1447 5.90321 10.6936L4.4574 12.1395C4.85471 12.8031 4.76747 13.676 4.19566 14.2478C3.52091 14.9226 2.42691 14.9226 1.75216 14.2478C1.0774 13.573 1.07741 12.479 1.75216 11.8043C2.28359 11.2729 3.07507 11.16 3.71698 11.4657L5.21234 9.9703C4.81821 9.4137 4.5866 8.73389 4.5866 7.99999C4.5866 7.23755 4.83658 6.5335 5.25904 5.96532L3.79073 4.497C3.13666 4.8481 2.30413 4.74766 1.75216 4.19569C1.07741 3.52093 1.07741 2.42694 1.75216 1.75218C2.42692 1.07743 3.52091 1.07743 4.19566 1.75219C4.74732 2.30385 4.84796 3.13573 4.49758 3.78964L5.96628 5.25834C6.53429 4.83631 7.23797 4.58662 7.99997 4.58662C8.73387 4.58662 9.41367 4.81824 9.97027 5.21236L11.466 3.71665C11.1605 3.0748 11.2734 2.2835 11.8048 1.75216ZM13.5412 2.45927C13.2569 2.17504 12.7961 2.17504 12.5119 2.45927C12.2277 2.7435 12.2277 3.20433 12.5119 3.48856C12.7961 3.77279 13.2569 3.77279 13.5412 3.48856C13.8254 3.20433 13.8254 2.7435 13.5412 2.45927ZM9.67618 9.73627C9.24205 10.1555 8.65112 10.4134 7.99997 10.4134C6.6671 10.4134 5.5866 9.33286 5.5866 7.99999C5.5866 6.66712 6.6671 5.58662 7.99997 5.58662C9.33283 5.58662 10.4133 6.66712 10.4133 7.99999C10.4133 8.65078 10.1557 9.24141 9.73695 9.67547C9.72611 9.68462 9.71556 9.6943 9.70535 9.70451C9.69509 9.71478 9.68536 9.72537 9.67618 9.73627ZM3.48856 2.45929C3.20433 2.17506 2.7435 2.17506 2.45927 2.45929C2.17504 2.74352 2.17504 3.20435 2.45927 3.48858C2.7435 3.77281 3.20433 3.77281 3.48856 3.48858C3.77279 3.20435 3.77279 2.74352 3.48856 2.45929ZM3.48856 12.5114C3.20433 12.2272 2.7435 12.2272 2.45927 12.5114C2.17504 12.7956 2.17504 13.2565 2.45927 13.5407C2.7435 13.8249 3.20433 13.8249 3.48856 13.5407C3.77279 13.2565 3.77279 12.7956 3.48856 12.5114ZM13.5407 12.5114C13.2564 12.2272 12.7956 12.2272 12.5114 12.5114C12.2271 12.7956 12.2271 13.2565 12.5114 13.5407C12.7956 13.8249 13.2564 13.8249 13.5407 13.5407C13.8249 13.2565 13.8249 12.7956 13.5407 12.5114Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Management API</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Manage your Supabase projects and organizations.</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="col-span-12 md:col-span-6">
                    <Link href="/docs/guides/integrations">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.6748 3.08472C1.6748 2.25629 2.34638 1.58472 3.1748 1.58472H6.1748C7.00323 1.58472 7.6748 2.25629 7.6748 3.08472V6.08472C7.6748 6.91314 7.00323 7.58472 6.1748 7.58472H3.1748C2.34638 7.58472 1.6748 6.91314 1.6748 6.08472V3.08472ZM3.1748 2.58472C2.89866 2.58472 2.6748 2.80857 2.6748 3.08472V6.08472C2.6748 6.36086 2.89866 6.58472 3.1748 6.58472H6.1748C6.45095 6.58472 6.6748 6.36086 6.6748 6.08472V3.08472C6.6748 2.80857 6.45095 2.58472 6.1748 2.58472H3.1748ZM11.5107 1.58472C11.7869 1.58472 12.0107 1.80857 12.0107 2.08472V4.08496H14.0107C14.2869 4.08496 14.5107 4.30882 14.5107 4.58496C14.5107 4.8611 14.2869 5.08496 14.0107 5.08496H12.0107V7.08472C12.0107 7.36086 11.7869 7.58472 11.5107 7.58472C11.2346 7.58472 11.0107 7.36086 11.0107 7.08472V5.08496H9.01074C8.7346 5.08496 8.51074 4.8611 8.51074 4.58496C8.51074 4.30882 8.7346 4.08496 9.01074 4.08496H11.0107V2.08472C11.0107 1.80857 11.2346 1.58472 11.5107 1.58472ZM4.67432 9.04516C3.46754 9.04516 2.48926 10.0234 2.48926 11.2302C2.48926 12.437 3.46754 13.4153 4.67432 13.4153C5.88109 13.4153 6.85938 12.437 6.85938 11.2302C6.85938 10.0234 5.88109 9.04516 4.67432 9.04516ZM1.48926 11.2302C1.48926 9.47116 2.91526 8.04516 4.67432 8.04516C6.43338 8.04516 7.85938 9.47116 7.85938 11.2302C7.85938 12.9893 6.43338 14.4153 4.67432 14.4153C2.91526 14.4153 1.48926 12.9893 1.48926 11.2302ZM8.51074 9.83423C8.51074 9.0058 9.18232 8.33423 10.0107 8.33423H13.0107C13.8392 8.33423 14.5107 9.0058 14.5107 9.83423V12.8342C14.5107 13.6627 13.8392 14.3342 13.0107 14.3342H10.0107C9.18231 14.3342 8.51074 13.6627 8.51074 12.8342V9.83423ZM10.0107 9.33423C9.7346 9.33423 9.51074 9.55809 9.51074 9.83423V12.8342C9.51074 13.1104 9.7346 13.3342 10.0107 13.3342H13.0107C13.2869 13.3342 13.5107 13.1104 13.5107 12.8342V9.83423C13.5107 9.55809 13.2869 9.33423 13.0107 9.33423H10.0107Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Integrations</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Explore a variety of integrations from Supabase partners.</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="col-span-12 md:col-span-6">
                    <Link target="_blank" href="https://supabase.com/library">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg width="18" height="18" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.973313" y="0.64" width="14.72" height="14.72" rx="1.92" stroke="currentColor" strokeWidth="1.28"></rect>
                                <path d="M8.56519 4.69238H9.74564V8.94966C9.74564 9.41632 9.63534 9.82678 9.41473 10.181C9.19625 10.5353 8.88867 10.8121 8.492 11.0115C8.09534 11.2087 7.63185 11.3074 7.10155 11.3074C6.56913 11.3074 6.10458 11.2087 5.70791 11.0115C5.31125 10.8121 5.00367 10.5353 4.78519 10.181C4.5667 9.82678 4.45746 9.41632 4.45746 8.94966V4.69238H5.63791V8.85102C5.63791 9.12253 5.69731 9.36435 5.81609 9.57647C5.937 9.7886 6.1067 9.95511 6.32519 10.076C6.54367 10.1948 6.80246 10.2542 7.10155 10.2542C7.40064 10.2542 7.65943 10.1948 7.87791 10.076C8.09852 9.95511 8.26822 9.7886 8.387 9.57647C8.50579 9.36435 8.56519 9.12253 8.56519 8.85102V4.69238Z" fill="currentColor"></path>
                                <path d="M12.2092 4.69238V11.2087H11.0287V4.69238H12.2092Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Supabase Library</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">A collection of pre-built Supabase components to speed up your project.</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="col-span-12 md:col-span-6">
                    <Link href="/docs/guides/troubleshooting">
                      <div className="relative h-full cursor-pointer overflow-hidden border rounded-lg text-left bg-surface-75 hover:border-strong transition">
                        <div className="relative px-4.5 py-4 md:px-5.5 md:py-5.5 flex flex-col h-full gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0" aria-hidden="true">
                              <svg width="18" height="18" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0326 6.65586L11.679 6.30231L12.0326 6.65586ZM13.9812 4.70721L14.4367 4.50108C14.3691 4.35154 14.2323 4.24473 14.0708 4.21531C13.9094 4.18589 13.7437 4.2376 13.6277 4.35366L13.9812 4.70721ZM8.76103 9.9274L8.96716 9.47187L8.65205 9.32928L8.40747 9.57385L8.76103 9.9274ZM4.21801 14.4704L3.86446 14.1169L4.21801 14.4704ZM2.24565 12.4981L1.89209 12.1445H1.89209L2.24565 12.4981ZM6.78866 7.95504L7.14221 8.30859L7.38679 8.06402L7.24419 7.7489L6.78866 7.95504ZM7.5932 3.53939L7.23965 3.18584L7.5932 3.53939ZM9.67545 2.4479L9.76508 2.9398L9.67545 2.4479ZM12.0089 2.73485L12.3624 3.0884C12.4785 2.97234 12.5302 2.8067 12.5008 2.64522C12.4713 2.48374 12.3645 2.34699 12.215 2.27932L12.0089 2.73485ZM10.0602 4.6835L9.70665 4.32994L10.0602 4.6835ZM10.0671 6.66267L9.71597 7.01867L10.0671 6.66267ZM12.3861 7.00941L14.3348 5.06077L13.6277 4.35366L11.679 6.30231L12.3861 7.00941ZM13.5257 4.91335C13.8144 5.55131 13.9018 6.2621 13.7763 6.95099L14.7601 7.13024C14.922 6.24136 14.8092 5.32423 14.4367 4.50108L13.5257 4.91335ZM13.7763 6.95099C13.6507 7.63988 13.3183 8.27417 12.8231 8.76931L13.5302 9.47642C14.1691 8.83754 14.5981 8.01912 14.7601 7.13024L13.7763 6.95099ZM12.8231 8.76931C12.328 9.26445 11.6937 9.59694 11.0048 9.72245L11.1841 10.7063C12.0729 10.5443 12.8913 10.1153 13.5302 9.47642L12.8231 8.76931ZM11.0048 9.72245C10.3159 9.84797 9.60512 9.76056 8.96716 9.47187L8.55489 10.3829C9.37805 10.7554 10.2952 10.8682 11.1841 10.7063L11.0048 9.72245ZM8.40747 9.57385L3.86446 14.1169L4.57157 14.824L9.11458 10.281L8.40747 9.57385ZM3.86446 14.1169C3.69668 14.2846 3.46911 14.3789 3.23183 14.3789V15.3789C3.73433 15.3789 4.21625 15.1793 4.57157 14.824L3.86446 14.1169ZM3.23183 14.3789C2.99455 14.3789 2.76699 14.2846 2.5992 14.1169L1.89209 14.824C2.24741 15.1793 2.72933 15.3789 3.23183 15.3789V14.3789ZM2.5992 14.1169C2.43142 13.9491 2.33716 13.7215 2.33716 13.4842H1.33716C1.33716 13.9867 1.53677 14.4686 1.89209 14.824L2.5992 14.1169ZM2.33716 13.4842C2.33716 13.247 2.43142 13.0194 2.5992 12.8516L1.89209 12.1445C1.53678 12.4998 1.33716 12.9817 1.33716 13.4842H2.33716ZM2.5992 12.8516L7.14221 8.30859L6.43511 7.60149L1.89209 12.1445L2.5992 12.8516ZM7.24419 7.7489C6.9555 7.11095 6.86809 6.40016 6.99361 5.71126L6.00981 5.53201C5.84785 6.42089 5.96064 7.33802 6.33313 8.16118L7.24419 7.7489ZM6.99361 5.71126C7.11913 5.02237 7.45161 4.38808 7.94676 3.89294L7.23965 3.18584C6.60077 3.82472 6.17176 4.64313 6.00981 5.53201L6.99361 5.71126ZM7.94676 3.89294C8.4419 3.3978 9.07618 3.06532 9.76508 2.9398L9.58582 1.956C8.69694 2.11795 7.87853 2.54696 7.23965 3.18584L7.94676 3.89294ZM9.76508 2.9398C10.454 2.81428 11.1648 2.90169 11.8027 3.19038L12.215 2.27932C11.3918 1.90682 10.4747 1.79404 9.58582 1.956L9.76508 2.9398ZM11.6553 2.38129L9.70665 4.32994L10.4138 5.03705L12.3624 3.0884L11.6553 2.38129ZM11.679 6.30231C11.3313 6.64999 10.7682 6.65194 10.4182 6.30668L9.71597 7.01867C10.4573 7.74984 11.6498 7.74571 12.3861 7.00941L11.679 6.30231ZM10.4182 6.30668C10.0646 5.95801 10.0627 5.38815 10.4138 5.03705L9.70665 4.32994C8.96311 5.07349 8.96729 6.28029 9.71597 7.01867L10.4182 6.30668Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <p className="text-base text-foreground flex items-center gap-2">Troubleshooting</p>
                          </div>
                          <span className="text-sm text-foreground-light grow">Our troubleshooting guide for solutions to common Supabase issues.</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Self-host Supabase Section */}
              <div className="flex flex-col gap-6 py-12 lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="col-span-4 flex flex-col gap-1">
                  <div className="md:max-w-xs 2xl:max-w-none">
                    <div className="flex items-center gap-3 mb-3 text-brand-600">
                      <h2 id="self-hosting" className="group scroll-mt-24 m-0 text-2xl font-semibold">Self-host Supabase</h2>
                    </div>
                    <p className="text-foreground-light text-sm m-0 p-0">Get started with self-hosting Supabase.</p>
                    <Link className="group/text-link hover:text-foreground mt-3 block cursor-pointer focus-ring focus-visible:rounded-xs focus-visible:text-foreground no-underline text-primary text-sm" target="_self" href="/docs/guides/self-hosting">
                      <div className="group flex items-center gap-1">
                        <span className="sr-only">More on self-hosting about /guides/self-hosting</span>
                        <span>More on self-hosting</span>
                        <div className="transition-all group-hover:ml-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true">
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <ul className="grid grid-cols-12 gap-6 col-span-8 not-prose" aria-labelledby="self-hosting">
                  <li className="col-span-6">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/self-hosting-auth/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.49414 9.97461H8.49414M3.49414 9.97461V11.9746H8.49414V9.97461M3.49414 9.97461V7.97461H8.49414V9.97461M10 5V3C10 1.89543 9.10457 1 8 1C6.89543 1 6 1.89543 6 3V5M3.47266 7L3.47266 12C3.47266 13.1046 4.36809 14 5.47266 14H10.4727C11.5772 14 12.4727 13.1046 12.4727 12V7C12.4727 5.89543 11.5772 5 10.4727 5L5.47266 5C4.36809 5 3.47266 5.89543 3.47266 7Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Auth</span>
                    </Link>
                  </li>
                  <li className="col-span-6">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/self-hosting-realtime/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.85669 1.07837C6.13284 1.07837 6.35669 1.30223 6.35669 1.57837V4.07172C6.35669 4.34786 6.13284 4.57172 5.85669 4.57172C5.58055 4.57172 5.35669 4.34786 5.35669 4.07172V1.57837C5.35669 1.30223 5.58055 1.07837 5.85669 1.07837ZM1.51143 1.51679C1.70961 1.32449 2.02615 1.32925 2.21845 1.52743L4.3494 3.72353C4.5417 3.9217 4.53694 4.23825 4.33876 4.43055C4.14058 4.62285 3.82403 4.61809 3.63173 4.41991L1.50078 2.22381C1.30848 2.02564 1.31325 1.70909 1.51143 1.51679ZM5.10709 6.49114C4.74216 5.65659 5.59204 4.80844 6.42584 5.17508L14.3557 8.66199C15.2287 9.04582 15.1201 10.3175 14.1948 10.5478L11.1563 11.3041L10.4159 14.1716C10.1783 15.0916 8.91212 15.1928 8.53142 14.3222L5.10709 6.49114ZM13.9532 9.5774L6.02332 6.09049L9.44766 13.9216L10.2625 10.7658C10.3083 10.5882 10.4478 10.4499 10.6258 10.4056L13.9532 9.5774ZM1.04663 5.79688C1.04663 5.52073 1.27049 5.29688 1.54663 5.29688H3.99057C4.26671 5.29688 4.49057 5.52073 4.49057 5.79688C4.49057 6.07302 4.26671 6.29688 3.99057 6.29688H1.54663C1.27049 6.29688 1.04663 6.07302 1.04663 5.79688Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Realtime</span>
                    </Link>
                  </li>
                  <li className="col-span-6">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/self-hosting-storage/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.9997 7.50869V5.60119L9.38151 2.00024H3.99967C3.44739 2.00024 2.99967 2.44796 2.99967 3.00024V5.99976M12.9645 5.58447L9.38004 2L9.38004 4.58447C9.38004 5.13676 9.82776 5.58447 10.38 5.58447L12.9645 5.58447ZM4.44135 5.99976H2.97363C2.42135 5.99976 1.97363 6.44747 1.97363 6.99976V11.9998C1.97363 13.1043 2.86906 13.9998 3.97363 13.9998H11.9736C13.0782 13.9998 13.9736 13.1043 13.9736 11.9998V8.50869C13.9736 7.95641 13.5259 7.50869 12.9736 7.50869H6.79396C6.53157 7.50869 6.27968 7.40556 6.09263 7.22153L5.14268 6.28692C4.95563 6.10289 4.70375 5.99976 4.44135 5.99976Z" stroke="currentColor" strokeMiterlimit="10" strokeLinejoin="bevel"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Storage</span>
                    </Link>
                  </li>
                  <li className="col-span-6">
                    <Link className="group relative -m-3 flex items-center gap-3 rounded-xl p-3 no-underline transition-colors hover:bg-accent focus-ring focus-visible:bg-accent" href="/docs/reference/self-hosting-analytics/introduction">
                      <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-surface-100 transition-colors group-hover:border-strong group-focus-visible:border-strong h-10 w-10">
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M6.7156 1.77258C7.58712 1.14341 8.76326 1.14175 9.63655 1.76846L12.0629 3.50974C12.7162 3.97855 12.8569 4.83994 12.4888 5.4786L13.0896 5.9098C13.7748 6.4015 13.8962 7.32509 13.4579 7.97059L14.1753 8.4882C15.0124 9.09219 15.0035 10.3415 14.1578 10.9335L9.42209 14.2484C8.5592 14.8524 7.41031 14.8508 6.54911 14.2444L1.83872 10.9276C0.999787 10.3368 0.988308 9.09703 1.81616 8.49086L2.80076 7.76992C2.50724 7.14639 2.66597 6.35556 3.27999 5.91229L3.88264 5.47721C3.51614 4.83981 3.65602 3.98138 4.30587 3.51223L6.7156 1.77258ZM5.00242 5.21218C4.95761 5.16341 4.90473 5.12529 4.84735 5.09839C4.61595 4.88922 4.62987 4.51169 4.8912 4.32303L7.30093 2.58337C7.82385 2.20587 8.52953 2.20487 9.0535 2.5809L11.4799 4.32218C11.7403 4.50906 11.7564 4.88309 11.5302 5.09348C11.4651 5.12213 11.4054 5.16499 11.3562 5.22122L9.03905 6.84318C8.52132 7.20559 7.83199 7.20462 7.31527 6.84078L5.00242 5.21218ZM4.62864 6.17202L3.86532 6.72308C3.58687 6.92411 3.58931 7.33956 3.87012 7.53729L7.31263 9.96135C7.82935 10.3252 8.51869 10.3262 9.03642 9.96376L12.5018 7.53808C12.7841 7.34045 12.7866 6.92317 12.5066 6.72224L11.7408 6.17267L9.6125 7.66242C8.74962 8.26643 7.60073 8.26482 6.73953 7.65841L4.62864 6.17202ZM3.49834 8.49855L2.40694 9.29769C2.13099 9.49975 2.13482 9.91301 2.41446 10.1099L7.12485 13.4268C7.64157 13.7906 8.3309 13.7916 8.84864 13.4292L13.5844 10.1143C13.8663 9.91694 13.8692 9.50049 13.5902 9.29916L12.674 8.63814L9.60987 10.783C8.74698 11.387 7.59809 11.3854 6.7369 10.779L3.49834 8.49855Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span className="text-base text-foreground">Analytics</span>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="max-w-6xl px-6 mx-auto pb-6 pt-0">
        <footer role="contentinfo" aria-label="footer">
          <div className="mt-16">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-1 text-xs text-foreground-lighter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-life-buoy" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m4.93 4.93 4.24 4.24"></path>
                  <path d="m14.83 9.17 4.24-4.24"></path>
                  <path d="m14.83 14.83 4.24 4.24"></path>
                  <path d="m9.17 14.83-4.24 4.24"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                <p>Need some help?</p>
                <a className="text-primary hover:underline" target="_blank" rel="noreferrer noopener" href="https://supabase.com/support">Contact support</a>
              </li>
              <li className="flex items-center gap-1 text-xs text-foreground-lighter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical" aria-hidden="true">
                  <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                  <path d="M6.453 15h11.094"></path>
                  <path d="M8.5 2h7"></path>
                </svg>
                <p>Latest product updates?</p>
                <a className="text-primary hover:underline" target="_blank" rel="noreferrer noopener" href="https://supabase.com/changelog">See Changelog</a>
              </li>
              <li className="flex items-center gap-1 text-xs text-foreground-lighter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big lucide-check-circle" aria-hidden="true">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <p>Something&apos;s not right?</p>
                <a className="text-primary hover:underline" target="_blank" rel="noreferrer noopener" href="https://status.supabase.com/">Check system status</a>
              </li>
            </ul>
          </div>
          <hr className="border-default my-6" />
          <div className="flex gap-4 items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-3">
              <a className="text-xs text-foreground-lighter" href="https://supabase.com/">© Supabase Inc</a>
              <span className="text-xs text-foreground-lighter">—</span>
              <a className="text-xs text-foreground-lighter hover:underline" href="https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md">Contributing</a>
              <a className="text-xs text-foreground-lighter hover:underline" href="https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md">Author Styleguide</a>
              <a className="text-xs text-foreground-lighter hover:underline" href="https://supabase.com/open-source">Open Source</a>
              <a className="text-xs text-foreground-lighter hover:underline" href="https://supabase.com/supasquad">SupaSquad</a>
              <button className="text-xs text-foreground-lighter hover:underline" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" tabIndex={0}>Privacy Settings</button>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/supabase" className="text-foreground-muted hover:text-foreground transition">
                <span className="sr-only">Twitter</span>
                <div className="relative" style={{width: '14px', height: '14px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="none" className="sbui-icon" width="100%" height="100%">
                    <path fill="currentColor" d="M12.6009 0.903908H15.0544L9.69434 7.03008L16 15.3664H11.0627L7.19566 10.3105L2.77087 15.3664H0.31595L6.04904 8.81379L0 0.903908H5.06262L8.55811 5.52524L12.6009 0.903908ZM11.7399 13.8979H13.0993L4.32392 2.29528H2.86506L11.7399 13.8979Z"></path>
                  </svg>
                </div>
              </a>
              <a href="https://github.com/supabase" className="text-foreground-muted hover:text-foreground transition">
                <span className="sr-only">GitHub</span>
                <div className="relative" style={{width: '14px', height: '14px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="none" className="sbui-icon" width="100%" height="100%">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.5816 0 0 3.58719 0 8.01357C0 11.5535 2.292 14.5575 5.4712 15.6167C5.8712 15.6903 6.0168 15.4431 6.0168 15.2303C6.0168 15.0407 6.0104 14.5359 6.0064 13.8679C3.7808 14.3519 3.3112 12.7935 3.3112 12.7935C2.948 11.8671 2.4232 11.6207 2.4232 11.6207C1.6968 11.1247 2.4784 11.1343 2.4784 11.1343C3.2808 11.1903 3.7032 11.9599 3.7032 11.9599C4.4168 13.1839 5.576 12.8303 6.0312 12.6255C6.1048 12.1079 6.3112 11.7551 6.54 11.5551C4.764 11.3527 2.896 10.6647 2.896 7.59438C2.896 6.71998 3.208 6.00398 3.7192 5.44398C3.6368 5.24158 3.3624 4.42639 3.7976 3.32399C3.7976 3.32399 4.4696 3.10799 5.9976 4.14479C6.65022 3.9668 7.32355 3.87614 8 3.87519C8.68 3.87839 9.364 3.96719 10.0032 4.14479C11.5304 3.10799 12.2008 3.32319 12.2008 3.32319C12.6376 4.42639 12.3624 5.24158 12.2808 5.44398C12.7928 6.00398 13.1032 6.71998 13.1032 7.59438C13.1032 10.6727 11.232 11.3503 9.4504 11.5487C9.73762 11.7959 9.99282 12.2847 9.99282 13.0327C9.99282 14.1031 9.98322 14.9679 9.98322 15.2303C9.98322 15.4447 10.1272 15.6943 10.5336 15.6159C12.1266 15.0816 13.5115 14.0602 14.4924 12.696C15.4733 11.3318 16.0007 9.69382 16 8.01357C16 3.58719 12.4176 0 8 0Z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
              <a href="https://discord.supabase.com/" className="text-foreground-muted hover:text-foreground transition">
                <span className="sr-only">Discord</span>
                <div className="relative" style={{width: '14px', height: '14px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="none" className="sbui-icon" width="100%" height="100%">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5447 3.01094C12.5249 2.54302 11.4313 2.19828 10.2879 2.00083C10.2671 1.99702 10.2463 2.00654 10.2356 2.02559C10.0949 2.27573 9.93921 2.60206 9.83011 2.85856C8.60028 2.67444 7.3768 2.67444 6.17222 2.85856C6.06311 2.59636 5.90166 2.27573 5.76038 2.02559C5.74966 2.00717 5.72887 1.99765 5.70803 2.00083C4.56527 2.19764 3.47171 2.54239 2.45129 3.01094C2.44246 3.01475 2.43488 3.0211 2.42986 3.02935C0.355594 6.12826 -0.212633 9.151 0.06612 12.1362C0.067381 12.1508 0.0755799 12.1648 0.0869319 12.1737C1.45547 13.1787 2.78114 13.7889 4.08219 14.1933C4.10301 14.1996 4.12507 14.192 4.13832 14.1749C4.44608 13.7546 4.72043 13.3114 4.95565 12.8454C4.96953 12.8181 4.95628 12.7857 4.92791 12.7749C4.49275 12.6099 4.0784 12.4086 3.67982 12.18C3.64829 12.1616 3.64577 12.1165 3.67477 12.095C3.75865 12.0321 3.84255 11.9667 3.92264 11.9007C3.93713 11.8886 3.95732 11.8861 3.97435 11.8937C6.59287 13.0892 9.42771 13.0892 12.0153 11.8937C12.0323 11.8854 12.0525 11.888 12.0677 11.9C12.1478 11.9661 12.2316 12.0321 12.3161 12.095C12.3451 12.1165 12.3433 12.1616 12.3117 12.18C11.9131 12.413 11.4988 12.6099 11.063 12.7743C11.0346 12.7851 11.022 12.8181 11.0359 12.8454C11.2762 13.3108 11.5505 13.7539 11.8526 14.1742C11.8652 14.192 11.8879 14.1996 11.9087 14.1933C13.2161 13.7889 14.5417 13.1787 15.9103 12.1737C15.9223 12.1648 15.9298 12.1515 15.9311 12.1369C16.2647 8.6856 15.3723 5.68765 13.5655 3.02998C13.5611 3.0211 13.5535 3.01475 13.5447 3.01094ZM5.34668 10.3185C4.55833 10.3185 3.90876 9.59478 3.90876 8.70593C3.90876 7.81707 4.54574 7.09331 5.34668 7.09331C6.15393 7.09331 6.79722 7.82342 6.7846 8.70593C6.7846 9.59478 6.14762 10.3185 5.34668 10.3185ZM10.6632 10.3185C9.87481 10.3185 9.22527 9.59478 9.22527 8.70593C9.22527 7.81707 9.86221 7.09331 10.6632 7.09331C11.4704 7.09331 12.1137 7.82342 12.1011 8.70593C12.1011 9.59478 11.4704 10.3185 10.6632 10.3185Z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
              <a href="https://youtube.com/c/supabase" className="text-foreground-muted hover:text-foreground transition">
                <span className="sr-only">Youtube</span>
                <div className="relative" style={{width: '14px', height: '14px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="none" className="sbui-icon" width="100%" height="100%">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.6657 4.13526C15.4817 3.44239 14.9395 2.8967 14.2511 2.71152C13.0033 2.37502 8 2.37502 8 2.37502C8 2.37502 2.99669 2.37502 1.74891 2.71152C1.06052 2.89673 0.518351 3.44239 0.334337 4.13526C1.90735e-06 5.39112 1.90735e-06 8.01137 1.90735e-06 8.01137C1.90735e-06 8.01137 1.90735e-06 10.6316 0.334337 11.8875C0.518351 12.5804 1.06052 13.1033 1.74891 13.2885C2.99669 13.625 8 13.625 8 13.625C8 13.625 13.0033 13.625 14.2511 13.2885C14.9395 13.1033 15.4817 12.5804 15.6657 11.8875C16 10.6316 16 8.01137 16 8.01137C16 8.01137 16 5.39112 15.6657 4.13526ZM6.36363 10.3904V5.63238L10.5454 8.01143L6.36363 10.3904Z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}