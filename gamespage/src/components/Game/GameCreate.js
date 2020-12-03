import {useState, useContext} from 'react';
import { Button, Modal} from 'react-bootstrap';
import axios from 'axios';
import ModalPopup from '../ModalPopup';
import {ImageContext, ImageProvider} from '../../contexts/ImageContext';
import {GameContext} from '../../contexts/GameContext';
import ImageList from '../Image/ImageList';
import ImageUploader from '../Image/ImageUploader';
import ImageUpdate from '../Image/ImageUpdate';

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
        const newGame = {name: gameState.name, price: gameState.price, image: gameState.image};

        axios.post(url, newGame);
    }

    const updateGame = () =>{
        alert("Updating " + gameState.name + ", press f5 to see changes");
        //alert("update instead: " + gameState.id);
        const url = "https://localhost:5001/Games";
        axios.put(`${url}/${gameState.id}`, gameState);

        

    }

    

    const clearFields = () =>{

        setGame({id: "0", name: "", price: 0, image: ""});

    }

    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => {
      
      setShow(false);
      //send data to parent here?
      
      setImage(imageState);
      setGame( {...gameState, image: imageState.filePath});      //setImage(imageState);
      //alert(imageState.filePath);
  
    }
    
    const handleShow = () => setShow(true);
     


    return (
        <section>
            <h3>Create or edit Game</h3>
            <label>Name</label>
            <input id="name" onChange={ handleChange } type="text" value = {gameState.name}/>
            <label>Price</label>
            <input id="price" onChange={ handleChange } type="text" value = {gameState.price}/>
            <label>Image</label>
            <img id="image" src={`https://localhost:5001/images/${gameState.image}`}/>




            <Button variant="primary" onClick={handleShow}>
                Choose Image
            </Button>
        
            <Modal animation={false} size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>React Bootstrap Modal Example - ItSolutionStuff.com</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ImageUploader/>
                    
                    <ImageList></ImageList>
                    <label>You have picked: {imageState.image}</label>


                </Modal.Body>
                <Modal.Footer>

                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            <input onClick={createOrUpdate} type="button" value="Save"/>
            <input onClick={clearFields} type="button" value="Clear"/>

        </section>

    )


}

export default GameCreate;