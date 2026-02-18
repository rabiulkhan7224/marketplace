'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-lg shadow-2xl backdrop-blur-sm">
     
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-purple-100 max-w-xl mx-auto">
            Join hundreds of successful buyers and solvers connecting through our marketplace
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/auth/signup">
              <Button size="lg" variant="secondary" className="gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
