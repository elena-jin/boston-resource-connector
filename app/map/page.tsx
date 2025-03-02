'use client'

import { motion } from "framer-motion"

export default function MapPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-4"
      >
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
          Resource Map
        </h1>
        <p className="text-muted-foreground">
          Find resources and services near you in the Boston area
        </p>
        
        {/* Placeholder for map - you'll need to implement actual map functionality */}
        <div className="w-full h-[600px] bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://boston.maps.arcgis.com/apps/webappviewer/index.html?id=2bb1ba286fc943caa8cb6fd16e4d03dd&extent=-7950386.8081%2C5193761.2938%2C-7877007.2609%2C5229839.5712%2C102100"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </div>
  )
} 