import React from 'react';

const BuyingLuxury = () => {
    return (
        <section className='py-5'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 text-white mb-md-0 mb-sm-3 mb-3">
                        <div className="bg-img py-5 px-4" style={{ backgroundImage: 'url(features1.png)', backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '450px' }}>
                            <p className="text-uppercase mt-5 text-decoration-underline">
                                THE IT GUIDE TO
                            </p>
                            <h2 className='w-50'>
                                Buying Luxury
                                Watches
                            </h2>
                            <p className="fs-4">
                                20% OFF

                            </p>
                            <button className="theme_bg outline-0 border-0 px-5 py-3 fw-bolder text-white rounded">
                                Check Now
                            </button>
                        </div>

                    </div>
                    <div className="col-md-6 text-white">
                        <div className="bg-img py-5 px-4" style={{ backgroundImage: 'url(features2.png)', backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '450px' }}>
                            <p className="text-uppercase mt-5 text-decoration-underline">
                                THE PERFECT PAIR
                            </p>
                            <h2 className='w-50'>
                                Best Luxury
                                Watches
                            </h2>
                            <p className="fs-4">
                                20% OFF

                            </p>
                            <button className="theme_bg outline-0 border-0 px-5 py-3 fw-bolder text-white rounded">
                                Check Now
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyingLuxury;