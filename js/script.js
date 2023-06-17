const APIkey = "86cc3482"
const buscador = document.getElementById('buscador'); 
const btnBuscar = document.getElementById('btnBuscar');
const resultados = document.getElementById('resultados');
let card = '';
const cargando = document.getElementById('cargando');




btnBuscar.addEventListener('click', event => {
    event.preventDefault();
    cargando.innerHTML = `
    <div class="spinner-border text-white" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`
fetch(`https://www.omdbapi.com/?apikey=${APIkey}&s=${buscador.value}`) 
.then(respuesta =>{ //ARROW F()
    console.log(`Primer Then: response: ${respuesta}`, respuesta);
    console.log(`Status de la respuesta: ${respuesta.status}`);

    return respuesta.json();
    
})
.then(data=>{
    cargando.classList.add('d-none');
    resultados.innerHTML = '';
    resultados.innerHTML += `<p class="text-left text-white m-4">Results:</p>`
    for (let i = 0; i < data.Search.length; i++) {

        if(data.Search[i].Poster == "N/A"){
            data.Search[i].Poster = 'images/poster-not-found.jpg'
        }
        card +=
        `<div class="card col-12 col-md-6 col-lg-3" style="width: 18rem;">
        <img src="${data.Search[i].Poster}" class="card-img-top" alt="${data.Search[i].Title}">
        <div class="card-body d-flex">
            <span class="card-title text-center"><h5>${data.Search[i].Title}</h5></span>
            <span class="d-flex anio"><p>${data.Search[i].Year}</p></span>
        </div>
        <div class="card-footer">
            <button id="${data.Search[i].imdbID}" class="text-center h5 text-white guardar">Add to Watch Later<b> ♥</b></button>
            <button class="text-center text-white remover d-none">Remove from List</button>
        </div>
        </div>`
    }
    
    resultados.innerHTML += card;

    var guardadas = document.querySelectorAll(".guardar");
    var remover = document.querySelectorAll(".remover");

    /**
     * Funcion para agregar al localStorage las peliculas que el usuario quiere ver
     */
    const agregarVer = function(){ 
        if(localStorage.key(`${this.id}`) == this.id){
            this.innerText= "Watch Later";
        }else{
            localStorage.setItem(`${this.id}`, this.id);
            this.innerText= "Saved!";
        }
        
        this.nextElementSibling.classList.remove('d-none');
    }

    const removerPelicula = function(){
        pelicula = this.previousElementSibling.id;
        localStorage.removeItem(pelicula);
        this.classList.add('d-none');
        this.previousElementSibling.innerHTML = `Add to Watch Later<b> ♥</b>`;

    }

    guardadas.forEach(cardv=> {
        cardv.addEventListener("click", agregarVer);
    })

    
    remover.forEach(btn=>{
        btn.addEventListener("click", removerPelicula);
    })
  

    
    
    
}) 
.catch(error=>{console.log(`Hubo un error: ${error}`)
 resultados.innerHTML = `<div class="p-3"><p class="text-center text-white">No matches. Try with another title.</p></div>`
})
});





