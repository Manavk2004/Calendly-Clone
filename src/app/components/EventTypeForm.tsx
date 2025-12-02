"use client"
import { use, useEffect, useState } from "react";
import TimeSelect from "./TimeSelect";
import { WeekDayName } from "../libs/types";
import clsx from "clsx";

type BookingTimes = {
    [key in WeekDayName]: { from: string; to: string }
};

const WeekdaysNames:WeekDayName[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const times = {
    'monday': {from : '', to: ''},
    'tuesday': {from : '', to: ''},
    'wednesday': {from : '', to: ''},
    'thursday': {from : '', to: ''},
    'friday': {from : '', to: ''},
    'saturday': {from : '', to: ''},
    'sunday': {from : '', to: ''},

}


export default function EventTypeForm(){

    const [ title, setTitle ] = useState<string>("")
    const [ description, setDescription ] = useState<string>("")
    const [ length, setLength ] = useState(30)
    const [ bookingTimes, setBookingTimes ] = useState<BookingTimes>(times) 
    const [ selectedDay, setSelectedDay ] = useState<string>('')

    useEffect(() => {
        console.log(bookingTimes)
    }, [bookingTimes])


    function handleBookingTimeChange(day: WeekDayName, val: string, fromOrTo: 'from' | 'to'){
        setBookingTimes(oldBookingTimes => {
            const newBookingTimes = {...oldBookingTimes}
            if (newBookingTimes) {
                if (!newBookingTimes[day]) {
                    newBookingTimes[day] = { from: '', to: '' };
                }
                newBookingTimes[day][fromOrTo] = val;
            }
            return newBookingTimes
        })
    }
      

    return(
        <form className=" p-2 bg-gray-200 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-between">
                    <label>
                        <span>Title</span>
                    <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label>
                        <span>Description</span>
                        <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </label>
                    <label>
                        <span>Event Length (minutes)</span>
                        <input type="number" placeholder="30" value={length} onChange={(e) => setLength(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <span className="label">Availability</span>
                    
                    <div className="grid grid-rows-1 gap-1">
                    {WeekdaysNames.map((day, key) => (
                        <div className="flex items-center justify-between" key={day}>
                            <span onClick={() => setSelectedDay(day as string)} className={clsx("text-left uppercase text-sm cursor-pointer", selectedDay === day ? 'text-blue-600! font-bold': '')}>{day}</span>
                            <div className="flex gap-2 items-center">
                                <div>
                                    <TimeSelect 
                                        step={30}
                                        value={bookingTimes !== undefined ? bookingTimes[day].from : ''} 
                                        onChange={val => handleBookingTimeChange(day, val, 'from')}
                                        SelectedDay={selectedDay}
                                        thisDay={day}
                                    />
                                    <span>-</span>
                                    <TimeSelect 
                                        step={30} 
                                        value={bookingTimes !== null ? bookingTimes[day].to : ''}
                                        onChange={val => handleBookingTimeChange(day, val, 'to')}
                                        SelectedDay={ selectedDay}
                                        thisDay={day}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-center">
                <button className="btn-blue !px-6">Save</button>
            </div>
        </form>        
    );
}