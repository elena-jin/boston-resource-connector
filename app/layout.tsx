import type { Metadata } from 'next'
import './globals.css'
import { Calendar, Users, MapPin, Globe, Map } from "lucide-react"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { ToastProvider } from "@/components/ui/toast"

export const metadata: Metadata = {
  title: 'Boston Resource Connector',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ToastProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Boston</span>
                  <span className="text-foreground">Resource Connector</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                  <Link href="/resources" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Resources
                  </Link>
                  <Link href="/map" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                    <Map className="h-4 w-4" />
                    Map
                  </Link>
                  <Link href="/events" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Events
                  </Link>
                  <Link href="/organizations" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Organizations
                  </Link>
                  <Link 
                    href="https://v0-hacking-injustice-solutions.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium hover:text-primary flex items-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Translator
                  </Link>
                  <Link href="/about" className="text-sm font-medium hover:text-primary">
                    About
                  </Link>
                  <div className="flex items-center gap-4 ml-4">
                    <ThemeToggle />
                    <Link href="/login">
                      <Button variant="outline" className="bg-background hover:bg-muted">Login</Button>
                    </Link>
                    <Link href="/register">
                      <Button variant="outline" className="bg-background text-foreground hover:bg-muted">Register</Button>
                    </Link>
                    <Link href="/donate">
                      <Button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500">
                        Support Us
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
          </ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
