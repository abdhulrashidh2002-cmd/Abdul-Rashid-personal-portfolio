import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 py-8 bg-gradient-to-r
                                from-[#8B5CF6]/10
                                via-[#EC4899]/5
                                to-[#8B5CF6]/10"
    >
      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-8" />

      {/* Content */}
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-sm font-semi-bold text-gray-400">
          © 2026 Abdul Rashid. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Built with React, TypeScript, Tailwind CSS & Framer Motion
        </p>

        <motion.a
          href="#Hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 text-muted hover:text-accent transition-colors duration-300"
        >
          ↑ Back to Top
        </motion.a>
      </div>
    </motion.footer>
  );
}