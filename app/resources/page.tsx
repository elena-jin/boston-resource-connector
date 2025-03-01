import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import ResourceCard from "@/components/resource-card"

export default function ResourcesPage() {
  return (
    <div className="container py-8 px-4 md:px-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground mt-1">
            Find resources available to displaced individuals and families in Boston
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search resources" className="flex-1" />
            <Button type="submit">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <ResourceCard
          title="Legal Aid Services"
          description="Free legal assistance for housing, immigration, and other civil legal issues."
          organization="Boston Legal Services"
          category="Legal"
          location="Downtown Boston"
        />
        <ResourceCard
          title="Mental Health Support"
          description="Counseling and mental health services for individuals experiencing crisis or ongoing support needs."
          organization="Boston Health Commission"
          category="Healthcare"
          location="Multiple Locations"
        />
        <ResourceCard
          title="Job Training Program"
          description="Skills training and job placement assistance for unemployed or underemployed individuals."
          organization="Boston Career Center"
          category="Employment"
          location="Roxbury"
        />
        <ResourceCard
          title="Childcare Assistance"
          description="Subsidized childcare options for working parents and those seeking employment."
          organization="Boston Children's Services"
          category="Family Support"
          location="Citywide"
        />
        <ResourceCard
          title="Transportation Assistance"
          description="Discounted transit passes and transportation support for medical appointments and job interviews."
          organization="Boston Transportation Department"
          category="Transportation"
          location="Citywide"
        />
        <ResourceCard
          title="Clothing Closet"
          description="Free clothing, shoes, and personal care items for individuals and families in need."
          organization="Community Closet Collective"
          category="Basic Needs"
          location="Dorchester"
        />
      </div>
    </div>
  )
}

