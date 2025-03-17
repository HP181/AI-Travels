import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Deals = () => {
  return (
     <section id="Deals" className="py-16 px-5 bg-primary/5">
              <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Plan With TripWise</h2>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Expert Recommendations",
                          description: "Get personalized suggestions based on your preferences and travel style.",
                        },
                        {
                          title: "Exclusive Deals",
                          description: "Access special rates and offers not available anywhere else.",
                        },
                        {
                          title: "Seamless Planning",
                          description: "Organize your entire trip in one place with our intuitive tools.",
                        },
                        {
                          title: "24/7 Support",
                          description: "Travel with confidence knowing our team is always ready to assist you.",
                        },
                      ].map((feature, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-8" size="lg">
                      Start Planning
                    </Button>
                  </div>
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1663045771883-c46fed1055cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Happy travelers"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Deals