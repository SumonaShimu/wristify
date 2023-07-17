import GalleryCard from "./GalleryCard";

const Gallery = ({ allToys }) => {
    
    return (
        <div data-aos="fade-up" className='section-padding'>
            <div className='text-center max-w-4xl mx-auto'>
                <h1 className='font-bold text-4xl py-5'>Featured Products</h1>
                <p className='text-white my-5'>In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
            </div>
            {/* cards from json */}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 mx-5 my-10">
                {allToys.slice(0,8).map(item =><GalleryCard key={item._id} item={item}></GalleryCard>
                )}

            </div>
        </div>
    );
};

export default Gallery;