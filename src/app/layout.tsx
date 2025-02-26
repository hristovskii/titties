import type React from "react"
import "./globals.css"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "TTS",
  description: "text to speech",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

