export default function TestimonialsCard ({name , src , alt}) {
    return (
        <div className="bg-surface p-2.5 rounded-card shadow-2xl shadow-black hover:scale-105 transition-all" >
            <h3 className="text-card-title">Rating</h3>
            <div className="flex gap-6 items-center py-3.5">
                <img src={src} alt={alt} className="w-16 h-16" />
                <p>{name}</p>
            </div>
            <a href="" className="text-blue-700">view rating</a>
        </div>
    )
}