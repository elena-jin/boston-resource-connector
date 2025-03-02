'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"
import OrganizationCard from "@/components/organization-card"
import Link from "next/link"
import { motion } from "framer-motion"

export default function OrganizationsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Organizations</h1>
          <p className="text-muted-foreground mt-1">
            Organizations providing support to displaced individuals and families in Boston
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search organizations" className="flex-1" />
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline" className="flex items-center gap-2 hover:bg-purple-50">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Link href="/organizations/register">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500 flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Register Organization
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={item}>
          <OrganizationCard
            name="Boston Housing Authority"
            description="Providing emergency assistance, housing support, and community resources for displaced individuals."
            categories={["Housing", "Financial Assistance", "Case Management"]}
            location="Downtown Boston"
          />
        </motion.div>
        <motion.div variants={item}>
          <OrganizationCard
            name="Neighbors United"
            description="Community-based organization focused on building support networks and providing essential resources."
            categories={["Community Support", "Food Assistance", "Clothing"]}
            location="Jamaica Plain"
          />
        </motion.div>
        <motion.div variants={item}>
          <OrganizationCard
            name="New Beginnings Coalition"
            description="Helping families and individuals transition to stable housing and self-sufficiency."
            categories={["Housing", "Job Training", "Education"]}
            location="Roxbury"
          />
        </motion.div>
        <motion.div variants={item}>
          <OrganizationCard
            name="Boston Refugee Support Network"
            description="Specialized support for refugees and asylum seekers, including resettlement assistance and cultural integration."
            categories={["Immigration Support", "Language Services", "Cultural Programs"]}
            location="Allston"
          />
        </motion.div>
        <motion.div variants={item}>
          <OrganizationCard
            name="Family Promise Boston"
            description="Supporting families experiencing homelessness with shelter, meals, and comprehensive case management."
            categories={["Family Services", "Emergency Shelter", "Case Management"]}
            location="Dorchester"
          />
        </motion.div>
        <motion.div variants={item}>
          <OrganizationCard
            name="Veterans Outreach Boston"
            description="Services specifically for displaced veterans, including housing assistance, healthcare coordination, and benefits navigation."
            categories={["Veterans Services", "Housing", "Healthcare"]}
            location="South Boston"
          />
        </motion.div>
        <motion.div variants={item}>
          <OrganizationCard
            name="Youth Empowerment Coalition"
            description="Programs and resources for displaced youth and young adults, including education support and life skills development."
            categories={["Youth Services", "Education", "Mentoring"]}
            location="Roxbury"
          />
        </motion.div>
        <motion.div variants={item}>
          <OrganizationCard
            name="Boston Housing Justice"
            description="Advocacy organization working to prevent displacement and promote affordable housing policies."
            categories={["Advocacy", "Legal Support", "Community Organizing"]}
            location="Jamaica Plain"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

