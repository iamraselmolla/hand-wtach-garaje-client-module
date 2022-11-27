import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const FeaturesImg = () => {
    return (
       <section>
        <div className="container-fluid py-5">
            <div className="row pt-5">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl">
                     <PhotoProvider>
                     <div className="foo">
                        <PhotoView src="11.jpg">
                    <img src="11.jpg" alt="" className='img-fluid'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl mb-md-3">
                     <PhotoProvider>
                     <div className="foo">
                        <PhotoView src="12.jpg">
                    <img src="12.jpg" alt="" className='img-fluid'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl mb-4">
                     <PhotoProvider>
                     <div className="foo">
                        <PhotoView src="13.jpg">
                    <img src="13.jpg" alt="" className='img-fluid mt-4'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl">
                     <PhotoProvider>
                     <div className="foo">
                        <PhotoView src="14.jpg">
                    <img src="14.jpg" alt="" className='img-fluid'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl">
                     <PhotoProvider>
                     <div className="foo">
                        <PhotoView src="15.jpg">
                    <img src="15.jpg" alt="" className='img-fluid mt-5'/>
                    </PhotoView>
                    </div>
                </PhotoProvider>
                </div>
                
            </div>
        </div>
       </section>
    );
};

export default FeaturesImg;