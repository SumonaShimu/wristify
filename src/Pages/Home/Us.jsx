import { BsArrowBarRight } from "react-icons/bs";

const Us = () => {
    return (
        <div data-aos="fade-right" className='flex md:flex-row flex-col my-10'>
            <div className="w-full md:w-1/2 p-5">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4-fashion-brand-watches-lead-1605129287.jpg" className="w-full h-full rounded-xl border-4 shadow-md border-slate-300" />
            </div>
            <div className='flex flex-col gap-3 w-full md:w-1/2 max-w-4xl my-auto text-justify p-10'>
                <h4 className="">Our Story...</h4>
                <h1 className='font-bold text-4xl'>The wristify</h1>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat nam repellendus vero! Excepturi maiores, adipisci officiis saepe minus aut pariatur cum assumenda quas nobis fugit ipsa, repellat aliquid nam. Beatae!</p>
                <button className="btn lg:w-1/2">Find us on Facebook <BsArrowBarRight className="text-2xl"></BsArrowBarRight></button>
            </div>
        </div>
    );
};

export default Us;