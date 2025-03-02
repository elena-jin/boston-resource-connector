import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ResourceCardProps {
  title: string
  description: string
  organization: string
  category: string
  location: string
  url?: string
}

export default function ResourceCard({ title, description, organization, category, location, url }: ResourceCardProps) {
  // Curated image collections for each resource type
  const resourceImages: { [key: string]: string[] } = {
    "Emergency Housing Assistance": [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    ],
    "Food Pantry Network": [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=800&q=80",
      "https://images.unsplash.com/photo-1591189863430-ab87e120f312?w=800&q=80"
    ],
    "Healthcare Clinic": [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80"
    ],
    "Legal Aid Services": [
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80"
    ],
    "Mental Health Support": [
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=80",
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
    ],
    "Job Training Program": [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      "https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&q=80"
    ],
    "Childcare Assistance": [
      "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80"
    ],
    "Transportation Assistance": [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
      "https://images.unsplash.com/photo-1556122071-e404cb6f31c2?w=800&q=80"
    ],
    "Clothing Closet": [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    ]
  }

  // Get random image from the collection for this resource type
  const images = resourceImages[title] || resourceImages["Emergency Housing Assistance"]
  const randomImage = images[Math.floor(Math.random() * images.length)]

  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={randomImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <Badge className="absolute top-4 right-4 z-10">{category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{description}</p>
        <p className="font-medium">{organization}</p>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm flex items-center gap-1"
          >
            View Details
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : (
          <Link
            href={`/resources/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
            className="text-primary hover:underline text-sm"
          >
            View Details
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

