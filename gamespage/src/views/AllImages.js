import {ImageProvider} from '../contexts/ImageContext';
import ImageList from '../components/Image/ImageList';
import ImageUploader from '../components/Image/ImageUploader';
import ImageUpdate from '../components/Image/ImageUpdate';



//OUTDATED: images only shown in modal in gamecreate





const AllImages = () => {


    return (

            <section>
                <h3>All Images</h3>

                <ImageUploader/>


                <ImageProvider>
                    <ImageList></ImageList>
                </ImageProvider>

            </section>

    )


}

export default AllImages;