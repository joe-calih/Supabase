const steps = [
  { title: "Audit & Analysis", description: "We follow a proven process to ensure your SEO success." },
  { title: "Strategy Development", description: "We develop a custom strategy tailored to your needs." },
  { title: "Implementation", description: "Executing the plan with precision and expertise." },
  { title: "Monitoring & Reporting", description: "Continuous monitoring and reporting to measure success." },
]

export function ProcessSectionNew() {
  return (
    <section id="process" className="w-full bg-[#09090B] pb-10 text-white">
      <div className="mx-auto max-w-6xl px-6">


        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="group flex items-start">
              <span className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground transition-transform group-hover:scale-110">
                {index + 1}
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-zinc-400">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
