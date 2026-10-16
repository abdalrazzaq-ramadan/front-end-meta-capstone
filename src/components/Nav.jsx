import logo from "../assets/icons_assets/Logo.svg"
import Container from "./Container"
import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <nav className="p-2.5">
            <Container>
                <ul className="flex justify-between items-center">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <Link to="/">Home</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#specials">Menu</Link>
                    <Link to="/booking">Reservation</Link>
                    <Link to="">Order Online</Link>
                    <Link to="">Login</Link>
                </ul>
            </Container>
        </nav>
    )
}