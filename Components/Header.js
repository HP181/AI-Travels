import Link from 'next/link'
import ThemeSwitch from "@/Components/ThemeSwitcher";
import React from 'react'
import { Button } from './ui/button'
import { PlaneTakeoffIcon } from 'lucide-react'

const Header = () => {
  return (
     <header className="fixed top-0 left-0 px-5 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
           <div className="container mx-auto flex h-16 items-center justify-between">
             <Link href="/" className="flex items-center gap-2 font-bold text-xl">
               <PlaneTakeoffIcon className="h-5 w-5 text-primary" />
               <span>TripWise</span>
             </Link>
             <nav className="hidden md:flex gap-6">
               <Link href="#Intro" className="text-sm font-medium hover:text-primary">
                 Destinations
               </Link>
               <Link href="#Trips" className="text-sm font-medium hover:text-primary">
                 Trips
               </Link>
               <Link href="#Deals" className="text-sm font-medium hover:text-primary">
                 Deals
               </Link>
               <Link href="#About" className="text-sm font-medium hover:text-primary">
                 About
               </Link>
             </nav>
             <div className="flex items-center gap-4">
               <Link href="/sign-in" className="text-sm font-medium hover:text-primary hidden md:block">
                 Sign In
               </Link>
               <Button>Get Started</Button>
               <ThemeSwitch/>
             </div>
           </div>
         </header>
  )
}

export default Header