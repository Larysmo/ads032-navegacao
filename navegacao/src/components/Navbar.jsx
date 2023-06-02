import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import UserContext from "../contexts/UserContext"
import './Navbar.css'

export default function Navbar(props) {
    const { userID, handleLogout } = useContext(UserContext)
    const navigate = useNavigate()
    const perfil = `perfil/${userID}`

    function handleClick(event) {
        handleLogout()
        navigate('/login')
    }

    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={perfil}>Perfil</NavLink></li>
            <li><button onClick={handleClick}>Sair</button></li>
        </ul>
    )
}