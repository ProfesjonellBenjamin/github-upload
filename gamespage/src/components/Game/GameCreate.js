import {useState, useContext} from 'react';
import { Button, Modal, Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import {ImageContext, ImageProvider} from '../../contexts/ImageContext';
import {GameContext} from '../../contexts/GameContext';
import ImageList from '../Image/ImageList';
import ImageUploader from '../Image/ImageUploader';
import Dropdown from 'react-bootstrap/Dropdown';

const GameCreate = () => {

    //for update
    const { game } = useContext(GameContext);
    const [gameState, setGame] = game;

    //for create
    const [id, setId] = useState(gameState.id);
    const [name, setName] = useState(gameState.name);
    const [price, setPrice] = useState(gameState.price);
    //const [image, setImage] = useState("");

    //for upload image
    const { image } = useContext(ImageContext);
    const [imageState, setImage] = image;
    
    const handleChange = ( e ) =>{
        switch(e.target.id){
            case "name":
                //setName(e.target.value);
                setGame( {...gameState, name: e.target.value}); 
                break;
            case "price":
                //setPrice( parseInt(e.target.value) );
                setGame( {...gameState, price: parseInt(e.target.value)});
                break;
            case "image":
                //setImage(e.target.value);
                break;
            case "console":
                setGame({...gameState, console: e.target.value});
                break;
            case "description":
                setGame({...gameState, description: e.target.value});
                break;
            default:
        }
    }

    const createOrUpdate = () =>{
        //klønete, men funker å ha 0 som init verdi
        if(gameState.id != "0"){
            updateGame();
        } else createGame();

    }
    
    const createGame = () =>{
        alert("Creating " + gameState.name + ", press f5 to see changes");
        const url = "https://localhost:5001/Games";
        const newGame = {name: gameState.name, price: gameState.price, image: gameState.image, 
            console: gameState.console, description: gameState.description};

        axios.post(url, newGame);
    }

    const updateGame = () =>{
        alert("Updating " + gameState.name + ", press f5 to see changes");
        //alert("update instead: " + gameState.id);
        const url = "https://localhost:5001/Games";
        axios.put(`${url}/${gameState.id}`, gameState);

    }

    const clearFields = () =>{

        setGame({id: "0", name: "", price: 0, image: "", console: "", description: ""});

    }

    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => {
      
      setShow(false);
      
      setImage(imageState);
      setGame( {...gameState, image: imageState.filePath});      //setImage(imageState);
  
    }
    
    const handleShow = () => setShow(true);
     
    //klønete
    const setConsole = (e) =>{

        //alert(e.target.id + " was pressed");
        switch(e.target.id){
            case "xb":
                //alert("XBAX");
                setGame({...gameState, console: "Xbox"});
                break;
            case "ps":
                setGame({...gameState, console: "PlayStation"});
                break;
            default:



        }

    } 


    return (
        <section>
            
            <Container xs={8} sm={4} md={4} lg={4}>
                    <Row>
                        <h3>Create or edit Game</h3>
                    </Row>
                    <Row >
                        <Col xs={2} sm={2} md={2} lg={2}>
                        <label>Name</label>
                        <input id="name" onChange={ handleChange } type="text" value = {gameState.name}/>
                        </Col>

                        <Col xs={2} sm={2} md={2} lg={2}>
                        <label>Price</label>
                        <input id="price" onChange={ handleChange } type="text" value = {gameState.price}/>

                        </Col>

                    </Row>
                    <Row>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        {/*dropdown works most of the time */}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Console
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item><div id="xb" onClick={setConsole} value="Xbox">Xbox</div></Dropdown.Item>
                                <Dropdown.Item><div id="ps" onClick={setConsole} value="PlayStation">PlayStation</div></Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        
                    </Col>
                    <Col><div>{gameState.console}</div></Col>

                    </Row>
                    <Row><label>Description</label></Row>
                    <Row>
                        <Col>
                        
        
                        
                        <textarea id="description" onChange={handleChange} type="text" value = {gameState.description}></textarea>

                        </Col>
                    </Row>
                    <Row>
                    <Col>
                            <img id="image" src={`https://localhost:5001/images/${gameState.image}`}/>
                            
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

export default GameCreate;