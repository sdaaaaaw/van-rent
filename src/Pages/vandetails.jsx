import { useParams , Link , useLocation , useLoaderData} from "react-router-dom"
import React from "react"
import { getVans } from "../api"
export function loader({params}){
     return getVans(params.id)
}
export default function VansDetails(){
    const location = useLocation()
   const van = useLoaderData()
    const search = location.state?.search||""
    const type = location.state?.type || "all"
     return(
        <>
        <Link to={`..${search}`} relative="path" className="back-btn">&larr;Back to {type} van</Link>
        <div className="van-detail-container">
            <img src={van.imageUrl}/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <h4>${van.price}\day</h4>
                <p>{van.description}</p>
                <Link to="vans" className="button">Rent the van</Link>
        </div>
        </>
     )
}