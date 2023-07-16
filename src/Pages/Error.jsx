import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="max-w-full max-h-full text-center flex flex-col gap-4 my-10">
            <h1 className='font-bold text-9xl text-error'>404</h1>
            <div className="w-full mx-auto bg-dark">
            <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/4004.gif" className="w-full md:w-1/3 object-cover rounded-lg mx-auto" />
            </div>
            <h3>Ooops! Looks like you are lost!</h3>
            <Link to='/' className='btn btn-success w-3/4 md:w-1/3 mx-auto text-error font-medium'>Go Back to home</Link>
        </div>
    );
};

export default Error;