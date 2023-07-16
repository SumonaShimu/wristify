import { SlSocialInstagram,SlSocialTwitter,SlSocialYoutube,SlSocialFacebook } from "react-icons/sl";
import { GoLocation,GoMail} from "react-icons/go";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-dark text-primary mx-auto justify-around">
            <div className="">
                <span className="footer-title">About us</span>
                <img src="logo.png" className="h-20 w-20"></img>
                <h1>wristify</h1>
                <p>The largest online toyshop since 1995</p>
                <p> &copy; 2023 wristify All Rights Reserved</p>
            </div>
            <div className="">
                <span className="footer-title">Contact us</span>
                <p className="flex gap-2 items-center"><GoLocation className='align-'></GoLocation > Dhaka, Bangladesh</p>
                <p className="flex gap-2 items-center"><GoMail></GoMail>info@wristify.yahoo.com</p>
            </div>
            <div className="">
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col gap-4">
    
                    <a href="#" className="link link-hover"><SlSocialInstagram></SlSocialInstagram></a>
                    <a href="#" className="link link-hover"><SlSocialFacebook></SlSocialFacebook></a>
                    <a href="#" className="link link-hover"><SlSocialYoutube></SlSocialYoutube></a>
                    
                    <a href="#" className="link link-hover"><SlSocialTwitter></SlSocialTwitter></a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;