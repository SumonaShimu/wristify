import { Fade } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="carousel w-full h-[90vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="h-full w-full">
                    <img src="https://i.ibb.co/10PPVwr/slider1.jpg" className="w-full h-full object-cover self-center" />
                    <Fade cascade damping={0.3} duration={1500} direction={"right"} className="max-w-md lg:max-w-xl  text-white/75 relative bottom-[50vh] text-left border-s-2 ps-8 ms-8 lg:ps-12 lg:ms-12">
                        <h1>
                            Shop with confidence at Wristify
                        </h1>
                        <h2 className="text-primary/70 md:text-4xl lg:text-7xl font-medium">
                            Find the perfect watch.
                        </h2>
                        <p className="text-sm text-justify">
                            A one-stop shop for all your watch needs. We have watches for every occasion, from dress watches to sports watches to dive watches.
                        </p>
                    </Fade>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="w-full flex">
                <Fade direction="up" className="flex w-full m-0 p-0">
                    <img src="https://i.ibb.co/7SzjRWK/banner-22.jpg" className="object-center object-cover" />
                </Fade>
                <Fade direction="down" className="flex w-full m-0 p-0">
                    <img src="https://i.ibb.co/qYF7pz1/banner-23.jpg" className="object-center object-cover" />
                </Fade>
                <Fade direction="up" className="flex w-full m-0 p-0">
                    <img src="https://i.ibb.co/CMxh53X/slider3-2.jpg" className="object-center object-cover" />
                </Fade>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;