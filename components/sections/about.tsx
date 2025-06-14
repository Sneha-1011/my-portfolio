"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Globe, Heart } from "lucide-react"

const RESUME_DRIVE_LINK = "https://drive.google.com/drive/folders/1M1RSea-Rz_qCAQnBnBQx3GZl7dkk2hmL?usp=sharing"

export default function About() {
  const handleResumeDownload = () => {
    window.open(RESUME_DRIVE_LINK, "_blank")
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-primary/5 to-purple-500/10"></div>
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/5 to-purple-600/5 blur-3xl"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-primary via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          ></motion.div>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Get to know more about me, my background, and what drives me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-3xl -z-10"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute -top-8 -left-8 w-32 h-32 border-4 border-primary/20 rounded-3xl -z-10"
              animate={{ rotate: [360, 180, 0] }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.h3
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Sneha Muralidharan
              </span>
              , M.Sc Decision and Computing Sciences
            </motion.h3>

            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                A strong foundation in software development, data analytics, and project management.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I’m a passionate full-stack developer specializing in the MERN stack, focused on building modern, user-centric web applications that solve real-world problems. I enjoy translating complex data into actionable insights to support smarter decision-making and have experience leading teams and managing projects to ensure efficient execution and collaboration. Always curious and driven by continuous learning, I actively explore new technologies, contribute to open-source projects, and stay updated with the latest trends across tech, analytics, and leadership.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-1 gap-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: Heart, label: "Name", value: "Sneha Muralidharan" },
                { icon: MapPin, label: "Location", value: "India" },
                { icon: Globe, label: "Email", value: "snehamuralidharan1109@gmail.com" },
                { icon: Calendar, label: "Available", value: "Full-time and Part-time Jobs" },
              ].map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  className="flex items-start space-x-5 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm text-primary">{label}:</h4>
                    <p className="text-muted-foreground text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-pink-600/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
