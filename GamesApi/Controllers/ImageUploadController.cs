using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GamesApi.Controllers {

    [ApiController]
    [Route("[controller]")]
    public class ImageUploadController : ControllerBase {

        private readonly IWebHostEnvironment _hosting;

        public ImageUploadController(IWebHostEnvironment hosting){

            _hosting = hosting;
        }

        [HttpGet]
        public string Get(){

                return "Hei fra upload";
        }

        [HttpPost]
        [Route("[action]")] //axios må gjøre kall til uploadImage
        public void UploadImage(IFormFile file){
            string wwwrootPath = _hosting.WebRootPath;
            string absolutepath = Path.Combine( $"{wwwrootPath}/images/{file.FileName}");
            //file.ContentType, Guid.getGuid() genererer random navn
            using (var fileStream = new FileStream(absolutepath, FileMode.Create)){
                file.CopyTo(fileStream);
            }
        }
    }


}
