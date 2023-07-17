import { useState } from 'react';
import StarRating from './StarRating';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';

const GalleryCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="card hover:scale-105 transform transition duration-300 ease-in-out bg-base-100 shadow-xl relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <figure className="w-full h-96 ">
                <Zoom>
                    <img src={item.pictureURL} className="object-cover object-center" alt={item.name} />
                </Zoom>
            </figure>
            {isHovered && (
                <div className="w-full py-5 px-3 absolute bottom-0 left-0 z-10 bg-[#171a1d6c] flex items-center justify-center rounded-xl">
                    <div className='flex justify-between w-full text-white text-sm font-semibold'>
                        <div className='text-left'>
                            <h1>{item.name}</h1>
                            <StarRating rating={item.rating} />
                        </div>
                        <div className='text-right'>
                            <p className='text-primary'>${item.price}</p>
                            <Link to={`/details/${item._id}`} className='btn btn-sm btn-outline me-0 mt-2 normal-case'>
                               View Details <BsArrowRightCircleFill className='w-5 ms-2'/>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryCard;
