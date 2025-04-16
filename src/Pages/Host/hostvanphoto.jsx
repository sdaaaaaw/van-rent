import { useOutletContext } from "react-router-dom"
export default function HostvanPhoto(){
    const {vans} = useOutletContext()
    return(
        <div className="photo">
            <img src={vans.imageUrl}  />
        </div>
    )
}