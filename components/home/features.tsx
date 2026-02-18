'use client'

import { motion } from 'motion/react'
import { Briefcase, Users, TrendingUp, CheckCircle, Shield, Zap } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'

const features = [
  {
    icon: Briefcase,
    title: 'Post Projects',
    description: 'Share your project requirements and let solvers bid on your work',
    gradientFrom: 'from-purple-600/20',
    gradientTo: 'to-blue-600/20',
    borderGradient: 'from-purple-500 to-blue-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    iconColor: 'text-white'
  },
  {
    icon: Users,
    title: 'Find Experts',
    description: 'Browse profiles of verified problem solvers and collaborators',
    gradientFrom: 'from-blue-600/20',
    gradientTo: 'to-cyan-600/20',
    borderGradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    iconColor: 'text-white'
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor project status in real-time with detailed dashboards',
    gradientFrom: 'from-cyan-600/20',
    gradientTo: 'to-teal-600/20',
    borderGradient: 'from-cyan-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-600',
    iconColor: 'text-white'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Review deliverables and provide feedback before acceptance',
    gradientFrom: 'from-green-600/20',
    gradientTo: 'to-emerald-600/20',
    borderGradient: 'from-green-500 to-emerald-500',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
    iconColor: 'text-white'
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Escrow-based payment system for secure transactions',
    gradientFrom: 'from-violet-600/20',
    gradientTo: 'to-purple-600/20',
    borderGradient: 'from-violet-500 to-purple-500',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
    iconColor: 'text-white'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Accelerate your projects with our streamlined workflow',
    gradientFrom: 'from-orange-600/20',
    gradientTo: 'to-red-600/20',
    borderGradient: 'from-orange-500 to-red-500',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
    iconColor: 'text-white'
  }
]

export function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage projects and collaborate with talented professionals
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className={`group relative bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} border border-transparent rounded-xl p-8 backdrop-blur-sm overflow-hidden transition-all duration-300`}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} style={{ padding: '1px' }}>
                  <div className="absolute inset-0 bg-background rounded-[11px]" />
                </div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`inline-flex p-3 rounded-lg ${feature.iconBg} mb-4 w-fit`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </motion.div>

                  {/* Text content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
