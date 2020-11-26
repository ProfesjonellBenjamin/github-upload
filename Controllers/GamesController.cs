using GamesApi.Models;
using GamesApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace GamesApi.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase {

        private readonly GamesService _gamesService;

        public GamesController(GamesService gamesService){
            _gamesService = gamesService;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get(){
            return _gamesService.Get();
        }

        [HttpPost]
        public ActionResult<Game> Post(Game game){
            _gamesService.Create( game );
            return game;
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var Game = _gamesService.Get( id );

            if( Game == null){
                return NotFound();
            }

            _gamesService.Remove( Game.Id );
            return NoContent();
        }

        [HttpPut]
        public IActionResult Put(Game gameIn){
            var game = _gamesService.Get( gameIn.Id );

            if( game == null){
                return NotFound();
            }

            _gamesService.Update( game );
            return NoContent();
        }

    }

}