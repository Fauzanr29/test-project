import React, { useState } from 'react';
import {
    Col,
    Container,
    Row,
    Button,
    Card,
    Pagination,
    Modal
} from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import FormRecipe from '../recipe/form';



const CarouselProduct = () => {
    const [index, setIndex] = useState(0);
    const [formType, setFormType] = useState(null)
    const [formVisible, setFormVisible] = useState(false)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleAddRecipe = () => {
        setFormType('create')
        setFormVisible(true)
    }

    return (
        <div className='d-flex container-fluid'>
            <Container className='my-4 px-5 mx-2.5' fluid>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=".\assets\Carousel\wallpaperflare.com_wallpaper-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First Slide Label</h3>
                            <p>Lorem Ipsum DOLOR</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=".\assets\Carousel\wallpaperflare.com_wallpaper-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Second Slide Label</h3>
                            <p>Lorem Ipsum DOLOR</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=".\assets\Carousel\wallpaperflare.com_wallpaper-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Third Slide Label</h3>
                            <p>Lorem Ipsum DOLOR</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className='d-flex justify-content-center mt-3'>
                    <Button variant='primary' onClick={() => handleAddRecipe()}>Add New Recipe</Button>
                </div>
            </Container>

            <Modal show={formVisible} toggle={() => setFormVisible(!formVisible)}>
                <Modal.Header>{`Form ${formType} data`}</Modal.Header>
                <Modal.Body>
                    <FormRecipe
                        type={formType}
                        setFormVisible={setFormVisible}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CarouselProduct;


{/* <div className='container-fluid'>
            <div className='container-fluid'>
                <Carousel activeIndex={index} onSelect={handleSelect} >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=".\assets\Carousel\wallpaperflare.com_wallpaper-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=".\assets\Carousel\wallpaperflare.com_wallpaper-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=".\assets\Carousel\wallpaperflare.com_wallpaper.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="container d-flex justify-content-center" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                    <Button>Add Recipe</Button>
                </div>
            </div>
        </div> */}