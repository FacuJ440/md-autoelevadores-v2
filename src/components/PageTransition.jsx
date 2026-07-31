import { motion } from 'framer-motion'

/**
 * Wraps page content with a smooth fade + slide-up transition.
 * Used together with AnimatePresence in App.jsx so the old page
 * exits before the new one enters.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
