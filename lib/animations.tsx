import { Variants } from 'motion/react'

// Page Transitions
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
}

// Sidebar Animation
export const sidebarVariants: Variants = {
  expanded: {
    width: 240,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  collapsed: {
    width: 80,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

// Component Entry Animation
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

// Card Hover Animation
export const cardHoverVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  hover: {
    y: -4,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

// Modal Animation
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

// Status Badge Animation
export const badgeVariants: Variants = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  change: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.3
    }
  }
}

// GSAP Hero Timeline Configuration
export const heroTimelineConfig = {
  duration: 1.5,
  stagger: 0.2,
  ease: 'power3.out'
}

// Stagger container for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3
    }
  }
}
