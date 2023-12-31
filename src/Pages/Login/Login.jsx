import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../Home/Hooks/useTitle";

const Login = () => {
    const { signIn, signInWithGoogle, setUser, setLoading } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')
    const handleLogin = event => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                setError('')
                const user = result.user;
                setUser(user)
                console.log(user);
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Welcome ${user?.displayName
                        }!`,
                    html: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
                setLoading(false);
                form.reset();
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
                toast.error(`${error.message}`,{
                    position: "top-center"})
            })
    }

    const googleLogin = () => {
        setError('')
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                setLoading(false);
                toast.success("Successfully logged in!");
                setError('')
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/dbtm0gZ/blog1-1.jpg")` }}>
             <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-md">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-5xl font-bold mb-10">Please Login!</h1>
                            <h1>{error ? `${error}` : ''}</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn text-primary " value='Login' />
                        </div>
                        <small className="mx-auto">
                            Don't have an account? Please<Link to='/reg' className="link link-info link-hover"> Register</Link>
                        </small>
                    </form>
                    <button onClick={googleLogin} className="btn text-2xl text-primary mb-8 mx-8"><span className="text-xs">Login with </span> <FcGoogle className="ms-2"></FcGoogle></button>
                </div>
            </div>
        </div>
    );
};

export default Login;