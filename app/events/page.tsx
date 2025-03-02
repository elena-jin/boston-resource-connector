'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Calendar, Home, Briefcase, Heart, GraduationCap, Scale, Users, Brain, Globe, DollarSign } from "lucide-react"
import EventCard from "@/components/event-card"
import { motion } from "framer-motion"
import { useState } from "react"

// Define categories with their icons
const categories = [
  { name: "Housing", icon: Home },
  { name: "Community", icon: Users },
  { name: "Employment", icon: Briefcase },
  { name: "Healthcare", icon: Heart },
  { name: "Legal", icon: Scale },
  { name: "Education", icon: GraduationCap },
  { name: "Mental Health", icon: Brain },
  { name: "Immigration", icon: Globe },
  { name: "Financial", icon: DollarSign }
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

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

  const events = [
    {
      title: "Housing Resource Fair",
      description: "Connect with housing providers, learn about rental assistance programs, and get help with applications.",
      organization: "Medford Housing Authority",
      date: "June 15, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Boston Public Library, Copley Square",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
      category: "Housing"
    },
    {
      title: "Free Community Dinner",
      description: "Join us for a free meal and connect with others in similar situations. Support resources available.",
      organization: "Burlington Presbyterian Church",
      date: "Every Last Wednesday of the Month",
      time: "5:30 PM - 7:00 PM",
      location: "The Presbyterian Church, Burlington",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      category: "Community"
    },
    {
      title: "Job Skills Workshop",
      description: "Free workshop covering resume building, interview skills, and job search strategies.",
      organization: "Boston Career Alliance",
      date: "June 20, 2023",
      time: "1:00 PM - 4:00 PM",
      location: "Roxbury Innovation Center",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      category: "Employment"
    },
    {
      title: "Healthcare Enrollment Assistance",
      description: "Get help enrolling in MassHealth or other healthcare programs. Bring ID and income documentation if available.",
      organization: "Health Access Boston",
      date: "June 18, 2023",
      time: "9:00 AM - 3:00 PM",
      location: "East Boston Neighborhood Health Center",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80",
      category: "Healthcare"
    },
    {
      title: "Legal Clinic: Housing Rights",
      description: "Free legal advice on tenant rights, eviction prevention, and housing discrimination.",
      organization: "Boston Legal Aid",
      date: "June 22, 2023",
      time: "5:00 PM - 7:00 PM",
      location: "Roxbury Community College",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      category: "Legal"
    },
    {
      title: "Family Resource Day",
      description: "Resources for families including childcare information, school enrollment, and family support services.",
      organization: "Boston Family Network",
      date: "June 24, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "YMCA, Huntington Avenue",
      image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=800&q=80",
      category: "Education"
    },
    {
      title: "Mental Health Support Group",
      description: "Supportive environment to discuss challenges and coping strategies. No registration required.",
      organization: "Boston Mental Health Coalition",
      date: "Every Monday",
      time: "6:30 PM - 8:00 PM",
      location: "Community Health Center, Jamaica Plain",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "Mental Health"
    },
    {
      title: "Immigration Resources Workshop",
      description: "Information on immigration services, legal rights, and community support for immigrants.",
      organization: "International Institute of New England",
      date: "June 25, 2023",
      time: "2:00 PM - 5:00 PM",
      location: "East Boston Community Center",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80",
      category: "Immigration"
    },
    {
      title: "Financial Literacy Workshop",
      description: "Learn about budgeting, banking, credit, and financial assistance programs.",
      organization: "Boston Financial Empowerment Center",
      date: "June 27, 2023",
      time: "5:30 PM - 7:30 PM",
      location: "Dudley Branch Library, Roxbury",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      category: "Financial"
    }
  ]

  const filteredEvents = events.filter(event => {
    const matchesCategory = !selectedCategory || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="container py-8 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Events</h1>
          <p className="text-muted-foreground mt-1">
            Upcoming events and workshops for displaced individuals and families in Boston
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input 
              type="text" 
              placeholder="Search events" 
              className="flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline" className="flex items-center gap-2 hover:bg-purple-50">
            <Calendar className="h-4 w-4" />
            Calendar
          </Button>
        </div>
      </motion.div>

      {/* Category filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                selectedCategory === category.name 
                ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500" 
                : "hover:bg-purple-50"
              }`}
              onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
            >
              <Icon className="h-4 w-4" />
              {category.name}
            </Button>
          )
        })}
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredEvents.map((event, index) => (
          <motion.div key={index} variants={item}>
            <EventCard {...event} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

