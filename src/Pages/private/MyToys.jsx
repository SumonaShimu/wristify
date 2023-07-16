import { useContext, useEffect, useState } from "react";
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../Home/Hooks/useTitle";

const MyToys = () => {
    useTitle('Mytoys')
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control,setControl]=useState(false);
    const [ascending, setAscending] = useState([])
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-error'
        },
        buttonsStyling: false
    })
    //getting my uploaded toys
    const url = `https://wristify-server.vercel.app/mywatches?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setAscending(data)
                console.log(data)
            })
    }, [control]);


    const descending = [...ascending].sort((a, b) => b.price - a.price);
    //update toys
    const updateToy = (id) => {
        event.preventDefault();
        console.log('entered')
        const form = event.target;
        const description = form.description.value;
        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
        const rating = parseFloat(form.rating.value);
        const updatedToy = {
            description, price, quantity, rating
        }
        console.log(id, updatedToy)

        fetch(`https://wristify-server.vercel.app/watch/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Done!',
                        'Toy Updated successfully!',
                        'success'
                    )
                    setControl(!control);
                }
                
            })
    }
    //delete toys
    const deleteToy = (id) => {
        console.log('delete', id);
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Toy has been deleted',
                    showConfirmButton: false,
                    timer: 1000
                })
                fetch(`https://wristify-server.vercel.app/watch/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = toys.filter(user => user._id !== id);
                            setToys(remaining);
                        }
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Toy is safe! :)',
                    'error'
                )
            }
        })
    }

    return (
        <div className="text-center">
            <h1 className='font-bold text-4xl py-5'>My Toys</h1>
            <p className=''>Here, you as a seller can update, delete or modify your toys.</p>
            <button onClick={() => setToys(ascending)} className="btn btn-success mt-5">Ascending</button>
            <button onClick={() => setToys(descending)} className="btn btn-error ml-3 mb-5">Descending</button>
            <table className="table table-compact w-full my-10">
                <thead>
                    <tr>
                        <th></th>
                        <th>Saller</th>
                        <th>Toy-name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Update</th>
                        <th>Delete</th>
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
                                    <label htmlFor={`modal-${toy._id}`} className="btn btn-primary rounded-full"><RiEdit2Fill></RiEdit2Fill></label>
                                    <input type="checkbox" id={`modal-${toy._id}`} className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box bg-slate-200">
                                            <form onSubmit={() => updateToy(toy._id)} className="bg-primary rounded-xl m-3 p-5 grid grid-cols-1 gap-3 w-[90%] mx-auto">
                                                <h1 className="text-center font-semibold text-2xl">{toy.name}</h1>
                                                <label className="input-group">
                                                    <span>Price</span>
                                                    <input name="price" type="number" step="0.01" defaultValue={toy.price} placeholder="100.00" className="input input-bordered w-full" />
                                                </label>
                                                <label className="input-group">
                                                    <span>Rating</span>
                                                    <input name="rating" type="number" step="0.01" defaultValue={toy.rating} placeholder="5" className="input input-bordered w-full" />
                                                </label>
                                                <label className="input-group">
                                                    <span>Available quantity</span>
                                                    <input name="quantity" type="number" defaultValue={toy.quantity} placeholder="10" className="input input-bordered w-full" />
                                                </label>
                                                <label className="input-group">
                                                    <span>Description</span>
                                                    <input name="description" type="text" defaultValue={toy.description} placeholder="your product description" className="input input-bordered w-full h-24" />
                                                </label>
                                                <div className="modal-action">
                                                    <button type="submit" className="btn"><label htmlFor={`modal-${toy._id}`}  >Update</label></button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>


                                </td>
                                <td>
                                    <button onClick={() => deleteToy(toy._id)} className='btn btn-primary rounded-full'><RiDeleteBinFill></RiDeleteBinFill> </button>
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

export default MyToys;