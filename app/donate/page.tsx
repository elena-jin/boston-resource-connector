import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function DonatePage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
        <span>← Back to Home</span>
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your donation helps us continue connecting displaced individuals with vital resources and support in the Boston area.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>All donations are securely processed and tax-deductible.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Donation Amount</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Button variant="outline" className="w-full">$10</Button>
                <Button variant="outline" className="w-full">$25</Button>
                <Button variant="outline" className="w-full">$50</Button>
                <Button variant="outline" className="w-full">$100</Button>
              </div>
              <Input type="number" placeholder="Custom amount" className="mt-2" />
            </div>

            <div className="space-y-2">
              <Label>Personal Information</Label>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Payment Information</Label>
              <div className="grid gap-4">
                <Input placeholder="Card Number" />
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="MM/YY" />
                  <Input placeholder="CVC" />
                  <Input placeholder="ZIP Code" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-400">
              Complete Donation
            </Button>
          </CardFooter>
        </Card>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          Made with love by BRC team 💜
        </footer>
      </div>
    </div>
  )
} 