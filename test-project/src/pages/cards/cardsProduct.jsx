import React from "react";
import {
    Row,
    Pagination,
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    CardGroup,
    Modal,
} from 'react-bootstrap'
import { useState, useEffect } from "react";
import axios from 'axios'
import './cards-styles.css'
import FormRecipe from '../recipe/form';

const CardsProduct = () => {
    const [recipes, setRecipes] = useState([]);
    const [formType, setFormType] = useState(null)
    const [formVisible, setFormVisible] = useState(false)
    const [formEdited, setEditedForm] = useState(false)

    const getRecipes = async () => {
        const response = await axios.get('http://localhost:5000/recipes');
        setRecipes(response.data);
    }

    const deleteRecipe = async (recipeId) => {
        try {
            await axios.delete(`http://localhost:5000/recipes/${recipeId}`)
            getRecipes();
        } catch (err) {
            console.log(err);
        }
    }

    const handleEditRecipe = (data) => {
        setEditedForm(data)
        setFormType('edit')
        setFormVisible(true)
    }

    const fetchData = async() =>{
        await axios.get(`http://localhost:5000/recipes/`)
        .then(({data}) => {
            setRecipes(data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="d-flex container-fluid">
            <Container className='my-4 px-5 mx-2.5' fluid>
                <div className="d-flex container-content" id="container">
                    {/* Category*/}
                    <Row>
                        <Col className="d-flex align-items-center justify-content-between mb-2">
                            <h5 className="">
                                <small>Recipe</small>
                            </h5>
                            <DropdownButton
                                align='center'
                                title="Category"
                                id="dropdown-menu-align-center"
                            >
                                <Dropdown.Item eventKey={0}>Action</Dropdown.Item>
                                <Dropdown.Item eventKey={1}>Action2</Dropdown.Item>
                                <Dropdown.Item eventKey={2}>Action3</Dropdown.Item>
                            </DropdownButton>

                        </Col>
                        <hr className='divider' />
                        <Row className="g-4" md={5}>
                            {recipes.map((recipe) => (
                                <CardGroup>
                                    <Card className="cardz" key={recipe.id}>
                                        <Card.Img variant="top" src={recipe.url} className="cards-img" />
                                        <Card.Body>
                                            <Card.Title><h3>{recipe.name}</h3></Card.Title>
                                            <Card.Text>
                                                Some quick
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="d-flex justify-content-center" id="footer-cards">
                                            <Row>
                                                <Col>

                                                    <Button
                                                        variant="outline-warning"
                                                        onClick={() => handleEditRecipe(recipe)}
                                                    >Edit
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="outline-danger"
                                                        onClick={() => deleteRecipe(recipe.id)}
                                                    >Delete</Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                            ))}
                        </Row>
                    </Row>
                </div>
            </Container>
            <Modal show={formVisible} toggle={() => setFormVisible(!formVisible)}>
                <Modal.Header>{`Form ${formType} data`}</Modal.Header>
                <Modal.Body>
                    <FormRecipe
                        type={formType}
                        setFormVisible={setFormVisible}
                        formEdited ={formEdited}
                        fetchData = {fetchData}
                    />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CardsProduct;


// {recipes.map((recipe) => (
//     <Row xs={1} sm={4} className="g-3" key={recipe.id}>
//         {Array.from({ length: 8 }).map((_, idx) => (
//             <Col>
//                 <Card>
//                     <Card.Img variant="top" src={recipe.url} className='img-fluid' />
//                     <Card.Body>
//                         <Card.Title>{recipe.name}</Card.Title>
//                         <Card.Text>
//                             This is a longer card with
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             </Col>
//         ))}
//     </Row>
// ))}

{/* <Link to={`edit/${recipe.id}`}><Button
    variant="outline-warning"
    onClick={() => handleEditRecipe()}
>Edit
</Button></Link> */}