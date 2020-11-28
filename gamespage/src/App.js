import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [imageFile, setImageFile] = useState({});

  const handleChange = (e) => {
    setImageFile(e.target.files[0]);
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
  }

  return (

    <div>
      
      <Routes/>

      <div>
        <h3>Last opp bilde</h3>
        <label>Bilde</label>
        <input onChange={handleChange} type="file"></input>
        <input onClick={uploadImage} type="button" value="Last opp bilde"></input>
      </div>

    </div>
  );
}

export default App;
