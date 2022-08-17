import React from "react";
import {
    Button,
    Card,
    CardGroup,
    Carousel,
    Container,
    
} from 'react-bootstrap'
import { useState } from "react";

const CardsCarouselProduct = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className="d-flex container-fluid">
            <Container className='my-4 px-5 mx-2.5' fluid>
                <h5>
                    <small>Recommended Recipe</small>
                </h5>
                <hr className='divider' />
                
                <Carousel activateIndex={index} onChange={handleSelect}>
                    {/* Cards Content Slider 1 */}
                    <Carousel.Item >
                        <CardGroup className="gap-3">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body >
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>

                    {/* Cards Content Slider 2 */}
                    <Carousel.Item>
                        <CardGroup className="gap-3">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>

                    {/* Cards Content Slider 3 */}
                    <Carousel.Item>
                        <CardGroup className="gap-3">
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body className="d-flex justify-content-center flex-column mb-2">
                                    <Card.Title>Title this card</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last Update 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default CardsCarouselProduct;