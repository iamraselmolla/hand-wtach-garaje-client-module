import React from 'react';

const AddAnItem = () => {
    return (
        <section>
            <div className="container">
               
                <div className="row">
                   
                    <div className="col-md-12 theme_border p-4 rounded">
                    <h2 className="fw-bolder text-center mb-4">
                        Add an item
                    </h2>
                        <form className='row'>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Item Name</label>
                                <input name="name" type="text" className="form-control" id="exampleInputEmail11" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Item Price</label>
                                <input name="price" type="number" className="form-control" id="exampleInputPrice" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Owner Number</label>
                                <input name="number" type="text" className="form-control" id="exampleInputEmail1111" />
                            </div>

                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Owner Location</label>
                                <input name="location" type="text" className="form-control" id="examplelocation" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label className="fw-bolder">Item Description</label>
                                <input name="description" type="text" className="form-control" id="exampledes" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Month of Purchase</label>
                                <input name="pruchingtime" type="month" className="form-control" id="examplepurchase" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="fw-bolder">Main Price of Purchase</label>
                                <input type="number" name="mainprice" className="form-control" id="examplepurchasemainprice" />
                            </div>
                            <div className="mb-3 col-md-12">
                                <label className="fw-bolder">Reason of Selling</label>
                                <input name="reaseon" type="text" className="form-control" id="examplepurchase" />
                            </div>
                            <div className="mb-3 col-md-4">
                                <select className='px-1 py-2 fw-bolder'>
                                    <option>Select  Product Category</option>
                                    <option>General Watch</option>
                                    <option>Digital Watch</option>
                                    <option>Smart Watch</option>
                                </select>

                            </div>
                            <div className="mb-3 col-md-4">
                            <select className='fw-bolder px-1 py-2'>
                                    <option>Select  Product Condition</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>

                            </div>
                            <div className="mb-3 col-md-4">
                            <select className='px-1 py-2 fw-bolder'>
                                    <option>Repaired of Damaged?</option>
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>

                            </div>



                            <button type="submit" className="theme_bg border-0 py-2 fw-bolder text-white rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddAnItem;