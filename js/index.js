const $body = document.querySelector(`body`);
const $header = document.querySelector(`header`);
const $colorChangeButton = document.querySelector(`.color-change-button`)
const $footer = document.querySelector(`footer`);
const $navbarList = document.querySelector(`.navbar-list`);
const $sectionDescription = document.querySelector(`section`);



/* BOTON PARA CAMBIAR COLOR */
const myButton = document.createElement(`button`);
myButton.textContent=`Light Mode`
myButton.classList.add(`color-change-button`)
$navbarList.appendChild(myButton);

/* QUE EL BOTON CAMBIE SU TEXTO Y COLOR */

let active = false;
myButton.addEventListener('click', function() {

    if (active) {
        active = false;
        myButton.textContent = 'Light Mode';
    } 
    else {
        active = true;
        myButton.textContent = 'Dark Mode';
    }
});


/* FUNCION DE CAMBIO DE COLOR */

const handleColor =()=>{
    $header.classList.toggle(`dark`);
    $navbarList.classList.toggle(`dark`);
    myButton.classList.toggle(`dark`)
    $body.classList.toggle(`dark`);
    $sectionDescription.classList.toggle(`dark`);
}

myButton.addEventListener(`click`, handleColor)


/* RENDERIZADO DE CARDS */

const $sectionCourse = document.querySelector(`.section-course`)

const handleColorCard =()=>{
    $sectionCourse.classList.toggle(`dark`)
}
myButton.addEventListener(`click`, handleColorCard)

let arrProducts =[
    {
        name:`Curso de cocina principiantes`,
        img:`https://www.iggastronomia.com.ar/home/wp-content/uploads/2020/06/cursococinavirtual.jpg`,
        desc: `En este curso aprenderas todas las recetas para hacer facturas, tortas y todo tipo de panificados`,
        price: 15000 ,
        id: 1,
    },

    {
        name:`Curso React`,
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3Pinxg8XcMa0rb7p4H8C1howzVdUnD6UGDv-Yqcytw&s`,
        desc: `Aprende todo lo que podes hacer con React en pocas clases y eficientemente con el profe Raul                                     `,
        price: 10000 ,
        id: 2,
    },

    {
        name:`Curso de finanzas`,
        img:`https://4.bp.blogspot.com/-IRq4Puc6xPs/Vcfj0VnqrPI/AAAAAAAAVN8/630B2ewfzBA/s740/Cursos-gratis-economia-finanzas.jpg`,
        desc: `Aprende a manejar tu dinero, generar nuevos activos, entender graficos e invertir en la bolsa                                       `,
        price: 20000,
        id: 3,
    },

    {
        name:`Curso de meditacion`,
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhLHE9cksK1_vLwQ4cMf1RFQNVDYrsFYF54gy7_4aLA&s`,
        desc: `En este curso aprenderas como mejorar la concentracion y poder relajarte en todo momento`,
        price: 7000 ,
        id: 4,
    },

    {
        name:`Curso de agricultura`,
        img:`https://d3puay5pkxu9s4.cloudfront.net/curso/545/800_imagen.jpg`,
        desc: `Aprende todo sobre la agricultura, mejor tierra, metodos efectivos de riego y mas              `,
        price: 13500 ,
        id: 5,
    },

    {
        name:`Curso de Marketing digital`,
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShltGmQB8uBZbLCTSpNwlCfxwfcehb6eNMQgzDIAEhbA&s`,
        desc: `En este curso aprenderas a como vender tus productos en el mundo digital `,
        price: 16999 ,
        id: 6,
    },
];

const createCards =(arr)=>{
    return arr.map(prod =>{
        return ` 
        <div class="course-card" id="darkId">
            <img src="${prod.img}" alt="${prod.name}">
            <div class="course-desc">
                <h1>${prod.name}</h1>
                <p>${prod.desc}</p>
                <div class="buy">
                    <b>$${prod.price}</b>
                    <button><a href="#">Comprar</a></button>
                </div>
            </div>
        </div>
        `
    })
}


const renderCards = ()=>
    $sectionCourse.innerHTML=(createCards(arrProducts)).join(``);

const init = ()=>{
    renderCards()
}

init();

