import Container from "../Container.jsx"
import Button from "../Button.jsx"
export default function Hero () {
    return (
        <section id="hero">
            <Container>
                <h1 className="font-heading text-subtitle text-primary">Little Lemon</h1>
                <h2 className="text-lead text-primary">chicago</h2>

                <p className="font-body text-body text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, id. Ullam itaque vero nemo magnam quod, doloribus consequuntur facilis, ad odio sed tempore, sunt ipsum. Saepe sed accusamus ullam praesentium.</p>

                <Button className = "rounded-button bg-primary">Reserve a Table</Button>
            </Container>
        </section>
    )
}