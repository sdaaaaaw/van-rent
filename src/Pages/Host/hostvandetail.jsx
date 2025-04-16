import React from "react"
import { NavLink , useParams , Outlet , useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
export async function loader({params}){
  await requireAuth()
    return getHostVans(params.id)
} 
export default function HostVandDetail(){
    const vans = useLoaderData()
    const styles={
        fontWeight : "bold" ,
        textDecoration : "underline",
        color: "black"
    }
    return(
        <div className="host-van-detail-container">
            <NavLink to=".." relative="path" className='back'>&larr; Back to all vans</NavLink>
      <div className="host-van-details">
      <img src={vans.imageUrl}/>
      <div className="van-detail-info">
        <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
      <h1>{vans.name}</h1>
      <h3>${vans.price}/day</h3>
      </div>
      </div>
      <div className="detail-nav">
        <NavLink to="." end style={({isActive})=> isActive ? styles : null}>Details</NavLink>
        <NavLink to="pricing" style={({isActive})=> isActive ? styles : null}>Pricing</NavLink>
        <NavLink to="photo" style={({isActive})=> isActive ? styles : null}>Photo</NavLink>
      </div>
      <Outlet context={{vans}}/>
        </div>
    )
}