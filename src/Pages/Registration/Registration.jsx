import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useTitle from "../Home/Hooks/useTitle";

const Registration = () => {
    useTitle('Register');
    const { createUser,updateUserInfo } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
            toast.error("Password must contain atleast 6 letters!",{
                position: "top-center"});
            return;
        }
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Welcome ${name}`,
                    html:'Your Registration is complete!',
                    showConfirmButton: false,
                    timer: 1500
                })
                updateUserInfo(name,photo)
            })
            .catch(error => {
                toast.error(`${error.message}`,{
                    position: "top-center"})
                console.log(error)
            })
    }

    return (
        <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/03/52/73/34/360_F_352733401_JvKktwNtBzmwP9F3Q2tvST7IPxiWDYIN.jpg")` }}>
            {/* form+img container */}
            <div className="md:flex gap-10">
                {/* images */}
                <div className="my-2 w-72">
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu8.jpg" className=" shadow-2xl rounded-lg my-2 w-64 " />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                </div>
                {/* form */}
                <div className="md:min-w-[1/2] card flex-shrink-0 w-full my-10 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold mb-10">Please Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="your photo url" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='Register' />
                            <button className="btn btn-primary text-2xl text-black my-3 "><span className="text-xs">register with </span> <FcGoogle></FcGoogle></button>
                            <small className="mx-auto">
                                Already have an account? Please<Link to='/login' className="link link-info link-hover"> Login</Link>
                            </small>
                        </div>
                    </form>
                </div>
                {/* images 2 only shown in large device */}
                <div className="my-2 w-72 hidden lg:block">
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu8.jpg" className=" shadow-2xl rounded-lg my-2 w-64 " />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                </div>
            </div>
        </div>
    );
};

export default Registration;