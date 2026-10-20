import { Button } from "@/components/ui/button"

export function OpenSourceSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background py-24 text-foreground">
      {/* Background Dotted Grid Pattern on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklch, var(--primary) 18%, transparent) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 25%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 25%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left Column: Text & Button */}
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <div>
              <h2 className="mb-4 text-balance text-4xl font-medium sm:text-3xl">Open source from day one</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Supabase is built in the open because we believe great developer tools should be transparent,
                inspectable, and owned by the community. Read, contribute, self-host. You&apos;re never locked in, and
                always in control.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild size="sm" variant="outline" className="gap-2">
                <a href="https://github.com/supabase" target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Visible Dotted 111.7K Counter Display */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="font-mono text-6xl tracking-widest text-[#10b981] drop-shadow-[0_0_25px_rgba(16,185,129,0.3)] md:text-7xl">
              111.7K
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}