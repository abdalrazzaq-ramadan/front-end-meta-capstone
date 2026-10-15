import TestimonialsCard from "../TestimonialsCard.jsx"
import Container from "../Container.jsx"
export default function Testimonials () {
    return (
        <section className="bg-primary py-12">
            <Container>
                <h1 className="text-subtitle font-heading text-center p-6">Testimonials</h1>
                
                <div className="grid grid-cols-4 gap-7 p-6">
                    <TestimonialsCard src = {'https://placehold.co/600x600'} alt = {"img"} name={"Mohammed"} />
                    <TestimonialsCard src = {'https://placehold.co/600x600'} alt = {"img"} name={"Mohammed"} />
                    <TestimonialsCard src = {'https://placehold.co/600x600'} alt = {"img"} name={"Mohammed"} />
                    <TestimonialsCard src = {'https://placehold.co/600x600'} alt = {"img"} name={"Mohammed"} />
                </div>
            </Container>
        </section>
    )
}