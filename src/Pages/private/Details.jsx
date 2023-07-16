import { useLoaderData } from "react-router-dom";
import StarRating from "../Home/StarRating";
import useTitle from "../Home/Hooks/useTitle";

const Details = () => {
    useTitle('details')
    const toy = useLoaderData();
    const { name, description, pictureURL, quantity, rating, sellerEmail, sellerName, price } = toy;
    return (
        <div className="card md:h-[90vh]  md:w-[80%] w-full lg:card-side bg-base-100 shadow-xl mx-auto mb-10">
            <figure className="p-5 md:min-w-[40%] w-full rounded-lg"><img src={pictureURL} className="w-full h-full cover rounded-lg" /></figure>
            <div className="card-body">
                <div className="flex gap-2 my-5">
                    <h2 className="card-title">{name}</h2>
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