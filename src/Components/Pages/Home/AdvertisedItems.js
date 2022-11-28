import React, { useState } from 'react';
import Items from '../Shared/Items';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AdvertisedItems = (allData) => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(allData)
    return (
        <section className="container-fluid py-5">
            <div className="row pt-5">
                <div className="col mb-4 text-center">
                    <h5 className="mb-0 theme_color">
                        Advertised Wacthes
                    </h5>
                    <h2 className="fw-bold">
                        Book Our Sponsored Watches Collection
                    </h2>
                </div>
            </div>
            <div className="row">
                {allData?.allData?.map(s => <div className="col-md-4" key={s?._id}>
                    <Items handleShow={handleShow} setModalData={setModalData} watch={s}></Items>
                </div>)}
            </div>


            {modalData &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Book {modalData?.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </section>
    );
};

export default AdvertisedItems;