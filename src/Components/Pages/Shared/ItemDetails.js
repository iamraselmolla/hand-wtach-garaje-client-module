import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Form } from 'react-bootstrap';

const ItemDetails = () => {

    const [detailsData, setdetailsData] = useState(useLoaderData())
    const [bidValue, setBidValue] = useState(0);
    const [allItems, setAllItems] = useState([])
    const [reload, setReload] = useState(false)

    // useEffect(() => [

    // ], [])

    const handleBidValueChange = (e) => {
        // Update the bidValue state with the value entered by the user
        setBidValue(e.target.value);
    }
    // useEffect(() => {
    //     detailsData = useLoaderData();
    // }, [])

    const { user, typeOfAccount, accountType } = useContext(AuthContext)
    const { _id, name, advertise, endAuction, category, startAuction, category_id, condition, userEmail, description, duration, insertTime, itemImage, location, number, price, pruchingtime, reason, auction, mainprice, repairOrDamage, sold, userName, userProfilePicture, reported, bids } = detailsData;
    const navigate = useNavigate()
    const { data: allWatches = [], isLoading, refetch } = useQuery({
        queryKey: ['all-items'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/all-items');
            const data = await res.json();
            return data;
        }
    });

    const handleAuctionStart = (productId) => {
        console.log(productId)
        fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/startAuction', {
            method: 'PUT', // Use PUT for updating an existing auction
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productId })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Auction has been started');
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Failed to start the auction');
            });
    }
    const handleBooking = (e) => {
        e.preventDefault();
        const number = e.target.phonenumber.value;
        const location = e.target.meetlocation.value;
        const category = detailsData.category;
        const category_id = detailsData.category_id;
        const email = user?.email;
        const name = user?.displayName;
        const img = detailsData?.itemImage;
        const productname = detailsData?.name;
        const price = detailsData?.price
        const product_id = detailsData?._id;
        const paid = false;
        const insertTime = new Date().getTime();
        const allData = { number, location, category, category_id, email, name, img, productname, price, product_id, paid, insertTime }

        const bookedData = { email, insertTime, name, img, number, location }
        fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ bookedData, product_id })

        })
            .then(res => {
                const findJson = res.json()
                console.log(findJson)
                return findJson
            }


            )
            .then(data => {
                console.loog(data)
                if (data.status === 409) {
                    return toast.error(data.message)
                }
                toast.success(`${detailsData.name} has been booked`)
                navigate('/dashboard/all-booked-items')
            })

    }
    const handleAuctionStop = (productId) => {
        fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/stopAuction', {
            method: 'PUT', // Use PUT for updating an existing auction
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productId })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Auction has been stopped');
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Failed to start the auction');
            });
    }
    function getTimeAgo(timestamp) {
        const currentTime = new Date().getTime();
        const timeDifference = currentTime - timestamp;

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) {
            return seconds + (seconds === 1 ? " second ago" : " seconds ago");
        } else if (minutes < 60) {
            return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
        } else if (hours < 24) {
            return hours + (hours === 1 ? " hour ago" : " hours ago");
        } else {
            return days + (days === 1 ? " day ago" : " days ago");
        }
    }
    const hanldeBid = (e, _id) => {
        e.preventDefault()
        if (bidValue < price) {
            return toast.error("Please give an amount more than the actual auction price")
        }
        else {
            const { email, username, profilepicture } = accountType
            const bidData = {

                amount: parseFloat(bidValue),
                userInfo: {
                    email, username, profilepicture
                },
                biddingTime: new Date().getTime()
            }
            fetch('https://assignment-12-server-9btb6ecgx-iamraselmolla.vercel.app/bid', {
                method: 'PUT', // Use PUT for updating an existing auction
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ productId: _id, bidData })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.message) {

                        return toast.error(data.message)
                    }
                    toast.success(bidValue + 'has been bidden')
                    setReload(!reload)
                })
                .catch(err => {
                    // if(err)
                    console.log(err.status)
                })
        }


    }


    return (
        <section className='container py-5'>
            <div className="row">
                <div className="col-md-3 position-relative">

                    <Card className='position-sticky top-0'>
                        <ListGroup variant="flush">
                            {allWatches && allWatches?.map(watch =>
                                <ListGroup.Item>
                                    <div title={watch?.name} className="d-flex align-items-center gap-1">
                                        <PhotoProvider>
                                            <div className="foo">
                                                <PhotoView src={watch?.itemImage}>
                                                    <img width="50px" className='rounded-circle' src={watch?.itemImage} alt="" />
                                                </PhotoView>
                                            </div>
                                        </PhotoProvider>
                                        <div>
                                            <Link className='text-decoration-none' to={`/details/items/${watch?._id}`}> {watch?.name.length > 20 ? watch?.name.slice(0, 15) + ' ...' : watch?.name} </Link>
                                            <p className="theme_color fw-bolder">
                                                ${watch?.price}
                                            </p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </div>
                <div className="col-md-6 ">
                    <div className="justify-content-between d-flex">
                        <h3 className="mb-0 mt-3">
                            {
                                name
                            }
                        </h3>


                        {auction && startAuction && !endAuction && (
                            <button onClick={() => handleAuctionStop(_id)} className='btn btn-danger'>
                                Stop Auction
                            </button>
                        )}
                    </div>

                    <div className="d-flex align-items-center mt-3">
                        <div className='me-2'>
                            <PhotoProvider>
                                <div className="foo">
                                    <PhotoView src={userProfilePicture}>
                                        <img src={userProfilePicture} width="40px" className='rounded-circle' alt="Author user profile" />
                                    </PhotoView>
                                </div>
                            </PhotoProvider>

                        </div>
                        <div>
                            <small className='mb-0'>{userName}</small> <br />
                            <small>{location}</small>
                        </div>
                    </div>
                    <div className="fw-bolder text-muted">
                        <small>Posted on: {new Date(insertTime).toLocaleString()}</small>
                    </div>
                    <div className='me-2 mt-3'>
                        <PhotoProvider>
                            <div className="foo position-relative">
                                <PhotoView src={itemImage}>
                                    <img style={{ maxHeight: '300px' }} className='img-fluid' src={itemImage} alt="" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                    </div>
                    <h4 className="mb-1 mt-3 fw-bolder theme_color">
                        Selling Price: {price}$
                    </h4>
                    <del><small className='fw-bolder'>Original Price of Purchase: {mainprice}</small></del>

                    <p className="text-muted mt-3 mb-1">
                        <span className='fw-bolder text-black'>Product Description: </span> {description}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Product Used for: </span> {duration} month
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Reason of Selling: </span> {reason}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Condition: </span> {condition}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Category: </span> {category}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Time of Purchase: </span> {pruchingtime}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Selling Reason: </span> {reason}
                    </p>
                    <p className="text-muted mb-1">
                        <span className='fw-bolder text-black'>Repaired of Damaged: </span> {repairOrDamage ? 'Yes' : 'No'}
                    </p>
                </div>

                <div className="col-md-3 position-relative">
                    <div className="position-sticky top-0">
                        <PhotoProvider>
                            <div className="foo position-relative">
                                <PhotoView src={itemImage}>
                                    <img style={{ maxHeight: '200px' }} className='img-fluid' src={itemImage} alt="" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                        <h5 className="mb-0 fw-bolder mt-3">
                            {
                                name
                            }
                        </h5>
                        <p className="fw-bolder mt-2 theme_color">
                            Price: ${price}
                        </p>

                        {sold && <h4 className='text-success'> This item is already sold</h4>}

                        {!sold && !auction && <>
                            <Form onSubmit={handleBooking}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control defaultValue={user?.email} disabled type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control disabled defaultValue={user?.displayName} type="text" placeholder="Enter Username" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Watch name</Form.Label>
                                    <Form.Control disabled defaultValue={detailsData?.name} type="text" placeholder="Watch Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Watch Price</Form.Label>
                                    <Form.Control disabled defaultValue={detailsData?.price} type="text" placeholder="Watch Price" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Customer Number</Form.Label>
                                    <Form.Control required name="phonenumber" type="number" placeholder="Your Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Meeting Location</Form.Label>
                                    <Form.Control required name="meetlocation" type="text" placeholder="Safe Meeting Location" />
                                </Form.Group>

                                <button style={{ cursor: 'pointer' }} className="theme_bg border-0 text-white text-center w-100 fw-bolder px-3 py-2 rounded">
                                    Book Now
                                </button>
                            </Form>
                        </>}
                        {(!sold && auction && startAuction) && (
                            <>
                                <h2 className="text-success">
                                    Bids
                                </h2>
                                {bids?.map(singleBid => (
                                    <div className='my-2 pb-2 border-bottom'>

                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex">
                                                <div>
                                                    <img width="40" className='rounded-circle' src={singleBid?.userInfo?.profilepicture} />
                                                </div>
                                                <div className='d-flex flex-column'>
                                                    <p className="text-bold mb-0">
                                                        {singleBid?.userInfo?.username}
                                                    </p>
                                                    {getTimeAgo(singleBid?.biddingTime)}
                                                </div>
                                            </div>
                                            <div className='theme_color text-weight-bold'>
                                                ${singleBid?.amount}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                Auction Price
                                <Form>
                                    <Form.Group className="mb-3" controlId="forAuctionPrice">
                                        <Form.Control onChange={handleBidValueChange} required name="auctionPrice" type="number" placeholder="Give your auction highest value" />
                                    </Form.Group>
                                    <button onClick={(e) => hanldeBid(e, _id)} style={{ cursor: 'pointer' }} className="theme_bg border-0 text-white text-center w-100 fw-bolder px-3 py-2 rounded">
                                        Bid
                                    </button>
                                </Form>
                            </>
                        )
                        }
                        {!sold && auction && !startAuction && <>
                            <h2 className='text-info'>
                                Auction will be started very soon
                            </h2>
                        </>}







                    </div>
                </div>
            </div>
        </section >
    );
};

export default ItemDetails;