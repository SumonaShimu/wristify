import Marquee from "react-fast-marquee";

const Dials = () => {
    return (
        <div >
            <div className='text-center max-w-4xl mx-auto'>
                <h1 className='font-bold text-4xl py-5'>Choose Your dial</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum debitis qui quisquam. Mollitia vero voluptatum doloribus explicabo sapiente beatae cum.</p>
            </div>
            <div className="halfbg my-5">
            <Marquee >
            <img src='https://i.ibb.co/FYjhRh2/client-6.png' className="h-40 w-44 m-16" alt="company" />
            <img src='https://i.ibb.co/0YVQqv1/client-5.png' className="h-40 w-44 m-16" alt="company" />
            <img src='https://i.ibb.co/LpVV7BZ/client-4.png' className="h-40 w-44 m-16" alt="company" />
            <img src='https://i.ibb.co/s3QvdfN/client-3.png' className="h-40 w-44 m-16" alt="company" />
            <img src='https://i.ibb.co/nm0G5yS/client-2.png' className="h-40 w-44 m-16" alt="company" />
            <img src='https://i.ibb.co/XzYtVNW/client-1.png' className="h-40 w-44 m-16" alt="company" />
            <img src='https://i.ibb.co/FYjhRh2/client-6.png' className="h-40 w-44 m-16" alt="company" />
            
            </Marquee>
            </div>
           
        </div>
    );
};

export default Dials;