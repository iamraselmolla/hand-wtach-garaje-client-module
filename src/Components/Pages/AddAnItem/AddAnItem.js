import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthContext/AuthProvider';

const AddAnItem = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [itemUploading, setLoadingStatus] = useState(false)
    const imageBbApiKey = process.env.REACT_APP_imageBBAPI;
    const [setRegisterBtnDIsable, setBtnStatus] = useState(false);

    const handleProductAdd = e => {
        e.preventDefault();
        setLoadingStatus(true)
        const formData = new FormData();
        const itemPicture = e.target.itempicture.files[0];
        formData.append('image', itemPicture)
        fetch(`https://api.imgbb.com/1/upload?key=${imageBbApiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => {

                return res.json()
            })
            .then(imageData => {
                const name = e.target.name.value;
                const price = e.target.price.value;
                const number = e.target.number.value;
                const location = e.target.location.value;
                const description = e.target.description.value;
                const pruchingtime = e.target.pruchingtime.value;
                const duration = e.target.duration.value;
                const mainprice = e.target.mainprice.value;
                const reason = e.target.reason.value;
                const itemImage = imageData.data.url;
                let category_id;
                if (e.target.category.value === 'general') {
                    category_id = '01'
                } else if (e.target.category.value === 'digital') {
                    category_id = '02'
                } else if (e.target.category.value === 'smart') {
                    category_id = '03'
                } else {
                    category_id = '00'
                }
                const category = e.target.category.value;
                const condition = e.target.condition.value;
                let repairOrDamage;
                if(e.target.repairdamage.value === 'yes'){
                    repairOrDamage = true
                }else(
                    repairOrDamage = false
                )
                const userEmail = user.email;
                const userName = e.target.ownername.value;
                const userProfilePicture = user.photoURL;
                const insertTime = new Date().getTime();
                const advertise = false;
                const verified = false;
                const sold = false;
                const allDataInfo = { name, price,mainprice,verified, number, location, description, pruchingtime, duration, reason, itemImage, category, condition, repairOrDamage, userEmail, userName, userProfilePicture, insertTime, category_id,advertise, sold };
                fetch('http://localhost:5000/watches', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(allDataInfo)
                })
                    .then(res => res.json())
                    .then(dataFound => {
                        if (dataFound.acknowledged) {
                            e.target.reset()
                            setError(null)
                            toast.success('Item added successful')
                            setLoadingStatus(false);
                        }
                    })
                    .catch(err => setError(err.message))

            })
            .catch(err => {
                console.log(err)
                return setError(err.message)
            })

    }
    return (
        <section>
            <div className="container">

                <div className="row">

                    <div className="col-md-12 theme_border p-4 rounded">
                        <h2 className="fw-bolder text-center mb-4">
                            Add an Watch
                        </h2>
                        <form onSubmit={handleProductAdd} className='row'>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Watch Name</label>
                                <input required name="name" type="text" className="form-control" id="exampleInputWtacName" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Item Price ($)</label>
                                <input required name="price" type="number" className="form-control" id="exampleInputPrice" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Owner Name</label>
                                <input defaultValue={user?.displayName} required name="ownername" type="text" className="form-control" id="ownerNameex" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Owner Email</label>
                                <input readOnly defaultValue={user?.email} required name="ownerEmail" type="email" className="form-control" id="owneremailex" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Owner Number</label>
                                <input required name="number" type="number" className="form-control" id="exampleInputEmail1111" />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Owner Location</label>
                                <input required name="location" type="text" className="form-control" id="examplelocation" />
                            </div>
                            <div className="mb-3 col-md-66">
                                <label className="fw-bolder">Item Description</label>
                                <input required name="description" type="text" className="form-control" id="exampledes" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Month of Purchase</label>
                                <input required name="pruchingtime" type="month" className="form-control" id="examplepurchase" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Main Price of Purchase ($)</label>
                                <input required type="number" name="mainprice" className="form-control" id="examplepurchasemainprice" />
                            </div>
                            <div className="mb-3 col-md-4">
                                <label className="fw-bolder">Using Duration (in month)</label>
                                <input required name="duration" type="number" className="form-control" id="exampleduration" />
                            </div>
                            <div className="mb-3 col-md-4">
                                <label className="fw-bolder">Reason of Sale</label>
                                <input required name="reason" type="text" className="form-control" id="examplepurchase" />
                            </div>

                            <div className="mb-3 col-md-4">
                                <label className="fw-bolder">Watch Picture</label>
                                <input required name="itempicture" type="file" className="form-control" id="productpictureupload" />
                            </div>

                            <div className="mb-3 col-md-4">
                                <label className="fw-bolder">Select  Watch Category</label> <br />
                                <select defaultValue={'general'} name="category" required className='px-1 py-2 fw-bolder'>
                                    <option value="general">General Watch</option>
                                    <option value="digital">Digital Watch</option>
                                    <option value="smart">Smart Watch</option>
                                </select>

                            </div>
                            <div className="mb-3 col-md-4">
                                <label className="fw-bolder">Select  Watch Condition</label> <br />
                                <select defaultValue={'excellent'} name="condition" required className='fw-bolder px-1 py-2'>
                                    <option value="excellent">Excellent</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                </select>

                            </div>
                            <div className="mb-3 col-md-4">
                                <label className="fw-bolder">Repaired of Damaged?</label> <br />
                                <select defaultValue={'no'} name="repairdamage" required className='px-1 py-2 fw-bolder'>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>

                            </div>
                            <button type="submit" className={`theme_bg border-0 py-2 fw-bolder text-white rounded ${itemUploading ? 'd-none' : 'd-block'}`}>Submit</button>
                            <button className={`btn btn-primary ${itemUploading ? 'd-block' : 'd-none'}`} type="button" disabled>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Uploading
                            </button>
                            {error && <p className='text-danger fw-bolder'>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddAnItem;