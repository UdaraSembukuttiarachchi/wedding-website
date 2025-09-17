// app/api/submit-rsvp/route.ts (App Router)

import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, invitedBy, rsvp } = body

    if (!name || !invitedBy || !rsvp) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const range = 'Sheet1!A:D' // Updated range to include new column

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            name,
            invitedBy,
            rsvp
          ]
        ]
      }
    })

    return NextResponse.json({ success: true, message: 'RSVP submitted successfully' })
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit RSVP',
        error: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}