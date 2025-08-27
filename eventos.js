document.addEventListener('DOMContentLoaded', function(){
    const div = document.querySelector("div");
    const boton = document.querySelector('button');
    
    boton.addEventListener('click', function(event) {
    alert('Hola, soy el botón!');
    event.stopPropagation(); // Evita que el evento llegue al div
    });

    div.addEventListener('click', function(){
        alert("Hola, soy el div!");
    })
})