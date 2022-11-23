import React from 'react';

const Banner = () => {
    return (
        <section>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 py-5">
                    <h5 className="mb-0 theme_color">
                        Find Exclusive
                    </h5>
                    <h1 className="fs-1 mt-4 text-uppercase">
                        Proper Used <br />

                        For Proper Resell
                    </h1>
                    <p className="mb-4">
                        We have the expertise to checke any watch, including
                        vintage watches and antique pocket watches or any international famous smart watch brand.
                    </p>
                    <button className="theme_bg outline-0 border-0 px-5 py-3 fw-bolder text-white rounded">
                        Check Now
                    </button>
                    <div className="watch-list mt-4">
                        <img width="50" src="2.png" alt=""  />
                        <img width="50" src="3.png" alt=""  />
                        <img width="50" src="1.png" alt=""  />
                        <img width="50" src="5.png" alt=""  />
                        <img width="50" src="4.png" alt=""  />
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="banner.png" className='img-fluid' height="60%" alt="banner image" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;