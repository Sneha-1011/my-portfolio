import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sneha Muralidharan | Portfolio",
  description: "Professional portfolio showcasing my skills, projects, and experience as a Full Stack Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} dark`}>
        <ThemeProvider>
          <div className="relative min-h-screen">
            {/* Animated background particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="particles">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 8}s`,
                      animationDuration: `${8 + Math.random() * 4}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cyber grid background */}
            <div className="fixed inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

            <Header />
            {children}
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
