import React from "react"
import {Link , useLoaderData} from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
export async function loader({request}){
    await requireAuth(request)
    return getHostVans()
}
export default function Vanhost(){

const vans = useLoaderData()

const element = vans.map(van => (
    <Link to ={`${van.id}`} key={van.id}>
    <div key ={van.id} className="van-host">
        <img src={van.imageUrl} alt="is this working?" />
        <div className="info">
        <h3>{van.name}</h3>
        <h4>${van.price}/day</h4>
        </div>
    </div>
    </Link>
))
    return(
        <div className="van-host-container">
            <h2>your listed vans</h2>
            <section>
            {element}
            </section>
    </div>
    )
}