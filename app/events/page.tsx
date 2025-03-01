import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Calendar } from "lucide-react"
import EventCard from "@/components/event-card"

export default function EventsPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground mt-1">
            Upcoming events and workshops for displaced individuals and families in Boston
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search events" className="flex-1" />
            <Button type="submit">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Calendar
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          title="Housing Resource Fair"
          description="Connect with housing providers, learn about rental assistance programs, and get help with applications."
          organization="Medford Housing Authority"
          date="June 15, 2023"
          time="10:00 AM - 2:00 PM"
          location="Boston Public Library, Copley Square"
        />
        <EventCard
          title="Community Dinner & Support Group"
          description="Join us for a free meal and connect with others in similar situations. Support resources available."
          organization="Neighbors Together"
          date="Every Wednesday"
          time="6:00 PM - 8:00 PM"
          location="Community Center, Dorchester"
        />
        <EventCard
          title="Job Skills Workshop"
          description="Free workshop covering resume building, interview skills, and job search strategies."
          organization="Boston Career Alliance"
          date="June 20, 2023"
          time="1:00 PM - 4:00 PM"
          location="Roxbury Innovation Center"
        />
        <EventCard
          title="Healthcare Enrollment Assistance"
          description="Get help enrolling in MassHealth or other healthcare programs. Bring ID and income documentation if available."
          organization="Health Access Boston"
          date="June 18, 2023"
          time="9:00 AM - 3:00 PM"
          location="East Boston Neighborhood Health Center"
        />
        <EventCard
          title="Legal Clinic: Housing Rights"
          description="Free legal advice on tenant rights, eviction prevention, and housing discrimination."
          organization="Boston Legal Aid"
          date="June 22, 2023"
          time="5:00 PM - 7:00 PM"
          location="Roxbury Community College"
        />
        <EventCard
          title="Family Resource Day"
          description="Resources for families including childcare information, school enrollment, and family support services."
          organization="Boston Family Network"
          date="June 24, 2023"
          time="11:00 AM - 3:00 PM"
          location="YMCA, Huntington Avenue"
        />
        <EventCard
          title="Mental Health Support Group"
          description="Supportive environment to discuss challenges and coping strategies. No registration required."
          organization="Boston Mental Health Coalition"
          date="Every Monday"
          time="6:30 PM - 8:00 PM"
          location="Community Health Center, Jamaica Plain"
        />
        <EventCard
          title="Immigration Resources Workshop"
          description="Information on immigration services, legal rights, and community support for immigrants."
          organization="International Institute of New England"
          date="June 25, 2023"
          time="2:00 PM - 5:00 PM"
          location="East Boston Community Center"
        />
        <EventCard
          title="Financial Literacy Workshop"
          description="Learn about budgeting, banking, credit, and financial assistance programs."
          organization="Boston Financial Empowerment Center"
          date="June 27, 2023"
          time="5:30 PM - 7:30 PM"
          location="Dudley Branch Library, Roxbury"
        />
      </div>
    </div>
  )
}

