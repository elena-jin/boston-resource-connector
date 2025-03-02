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
import { useToast } from "@/components/ui/use-toast"

interface FormData {
  orgName: string
  website: string
  address: string
  city: string
  zipCode: string
  description: string
  categories: {
    housing: boolean
    food: boolean
    healthcare: boolean
    legal: boolean
    employment: boolean
    education: boolean
    mentalHealth: boolean
    other: boolean
  }
  contactName: string
  contactTitle: string
  contactEmail: string
  contactPhone: string
  orgType: string
  referral: string
  termsAccepted: boolean
}

export function OrganizationRegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    orgName: "",
    website: "",
    address: "",
    city: "",
    zipCode: "",
    description: "",
    categories: {
      housing: false,
      food: false,
      healthcare: false,
      legal: false,
      employment: false,
      education: false,
      mentalHealth: false,
      other: false
    },
    contactName: "",
    contactTitle: "",
    contactEmail: "",
    contactPhone: "",
    orgType: "",
    referral: "",
    termsAccepted: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id.replace('org-', '').replace('contact-', '')]: value
    }))
  }

  const handleCategoryChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      categories: {
        ...prev.categories,
        [id]: !prev.categories[id as keyof typeof prev.categories]
      }
    }))
  }

  const handleOrgTypeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      orgType: value
    }))
  }

  const handleTermsChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      termsAccepted: checked
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.orgName) {
      toast({
        title: "Organization name is required",
        description: "Please enter your organization's name",
        variant: "destructive"
      })
      return false
    }
    if (!formData.address || !formData.city || !formData.zipCode) {
      toast({
        title: "Address information is required",
        description: "Please enter your complete address",
        variant: "destructive"
      })
      return false
    }
    if (!formData.description) {
      toast({
        title: "Description is required",
        description: "Please provide a description of your organization",
        variant: "destructive"
      })
      return false
    }
    if (!Object.values(formData.categories).some(v => v)) {
      toast({
        title: "Service category is required",
        description: "Please select at least one service category",
        variant: "destructive"
      })
      return false
    }
    if (!formData.contactName || !formData.contactEmail || !formData.contactPhone) {
      toast({
        title: "Contact information is required",
        description: "Please provide complete contact information",
        variant: "destructive"
      })
      return false
    }
    if (!formData.orgType) {
      toast({
        title: "Organization type is required",
        description: "Please select your organization type",
        variant: "destructive"
      })
      return false
    }
    if (!formData.termsAccepted) {
      toast({
        title: "Terms acceptance is required",
        description: "Please accept the terms of service and privacy policy",
        variant: "destructive"
      })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would typically make an API call to submit the form data
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      toast({
        title: "Registration submitted successfully",
        description: "Your organization registration has been submitted for review. We'll contact you soon.",
      })

      // Reset form
      setFormData({
        orgName: "",
        website: "",
        address: "",
        city: "",
        zipCode: "",
        description: "",
        categories: {
          housing: false,
          food: false,
          healthcare: false,
          legal: false,
          employment: false,
          education: false,
          mentalHealth: false,
          other: false
        },
        contactName: "",
        contactTitle: "",
        contactEmail: "",
        contactPhone: "",
        orgType: "",
        referral: "",
        termsAccepted: false
      })
    } catch (error) {
      toast({
        title: "Error submitting registration",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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
                <Input 
                  id="org-name" 
                  placeholder="Enter your organization's name" 
                  value={formData.orgName}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-website">Website (Optional)</Label>
                <Input 
                  id="org-website" 
                  placeholder="https://www.example.org"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-address">Address</Label>
                <Input 
                  id="org-address" 
                  placeholder="Street address" 
                  value={formData.address}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="org-city">City</Label>
                  <Input 
                    id="org-city" 
                    placeholder="Boston" 
                    value={formData.city}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-zipCode">ZIP Code</Label>
                  <Input 
                    id="org-zipCode" 
                    placeholder="02108" 
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-description">Organization Description</Label>
                <Textarea
                  id="org-description"
                  placeholder="Describe your organization's mission and the services you provide..."
                  className="min-h-[120px]"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Service Categories</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="housing" 
                      checked={formData.categories.housing}
                      onCheckedChange={() => handleCategoryChange('housing')}
                    />
                    <Label htmlFor="housing" className="font-normal">
                      Housing
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="food" 
                      checked={formData.categories.food}
                      onCheckedChange={() => handleCategoryChange('food')}
                    />
                    <Label htmlFor="food" className="font-normal">
                      Food Assistance
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="healthcare" 
                      checked={formData.categories.healthcare}
                      onCheckedChange={() => handleCategoryChange('healthcare')}
                    />
                    <Label htmlFor="healthcare" className="font-normal">
                      Healthcare
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="legal" 
                      checked={formData.categories.legal}
                      onCheckedChange={() => handleCategoryChange('legal')}
                    />
                    <Label htmlFor="legal" className="font-normal">
                      Legal Services
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="employment" 
                      checked={formData.categories.employment}
                      onCheckedChange={() => handleCategoryChange('employment')}
                    />
                    <Label htmlFor="employment" className="font-normal">
                      Employment
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="education" 
                      checked={formData.categories.education}
                      onCheckedChange={() => handleCategoryChange('education')}
                    />
                    <Label htmlFor="education" className="font-normal">
                      Education
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="mentalHealth" 
                      checked={formData.categories.mentalHealth}
                      onCheckedChange={() => handleCategoryChange('mentalHealth')}
                    />
                    <Label htmlFor="mentalHealth" className="font-normal">
                      Mental Health
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="other" 
                      checked={formData.categories.other}
                      onCheckedChange={() => handleCategoryChange('other')}
                    />
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
                  <Input 
                    id="contact-name" 
                    placeholder="Full name" 
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-title">Title/Position</Label>
                  <Input 
                    id="contact-title" 
                    placeholder="e.g. Program Director" 
                    value={formData.contactTitle}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input 
                    id="contact-email" 
                    type="email" 
                    placeholder="email@example.org" 
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input 
                    id="contact-phone" 
                    placeholder="(555) 123-4567" 
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-lg font-medium mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="org-type">Organization Type</Label>
                  <Select onValueChange={handleOrgTypeChange} value={formData.orgType}>
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
                  <Input 
                    id="referral" 
                    placeholder="e.g. Partner organization, social media, etc."
                    value={formData.referral}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2 pt-4">
              <Checkbox 
                id="terms" 
                checked={formData.termsAccepted}
                onCheckedChange={handleTermsChange}
                required 
              />
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
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
} 