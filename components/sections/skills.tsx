"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"

interface Skill {
  _id: string
  category: string
  name: string
  level: number
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills")
        const data = await response.json()
        setSkills(data)
      } catch (error) {
        console.error("Error fetching skills:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  const conceptSkills = skills.filter((skill) => skill.category === "Concepts")
  const programmingSkills = skills.filter((skill) => skill.category === "Programming")
  const dataSkills = skills.filter((skill) => skill.category === "Database")
  const devSkills = skills.filter((skill) => skill.category === "Web Development")
  const toolSkills = skills.filter((skill) => skill.category === "Tools")
  const softSkills = skills.filter((skill) => skill.category === "Soft Skills")

  if (loading) {
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="animate-pulse max-w-4xl mx-auto">
            <div className="h-8 bg-muted rounded w-48 mx-auto mb-8"></div>
            <div className="h-12 bg-muted rounded mb-8"></div>
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-16 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  const SkillCard = ({ skillsData, category }: { skillsData: Skill[]; category: string }) => (
    <Card className="border-0 shadow-xl bg-background/80 backdrop-blur-sm">
      <CardContent className="pt-8">
        <div className="grid gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-muted-foreground font-medium">{skill.level}%</span>
              </div>
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced background */}
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
            My Skills
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
            Technologies and tools I work with on a daily basis.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
         <Tabs defaultValue="Concepts" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-12 bg-background/80 backdrop-blur-sm shadow-lg rounded-xl p-1">
              <TabsTrigger value="Concepts" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300">
                Concepts
              </TabsTrigger>
              <TabsTrigger value="Programming" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300">
                Programming
              </TabsTrigger>
              <TabsTrigger value="Database" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300">
                Database
              </TabsTrigger>
              <TabsTrigger value="Web Development" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300">
                Web Dev
              </TabsTrigger>
              <TabsTrigger value="Tools" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300">
                Tools
              </TabsTrigger>
              <TabsTrigger value="Soft Skills" className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300">
                Soft Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="Concepts">
              <SkillCard skillsData={conceptSkills} category="Concepts" />
            </TabsContent>
            <TabsContent value="Programming">
              <SkillCard skillsData={programmingSkills} category="Programming" />
            </TabsContent>
            <TabsContent value="Database">
              <SkillCard skillsData={dataSkills} category="Database" />
            </TabsContent>
            <TabsContent value="Web Development">
              <SkillCard skillsData={devSkills} category="Web Development" />
            </TabsContent>
            <TabsContent value="Tools">
              <SkillCard skillsData={toolSkills} category="Tools" />
            </TabsContent>
            <TabsContent value="Soft Skills">
              <SkillCard skillsData={softSkills} category="Soft Skills" />
            </TabsContent>
          </Tabs>

        </motion.div>
      </div>
    </section>
  )
}
