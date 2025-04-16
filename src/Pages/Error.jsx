import { Link } from "react-router-dom"
export default function Error(){
    return(
        <div className="error-container">
            <h1>oops,Looks like the page was not found</h1>
            <Link to ="..">Return to Home</Link>
        </div>
    )
}