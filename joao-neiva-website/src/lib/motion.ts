import type { Transition, Variants } from 'framer-motion'

export const editorialEase = [0.22, 1, 0.36, 1] as const

export const revealTransition: Transition = {
  duration: 0.7,
  ease: editorialEase,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
}

export const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
