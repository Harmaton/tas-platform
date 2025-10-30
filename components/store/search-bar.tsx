// components/search-modal.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("")
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  // Mock data — replace with real API later
  const mockArtists = [
    { id: 1, name: "Wangechi Mutu", image: "/placeholder.jpg" },
    { id: 2, name: "El Anatsui", image: "/placeholder.jpg" },
  ]
  const mockArtworks = [
    { id: 1, title: "Cosmic Drift", artist: "Aisha Nduku", image: "/placeholder.jpg" },
    { id: 2, title: "Urban Echoes", artist: "Kofi Mensah", image: "/placeholder.jpg" },
  ]

  const filteredArtists = mockArtists.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase())
  )
  const filteredArtworks = mockArtworks.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.artist.toLowerCase().includes(query.toLowerCase())
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        ref={modalRef}
        className="relative z-50 w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search artists, artworks, stories..."
              className="pl-10 pr-10 py-3 w-full rounded-full border border-gray-300 text-black"
            />
            {query && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-transparent text-gray-500"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 hover:text-black"
              onClick={onClose}
            >
              ESC
            </Button>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query ? (
            <>
              {filteredArtists.length > 0 && (
                <section className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Artists</h3>
                  <div className="space-y-2">
                    {filteredArtists.map(artist => (
                      <div key={artist.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <Image src={artist.image} alt={artist.name} width={32} height={32} className="rounded-full object-cover" />
                        <span className="text-black">{artist.name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {filteredArtworks.length > 0 && (
                <section>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Artworks</h3>
                  <div className="space-y-3">
                    {filteredArtworks.map(art => (
                      <div key={art.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <Image src={art.image} alt={art.title} width={40} height={40} className="rounded object-cover" />
                        <div>
                          <p className="text-black font-medium">{art.title}</p>
                          <p className="text-gray-600 text-sm">{art.artist}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {(filteredArtists.length === 0 && filteredArtworks.length === 0) && (
                <p className="text-gray-500 text-center py-6">No results found.</p>
              )}
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              Start typing to search artists and artworks...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}