import { Outlet , NavLink} from "react-router-dom"
export default function Host(){
    const styles={
        fontWeight : "bold" ,
        textDecoration : "underline",
        color: "black"
    }
    return(
        <>
        <nav className="host-nav">
        <NavLink
        to='.'
        style={({isActive})=> isActive ? styles : null}
        end
        >
        Dashboard
        </NavLink>

        <NavLink
        to='review'
        style={({isActive})=> isActive ? styles : null}
        >
         Review   
        </NavLink>
        <NavLink to='van' style={({isActive})=> isActive ? styles : null}>
          Van
        </NavLink>
        <NavLink
        to='income'
        style={({isActive})=> isActive ? styles : null}
        >
        Income
        </NavLink>
        </nav>
        <Outlet/>
        </>
    )
}