import Container from "../Container.jsx"
import Button from "../Button.jsx"
import logo from "../../assets/icons_assets/restauranfood.jpg";
export default function Hero() {
    return (
        <section id="hero" className="bg-primary py-24">
            <Container className="grid grid-cols-2 gap-72 items-center">
                <div className="content">

                    <h1 className="font-heading text-subtitle text-secondary">Little Lemon</h1>
                    <h2 className="text-lead text-surface mb-2">chicago</h2>

                    <p className="font-body text-body text-surface">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, id. Ullam itaque vero nemo magnam quod, doloribus consequuntur facilis, ad odio sed tempore, sunt ipsum. Saepe sed accusamus ullam praesentium.</p>

                    <div className="action my-2.5">
                        <Button className="">Reserve a Table</Button>
                    </div>
                    
                </div>

                <figure className="grid items-center overflow-hidden p-2.5 transition-all hover:scale-120 cursor-pointer">
                    <img src = {logo} alt="restaurant" className="rounded-card object-cover h-72 w-full "/>
                </figure>
            </Container>
        </section>
    )
}