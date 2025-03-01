import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import ResourceCard from "@/components/resource-card"
import EventCard from "@/components/event-card"
import OrganizationCard from "@/components/organization-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Boston</span>
            <span>Resource Connector</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
            <Link href="/events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
            <Link href="/organizations" className="text-sm font-medium hover:text-primary">
              Organizations
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Connecting Displaced People with Support in Boston
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Find resources, events, and organizations dedicated to helping those in need throughout the Boston
                  area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/resources">
                    <Button size="lg" className="w-full sm:w-auto">
                      Find Resources
                    </Button>
                  </Link>
                  <Link href="/organizations">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      For Organizations
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-lg bg-background p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted-foreground/20 rounded-lg" />
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Boston skyline"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find What You Need</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Search for resources, events, and organizations by category, location, or keyword.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl space-y-4 mt-8">
              <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
                <Input type="text" placeholder="Search resources, events, or organizations" className="flex-1" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button variant="outline" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Housing
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Community Support
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Upcoming Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Available Resources</h2>
                <p className="text-muted-foreground">Essential resources for those in need throughout Boston.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <ResourceCard
                title="Emergency Housing Assistance"
                description="Temporary housing solutions for individuals and families facing displacement."
                organization="Boston Housing Authority"
                category="Housing"
                location="Citywide"
              />
              <ResourceCard
                title="Food Pantry Network"
                description="Access to free groceries and meals through our network of food pantries."
                organization="Greater Boston Food Bank"
                category="Food"
                location="Multiple Locations"
              />
              <ResourceCard
                title="Healthcare Clinic"
                description="Free and low-cost healthcare services for uninsured and underinsured individuals."
                organization="Boston Medical Center"
                category="Healthcare"
                location="South End"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/resources">
                <Button variant="outline" className="flex items-center gap-2">
                  View All Resources
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Upcoming Events</h2>
                <p className="text-muted-foreground">
                  Join these events to connect with resources and community support.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <EventCard
                title="Housing Resource Fair"
                description="Connect with housing providers, learn about rental assistance programs, and get help with applications."
                organization="Boston Housing Network"
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
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/events">
                <Button variant="outline" className="flex items-center gap-2">
                  View All Events
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Organizations Providing Support</h2>
                <p className="text-muted-foreground">
                  These organizations are dedicated to helping displaced individuals and families in Boston.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <OrganizationCard
                name="Boston Cares"
                description="Providing emergency assistance, housing support, and community resources for displaced individuals."
                categories={["Housing", "Financial Assistance", "Case Management"]}
                location="Downtown Boston"
              />
              <OrganizationCard
                name="Neighbors United"
                description="Community-based organization focused on building support networks and providing essential resources."
                categories={["Community Support", "Food Assistance", "Clothing"]}
                location="Jamaica Plain"
              />
              <OrganizationCard
                name="New Beginnings Coalition"
                description="Helping families and individuals transition to stable housing and self-sufficiency."
                categories={["Housing", "Job Training", "Education"]}
                location="Roxbury"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/organizations">
                <Button variant="outline" className="flex items-center gap-2">
                  View All Organizations
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Are You an Organization Looking to Help?
                </h2>
                <p className="md:text-xl">
                  Register your organization to list your resources, post events, and connect with those in need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/organizations/register">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Register Your Organization
                    </Button>
                  </Link>
                  <Link href="/organizations/learn-more">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] overflow-hidden rounded-lg bg-background/10 p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/5 rounded-lg" />
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Volunteers helping at a community event"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 md:h-24 md:py-0">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-2">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-primary">Boston</span>
              <span>Resource Connector</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Connecting displaced people with support services in the Boston area.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

