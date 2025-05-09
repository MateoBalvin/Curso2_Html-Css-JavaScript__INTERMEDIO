let boton_ejemplo = document.querySelector(".boton-ejemplo");
let input_ejemplo = document.querySelector(".input-ejemplo");

boton_ejemplo.addEventListener("click",mostrar)

function mostrar(){
let parrafo2_ejemplo = document.createElement("p");
let div_ejemplo = document.querySelector(".ejemplo1-1")
div_ejemplo.appendChild(parrafo2_ejemplo)
parrafo2_ejemplo.innerHTML = "Un placar "+ input_ejemplo.value;
}