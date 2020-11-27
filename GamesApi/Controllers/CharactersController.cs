using GamesApi.Models;
using GamesApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace GamesApi.Controllers{

//ikke ferdig


    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase {

        private readonly CharactersService _charactersService;

        public CharactersController(CharactersService charactersService){
            _charactersService = charactersService;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get(){
            return _charactersService.Get();
        }

        [HttpPost]
        public ActionResult<Character> Post(Character character){
            _charactersService.Create( character );
            return character;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var Character = _charactersService.Get( id );

            if( Character == null){
                return NotFound();
            }

            _charactersService.Remove( Character.Id );
            return NoContent();
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Character characterIn){
            var selectedCharacter = _charactersService.Get( id );

            if( selectedCharacter == null){
                return NotFound();
            }

            _charactersService.Update( id, characterIn );
            return NoContent();
        }

    }

}