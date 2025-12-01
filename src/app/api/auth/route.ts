import { redirect } from 'next/navigation'
import Nylas from 'nylas'
import React from 'react'

const NylasConfig = {
    apiKey: process.env.NYLAS_API_KEY as string,
    apiUri: process.env.NYLAS_API_URI as string,
}

export const nylas = new Nylas(NylasConfig)

const AuthConfig = {
    clientId: process.env.NYLAS_CLIENT_ID as string,
    redirectUri: "http://localhost:3000/api/oauth/callback"
}

export async function GET(request: Request) {
    console.log("Inside get")
    const authUrl = nylas.auth.urlForOAuth2({
        clientId: AuthConfig.clientId as string,
        redirectUri: AuthConfig.redirectUri as string,
    })

    return redirect(authUrl)
}

export default GET
