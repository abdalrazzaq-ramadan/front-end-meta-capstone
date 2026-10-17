import logo from "../assets/icons_assets/Logo.svg"
import Container from "./Container"
import { Link } from "react-router-dom"

import Home from "../assets/icons_assets/home_icon.svg"
export default function Nav() {
    return (
        <nav className="p-6 bg-surface rounded-b-button shadow-2xl shadow-primary">
            <Container>
                <ul className="flex justify-between items-center">
                    <Link to="/" className="hover:scale-130 transition-all"><img src={logo} alt="" /></Link>
                    <Link to="/" className="hover:scale-150 transition-all">Home</Link>
                    <Link to="/#about" className="hover:scale-150 transition-all">About</Link>
                    <Link to="/#specials" className="hover:scale-150 transition-all">Menu</Link>
                    <Link to="/booking" className="hover:scale-150 transition-all">Reservation</Link>
                    <Link to="" className="hover:scale-150 transition-all">Order Online</Link>
                    <Link to="" className="bg-primary p-3 rounded-md text-white">Login</Link>
                </ul>
            </Container>
        </nav>
    )
}