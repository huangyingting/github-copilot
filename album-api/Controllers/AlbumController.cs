using albumapi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Text.Json;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace albumapi.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumController : ControllerBase
    {
        // GET: api/album
        [HttpGet]
        public IActionResult Get()
        {
            var albums = Album.GetAll();

            return Ok(albums);
        }

        /// <summary>
        /// Get album by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/album/5
        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            // Call Album.GetAll() and filter result by id then return it
            var album = Album.GetAll().Find(album => album.Id == id);
            return Ok(album);  
        }

        // Search album by title and artist
        [HttpGet("search")]
        public IActionResult Search([FromQuery] string title, [FromQuery] string artist)
        {
            // Call Album.GetAll() and filter result by title and artist then return it
            var album = Album.GetAll().Find(album => album.Title == title && album.Artist == artist);
            return Ok(album);  
        }

        // Sort albums by title or artist
        [HttpGet("sort")]
        public IActionResult Sort([FromQuery] string by)
        {
            // Call Album.GetAll() and sort result by title or artist then return it
            var albums = Album.GetAll();
            if (by == "title")
            {
                albums.Sort((a, b) => a.Title.CompareTo(b.Title));
            }
            else if (by == "artist")
            {
                albums.Sort((a, b) => a.Artist.CompareTo(b.Artist));
            }
            return Ok(albums);  
        }
    }
}
