import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import Link from "next/link"

interface OrganizationCardProps {
  name: string
  description: string
  categories: string[]
  location: string
}

export default function OrganizationCard({ name, description, categories, location }: OrganizationCardProps) {
  return (
    <Card className="h-full flex flex-col">
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

