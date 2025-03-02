import { NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

async function scrapeEvents() {
  const events = []
  
  try {
    // Example: Scraping from Boston Calendar
    const response = await fetch('https://www.thebostoncalendar.com/')
    const html = await response.text()
    const $ = cheerio.load(html)

    // Adjust selectors based on the actual website structure
    $('.event-item').each((i, element) => {
      const title = $(element).find('.event-title').text().trim()
      const date = $(element).find('.event-date').text().trim()
      const location = $(element).find('.event-location').text().trim()
      
      events.push({
        title,
        date,
        location,
        source: 'Boston Calendar'
      })
    })

    // Add more sources here
    // - City of Boston events
    // - Eventbrite (requires API key)
    // - Facebook events
    // etc.

  } catch (error) {
    console.error('Scraping error:', error)
  }

  return events
}

export async function GET() {
  try {
    const events = await scrapeEvents()
    return NextResponse.json({ events })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to scrape events' },
      { status: 500 }
    )
  }
} 