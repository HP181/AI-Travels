import Link from 'next/link'
import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const Destinations = () => {
  return (
    <section id="Intro" className="py-16 bg-muted/50">
    <div className="container mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Popular Destinations</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Explore our most sought-after destinations and find your next perfect getaway
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Paris", image: "https://res.cloudinary.com/dopmxtitm/image/upload/b_gen_fill,ar_1080:1080,c_pad/c_limit,w_1080/f_auto/q_auto/v1/Imagify/uadlujjkcr8z8ibjchjx?_a=BAVCkKDW0", description: "The City of Light" },
          { name: "Bali", image: "https://res.cloudinary.com/dopmxtitm/image/upload/b_gen_fill,ar_1080:1080,c_pad/c_limit,w_1080/f_auto/q_auto/v1/Imagify/z16iysttup3bejzsorfo?_a=BAVCkKDW0", description: "Island of the Gods" },
          {
            name: "Tokyo",
            image: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Where tradition meets future",
          },
          { name: "New York", image: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "The Big Apple" },
        ].map((destination, index) => (
          <Link href="#" key={index} className="group">
            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl py-0">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button variant="outline" size="lg">
          View All Destinations
        </Button>
      </div>
    </div>
  </section>
  )
}

export default Destinations