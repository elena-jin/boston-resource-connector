'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 md:px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link 
          href="/" 
          className="inline-block mb-8 text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Home
        </Link>

        <motion.h1 
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About Us
        </motion.h1>
        
        <motion.div 
          className="prose max-w-none mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-muted-foreground">
            Boston Resource Connector is dedicated to helping displaced individuals and families find the
            resources, support, and community they need in the Boston area. Our platform connects people
            with organizations, events, and resources that can help them rebuild their lives.
          </p>
        </motion.div>

        <motion.h2 
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">Elena Jin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">Lead Developer</p>
                <p className="text-sm text-center mt-2">
                  Tufts Undergrad
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">Nene</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">Lead Translator</p>
                <p className="text-sm text-center mt-2">
                  Boston University Grad Student
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">Maria Jose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">Lead Transportation</p>
                <p className="text-sm text-center mt-2">
                  Wentworth Institute of Technology Exchange Student
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground">
            To create a more connected and supportive Boston community by bridging the gap between
            displaced individuals and the resources they need to thrive.
          </p>
        </motion.div>

        <motion.footer 
          className="text-center mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Made with love by BRC team 💜
        </motion.footer>
      </motion.div>
    </div>
  )
}