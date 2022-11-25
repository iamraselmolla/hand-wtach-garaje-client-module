import React from 'react';

const AddAnItem = () => {
    return (
        <section>
            <div className="container py-4">
                <div className="row text-center mb-3">
                    <h2 className="fw-bolder">
                        Add an item
                    </h2>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className='row'>
                            <div class="mb-3 col-md-6">

                                <input type="text" placeholder='Item name' class="form-control" id="exampleInputEmail11" />
                            </div>
                            <div class="mb-3 col-md-6">

                                <input type="text" placeholder='Owner Number' class="form-control" id="exampleInputEmail1111" />
                            </div>
                            <div class="mb-3 col-md-6">

                                <input type="number" placeholder='Item Price' class="form-control" id="exampleInputPrice" />
                            </div>
                            <div class="mb-3 col-md-6">

                                <input type="text" placeholder='Owner Location' class="form-control" id="examplelocation" />
                            </div>
                            <div class="mb-3 col-md-12">

                                <input type="text" placeholder='Item Description' class="form-control" id="exampledes" />
                            </div>
                            <div class="mb-3 col-md-6">

                                <input type="month" placeholder='Year  of Purchase' class="form-control" id="examplepurchase" />
                            </div>
                            <div class="mb-3 col-md-6">

                                <input type="text" placeholder='Selling Reason' class="form-control" id="examplepurchase" />
                            </div>
                            <div class="mb-3 col-md-6">

                                <input type="number" placeholder='Main Price of Buying' class="form-control" id="examplepurchasemainprice" />
                            </div>
                            <div class="mb-3 col-md-6">

                                <input type="number" placeholder='Selling Price' class="form-control" id="examplepurchasemainprice" />
                            </div>
                            <div className="mb-3 col-md-6">
                                <select>
                                    <option>Select  Product Category</option>
                                    <option>General Watch</option>
                                    <option>Digital Watch</option>
                                    <option>Smart Watch</option>
                                </select>

                            </div>
                            <div className="mb-3 col-md-6">
                                <select>
                                    <option>Select  Product Condition</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>

                            </div>



                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddAnItem;