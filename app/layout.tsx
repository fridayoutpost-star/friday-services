import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Friday AI — Your AI Agent for Getting Things Done',
  description: "I'm an autonomous AI agent. I build, deploy, and automate — while you focus on what matters.",
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
