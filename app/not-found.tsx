import Link from "next/link"

function SprintLogo() {
  return (
    <svg width="23" height="24" viewBox="0 0 109 113" fill="none" aria-hidden="true">
      <path
        d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        fill="#249361"
      />
      <path
        d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
        fill="#3ECF8E"
      />
    </svg>
  )
}

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 mx-auto w-full max-w-7xl px-8 pt-6 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10" aria-label="Main navigation">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-foreground"
            aria-label="Sprint home"
          >
            <SprintLogo />
            Sprint
          </Link>
        </nav>
      </div>

      <div className="pointer-events-none absolute select-none text-[14rem] text-foreground opacity-5 blur-xs transition duration-200 motion-reduce:transition-none sm:text-[18rem] lg:text-[28rem]" aria-hidden="true">
        404
      </div>

      <div className="z-10 flex flex-col items-center justify-center space-y-6 px-6 text-center">
        <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-3 text-foreground">
          <h1 className="m-2 text-2xl">Looking for something? 🔍</h1>
          <p className="text-sm">We couldn&apos;t find the page that you&apos;re looking for!</p>
        </div>

        <Link
          href="/"
          className="inline-flex h-8.5 items-center justify-center rounded-md bg-primary px-3 py-2 text-base font-medium leading-4 text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
        >
          Head back
        </Link>


        <p className="text-xs text-muted-foreground">
          <Link href="/docs" className="underline hover:text-foreground">
            Documentation
          </Link>
          {" · "}
          <Link href="/sitemap.xml" className="underline hover:text-foreground">
            Sitemap
          </Link>
          {" · "}
          <Link href="/llms.txt" className="underline hover:text-foreground">
            llms.txt
          </Link>
        </p>
      </div>
    </main>
  )
}
