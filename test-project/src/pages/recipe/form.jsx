import React from "react"
import { useState, useEffect } from "react"
import {
    Button,
    Form,
    Row,
    Col,

} from 'react-bootstrap'
import axios from 'axios'



const FormRecipe = ({ setFormVisible, type, fetchData, formEdited }) => {
    const [title, setName] = useState('');
    const [bahan, setBahan] = useState('');
    const [steps, setLangkah] = useState('');
    const [file, setFile] = useState('');
    const [preview, setPreview] = useState('');

    const submitRecipe = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title)
        formData.append("bahan", bahan)
        formData.append("steps", steps)
        formData.append("file", file)

        if (type === 'create') {
            await axios.post('http://localhost:5000/recipes/', formData)
                .then(() => fetchData())
                .catch((err) => console.log(err))
        } else {
            await axios.put(`http://localhost:5000/recipes/${formEdited.id}`, formData)
                .then(() => fetchData())
                .catch((err) => console.log(err))
        }
        setFormVisible(false)
    }

    useEffect(() => {
        if (type === 'edit') {
            setName(formEdited.name);
            setBahan(formEdited.bahan);
            setLangkah(formEdited.steps);
            setFile(formEdited.image);
            setPreview(formEdited.url);
        }
    }, [type, formEdited])

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image))
    }

    // const submitRecipe = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("title", title)
    //     formData.append("bahan", bahan)
    //     formData.append("steps", steps)
    //     formData.append("file", file)

    //     try{
    //         await axios.post('http://localhost:5000/recipes', formData, {
    //             headers:{
    //                 "Content-type": "multipart/form-data"
    //             }
    //         })
    //         setFormVisible(false)
    //     } catch (error){
    //         console.log(error);
    //     }
    // }




    return (
        <Row>
            <Form onSubmit={submitRecipe}>
                <Form.Group>
                    <Form.Label>Nama Recipe</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="nama recipe"
                        required
                        value={title}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bahan-bahan</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="bahan-bahan"
                        value={bahan}
                        onChange={(e) => setBahan(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Langkah-langkah</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="langkah-langkah"
                        value={steps}
                        onChange={(e) => setLangkah(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gambar Makanan</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        size="sm"
                        onChange={loadImage}
                    />

                </Form.Group>

                <div className="mt-2">
                    {preview ? (
                        <figure className="image">
                            <img src={preview} alt="Preview Gambar" style={{ height: '6.5rem' }} />
                        </figure>
                    ) : (
                        ""
                    )}
                </div>

                <Row className="d-flex my-3 justify-content-md-center">
                    <Col>
                        <Button
                            variant="outline-primary" type="submit">Submit</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => setFormVisible(false)} variant='outline-secondary'>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </Row>
    )
}

export default FormRecipe;