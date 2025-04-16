import { useOutletContext } from "react-router-dom"
export default function HostvanPricing(){
    const {vans} = useOutletContext()
    return(
        <div className="van-price">
            <h1>${vans.price}/day</h1>
        </div>
    )
}