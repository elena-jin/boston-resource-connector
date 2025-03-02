import { NextResponse } from 'next/server'
import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    // Use OpenAI to enhance the search query
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that helps refugees and displaced people find resources in Boston. Convert the user's query into a structured search that can help find relevant resources, events, or organizations."
        },
        {
          role: "user",
          content: query
        }
      ],
      model: "gpt-3.5-turbo",
    })

    const enhancedQuery = completion.choices[0].message.content

    // Here you would typically search your database with the enhanced query
    // For now, we'll return a mock response
    const mockResults = [
      {
        type: "resource",
        title: "Emergency Housing Assistance",
        organization: "Boston Housing Authority",
        description: "Temporary housing solutions for individuals and families facing displacement."
      },
      {
        type: "event",
        title: "Community Support Workshop",
        organization: "Boston Cares",
        date: "Next Tuesday",
        description: "Learn about available community resources and support services."
      }
    ]

    return NextResponse.json({
      results: mockResults,
      enhancedQuery
    })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Failed to process search' },
      { status: 500 }
    )
  }
} 