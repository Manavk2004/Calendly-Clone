"use client"
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { Play } from 'lucide-react'

function Hero() {
    const [ showLine, setShowLine ] = useState(false)

    useEffect(() => {
        setShowLine(true)
    }, [])

  return (
    <section className="text-center mt-24">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
            Scheduling{' '}
            <span className={clsx("text-blue-600 cool-underline", showLine ? 'show-underline' : '')}>made simple</span> <br />
            for people like you
        </h1>
        <p className="text-gray-800">
            Most scheduling apps are simple but ours is even more simple.
            <br />
            On top of this, it's open source and you can see the code.
        </p>
        <div className='mt-4 flex gap-4 justify-center'>
            <Link href={'/'} className='bg-black text-white py-2 px-4 rounded-full'>Get started for free</Link>
            <Link href={'/'} className='border border-gray-400 text-gray-800 rounded-full inline-flex py-2 px-4 items-center gap-1'>
                <Play size={16} />
                Watch video
            </Link>
        </div>
    </section>
  )
}

export default Hero
