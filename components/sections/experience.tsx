"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

interface Experience {
  _id: string
  title: string
  company: string
  period: string
  place: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experiences")
        const data = await response.json()
        setExperiences(data)
      } catch (error) {
        console.error("Error fetching experiences:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchExperiences()
  }, [])

  if (loading) {
    return (
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/10 to-purple-600/10 blur-3xl"
            style={{
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Work Experience
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
            My professional journey and the companies I've had the pleasure to work with.
          </motion.p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary before:via-purple-600 before:to-pink-600 before:rounded-full before:z-0">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience._id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="md:flex items-center md:justify-between">
                <div className="flex items-center md:w-1/2 md:pr-8">
                  <motion.div
                    className="flex shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-lg shadow-primary/30 items-center justify-center z-10 md:mx-auto"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Building2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="md:hidden ml-4">
                    <time className="flex items-center text-sm font-semibold text-primary">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </time>
                  </div>
                </div>
                <div className="hidden md:flex md:w-1/2 md:pl-8">
                  <time className="flex items-center text-sm font-semibold text-primary">
                    <Calendar className="w-4 h-4 mr-1" />
                    {experience.period}
                  </time>
                </div>
              </div>

              <div className="md:flex items-center md:justify-between mt-4">
                <div className="md:w-1/2 md:pr-8">
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <Card className="md:ml-12 border-0 shadow-xl bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium">{experience.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-6 text-muted-foreground leading-relaxed">{experience.description}</p>
                        <h4 className="font-semibold mb-3 text-primary">Key Responsibilities:</h4>
                        <ul className="list-none space-y-2 mb-6">
                          {experience.responsibilities.map((responsibility, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                              <span className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {responsibility}
                            </motion.li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-gradient-to-r from-primary/10 to-purple-600/10 hover:from-primary/20 hover:to-purple-600/20 transition-all duration-300"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
