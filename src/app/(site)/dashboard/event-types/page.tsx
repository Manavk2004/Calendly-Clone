import DashboardNav from "@/app/components/DashboardNav";
import EventTypeForm from "@/app/components/EventTypeForm";
import TimeSelect from "@/app/components/TimeSelect";
import { getNylasSession } from "@/app/libs/session";
import { EventTypeModel } from "@/models/EventType";
import { Plus } from "lucide-react";
import mongoose from "mongoose";
import Link from "next/link";




export default async function EventTypesPage(){

    await mongoose.connect(process.env.MONGODB_URI as string)
    const {email, grantId } = await getNylasSession()

    const eventTypes = await EventTypeModel.find({email})

    return (
        <div>
            <DashboardNav />
            Create new event type:
            <Link className="btn-gray" href="/dashboard/event-types/new"> 
                <Plus size={16}/>
                New Event Type 
            </Link>
        </div>
    )
}