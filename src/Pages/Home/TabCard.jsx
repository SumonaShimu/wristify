import { Link } from "react-router-dom";
import StarRating from "./StarRating";


const TabCard = ({ toy }) => {
    const { name, pictureURL, price, rating,_id } = toy;
    return (
        <div className="card lg:w-[1/4] md:w-[1/2] w-full bg-base-100 shadow-xl mx-auto text-center text-white">
            <div className="card-body">
                <h2 className="font-bold text-xl">{name}</h2>
                <div className="mx-auto">
                <StarRating rating={rating}></StarRating>
                </div>
                <p >$ {price}</p>
            </div>
            <figure className="w-full h-96"><img src={pictureURL} className="object-contain" /></figure>
            <Link to={`/details/${_id}`} className='btn btn-outline rounded-t-none'>View Details</Link>
        </div>
    );
};

export default TabCard;