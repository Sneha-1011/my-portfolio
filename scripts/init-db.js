require("dotenv").config({ path: ".env.local" })
const { MongoClient } = require("mongodb")

// Sample data for the portfolio
const projects = [{
  "_id": {
    "$oid": "68432b4773aca4391a483966"
  },
  "title": "Poker Game Application",
  "description": "Implemented a fully interactive Texas Hold'em poker game with 100% client-side logic, including real-time betting, player turns, and multi-phase gameplay (pre-flop to showdown).",
  "image": "/poker.jpeg",
  "tags": [
    "Next.js",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "MySQL"
  ],
  "github": "https://github.com/sneha-1011/poker-application",
  "featured": true
},
{
  "_id": {
    "$oid": "68432b4773aca4391a483967"
  },
  "title": "Grocery Store Assistant",
  "description": "Developed a smart shopping assistant that recommends an optimal set of grocery items within a specified budget. Applied algorithms such as 0/1 Knapsack, backtracking, and dynamic programming to prioritize high-utility items, achieving 95% accuracy in hitting target budget constraints.",
  "image": "/grocery.jpeg",
  "tags": [
    "Next.js",
    "TypeScript",
    "MySQL",
    "Tailwind CSS"
  ],
  "github": "https://github.com/sneha-1011/grocery-store-assistant",
  "featured": true
},
{
  "_id": {
    "$oid": "68432b4773aca4391a483968"
  },
  "title": "Tesla ETF Data Pipeline and Analytics Dashboard",
  "description": "An interactive dashboard visualize and analyze Tesla's ETF trends for better decision-making. ",
  "image": "/etf.jpg",
  "tags": [
    "PowerBI",
    "PyScript",
    "Flask",
    "Google BigQuery",
    "PostMan"
  ],
  "github": "https://github.com/Sneha-1011/tesla-etf-live-monitoring-dashboard",
  "featured": true
},
{
  "_id": {
    "$oid": "68432b4773aca4391a483969"
  },
  "title": "Expense Tracker Application",
  "description": "Developed an intuitive expense tracker application by utilising the robust capabilities of J2EE and the user-centric design principles of Bootstrap. Provides users with the tools to create and manage personalized budgets, this empowers individuals to set realistic financial goals and monitor their progress towards achieving them.",
  "image": "/expense.png",
  "tags": [
    "J2EE",
    "MySQL",
    "BootStrap"
  ],
  "github": "https://github.com/Sneha-1011/Expense-Tracker-Application-/",
  "featured": true
},
{
  "_id": {
    "$oid": "68432b4773aca4391a48396a"
  },
  "title": "SRIX Website - Integer Programming Problem Mathematical Solver",
  "description": "This 100% interactive UI helps users to solve IPPs more efficiently while streamlines mathematical formulation. Provides an intuitive online interface for users to define and maximize IPPs effortlessly",
  "image": "/ipp.png",
  "tags": [
    "Python",
    "Streamlit"
  ],
  "github": "https://github.com/Sneha-1011/Integer-Programming",
  "featured": true
},
{
  "_id": {
    "$oid": "68432b4773aca4391a48396b"
  },
  "title": "HR Metrics and Analytics for Joie-Glam",
  "description": "Implemented ML-driven HR strategies that optimized recruitment, training, and retention, leading to a 15% reduction in time-to-hire and 20% improvement in training effectiveness.",
  "image": "/hr.png",
  "tags": [
    "Python",
    "Microsoft Excel",
    "Microsoft Word",
    "PowerBI"
  ],
  "github": "https://github.com/Sneha-1011/HR-Analytics",
  "featured": false
},
{
  "_id": {
    "$oid": "68432b4773aca4391a48396c"
  },
  "title": "A Comparative Study on Companies Performance and Stock Price Movements (IT Sector)",
  "description": "Conducted comparative financial and stock performance analysis of 3 companies within a selected sector over a 3-year period, examining trends in revenue, net profit, EPS, and stock volatility. Delivered a detailed report summarizing investment strategies and actionable insights, supporting strategic decision-making for both institutional and retail investors",
  "image": "/price.png",
  "tags": [
    "Microsoft Excel",
    "Microsoft Word"
  ],
  "github": "https://github.com/Sneha-1011/Comparitive-Analysis",
  "featured": false
}]

const experiences = [{
  "_id": {
    "$oid": "68432b4873aca4391a48396d"
  },
  "title": "Digital Marketing Strategist",
  "company": "SM Corporate Solutions",
  "period": "July 2024 - November 2024",
  "place": "Coimbatore, India",
  "description": "Led a 5-month digital marketing project for SM Corporate Solutions, focused on enhancing online visibility and client engagement in the ESI, PF, and labor law compliance.",
  "responsibilities": [
    "Built and optimized the website, launched SEO-optimized blogs, and used Google Analytics, Search Console, and Looker Studio to track performance, resulting in an 85% increase in organic traffic and top 3 search rankings.",
    "Executed multi-platform campaigns including organic social content, Meta ads, and the “Consultation 101” series, increasing brand awareness, resulting in 10 qualified leads in 3 months.",
    "Strengthened backlinking and improved email marketing funnels, leading to 100% growth in form submissions and higher engagement.",
    "Achieved measurable growth in web traffic and online brand authority through consistent performance monitoring and strategy refinement."
  ],
  "technologies": [
    "Wix",
    "Google Analytics",
    "Google Search Console",
    "Canva",
    "SEMrush",
    "Looker Studio",
    "Smartlook",
    "Meta Business Suite",
    "Buffer"
  ]
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48396e"
  },
  "title": "Internship Coordinator",
  "company": "Coimbatore Institute of Technology",
  "period": "May 2025 - Present",
  "place": "Coimbatore, India",
  "description": "Supporting peers with identifying relevant internship and placement offers.",
  "responsibilities": [
    "Serving as the primary liaison between students, faculty, and external organizations.",
    "Being responsible for identifying relevant internship opportunities, supporting peers with application processes, and coordinating communications with companies.",
    "I organize orientation sessions, maintain communication with company HRs, and track students’ progress during their internships."
  ],
  "technologies": [
    "Leadership",
    "Teamwork",
    "Communication",
    "Problem Solving"
  ]
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48396f"
  },
  "title": "Club Advisor",
  "company": "403Strats Club",
  "period": "November 2024 - Present",
  "place": "Coimbatore Institute of Technology",
  "description": "As Club Advisor at 403Strats Club, mentoring members in esports, coding, and management, helping them develop practical skills, teamwork, and leadership abilities.",
  "responsibilities": [
    "Mentoring members in esports, coding, and club management to enhance their technical skills and leadership capabilities.",
    "Providing strategic guidance for planning and executing club initiatives, competitions, and events.",
    "Facilitating team collaboration, encouraging effective communication, problem-solving, and project ownership among members.",
    "Supporting junior members through regular check-ins, feedback, and personal development planning to ensure continuous growth."
  ],
  "technologies": [
    "Leadership",
    "Teamwork",
    "Communication",
    "Problem Solving"
  ]
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483970"
  },
  "title": "Digital Marketing Coordinator",
  "company": "403Strats Club",
  "period": "October 2023 - October 2024",
  "place": "Coimbatore Institute of Technology",
  "description": "Guiding the team of peers and juniors towards the digital world of the club and handling the socials of the club.",
  "responsibilities": [
    "Led the club’s digital presence by managing social media platforms and ensuring consistent, engaging content delivery.",
    "Collaborated with team members to brainstorm and develop creative content ideas aligned with club activities and goals.",
    "Scheduled and published posts regularly to maintain an active online presence and boost member engagement.",
    "Guided peers and juniors in understanding digital tools and strategies, fostering a collaborative digital workflow."
  ],
  "technologies": [
    "Digital Marketing",
    "Designing",
    "Marketing",
    "Teamwork",
    "Communication",
    "Problem Solving"
  ]
}]

const education = [{
  "_id": {
    "$oid": "68432b4873aca4391a483971"
  },
  "degree": "Master of Science in Decision and Computing Sciences",
  "institution": "Coimbatore Institute of Technology",
  "location": "Coimbatore, India",
  "period": "2021 - 2026",
  "description": "Bridging the gap between decision science and intelligent computing.",
  "achievements": [
    "GPA: 8.9/10.0",
    "Internship Coordinator",
    "Member and Advisor of 403Strats Club"
  ]
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483972"
  },
  "degree": "Higher Secondary Certificate",
  "institution": "GRG Matriculation Higher Secondary School",
  "location": "Coimbatore, India",
  "period": "2019 - 2021",
  "description": "Developed strong analytical and quantitative skills relevant to business and finance by studying core subjects including Business Mathematics, Accounting, Economics, and Commerce.",
  "achievements": [
    "Percentage: 93%",
    "Overall Rank Holder (11th Grade)",
    "Awarded High Scorer Badge for outstanding performance in French.",
    "Recognized for creative and academic writing."
  ]
}]

const skills = [{
  "_id": {
    "$oid": "68432b4873aca4391a483973"
  },
  "category": "Concepts",
  "name": "Advanced Data Structures and Algorithms",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483974"
  },
  "category": "Concepts",
  "name": "Database",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483975"
  },
  "category": "Concepts",
  "name": "Machine Learning",
  "level": 80
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483976"
  },
  "category": "Concepts",
  "name": "Web Development",
  "level": 85
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483977"
  },
  "category": "Concepts",
  "name": "Object Oriented Programming",
  "level": 80
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483978"
  },
  "category": "Programming",
  "name": "Python",
  "level": 80
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48397b"
  },
  "category": "Programming",
  "name": "Java",
  "level": 70
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48397c"
  },
  "category": "Programming",
  "name": "R",
  "level": 75
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48397d"
  },
  "category": "Database",
  "name": "MySQL",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48397e"
  },
  "category": "Database",
  "name": "MongoDB",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48397f"
  },
  "category": "Database",
  "name": "Oracle",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483980"
  },
  "category": "Web Development",
  "name": "HTML/CSS",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483981"
  },
  "category": "Web Development",
  "name": "Javascript",
  "level": 75
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483982"
  },
  "category": "Web Development",
  "name": "React.js",
  "level": 65
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483983"
  },
  "category": "Web Development",
  "name": "Next.js",
  "level": 80
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483984"
  },
  "category": "Web Development",
  "name": "Tailwind CSS",
  "level": 70
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483985"
  },
  "category": "Web Development",
  "name": "Bootstrap",
  "level": 75
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483986"
  },
  "category": "Tools",
  "name": "PowerBI",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483987"
  },
  "category": "Tools",
  "name": "Jupyter Notebook",
  "level": 90
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483988"
  },
  "category": "Tools",
  "name": "Microsoft Office",
  "level": 95
},
{
  "_id": {
    "$oid": "68432b4873aca4391a483989"
  },
  "category": "Tools",
  "name": "Adobe XD",
  "level": 85
},
{
  "_id": {
    "$oid": "68432b4873aca4391a48398a"
  },
  "category": "Tools",
  "name": "Canva",
  "level": 95
},
{
  "_id": {
    "$oid": "684c426803bca9381ee608cc"
  },
  "category": "Tools",
  "name": "Kapwing",
  "level": 85
},
{
  "_id": {
    "$oid": "684c427d03bca9381ee608cd"
  },
  "category": "Tools",
  "name": "Wix",
  "level": 90
},
{
  "_id": {
    "$oid": "684c429f03bca9381ee608ce"
  },
  "category": "Tools",
  "name": "Google Analytics",
  "level": 90
},
{
  "_id": {
    "$oid": "684c42af03bca9381ee608cf"
  },
  "category": "Tools",
  "name": "Google and Meta Ads",
  "level": 90
},
{
  "_id": {
    "$oid": "684c431a03bca9381ee608d1"
  },
  "category": "Soft Skills",
  "name": "Leadership"
},
{
  "_id": {
    "$oid": "684c433203bca9381ee608d2"
  },
  "category": "Soft Skills",
  "name": "Communication"
},
{
  "_id": {
    "$oid": "684c433f03bca9381ee608d3"
  },
  "category": "Soft Skills",
  "name": "Attention to Detail"
},
{
  "_id": {
    "$oid": "684c435f03bca9381ee608d4"
  },
  "category": "Soft Skills",
  "name": "Team Collaboration"
},
{
  "_id": {
    "$oid": "684c436d03bca9381ee608d5"
  },
  "category": "Soft Skills",
  "name": "Presentation"
}]

const certifications = [{
  "_id": {
    "$oid": "68432b4873aca4391a48398b"
  },
  "title": "Participation at Electrathon",
  "issuer": "Department of EEE, Coimbatore Institute of Technology",
  "date": "April 2023",
  "description": " Presented the idea of building a software ADM: After Disaster Management, a disaster relief management.  Proposed real-time data integration for better situational awareness during emergencies.",
  "url": "https://drive.google.com/file/d/1PH7Is8o4HyqBWjPBwuD-p31vHLmaruRs/view?usp=drive_link"
},
{
  "_id": {
    "$oid": "6844066f5c3a3004a4515318"
  },
  "title": "Human Capital Management",
  "issuer": "Great Learning",
  "date": "August 2023",
  "description": " Presented the idea of building a software ADM: After Disaster Management, a disaster relief management.  Proposed real-time data integration for better situational awareness during emergencies.",
  "url": "https://drive.google.com/file/d/1ciLPZ1OpC9bY88TTtFJeXkgd2NXvoCqe/view"
},
{
  "_id": {
    "$oid": "684406c35c3a3004a451531a"
  },
  "title": "Sales Management",
  "issuer": "Great Learning",
  "date": "August 2023",
  "description": " Presented the idea of building a software ADM: After Disaster Management, a disaster relief management.  Proposed real-time data integration for better situational awareness during emergencies.",
  "url": "https://drive.google.com/file/d/15sY3mAywtnQdqpKhuN2XAevlrveT-rj4/view"
},
{
  "_id": {
    "$oid": "684406fd5c3a3004a451531c"
  },
  "title": "Design App",
  "issuer": "Great Learning",
  "date": "September 2023",
  "description": " Presented the idea of building a software ADM: After Disaster Management, a disaster relief management.  Proposed real-time data integration for better situational awareness during emergencies.",
  "url": "https://drive.google.com/file/d/1Bbtt7xXpS0VJkUYKVAp9GtZTo8vOmk8G/view"
},
{
  "_id": {
    "$oid": "684407265c3a3004a451531e"
  },
  "title": "Digital Skills: Web Analytics",
  "issuer": "Accenture: Future Learn",
  "date": "January 2024",
  "description": "This online course provided an insight into web analytics, its role in business and the types and techniques that can be used and why they are important in an ever-evolving digital world.",
  "url": "https://drive.google.com/file/d/1po8wkjS1aG85aJXAfRcbXWxKseAsaLTx/view"
}]

async function initializeDatabase() {
  // Check if MongoDB URI is available
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error("MONGODB_URI environment variable is not set. Please set it in .env.local file.")
    process.exit(1)
  }

  console.log("Connecting to MongoDB...")
  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("Connected to MongoDB successfully!")

    const db = client.db()

    // Drop existing collections if they exist
    const collections = ["projects", "experiences", "education", "skills", "certifications", "messages"]
    for (const collection of collections) {
      try {
        await db.collection(collection).drop()
        console.log(`Dropped existing collection: ${collection}`)
      } catch (error) {
        // Collection might not exist, which is fine
        console.log(`Collection ${collection} does not exist or could not be dropped.`)
      }
    }

    // Insert sample data
    if (projects.length > 0) {
      await db.collection("projects").insertMany(projects)
      console.log(`Inserted ${projects.length} projects`)
    }

    if (experiences.length > 0) {
      await db.collection("experiences").insertMany(experiences)
      console.log(`Inserted ${experiences.length} experiences`)
    }

    if (education.length > 0) {
      await db.collection("education").insertMany(education)
      console.log(`Inserted ${education.length} education entries`)
    }

    if (skills.length > 0) {
      await db.collection("skills").insertMany(skills)
      console.log(`Inserted ${skills.length} skills`)
    }

    if (certifications.length > 0) {
      await db.collection("certifications").insertMany(certifications)
      console.log(`Inserted ${certifications.length} certifications`)
    }

    console.log("Database initialization completed successfully!")
  } catch (error) {
    console.error("Error initializing database:", error)
  } finally {
    await client.close()
    console.log("MongoDB connection closed.")
  }
}

// Run the initialization function
initializeDatabase()
