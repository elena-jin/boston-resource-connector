"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function OrganizationRegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Registration submitted",
        description: "Your organization registration has been submitted for review. We'll contact you soon.",
      })
    }, 1500)
  }

  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Register Your Organization</h1>
        <p className="text-muted-foreground mb-8">
          Join our network of organizations helping displaced individuals and families in the Boston area. Once
          registered, you'll be able to list your resources and events on our platform.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Organization Information</CardTitle>
            <CardDescription>
              Please provide details about your organization. All fields are required unless marked optional.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input id="org-name" placeholder="Enter your organization's name" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-website">Website (Optional)</Label>
                    <Input id="org-website" placeholder="https://www.example.org" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-address">Address</Label>
                    <Input id="org-address" placeholder="Street address" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="org-city">City</Label>
                      <Input id="org-city" placeholder="Boston" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-zip">ZIP Code</Label>
                      <Input id="org-zip" placeholder="02108" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org-description">Organization Description</Label>
                    <Textarea
                      id="org-description"
                      placeholder="Describe your organization's mission and the services you provide..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Service Categories</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="housing" />
                        <Label htmlFor="housing" className="font-normal">
                          Housing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="food" />
                        <Label htmlFor="food" className="font-normal">
                          Food Assistance
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="healthcare" />
                        <Label htmlFor="healthcare" className="font-normal">
                          Healthcare
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="legal" />
                        <Label htmlFor="legal" className="font-normal">
                          Legal Services
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="employment" />
                        <Label htmlFor="employment" className="font-normal">
                          Employment
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="education" />
                        <Label htmlFor="education" className="font-normal">
                          Education
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mental-health" />
                        <Label htmlFor="mental-health" className="font-normal">
                          Mental Health
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="other" />
                        <Label htmlFor="other" className="font-normal">
                          Other
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Primary Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name</Label>
                      <Input id="contact-name" placeholder="Full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-title">Title/Position</Label>
                      <Input id="contact-title" placeholder="e.g. Program Director" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" placeholder="email@example.org" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input id="contact-phone" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="org-type">Organization Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nonprofit">Nonprofit 501(c)(3)</SelectItem>
                          <SelectItem value="government">Government Agency</SelectItem>
                          <SelectItem value="community">Community Group</SelectItem>
                          <SelectItem value="religious">Religious Organization</SelectItem>
                          <SelectItem value="educational">Educational Institution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referral">How did you hear about us? (Optional)</Label>
                      <Input id="referral" placeholder="e.g. Partner organization, social media, etc." />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-4">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="font-normal text-sm">
                      I agree to the{" "}
                      <a href="/terms" className="text-primary hover:underline">
                        terms of service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        privacy policy
                      </a>
                      .
                    </Label>
                  </div>
                </div>
              </div>

              <CardFooter className="px-0 pb-0">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}

