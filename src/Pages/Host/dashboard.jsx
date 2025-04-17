import { Link , useLoaderData } from "react-router-dom"
import { requireAuth } from "../../utils"
import { getHostVans } from "../../api"
import { BsStarFill } from "react-icons/bs"

export async function loader({request}){
    await requireAuth(request)
    const vans = await getHostVans()
    return {vans}
}

export default function Dashboard(){
    const {vans} = useLoaderData()
    
    return(
        <section>
             <div className="dashboard-income">
                <div className="dash-info">
                <h1>welcome</h1>
                <p>Income last 30 days</p>
                <h2>$2,260</h2>
                </div>
            <Link to="income">Details</Link>
            </div>
            <div className="dashboard-review-score">
                <h2>Review score</h2>
                <span>5.0/5</span>
                <Link to="review">Details</Link>
            </div>
           
            <div className="dashboard-vans">
                <div className="top">
                <h2>your listed vans</h2>
                <Link to ="van">View all</Link>
                </div>
             {vans.map((van) => (
                    <div className="host-van-single" key={van.id}>
                        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                        <div className="host-van-info">
                            <h3>{van.name}</h3>
                            <p>${van.price}/day</p>
                        </div>
                        <Link to={`van/${van.id}`}>View</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}