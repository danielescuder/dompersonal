//controlando etiquetas con el dom
//1. almacenar en memoria (crear un variable)
//la etiqueta que duiero controlar
let etiquetaimagen=document.getElementById("fotografia")

//2.controlando nuestras etiquetas
//2.1 controlar es cambiar la fuente (SRC) de una etiqueta
etiquetaimagen.src="./img/dragon.png"
//2.2 controlar es cambiar el contenido de texto de una etiqueta
let etiquetatitulo=document.getElementById("titulo")
etiquetatitulo.textContent="HISTORIA"

//2.3 controlar es agregar estilos
etiquetatitulo.classList.add('fuente','alineado')

//2.4 controlar es revomer estilos
let etiquetaparrafo=document.getElementById("parrafo")
etiquetaparrafo.classList.remove('text-danger')

//2.5 controlar es detectar eventos
let etiquetaboton=document.getElementById("boton")
etiquetaboton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})
