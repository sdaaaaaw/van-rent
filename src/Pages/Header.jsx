import {Link,NavLink } from "react-router-dom"
//import som from "../assets"
import image from "../assets/images/avatar-icon.png"
export default function Header(){
    const styles={
        fontWeight : "bold" ,
        textDecoration : "underline",
        color: "black"
    }
    function logout(){
        localStorage.removeItem("user")
    }
    return(
        <>
       <header>
        <Link to="/" className="logo">VanLife</Link>
        <NavLink to ="host" style={({isActive})=> isActive ? styles : null}>
          Host
        </NavLink>
        <NavLink 
        to="vans"
        style={({isActive})=> isActive? styles : null }
        >Vans
        </NavLink>
        <NavLink 
        to="about"
        style={({isActive}) => isActive ? styles : null }
        >About
        </NavLink>
        <Link to="login">
        <img src={image} alt="" />
        </Link>
        {
        localStorage.getItem("user")&&
        <button onClick={logout}>Log out</button>}
       </header>
     
        </>
    )
}