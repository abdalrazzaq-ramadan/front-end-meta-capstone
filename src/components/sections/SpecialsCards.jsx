import Card from "../Card";
import Greek from "../../assets/icons_assets/greek_salad.jpg"
import Bru from "../../assets/icons_assets/bruchetta.svg"
import LemonD from "../../assets/icons_assets/lemon_dessert.jpg"
import Container from "../Container.jsx";
import Button from "../Button.jsx";
export default function SpecialsCards () {
    return (
        <section className="my-6">
            <Container className="">

                <div className="flex justify-between py-2 ">
                    <h1 className="font-heading text-subtitle">This weeks specials!</h1>
                    <Button>Online Menu</Button>
                </div>

                <div className="card-wrapper grid grid-cols-3 items-center justify-between gap-6">
                    <Card src = {Greek} alt={"greek salad"} price={"15"} title={"Greek Salad"}/>
                    <Card src = {Bru} alt={"Brucheta"} price={"22"} title={"Brucheta"}/>
                    <Card src = {LemonD} alt={"Lemon Dessert"} price={"25"} title={"Lemon Dessert"}/>
                </div>
            </Container>
        </section>
    )
}