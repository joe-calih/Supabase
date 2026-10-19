export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-xl md:text-2xl lg:text-[36px] font-medium tracking-tight text-white">
          <span className="text-white/40">Build in a weekend,</span>{" "}
          <span className="text-white/80 block sm:inline">scale to millions</span>
        </h2>
        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center justify-center cursor-pointer space-x-2 text-center font-medium ease-[cubic-bezier(0.22,1,0.36,1)] duration-200 transition-[background-color,border-color,color,scale] active:scale-[0.97] border border-zinc-700 bg-primary text-black hover:bg-zinc-800 text-base md:text-sm px-4 py-2 h-[38px] rounded-md">
            <span className="truncate">Start your project</span>
          </button>
          <button className="relative inline-flex items-center justify-center cursor-pointer space-x-2 text-center font-medium ease-[cubic-bezier(0.22,1,0.36,1)] duration-200 transition-[background-color,border-color,color,scale] active:scale-[0.97] border border-white/10 bg-white/5 text-white/90 hover:bg-zinc-800 text-base md:text-sm px-4 py-2 h-[38px] rounded-md">
            <span className="truncate">Request a demo</span>
          </button>
        </div>
      </div>
    </section>
  )
}