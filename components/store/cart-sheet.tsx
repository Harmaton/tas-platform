// components/cart-sheet.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, X } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function CartSheet() {
  const [isOpen, setIsOpen] = useState(false)
  const cartItems = [
    { id: 1, name: "Abstract Painting", price: 299, quantity: 1, image: "/placeholder.jpg" },
  ]
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-transparent text-black">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-white p-0">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <SheetTitle className="text-lg font-semibold text-black">Your Cart</SheetTitle>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 py-3 border-b">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-black">{item.name}</p>
                    <p className="text-xs text-gray-600">${item.price} × {item.quantity}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between mb-4">
                <span className="font-medium text-black">Total:</span>
                <span className="font-bold text-black">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-600 text-white">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}