import Hero from "./sections/Hero.jsx";
import SpecialsCards from "./sections/SpecialsCards.jsx";
import Testimonials from "./sections/Testemonials.jsx";
import About from "./sections/About.jsx";

export default function Main () {
    return(
        <>
            <Hero/>
            <SpecialsCards/>
            <Testimonials/>
            <About/>
        </>
    )
}