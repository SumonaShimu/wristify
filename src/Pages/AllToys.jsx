import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "./Home/Hooks/useTitle";

const AllToys = () => {
    useTitle('allToys')
    const alltoys = useLoaderData();
    const [toys,setToys]=useState(alltoys);

    const handleSearch=(e)=>{
        e.preventDefault();
        const searchText=e.target.searchText.value;
        fetch(`https://wristify-server.vercel.app/search/${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setToys(data)})
    }

    console.log(toys)
    return (
        <div className="overflow-x-auto m-5">
            <form onSubmit={handleSearch} className="w-full flex justify-center gap-4 my-5">
            <input type="text" name='searchText' placeholder="Toy Name or Category" className="input input-bordered" required/>
            <input type="submit" className="btn btn-secondary text-white" value="Search" />
            </form>
            <table className="table table-compact w-full text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th>Saller</th>
                        <th>Toy-name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, i) => {
                            console.log(toy);
                            return <tr key={toy._id}>
                                <th>{i + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.name}</td>
                                <td>{toy.subcategory}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/details/${toy._id}`} className='btn btn-primary rounded-t-none'>View Details</Link>
                                </td>
                            </tr>
                        }
                        )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;