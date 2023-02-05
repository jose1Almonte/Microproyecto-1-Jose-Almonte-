
// Procedemos a realizar el codigo de HERO (Carrusel, Slider)

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
// Insertamos la ultima imagen de primera
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveralaDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500)
}

function moveralaIzquierda(){
    // let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];

    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500)
}

btnRight.addEventListener('click', function(){
    moveralaDerecha();
});

btnLeft.addEventListener('click', function(){
    moveralaIzquierda();
});

setInterval(function(){
    moveralaDerecha();
}, 5000);


// Procedemos a realizar el código de SKILLS

// Javascript me va a ayudar a volver el siguiente string en un JSON
const languages = `[
    {
        "lenguaje": "Python",
        "Habilidad": 8,
        "Amor_al_programa": 8 
    },
    {
        "lenguaje": "Java",
        "Habilidad": 8,
        "Amor_al_programa": 9
    },
    {
        "lenguaje": "Csharp",
        "Habilidad": 5,
        "Amor_al_programa": 7
    }

]`;

// Hacemos que javascript vuelva al String en un Objeto
const jsonData = JSON.parse(languages);

//Obteniendo lista de Python
let Python = jsonData.filter(
    (codigo) => codigo.lenguaje == 'Python'
);
//Se toma la clave y el valor
let Python_lenguaje = {lenguaje:Python[0].lenguaje};
let Python_Habilidad = {Habilidad:Python[0].Habilidad};
let Python_Amor_al_programa = {Amor_al_programa:Python[0].Amor_al_programa};
//Se toman los valores de Python
Python_lenguaje = Python_lenguaje.lenguaje;
Python_Habilidad = Python_Habilidad.Habilidad;
Python_Amor_al_programa = Python_Amor_al_programa.Amor_al_programa;
console.log("Es Python")
console.log(Python_lenguaje);
console.log(Python_Habilidad);
console.log(Python_Amor_al_programa);



//Obteniendo lista de Java
let Java = jsonData.filter(
    (codigo) => codigo.lenguaje == 'Java'
);
//Se toma la clave y el valor
let Java_lenguaje = {lenguaje:Java[0].lenguaje};
let Java_Habilidad = {Habilidad:Java[0].Habilidad};
let Java_Amor_al_programa = {Amor_al_programa:Java[0].Amor_al_programa};
//Se toman los valores de Java
Java_lenguaje = Java_lenguaje.lenguaje;
Java_Habilidad = Java_Habilidad.Habilidad;
Java_Amor_al_programa = Java_Amor_al_programa.Amor_al_programa;
console.log("Es Java");
console.log(Java_lenguaje);
console.log(Java_Habilidad);
console.log(Java_Amor_al_programa);

//Obteniendo lista de Java
let Csharp = jsonData.filter(
    (codigo) => codigo.lenguaje == 'Csharp'
);
//Se toma la clave y el valor
let Csharp_lenguaje = {lenguaje:Csharp[0].lenguaje};
let Csharp_Habilidad = {Habilidad:Csharp[0].Habilidad};
let Csharp_Amor_al_programa = {Amor_al_programa:Csharp[0].Amor_al_programa};
//Se toman los valores de Java
Csharp_lenguaje = Csharp_lenguaje.lenguaje;
Csharp_Habilidad = Csharp_Habilidad.Habilidad;
Csharp_Amor_al_programa = Csharp_Amor_al_programa.Amor_al_programa;
console.log("Es Csharp");
console.log(Csharp_lenguaje);
console.log(Csharp_Habilidad);
console.log(Csharp_Amor_al_programa);

// Empezamos con el codigo que imprime la salida

const resultsContainerElementPython = document.getElementById("bloque1")
const resultsContainerElementJava = document.getElementById("bloque2")
const resultsContainerElementCsharp = document.getElementById("bloque3")

function printResults(lenguaje, Habilidad, Amor_al_programa, ContainerElement) {
    
    //Obtendremos las secciones que nos interesan

    ContainerElement.innerHTML = `
    <section class="Result_box">
                    
        <p class="parrafo_bloque">Lenguaje: ${lenguaje} </p>
        <p class="parrafo_bloque">Habilidad: ${Habilidad} de 10 </p>
        <p class="parrafo_bloque">Amor al Programa: ${Amor_al_programa} de 10 </p>

    </section>
    `

};

printResults(Python_lenguaje, Python_Habilidad, Python_Amor_al_programa, resultsContainerElementPython);
printResults(Java_lenguaje, Java_Habilidad, Java_Amor_al_programa, resultsContainerElementJava);
printResults(Csharp_lenguaje, Csharp_Habilidad, Csharp_Amor_al_programa, resultsContainerElementCsharp);





// Aqui se pasa la cosa a string
const newPython = JSON.stringify(Python);
console.log(newPython);