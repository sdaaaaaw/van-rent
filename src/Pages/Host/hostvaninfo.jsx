import { useOutletContext } from "react-router-dom"
export default function Hostvaninfo(){
    const {vans} = useOutletContext()
    return(
        <div className="detail-of-vans">
            <p><b>Name:</b>{vans.name}</p>
            <p><b>Category:</b>{vans.type}</p>
            <p><b>Description:</b>{vans.description}</p>
        </div>
    )
}