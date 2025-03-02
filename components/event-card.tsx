import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Home, Briefcase, Heart, GraduationCap, Scale, Users, Brain, Globe, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const categoryIcons = {
  "Housing": Home,
  "Community": Users,
  "Employment": Briefcase,
  "Healthcare": Heart,
  "Legal": Scale,
  "Education": GraduationCap,
  "Mental Health": Brain,
  "Immigration": Globe,
  "Financial": DollarSign
}

interface EventCardProps {
  title: string
  description: string
  organization: string
  date: string
  time: string
  location: string
  image?: string
  category: string
}

// Curated image collections for different event types
const eventImages: { [key: string]: string[] } = {
  "Community Meeting": [
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
  ],
  "Food Distribution": [
    "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80",
    "https://images.unsplash.com/photo-1615897570286-da936a5a6513?w=800&q=80",
    "https://images.unsplash.com/photo-1593113616828-6f22bca04804?w=800&q=80"
  ],
  "Health Fair": [
    "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
  ],
  "Job Fair": [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
  ],
  "Workshop": [
    "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
  ]
}

export default function EventCard({ title, description, organization, date, time, location, image, category }: EventCardProps) {
  const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons] || Users

  // Use provided image or get a random one based on event type
  const defaultImages = eventImages["Community Meeting"]
  const images = Object.entries(eventImages).find(([key]) => title.toLowerCase().includes(key.toLowerCase()))?.[1] || defaultImages
  const randomImage = image || images[Math.floor(Math.random() * images.length)]

  return (
    <Card className="h-full flex flex-col group">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={randomImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            <CategoryIcon className="h-3 w-3" />
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{description}</p>
        <p className="font-medium">{organization}</p>
        <div className="grid gap-2 mt-4">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/events/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
          className="text-primary hover:underline text-sm"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}

