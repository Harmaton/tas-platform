"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Discover", href: "/discover" },
    { name: "Start Selling", href: "/sell" },
    { name: "Storytelling", href: "/storytelling" },
  ]

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ]

  return (
    <footer 
      className="relative bg-white border-t border-gray-200 pt-8 overflow-hidden"
      style={{
        backgroundImage: `url(/illustrations/london_skyline.png)`,
        backgroundSize: '100% auto', // ← Key fix: spans full width, scales height
        backgroundPosition: 'center bottom', // stays at bottom
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional: Very subtle overlay to ensure contrast */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-700 hover:text-black transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-700 hover:text-black transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-700 hover:text-black transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="md:self-end">
            <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-black">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-black">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-black">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-black">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm text-gray-600 relative z-10">
        © {new Date().getFullYear()} The Art Soko. All rights reserved.
      </div>
    </footer>
  )
}