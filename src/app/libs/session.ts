import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

export type NylasSession = {
    grantId?: string | null;
    email?: string | null
}


const GRANT_ID_COOKIE = "grandId"
const EMAIL_COOKIE = "email"

const sessionOptions = {
    password: process.env.SECRET as string,
    cookieName: "calendix-session",
    cookieOptions: { secure: process.env.NODE_ENV === "production"}
}

export async function setNylasSession(grandId: string, email: string){
    const store = await cookies()

    const common = {
        httpOnly: true,
        sameSite: "lax" as const,
        path: "/",
        secure: process.env.NODE_ENV === "production",
    }
    store.set(GRANT_ID_COOKIE, grandId, common)
    store.set(EMAIL_COOKIE, email, common)
}

export async function getNylasSession(): Promise<NylasSession> {
    const store = await cookies()

    return { 
        grantId: store.get(GRANT_ID_COOKIE)?.value ?? null, 
        email: store.get(EMAIL_COOKIE)?.value ?? null,  
    }
}


export async function clearNylasSession(){
    const store = await cookies()
    store.delete(GRANT_ID_COOKIE)
    store.delete(EMAIL_COOKIE)
}