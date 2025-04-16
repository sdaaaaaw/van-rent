import React from "react"
import { useRouteError } from "react-router-dom"
export default function ErrorEl(){
    const err = useRouteError()
    return(
        <div className="err">
        <h1>Error: {err.message}</h1>
        <pre>{err.status} - {err.statusText}</pre>
        </div>
    )
}