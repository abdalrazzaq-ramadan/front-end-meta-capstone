import logo from "../assets/icons_assets/Logo.svg"
import Container from "./Container"
export default function Nav () {
    return (
        <nav className="p-2.5">
            <Container>
                <ul className="flex justify-between items-center">
                    <a><img src={logo} alt="" /></a>
                    <a>Home</a>
                    <a>About</a>
                    <a>Menu</a>
                    <a>Reservation</a>
                    <a>Order Online</a>
                    <a>Login</a>
                </ul>
            </Container>
        </nav>
    )
}