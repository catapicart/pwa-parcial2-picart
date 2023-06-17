let divTrailers = document.getElementById('trailers');

let trailers_infantiles =`<div id="carruselTitle"><p class="text-center text-white fw-bold">Family Friendly Movies</p></div>
<div class="container">
  <div class="trailer">
  <iframe width='500' src='https://www.youtube.com/embed/hXzcyx9V0xw' title='Elemental | Official Trailer' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
  <div class="trailer">
  <iframe width='500' src='https://www.youtube.com/embed/dNiCqNUH85U' title='Miraculous: Ladybug &amp; Cat Noir, The Movie | Official Teaser Trailer | Netflix' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
  <div class="trailer">
  <iframe width='500' src='https://www.youtube.com/embed/cqGjhVJWtEg' title='SPIDER-MAN: ACROSS THE SPIDER-VERSE - Official Trailer (HD)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
</div> 
`

const trailers_accion =
`<div id="carruselTitle"><p class="text-center text-white fw-bold">Action Movies</p></div>
<div id="container">
  <div class="trailer">
  <iframe width='500' src='https://www.youtube.com/embed/X0tOpBuYasI' title='Black Adam (Official Trailer 1)' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
  <div class="trailer">
  <iframe width='500' src='https://www.youtube.com/embed/M25zXBIUVr0' title='Plane (2023) Official Trailer' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
  <div class="trailer">
  <iframe width='500' src='https://www.youtube.com/embed/AIc671o9yCI' title='SHAZAM! FURY OF THE GODS - Official Trailer 2' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
</div> 
`

const trailers_drama = `<div id="carruselTitle"><p class="text-center text-white fw-bold">Drama Movies</p></div>
<div id="container">
  <div class="trailer">
    <iframe width='500' src='https://www.youtube.com/embed/q4rdxpc3wk0' title='Dog Gone | Official Trailer | Rob Lowe, Johnny Berchtold, Kimberly Williams-Paisley | Netflix' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
  <div class="trailer">
    <iframe width='500' src='https://www.youtube.com/embed/xTaIZo8OJYE' title='CREED III | Final Trailer' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
  <div class="trailer">
    <iframe width='500' src='https://www.youtube.com/embed/Ss8dY6xXNtI' title='AIR Official Trailer Warner Bros. UKIreland' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
  </div>
</div> 
`




var botonera = document.querySelectorAll(".btn-movies");
  
    botonera.forEach(btn=> {
        btn.addEventListener("click", event => {
            
            console.clear()
            switch (event.target.id) {
                case "ff":
                    divTrailers.innerHTML = trailers_infantiles;
                    break;
                case "ac":
                    divTrailers.innerHTML = trailers_accion;
                    break;
                case "dr":
                    divTrailers.innerHTML = trailers_drama;
                    break;
                default:
                    opcion = '';
                    break;
            }    
            
        });
    })
