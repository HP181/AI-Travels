import { PlaneTakeoffIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Destinations</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Europe
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Asia
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                North America
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                South America
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Africa
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Oceania
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Trip Types</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Beach Vacations
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                City Breaks
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Adventure Travel
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Luxury Getaways
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Family Trips
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Honeymoons
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Press
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Partners
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Trust & Safety
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <PlaneTakeoffIcon className="h-5 w-5 text-primary" />
          <span className="font-bold text-xl">TripWise</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TripWise. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Facebook</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Twitter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer