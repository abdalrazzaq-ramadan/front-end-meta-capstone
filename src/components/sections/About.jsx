import Container from "../Container"
import Restaurant from "../../assets/icons_assets/restaurant.jpg"
import RestaurantChef from "../../assets/icons_assets/restaurant_chef_B.jpg"
export default function About () {
    return (
        <section id = "#about" className="my-12 h-96">
            <Container className="grid grid-cols-2 gap-16">
                <div className="content">
                    <h1 className="text-subtitle font-heading text-primary">Little Lemon</h1>
                    <h2 className="text-lead text-primary">Chicago</h2>
                    <p className="font-body text-body text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt dolore voluptatem dolorem molestias. Illum praesentium expedita minima aperiam eligendi distinctio eius amet dignissimos at consequuntur, perspiciatis ipsam tempore? Laudantium.</p>
                </div>

                <figure className="relative">
                    <img src={Restaurant} alt="Restaurant" className="object-cover absolute top-24 left-48 w-60 h-72 rounded-card shadow-black shadow-xl transition-all hover:scale-105 hover:left-24" />
                    <img src={RestaurantChef} alt="Restaurant" className="object-cover absolute w-60 h-72 right-12 top-2.5 z-10 rounded-card shadow-black shadow-xl transition-all hover:scale-105 hover:right-0" />
                </figure>
            </Container>
        </section>
    )
}