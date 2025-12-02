import DashboardNav from "@/app/components/DashboardNav"
import EventTypeForm from "@/app/components/EventTypeForm"

export default function NewEventTypePage(){
    return(
        <>
            <DashboardNav />
            <div className="mt-4">
                <EventTypeForm />
            </div>
        </>
    )
}