import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/projects`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch projects")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function fetchExperiences() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/experiences`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch experiences")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching experiences:", error)
    return []
  }
}

export async function fetchEducation() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/education`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch education")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching education:", error)
    return []
  }
}

export async function fetchSkills() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/skills`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch skills")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching skills:", error)
    return []
  }
}

export async function fetchCertifications() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/certifications`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch certifications")
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching certifications:", error)
    return []
  }
}
