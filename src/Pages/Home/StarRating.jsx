import { BsStarFill, BsStarHalf } from "react-icons/bs";

function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={i} className="text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<BsStarHalf key="half" className="text-yellow-400" />);
        }

        return stars;
    };

    return <div className='flex items-center justify-center' >{renderStars()}</div>;
}
export default StarRating;