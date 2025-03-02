'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import ResourceCard from "@/components/resource-card"
import { motion } from "framer-motion"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container py-12 px-4 md:px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Find resources available to displaced individuals and families in Boston
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-4"
          >
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search resources" className="flex-1" />
              <Button type="submit" className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500">
                <Search className="h-4 w-4" />
                <span className="ml-2">Search</span>
              </Button>
            </div>
            <Button variant="outline" className="flex items-center gap-2 hover:bg-purple-50">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Emergency Housing Assistance",
              description: "Temporary housing solutions for individuals and families facing displacement.",
              organization: "Boston Housing Authority",
              category: "Housing",
              location: "Citywide",
              url: "https://bostonhousing.org/en/Home.aspx",
              image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
            },
            {
              title: "Food Pantry Network",
              description: "Access to free groceries and meals through our network of food pantries.",
              organization: "Greater Boston Food Bank",
              category: "Food",
              location: "Multiple Locations",
              image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80"
            },
            {
              title: "Healthcare Clinic",
              description: "Free and low-cost healthcare services for uninsured and underinsured individuals.",
              organization: "Boston Medical Center",
              category: "Healthcare",
              location: "South End",
              image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
            },
            {
              title: "Legal Aid Services",
              description: "Free legal assistance for housing, immigration, and other civil legal issues.",
              organization: "Boston Legal Services",
              category: "Legal",
              location: "Downtown Boston",
              image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80"
            },
            {
              title: "Mental Health Support",
              description: "Counseling and mental health services for individuals experiencing crisis or ongoing support needs.",
              organization: "Boston Health Commission",
              category: "Healthcare",
              location: "Multiple Locations",
              image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
            },
            {
              title: "Job Training Program",
              description: "Skills training and job placement assistance for unemployed or underemployed individuals.",
              organization: "Boston Career Center",
              category: "Employment",
              location: "Roxbury",
              image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
            },
            {
              title: "Childcare Assistance",
              description: "Subsidized childcare options for working parents and those seeking employment.",
              organization: "Boston Children's Services",
              category: "Family Support",
              location: "Citywide",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
            },
            {
              title: "Transportation Assistance",
              description: "Discounted transit passes and transportation support for medical appointments and job interviews.",
              organization: "Boston Transportation Department",
              category: "Transportation",
              location: "Citywide",
              image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
            },
            {
              title: "Clothing Closet",
              description: "Free clothing, shoes, and personal care items for individuals and families in need.",
              organization: "Community Closet Collective",
              category: "Basic Needs",
              location: "Dorchester",
              image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
            }
          ].map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <ResourceCard {...resource} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

