import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"
import OrganizationCard from "@/components/organization-card"
import Link from "next/link"

export default function OrganizationsPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organizations</h1>
          <p className="text-muted-foreground mt-1">
            Organizations providing support to displaced individuals and families in Boston
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search organizations" className="flex-1" />
            <Button type="submit">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Link href="/organizations/register">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Register Organization
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <OrganizationCard
          name="Boston Refugee Support Network"
          description="Specialized support for refugees and asylum seekers, including resettlement assistance and cultural integration."
          categories={["Immigration Support", "Language Services", "Cultural Programs"]}
          location="Allston"
        />
        <OrganizationCard
          name="Family Promise Boston"
          description="Supporting families experiencing homelessness with shelter, meals, and comprehensive case management."
          categories={["Family Services", "Emergency Shelter", "Case Management"]}
          location="Dorchester"
        />
        <OrganizationCard
          name="Veterans Outreach Boston"
          description="Services specifically for displaced veterans, including housing assistance, healthcare coordination, and benefits navigation."
          categories={["Veterans Services", "Housing", "Healthcare"]}
          location="South Boston"
        />
        <OrganizationCard
          name="Youth Empowerment Coalition"
          description="Programs and resources for displaced youth and young adults, including education support and life skills development."
          categories={["Youth Services", "Education", "Mentoring"]}
          location="Roxbury"
        />
        <OrganizationCard
          name="Boston Housing Justice"
          description="Advocacy organization working to prevent displacement and promote affordable housing policies."
          categories={["Advocacy", "Legal Support", "Community Organizing"]}
          location="Jamaica Plain"
        />
      </div>
    </div>
  )
}

