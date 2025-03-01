import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"

interface ResourceCardProps {
  title: string
  description: string
  organization: string
  category: string
  location: string
}

export default function ResourceCard({ title, description, organization, category, location }: ResourceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge>{category}</Badge>
        </div>
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
        <Link
          href={`/resources/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}
          className="text-primary hover:underline text-sm"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}

