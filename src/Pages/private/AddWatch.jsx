import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../Home/Hooks/useTitle";

const AddWatch = () => {
    useTitle('AddWatch')
    const { user } = useContext(AuthContext);
    let userName = '', userEmail = ''
    if (user) {
        userName = user.displayName;
        userEmail = user.email;
    }
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const addItem = (event) => {
        event.preventDefault()
        const form = event.target;
        const name=form.name.value;
        const pictureURL=form.url.value;
        const description=form.description.value;
        const price=parseFloat(form.price.value);
        const quantity=parseFloat(form.quantity.value);
        const rating=parseFloat(form.rating.value);
        const sellerEmail=form.email.value;
        const sellerName=form.seller.value;
        const subcategory=selectedValue;

        const newItem={
            name,pictureURL,price,quantity,rating,sellerEmail,sellerName,subcategory,description
        }
        const itemjson=JSON.stringify(newItem);
        fetch('https://wristify-server.vercel.app/addwatch', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Watch inserted successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                form.reset();
            }
        })
        console.log(itemjson)
    }
    return (
        <div className="w-full my-10 section-padding">
           <div className="text-center">
           <h1 className='font-bold text-4xl py-5'>Add a Watch</h1>
            <p className='text-white'>Here, you as a seller can post your watches with the respective information.</p>
           </div>
            <form onSubmit={addItem} className="bg-white/50 text-white rounded-xl m-10 p-10 grid md:grid-cols-2 grid-cols-1 gap-3 w-[90%]">
                <label className="input-group">
                    <span>Picture</span>
                    <input name='url' type="url" placeholder="give the product image url" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Watch Name</span>
                    <input name='name' type="text" placeholder="watch name" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Seller Name</span>
                    <input name='seller' type="text"
                        defaultValue={userName} className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Your Email</span>
                    <input name='email' type="email"
                        defaultValue={userEmail} className="input input-bordered w-full" />
                </label>

                <label className="input-group">
                    <span>Price</span>
                    <input name='price' type="number" step="0.01" placeholder="100.00" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Rating</span>
                    <input name='rating' type="number" step="0.01" placeholder="5" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Available quantity</span>
                    <input name='quantity' type="number" placeholder="10" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Sub Category</span>
                    <select className="select select-bordered" onChange={handleSelectChange} value={selectedValue}>
                        <option disabled value="">Pick one</option>
                        <option value="sports">sports</option>
                        <option value="luxury">luxury</option>
                        <option value="ladies">ladies watches</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <label className="input-group col-span-2 ">
                    <span>Description</span>
                    <input name='description' type="text" placeholder="your product description" className="input input-bordered w-full h-24" />
                </label>
                <input type="submit" value="Add Product" className="btn btn-success col-span-2 mx-auto"/>
            </form>
        </div>
    );
};

export default AddWatch;