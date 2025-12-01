import { clearNylasSession } from "@/app/libs/session";
import { redirect } from "next/navigation";

export async function GET(){
    await clearNylasSession()
    
    redirect("/?logged-out=1")
}