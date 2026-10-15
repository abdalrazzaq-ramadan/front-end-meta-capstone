import Button from "./Button"

export default function Card ({src , alt ,title , price}) {
    return (
    <div className="w-full rounded-card overflow-hidden bg-[#EDEFEE] ">
        <figure className="w-full h-52">
            <img className="w-full h-full object-cover" src={src} alt={alt} />
        </figure>

        <div className="card-info p-2.5">
            <div className="flex justify-between">
                <h3 className="text-card-title text-black">{title}</h3>
                <p className="text-lead text-secondary">${price}</p>
            </div>

            <div className="description py-12">
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quas laudantium voluptatibus, provident assumenda accusantium corrupti expedita tempore dignissimos facilis similique exercitationem molestiae quaerat esse consequatur, iure voluptatum ullam numquam.</p>
            </div>

            <div className="action my-2.5">
                <Button>Order a delivery</Button>
            </div>

        </div>
    </div>
    )
}