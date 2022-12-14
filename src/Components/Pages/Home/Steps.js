import React from 'react';

const Steps = () => {
    return (
        <section>
            <div className="container py-5 text-center">
                <div className="row">
                    <div className="col mb-4 text-center">
                    <h5 className="mb-0 theme_color">
                        Follow This Steps
                    </h5>
                        <h2 className="fw-bold">
                            Follow Some Steps To Find Best Experince
                        </h2>
                        <p className="fs-5 w-75 mx-auto">
                         We are experts in finding the best watches from world-renowned brands including Rolex, Breitling, Bell & Ross, and many other brands.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-xl-3 mb-3 mb-md-3 mb-xl-0 col-12">
                       <div className="border border-3 rounded py-4 border-primary">
                       <img src="1.png" alt="" /> <br/>
                        <span className="bg-primary mt-4 mb-3 d-inline-block fw-bolder rounded-5 text-white px-3 py-2 bg-opacity-75">
                            Step 1
                        </span>
                        <h5 className="mb-1 fw-bolder mb-2">
                        Login & Discover
                        </h5>
                        <p className="mb-0">
                        Smart filtering and suggestions make it easy to find

                        </p>
                       </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3 mb-3 mb-md-3 mb-xl-0 col-12">
                    <div className="border border-3 border-info rounded py-4">
                    <img src="3.png" alt="" /> <br/>
                        <span className="bg-info mt-4 mb-3 d-inline-block fw-bolder rounded-5 text-white px-3 py-2 bg-opacity-75">
                            Step 2
                        </span>
                        <h5 className="mb-1 fw-bolder mb-2">
                        Add to Wishlist
                        </h5>
                        <p className="mb-0">
                        Easily select the correct items and add them to the wishlist
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-xl-3 mb-3 mb-md-3 mb-xl-0 col-12">
                   <div className="border border-3 py-4 rounded border-danger">
                   <img src="5.png" alt="" /> <br/>
                        <span className="bg-danger mt-4 mb-3 d-inline-block fw-bolder rounded-5 text-white px-3 py-2 bg-opacity-75">
                            Step 3
                        </span>
                        <h5 className="mb-1 fw-bolder mb-2">
                        Fast Meet To Find Fast
                        </h5>
                        <p className="mb-0">
                        Meet as soon as to find the best product for your choice

                        </p>
                   </div>
                    </div>
                   
                    <div className="col-sm-6 col-md-6 col-xl-3 mb-3 mb-md-3 mb-xl-0 col-12">
                    <div className="border border-3 py-4 rounded border-success">
                    <img src="4.png" alt="" /> <br/>
                        <span className="bg-success mt-4 mb-3 d-inline-block fw-bolder rounded-5 text-white px-3 py-2 bg-opacity-75">
                            Step 4
                        </span>
                        <h5 className="mb-1 fw-bolder mb-2">
                        Enjoy the product
                        </h5>
                        <p className="mb-0">
                        Have fun and enjoy your Dream Watch

                        </p>
                    </div>
                    </div>
                   
                    
                </div>
            </div>
        </section>
    );
};

export default Steps;