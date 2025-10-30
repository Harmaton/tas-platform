// components/storefront-navbar.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Search, User } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CartSheet } from "./cart-sheet"
import Link from "next/link"
import { SearchModal } from "./search-bar"

export function StorefrontNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAuthenticated] = useState(false)

  const navigation = [
    { name: "Discover", href: "/discover" },
    { name: "Start Selling", href: "/sell" },
    { name: "Storytelling", href: "/storytelling" },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 w-full font-sans border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">

            {/* ===== DESKTOP: Logo + Nav (md and up) ===== */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="">
                <Image 
                  src="/logo/Soko_Logo.png"
                  alt="TheArtsoko Logo"
                  width={80}
                  height={80}
                  className="h-24 w-24 object-contain"
                />
              </Link>
              <nav className="flex space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-black hover:text-green-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ===== MOBILE: Hamburger + Logo (only on small screens) ===== */}
            <div className="flex items-center md:hidden space-x-3">
              {/* Hamburger Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-black hover:bg-transparent">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[320px] bg-white p-0">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-center items-center py-6 border-b">
                      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                      <Image 
                        src="/logo/Soko_Logo.png"
                        alt="TheArtsoko Logo"
                        width={60}
                        height={60}
                        className="h-18 w-18 object-contain"
                      />
                    </div>
                    <nav className="flex flex-col space-y-1 mt-6 px-3">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-base font-medium text-black py-3 px-4 rounded-lg hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Logo next to hamburger on mobile */}
              <Link href="/" className="">
                <Image 
                  src="/logo/Soko_Logo.png"
                  alt="TheArtsoko Logo"
                  width={80}
                  height={80}
                  className="h-16 w-24 object-contain"
                />
              </Link>
            </div>

            {/* ===== RIGHT SIDE: Search + Auth + Cart (same on all screens) ===== */}
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:bg-transparent"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:bg-transparent"
                onClick={() => console.log(isAuthenticated ? "Logout" : "Login")}
              >
                <User className="h-6 w-6" />
              </Button>

              <CartSheet />
            </div>
          </div>
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}