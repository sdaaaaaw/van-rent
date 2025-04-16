import React from "react"
import { Link , useSearchParams, useLoaderData} from "react-router-dom"
import { getVans } from "../api"
export  function loader(){
    return getVans()
}

export default function Vans(){
   
    const vans = useLoaderData()

    const [search , setsearch] = useSearchParams()

    const typeFilter = search.get("type")
   
   const types = typeFilter 
   ? vans.filter(van => van.type === typeFilter):vans

   const el = types.map(element => 
    (
        <div key={element.id} className="van">
         <Link to={`${element.id}`} state={{search : `?${search.toString()}` , type:typeFilter }}>
          <img src={element.imageUrl} alt="" />
             <div className="vaninfo">
             <h1>{element.name}</h1>
             <p>${element.price}/day</p>
          </div>
          <i className={`van-type ${element.type} selected`}>{element.type}</i>
         </Link>
        </div>
        
    ))
    function handlesearch(key , value){
        setsearch(prevsearch => {
            if(value === null){
                prevsearch.delete(key)
            }else{
                prevsearch.set(key , value)
            }
            return prevsearch
        })
    }

    return(
        <>
        <h1 className="title">explore our van option</h1>
            <div className="button-filter">
                <button 
                onClick={()=>handlesearch("type" , "simple")}
                className={`van-type simple ${typeFilter==="simple"? "selected":""}`}
                >
                    simple
                </button>
                <button 
                onClick={()=>{handlesearch("type" , "rugged")}}
                className={`van-type rugged ${typeFilter === "rugged"?"selected" : ""}`}
                >
                    rugged
                </button>
                <button 
                onClick={()=>{handlesearch("type" , "luxury")}}
                className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""} `}
                >
                    luxury
                </button>
                {typeFilter && <button onClick={()=>{setsearch({})}}>Clear</button>}
            </div>
        <div className="van-tile">
        {el}
        </div>
        </>
    )
}