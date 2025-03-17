import React from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import Image from 'next/image'

const Trips = () => {
  return (
    <section id="Trips" className="py-16">
    <div className="container mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trip Inspiration</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover curated trip ideas for every type of traveler
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Beach Getaways", image: "https://images.unsplash.com/photo-1621328895567-f909e923c9d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", count: "24+ trips" },
          { title: "Mountain Escapes", image: "https://images.unsplash.com/photo-1610878180933-123728745d22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", count: "18+ trips" },
          { title: "City Breaks", image: "https://images.unsplash.com/photo-1560653510-4e50f8a2bf58?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", count: "32+ trips" },
          { title: "Cultural Journeys", image: "https://images.unsplash.com/photo-1551220870-b94f07105c23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", count: "15+ trips" },
          { title: "Adventure Travel", image: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", count: "20+ trips" },
          { title: "Food & Wine", image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", count: "12+ trips" },
        ].map((category, index) => (
          <Link href="#" key={index} className="group">
            <Card className="overflow-hidden h-full border-0 shadow-md transition-all duration-300 hover:shadow-xl py-0">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /> */}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Trips