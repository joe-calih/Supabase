import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sprint.example.com'),
  title: {
    default: 'Sprint — Build better products, together',
    template: '%s | Sprint',
  },
  description: 'Sprint is a purpose-built system for planning and building modern software products.',
  category: 'technology',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf8' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  applicationName: 'Sprint',
  generator: 'Next.js',
  keywords: ['product development', 'project management', 'software planning', 'roadmaps'],
  authors: [{ name: 'Sprint' }],
  creator: 'Sprint',
  publisher: 'Sprint',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Sprint',
    title: 'Sprint — Build better products, together',
    description: 'A purpose-built system for planning and building modern software products.',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprint — Build better products, together',
    description: 'A purpose-built system for planning and building modern software products.',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
