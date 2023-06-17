let conexion = document.getElementById('conexion');

// browser no tiene conexion = estado offline
window.addEventListener('offline', event => {
    conexion.innerHTML = '<div id="mostrarConexion"><p class="text-white text-center">No internet connection</p></div>';
});

// browser esta conectado nuevamente = estado online
window.addEventListener('online', event => {
    conexion.innerHTML = '<div id="mostrarConexion"><p class="text-white text-center">You are back online</p></div>';
});

//
if ( !navigator.onLine ){
    conexion.innerHTML = '<div id="mostrarConexion"><p class="text-white text-center">No internet connection</p></div>';
}