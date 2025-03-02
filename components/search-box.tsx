'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

export function SearchBox() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query.trim() }),
      })

      if (!response.ok) throw new Error("Search failed")

      const data = await response.json()
      setResults(data.results)
    } catch (error) {
      toast.error("Failed to search. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2 mx-auto">
        <Input
          type="text"
          placeholder="Search resources, events, or organizations"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading}>
          <Search className="h-4 w-4 mr-2" />
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </form>

      {results.length > 0 && (
        <div className="space-y-4 mt-6">
          {results.map((result, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{result.title}</h3>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">{result.organization}</span>
                    {result.date && ` • ${result.date}`}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground capitalize">{result.type}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 