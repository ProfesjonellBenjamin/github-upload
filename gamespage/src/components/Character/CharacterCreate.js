import {useState, useContext} from 'react';
import { Button, Modal, Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import {ImageContext, ImageProvider} from '../../contexts/ImageContext';
import { CharacterContext } from "../../contexts/CharacterContext";
import ImageList from '../Image/ImageList';
import ImageUploader from '../Image/ImageUploader';

const CharacterCreate = () => {

    //for update
    const { character } = useContext(CharacterContext);
    const [characterState, setCharacter] = character;

    //for create
    const [id, setId] = useState(characterState.id);
    const [name, setName] = useState(characterState.name);
    //const [image, setImage] = useState("");

    //for upload image
    const { image } = useContext(ImageContext);
    const [imageState, setImage] = image;
    
    const handleChange = ( e ) =>{
        switch(e.target.id){
            case "name":
                //setName(e.target.value);
                setCharacter( {...characterState, name: e.target.value}); 
                break;
            case "image":
                //setImage(e.target.value);
                break;
            case "description":
                setCharacter({...characterState, description: e.target.value});
                break;
            default:
        }
    }

    const createOrUpdate = () =>{
        //klønete, men funker å ha 0 som init verdi
        if(characterState.id != "0"){
            updateCharacter();
        } else createCharacter();

    }
    
    const createCharacter = () =>{
        alert("Creating " + characterState.name + ", press f5 to see changes");
        const url = "https://localhost:5001/Characters";
        const newCharacter = {name: characterState.name, image: characterState.image, 
             description: characterState.description};

        axios.post(url, newCharacter);
    }

    const updateCharacter = () =>{
        alert("Updating " + characterState.name + ", press f5 to see changes");
        //alert("update instead: " + characterState.id);
        const url = "https://localhost:5001/Characters";
        axios.put(`${url}/${characterState.id}`, characterState);

    }

    const clearFields = () =>{

        setCharacter({id: "0", name: "",  image: "", description: ""});

    }

    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => {
      
      setShow(false);
      
      setImage(imageState);
      setCharacter( {...characterState, image: imageState.filePath});      //setImage(imageState);
  
    }
    
    const handleShow = () => setShow(true);


    return (
        <section>
            
            <Container xs={8} sm={4} md={4} lg={4}>
                    <Row>
                        <h3>Create or edit Character</h3>
                    </Row>
                    <Row >
                        <Col xs={2} sm={2} md={2} lg={2}>
                        <label>Name</label>
                        <input id="name" onChange={ handleChange } type="text" value = {characterState.name}/>
                        </Col>

                    </Row>

                    <Row><label>Description</label></Row>
                    <Row>
                        <Col>
                        
        
                        
                        <textarea id="description" onChange={handleChange} type="text" value = {characterState.description}></textarea>

                        </Col>
                    </Row>
                    <Row>
                    <Col>
                            <img id="image" src={`https://localhost:5001/images/${characterState.image}`}/>
                            
                        </Col>
                    </Row>     
                    <Row>
                    <Button variant="primary" onClick={handleShow}>
                                Pick Image
                            </Button>
                            <Col xs={2} sm={2} md={2} lg={2}>
                        <input onClick={createOrUpdate} type="button" value="Save"/>
                    
                        <input onClick={clearFields} type="button" value="Clear"/>

                    </Col>
                    </Row>   

                    <Row>
                    
                    </Row>
            </Container>
            



            
        
            <Modal animation={false} size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                    <ImageUploader/>
                    
                    <ImageList></ImageList>
                    <label>You have picked: {imageState.filePath}</label>


                </Modal.Body>
                <Modal.Footer>

                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>


        </section>

    )


}

export default CharacterCreate;