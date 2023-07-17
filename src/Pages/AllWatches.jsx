import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "./Home/Hooks/useTitle";

const AllWatches = () => {
    useTitle('allWatches')
    const allwatches = useLoaderData();
    const [watchs,setWatch]=useState(allwatches);

    const handleSearch=(e)=>{
        e.preventDefault();
        const searchText=e.target.searchText.value;
        fetch(`https://wristify-server.vercel.app/search/${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setWatch(data)})
    }

    console.log(watchs)
    return (
        <div className="overflow-x-auto m-5 text-white">
            <form onSubmit={handleSearch} className="w-full flex justify-center gap-4 my-5">
            <input type="text" name='searchText' placeholder="Search by Name" className="input input-bordered" required/>
            <input type="submit" className="btn btn-success" value="Search" />
            </form>
            <table className="table table-compact w-full text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th>Saller</th>
                        <th>Model-name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        watchs.map((watch, i) => {
                            console.log(watch);
                            return <tr key={watch._id}>
                                <th>{i + 1}</th>
                                <td>{watch.sellerName}</td>
                                <td>{watch.name}</td>
                                <td>{watch.subcategory}</td>
                                <td>${watch.price}</td>
                                <td>{watch.quantity}</td>
                                <td>
                                    <Link to={`/details/${watch._id}`} className='btn btn-primary btn-outline btn-sm rounded-full'>View Details</Link>
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

export default AllWatches;