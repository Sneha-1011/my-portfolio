"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sneha Muralidharan
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
                A passionate developer, data analyst, and project strategist—specializing in crafting intelligent digital solutions, extracting insights from data, and leading impactful tech initiatives with modern technologies.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://github.com/Sneha-1011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-600/20 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://www.linkedin.com/in/sneha-muralidharan-575109227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-600/20 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="mailto:snehamuralidharan1109@gmail.com"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-purple-600/20 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-primary">Get In Touch</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <Link
                  href="mailto:snehamuralidharan1109@gmail.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  snehamuralidharan1109@gmail.com
                </Link>
              </p>
              <p className="leading-relaxed">
                Available for internship and full-time position. Let's build something amazing together!
              </p>
            </address>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border/50 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-2">
            © {new Date().getFullYear()} Sneha Muralidharan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
