import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface OrganizationCardProps {
  name: string
  description: string
  categories: string[]
  location: string
  image?: string
}

// Curated image collections for different organization types
const organizationImages: { [key: string]: string[] } = {
  "Housing": [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80"
  ],
  "Food Bank": [
    "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=800&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&q=80"
  ],
  "Healthcare": [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80"
  ],
  "Education": [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
  ],
  "Community": [
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?w=800&q=80",
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
  ],
  "Legal": [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80"
  ]
}

export default function OrganizationCard({ name, description, categories, location, image }: OrganizationCardProps) {
  // Use provided image or get a random one based on organization categories
  const defaultImages = organizationImages["Community"]
  const categoryMatch = categories.find(category => 
    Object.keys(organizationImages).some(key => 
      category.toLowerCase().includes(key.toLowerCase())
    )
  )
  const images = categoryMatch ? 
    organizationImages[Object.keys(organizationImages).find(key => 
      categoryMatch.toLowerCase().includes(key.toLowerCase())
    ) as string] : 
    defaultImages
  const randomImage = image || images[Math.floor(Math.random() * images.length)]

  return (
    <Card className="h-full flex flex-col group">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={randomImage}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/organizations/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`}
          className="text-primary hover:underline text-sm"
        >
          View Organization
        </Link>
      </CardFooter>
    </Card>
  )
}

