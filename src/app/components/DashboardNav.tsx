"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";


export default function DashboardNav(){

    const pathname = usePathname();

    const [ True, setTrue ] = useState(true)
    
    const isEventTypesPage = pathname.includes("event-types")
    console.log(isEventTypesPage)

    return (
        <div className="flex gap-4 justify-center mb-5">
            <Link 
                className={clsx("rounded-full bg-gray-200 px-4 py-2", !isEventTypesPage ? '!bg-blue-600 text-white' : "bg-gray-200")}
                href='/dashboard'
            >
                Booked events
            </Link>
            <Link 
                className={clsx("rounded-full bg-gray-200 px-4 py-2", isEventTypesPage ? '!bg-blue-600 text-white' : 'bg-gray-200')}
                href='/dashboard/event-types'
            >
                Event types
            </Link>
        </div>
    )
}