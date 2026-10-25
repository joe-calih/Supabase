"use client"

import { motion } from "framer-motion"
import { Triangle } from "lucide-react"

export function LogoCloud() {
  return (
    <section className="relative z-20 bg-background pb-24 pt-8 text-foreground">
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-lg text-muted-foreground"
          >
            Powering the world's best product teams.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 text-lg text-muted-foreground"
          >
            From next-gen startups to established enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            {/* Logo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-10 items-center justify-items-center transition-all duration-300 group-hover:blur-[2.5px] group-hover:opacity-50">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex items-center gap-2 text-xl font-semibold text-foreground">
                  <Triangle className="h-5 w-5 fill-current" />
                  Vercel
                </div>
              ))}
            </div>

            {/* Hover overlay button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-5 py-2.5 text-sm text-foreground backdrop-blur-sm">
                Meet our customers
                <span aria-hidden="true">›</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
