import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const About = () => {
  return (<>
       <section id="About" className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Travelers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Read about experiences from our community of travelers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  location: "Trip to Italy",
                  quote: "TripWise made planning our honeymoon so easy. The personalized recommendations were spot on!",
                  image:"https://randomuser.me/api/portraits/women/75.jpg"
                },
                {
                  name: "Michael Chen",
                  location: "Trip to Japan",
                  quote:
                    "I was able to discover hidden gems I wouldn't have found otherwise. Truly an unforgettable experience.",
                    image:"https://randomuser.me/api/portraits/men/75.jpg"
                },
                {
                  name: "Emma Rodriguez",
                  location: "Trip to Thailand",
                  quote:
                    "The seamless booking process and 24/7 support gave me peace of mind throughout my solo adventure.",
                    image:"https://randomuser.me/api/portraits/women/74.jpg"
                },
              ].map((testimonial, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="mx-auto mb-4 h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <blockquote className="mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of happy travelers who have discovered their perfect trips with TripWise
            </p>
            <Button variant="secondary" size="lg">
              Create Your Trip Now
            </Button>
          </div>
        </section>
    </>
  )
}

export default About