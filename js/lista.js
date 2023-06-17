const APIkey = "86cc3482"
const listaMirar = document.getElementById('listaMirar');
const noresultados = document.getElementById('noresultados');
var horizontalCard = '';
const cargando = document.getElementById('cargando');

//Si localStorage tiene algo guardado
if(localStorage.length != 0){
    cargando.innerHTML = `
    <div class="spinner-border text-white" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`
    listaMirar.innerHTML += `<p class="text-center text-white fw-bold">Watch Later</p>`
    //recorro localStorage
    for (let m = 0; m < localStorage.length; m++) {

        //Si la key de localStorage incluye tt
        if(localStorage.key(m).includes('tt')){
            fetch(`https://www.omdbapi.com/?apikey=${APIkey}&i=${localStorage.key(m)}`)

        .then(respuesta=> {return respuesta.json();})

        .then(data=> {
            cargando.classList.add('d-none');
            
            if(data.Poster == "N/A"){
                data.Poster = 'images/poster-not-found.jpg'
            }
            
            horizontalCard = `
            <div class="card col-12 col-md-6 col-lg-3" style="width: 18rem;">
            <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
            <div class="card-body">
              <h5 class="card-title h3 py-3">${data.Title}</h5>
              <p class="card-text">${data.Plot}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Year: ${data.Year}</li>
              <li class="list-group-item">Genre: ${data.Genre}</li>
              <li class="list-group-item">Actors: ${data.Actors}</li>
              <li class="list-group-item">Director: ${data.Director}</li>
            </ul>
            <div class="card-footer">
            <button id="${data.imdbID}" class="text-center h5 text-white remover">Remove <b>-</b></button>
            </div>
            </div>
            `

            //si no hay data quiere decir que en localStorage hay algo guardado que no es un id
            if(data == ''){
                horizontalCard = ''
            }

        listaMirar.innerHTML += horizontalCard;

        var remover = document.querySelectorAll(".remover");

        const removerPelicula = function(){
            pelicula = this.id;
            localStorage.removeItem(pelicula);
            location.reload();
        }

        remover.forEach(btn=>{
            btn.addEventListener("click", removerPelicula);
        })
        })
    }
       }
//Si no tiene nada guardado
}else{
    noresultados.innerHTML = `
    <div class="mt-10 d-flex justify-content-center align-items-center row">
    <p class="text-center text-white px-5">You have not added any movies to your Watch Later list. Start by looking for a good movie.</p>
    <a class="btn" id="btnhome" href="index.html">Home Page</a>
    </div>`
}

// //Si tiene algo guardado pero no contiene tt
// if((listaMirar.innerHTML).includes('card')){
//     noresultados.style.display = "none";
    
// }else{
//     noresultados.innerHTML = `
// <div class="mt-10 d-flex justify-content-center align-items-center row">
// <p class="text-center text-white px-5">You have not added any movies to your Watch Later list. Start by looking for a good movie.</p>
// <a class="btn" id="btnhome" href="index.html">Home Page</a>
// </div>`
// }
