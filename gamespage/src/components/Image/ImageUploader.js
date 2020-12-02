import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {React, useState, useContext, useEffect } from 'react';
import {ImageContext, ImageProvider, test} from '../../contexts/ImageContext';

const ImageUploader = () => {


    const [imageFile, setImageFile] = useState({});

    const {image} = useContext(ImageContext);
    const context = useContext(ImageContext);

    const [selectedImage, setSelectedImage] = image;

    //var myRef = React.createRef();

    const handleChange = (e) => {
      setImageFile(e.target.files[0]);

      var val = e.target.value.replace("C:\\fakepath\\", "");
      setSelectedImage({filePath: val});
    }
    
    const uploadImage = () => {
      let data = new FormData();
      data.append("file", imageFile);
  
      axios({
        method: "POST",
        url: "https://localhost:5001/ImageUpload/UploadImage",
        data: data,
        config: { headers: {"Content-Type": "multipart/form-data"} }
      });

      //update images

      //var val = document.getElementById('filePicker').value.replace("C:\\fakepath\\", "");
      //setSelectedImage({filePath: val});
      //re-render and get?
      
    }
    
    useEffect( () => {
      //alert(test);
  },[]);

    return (

      
      
      <div>
        
        <h3>Last opp bilde</h3>
        <label>Bilde</label>
        <input id="filePicker" onChange={handleChange} type="file"></input>
        <input onClick={uploadImage} type="button" value="Last opp bilde"></input>
    </div>
    )


}



export default ImageUploader;