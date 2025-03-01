import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

interface EventCardProps {
  title: string
  description: string
  organization: string
  date: string
  time: string
  location: string
}

export default function EventCard({ title, description, organization, date, time, location }: EventCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
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

