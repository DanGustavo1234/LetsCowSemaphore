"use client"

import { useRouter } from "next/navigation"

export default function InitPage() {
    const router = useRouter()
   

    return (
        <>
        <h1>LetsCow</h1>
        
        <button onClick={() => router.push("/identities")}>Create Identity</button>
        </>
    )
}


