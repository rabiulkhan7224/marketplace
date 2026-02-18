'use client'

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'

const steps = [
  {
    number: '1',
    title: 'Post Your Project',
    description: 'Buyers create detailed project briefs with budgets and deadlines'
  },
  {
    number: '2',
    title: 'Solvers Apply',
    description: 'Qualified solvers review projects and submit their proposals'
  },
  {
    number: '3',
    title: 'Select & Collaborate',
    description: 'Buyers choose the best solver and initiate collaboration'
  },
  {
    number: '4',
    title: 'Complete & Deliver',
    description: 'Solvers complete tasks and submit deliverables for review'
  },
  {
    number: '5',
    title: 'Review & Approve',
    description: 'Buyers review quality and approve completion'
  },
  {
    number: '6',
    title: 'Payment & Ratings',
    description: 'Secure payment processed and both parties leave feedback'
  }
]

export function WorkflowExplanation() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined workflow designed for collaboration and success
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 dark:bg-purple-500 text-white font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-grow pt-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
