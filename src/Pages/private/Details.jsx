import { useLoaderData } from "react-router-dom";
import StarRating from "../Home/StarRating";
import useTitle from "../Home/Hooks/useTitle";

const Details = () => {
    useTitle('details')
    const toy = useLoaderData();
    const { name, description, pictureURL, quantity, rating, sellerEmail, sellerName, price } = toy;
    return (
        <div className="card section-padding lg:card-side shadow-xl my-10 rounded-none">
            <figure className="p-5 h-96 w-full rounded-lg"><img src={pictureURL} className="w-full h-full object-contain rounded-lg" /></figure>
            <div className="card-body text-white">
                <div className="flex flex-col gap-2 my-5">
                    <h2 className="card-title text-4xl">{name}</h2>
                    <StarRating rating={rating}></StarRating>
                </div>
                <p>Description: {description}</p>
                <p>Seller name: {sellerName}</p>
                <p>Seller Email: {sellerEmail}</p>
                <p>quantity: {quantity}</p>
                <p>rating: {rating}</p>
                <p>Price: ${price}</p>

                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;