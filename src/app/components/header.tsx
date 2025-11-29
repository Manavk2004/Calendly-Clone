import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex gap-4 justify-between py-6 text-gray-600 font-light">
        <div className="flex items-center gap-10">
            <Link href={'/'} className="text-blue-600 font-bold text-xl flex items-center gap-2">
                <CalendarDays size={32}/>
                Calendix
                </Link>
        <nav className="flex gap-2">
            <Link href={'/features'}>Features</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/pricing'}>Pricing</Link>
        </nav>
        </div>
        <nav className="flex items-center gap-6">
            <Link href={'/features'}>Sign In</Link>
            <Link href={'/features'} className="bg-blue-600 text-white py-2 px-4 rounded-full">Get Started</Link>
        </nav>
    </header>
  )
}

export default Header
