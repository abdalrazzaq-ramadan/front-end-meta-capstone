import Container from "./Container"
import logo from "../assets/icons_assets/Logo.svg"
export default function Footer () {
    return (
        <footer className="bg-primary py-24">
            <Container className="grid grid-cols-4 gap-3.5">
                <img src={logo} alt="" className="w-full h-36 bg-surface" />
                <ul className="text-center">
                    <h4 className="text-lead">Contact</h4>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                </ul>
                <ul className="text-center">
                    <h4 className="text-lead">Contact</h4>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                </ul>
                <ul className="text-center">
                    <h4 className="text-lead">Contact</h4>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">Home</a></li>
                </ul>
            </Container>

        </footer>
    )
}