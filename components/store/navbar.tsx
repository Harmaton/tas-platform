// components/storefront-navbar.tsx

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Search, User } from 'lucide-react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CartSheet } from './cart-sheet';
import Link from 'next/link';
import { SearchModal } from './search-bar';

export function StorefrontNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthenticated] = useState(false);

  // Navigation for desktop (Artsy-style)
  const desktopNavigation = [
    { name: 'Buy', href: '/buy' },
    { name: 'Artsy for Galleries', href: '/galleries' },
    { name: 'Price Database', href: '/price-database' },
    { name: 'Editorial', href: '/editorial' },
  ];

  // Navigation for mobile
  const mobileNavigation = [
    { name: 'What’s New', href: '/whats-new' },
    { name: 'Artists', href: '/artists' },
    { name: 'Artworks', href: '/artworks' },
    { name: 'Auctions', href: '/auctions' },
    { name: 'Viewing Rooms', href: '/viewing-rooms' },
    { name: 'Galleries', href: '/galleries' },
    { name: 'Fairs & Events', href: '/fairs' },
    { name: 'Shows', href: '/shows' },
    { name: 'Museums', href: '/museums' },
    { name: 'Collecting 101', href: '/collecting' },
    { name: 'Buy', href: '/buy' },
    { name: 'Artsy for Galleries', href: '/galleries' },
    { name: 'Price Database', href: '/price-database' },
    { name: 'Editorial', href: '/editorial' },
  ];

  return (
    <>
      {/* ===== STICKY NAVBAR WITH UPGRADED GLASS EFFECT ===== */}
      <header className="sticky top-0 z-40 w-full font-sans bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">

            {/* ===== DESKTOP: Logo + Search + Nav (md and up) ===== */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Logo */}
              <Link href="/" className="">
                <Image
                  src="/logo/Soko_Logo.png"
                  alt="TheArtsoko Logo"
                  width={80}
                  height={80}
                  className="h-24 w-24 object-contain"
                />
              </Link>

              {/* Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <input
                  type="text"
                  placeholder="Search by artist, gallery, style, theme, tag, etc."
                  className="w-full px-4 py-2 pl-10 pr-10 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
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
                      {mobileNavigation.map((item) => (
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

            {/* ===== RIGHT SIDE: Desktop Nav + Auth + Cart ===== */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Desktop Navigation Links */}
              {desktopNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-black hover:text-emerald-600 transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}

              {/* Login / Signup Buttons */}
              <Button
                variant="outline"
                className="border-gray-300 text-black hover:bg-gray-50 text-sm px-4 py-2 rounded-full"
                onClick={() => console.log('Login clicked')}
              >
                Log In
              </Button>
              <Button
                variant="default"
                className="bg-black text-white hover:bg-gray-800 text-sm px-4 py-2 rounded-full"
                onClick={() => console.log('Sign Up clicked')}
              >
                Sign Up
              </Button>

              {/* Join Waitlist Button */}
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-sm px-4 py-2 rounded-full"
                onClick={() => console.log('Join Waitlist clicked')}
              >
                Join Waitlist
              </Button>

              {/* Cart */}
              <CartSheet />
            </div>

            {/* ===== MOBILE: Search + User + Cart ===== */}
            <div className="flex items-center md:hidden space-x-3">
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
  );
}