import React from "react";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

const RecipePage = () =>{
    return(
        <div className="container-fluid" >
            <Container fluid className="border d-flex flex-column">
                <Row className="d-flex align-items-center">
                    <Col>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
                    <h3>Title</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>gambar</h4>
                    </Col>
                    <Col>
                        <h5>Username</h5>
                        <h6>@email</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Bahan</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Langkah</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RecipePage;