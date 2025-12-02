import { FromTo, WeekDayName } from "@/app/libs/types";
import mongoose, { model } from "mongoose"
import { EventType } from "nylas";


const FromToSchema = new mongoose.Schema({
    from: String,
    to: String,
})


const EventTypeSchema = new mongoose.Schema({
    title: String,
    description: String,
    email: String,
    length: Number,
    bookingTimes: new mongoose.Schema({
        monday: FromToSchema,
        tuesday: FromToSchema,
        wednesday: FromToSchema, 
        thursday: FromToSchema,
        friday: FromToSchema,
        saturday: FromToSchema,
        sunday: FromToSchema,
    }),

}, {
    timestamps: true,
})






type EventType = {
    email: string,
    title: string,
    description: string,
    length: string,
    bookingTimes: Record<string, FromTo>
}


const BookingSchema = new mongoose.Schema<Record<WeekDayName, FromTo>>({
    monday: FromToSchema,
    tuesday: FromToSchema,
    wednesday: FromToSchema,
    thursday: FromToSchema,
    friday : FromToSchema,
    saturday : FromToSchema,
    sunday : FromToSchema,
})


export const EventTypeModel = mongoose.models?.EventType || model<EventType>('EventType', EventTypeSchema)

