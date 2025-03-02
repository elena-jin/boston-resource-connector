"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

const resources = [
  { name: "Emergency Housing Assistance", lat: 42.3601, lng: -71.0589, category: "Housing" },
  { name: "Food Pantry Network", lat: 42.3505, lng: -71.0865, category: "Food" },
  { name: "Healthcare Clinic", lat: 42.3381, lng: -71.0476, category: "Healthcare" },
  { name: "Legal Aid Services", lat: 42.3588, lng: -71.0578, category: "Legal" },
  { name: "Mental Health Support", lat: 42.3472, lng: -71.0802, category: "Healthcare" },
  { name: "Job Training Program", lat: 42.3317, lng: -71.0955, category: "Employment" },
  { name: "Childcare Assistance", lat: 42.3398, lng: -71.0892, category: "Family Support" },
  { name: "Transportation Assistance", lat: 42.3519, lng: -71.0551, category: "Transportation" },
  { name: "Clothing Closet", lat: 42.3142, lng: -71.0533, category: "Basic Needs" },
]

export default function MapPage() {
  const [selectedResource, setSelectedResource] = useState(null)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Resource Map</h1>
      <div className="bg-gray-200 h-[600px] relative rounded-lg overflow-hidden">
        {/* Fake map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>

        {/* Resource markers */}
        {resources.map((resource, index) => (
          <div
            key={index}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(resource.lng + 71.1) * 800}px`,
              top: `${(42.4 - resource.lat) * 1200}px`,
            }}
            onClick={() => setSelectedResource(resource)}
          >
            <MapPin className="text-primary w-6 h-6" />
          </div>
        ))}

        {/* Info box */}
        {selectedResource && (
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-sm">
            <h2 className="font-bold text-lg">{selectedResource.name}</h2>
            <p className="text-sm text-gray-600">{selectedResource.category}</p>
          </div>
        )}
      </div>
    </div>
  )
}

