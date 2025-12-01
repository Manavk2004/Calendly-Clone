import { nylas } from "../../auth/route";
import { NextRequest, NextResponse } from "next/server";
import { setNylasSession } from "@/app/libs/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";



export async function GET(req: NextRequest){
    const url = new URL(req.url)
    const code = url.searchParams.get("code")   

    if(!code){
        return NextResponse.json(
            {error: "No authorization code returned from Nylas"},
            { status: 400 }
        )
    }

    try{
        const response = await nylas.auth.exchangeCodeForToken({
            clientSecret: process.env.NYLAS_API_KEY as string,
            clientId: process.env.NYLAS_CLIENT_ID as string,
            code,
            redirectUri: "http://localhost:3000/api/oauth/callback"
        })


        const { grantId, email } = response;

        await setNylasSession(grantId, email)

        return NextResponse.redirect(new URL("/", req.url))
    }catch(err){
        console.error("Error exchanging code for token:", err)

        return NextResponse.json(
            {error: "Failed to exchange authorization code for token"},
            {status: 500}
        )
    }
}