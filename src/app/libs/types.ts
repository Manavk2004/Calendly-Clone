export type FromTo = {
    from: string;
    to: string;
}
export type WeekDayName = 'monday' | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

export type BookingTimes = Record<WeekDayName,FromTo> | object
