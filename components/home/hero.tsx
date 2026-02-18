'use client'

import { motion, cubicBezier } from 'motion/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.34, 1.56, 0.64, 1)
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.34, 1.56, 0.64, 1)
    }
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
    }
  }
}

export function Hero() {
  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10">
      <motion.div
        className="max-w-3xl w-full text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
        >
          Connect Projects <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            with Solvers
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          A modern marketplace platform connecting project creators with talented problem solvers. Post your projects, find expert solvers, and collaborate seamlessly.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Link href="/auth/signup">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
          <Link href="/auth/login">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
