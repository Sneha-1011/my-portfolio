"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { useEffect, useState } from "react"

const RESUME_DRIVE_LINK = "https://drive.google.com/drive/folders/1M1RSea-Rz_qCAQnBnBQx3GZl7dkk2hmL?usp=sharing"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleResumeDownload = () => {
    window.open(RESUME_DRIVE_LINK, "_blank")
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-blue-500/10 to-transparent"
        style={{ y, opacity }}
      />

      {/* Interactive cursor glow */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-gradient-radial from-cyan-500/30 to-transparent pointer-events-none z-0 blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-${Math.floor(Math.random() * 8) + 4} h-${Math.floor(Math.random() * 8) + 4} ${
                i % 3 === 0
                  ? "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full"
                  : i % 3 === 1
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 rotate-45"
                    : "bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg"
              } blur-sm`}
              style={{
                width: Math.random() * 60 + 20,
                height: Math.random() * 60 + 20,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span className="relative px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm glass">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Analytical Technologist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            Hi, I'm{" "}
            <motion.span
              className="gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Sneha Muralidharan
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-muted-foreground mb-12 h-20 flex items-center"
          >
            <TypeAnimation
              sequence={[
                "I build modern web applications",
                3000,
                "I create seamless user experiences",
                3000,
                "I analyze data for impact",
                3000,
                "I develop scalable backend solutions",
                3000,
                "I design responsive interfaces",
                3000,
                "I love solving complex problems",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="font-medium text-cyan-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="magnetic">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6" asChild
              >
                <Link href="#projects">
                  <Sparkles className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="magnetic">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/10 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300 glass shimmer"
                asChild
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="magnetic">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleResumeDownload}
                className="bg-muted/50 hover:bg-muted/80 backdrop-blur-sm text-lg px-8 py-6 transition-all duration-300 tilt"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex space-x-8 mb-20"
          >
            {[
              { icon: Github, href: "https://github.com/Sneha-1011", label: "GitHub", color: "hover:text-gray-400" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sneha-muralidharan-575109227", label: "LinkedIn", color: "hover:text-blue-400" },
              {
                icon: Mail,
                href: "mailto:snehamuralidharan1109@gmail.com",
                label: "Email",
                color: "hover:text-green-400",
              },
            ].map(({ icon: Icon, href, label, color }, index) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="magnetic"
              >
                <Link
                  href={href}
                  target={href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  className={`p-4 rounded-xl bg-muted/30 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 text-muted-foreground ${color} transition-all duration-300 backdrop-blur-sm border border-border/50 hover:border-cyan-500/30 glass animate-float`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            className="absolute bottom-10"
          >
            <Link
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-cyan-400 transition-all duration-300 group magnetic"
            >
              <motion.span
                className="text-sm mb-3 font-medium group-hover:translate-y-1 transition-transform duration-300"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Scroll Down
              </motion.span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="p-2 rounded-full border border-cyan-500/30 group-hover:border-cyan-400/50 transition-colors duration-300"
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
