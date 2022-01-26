"use strict";

function css(elements, style) {
  elements.forEach(element => {
    for (const property in style)
    element.style[property] = style[property];
  })
}



const slide = document.querySelector("#second-slide");

const header = document.createElement("div");
const title = document.createElement("h5");
title.appendChild(document.createTextNode("Pouvoir 1"));
css([header], {
  'background-color' : 'purple',
  'color' : 'yellow',
  'height' : '15%',
  'text-align' : 'center'
});
const subtitle = document.createElement("p");
subtitle.appendChild(document.createTextNode("Nommer le premier ministre"));
css([subtitle], {
  'text-transform' : 'uppercase',
  'font-size' : '25%'
});
css([title], {
  'font-size' : '55%'
})


// info
let state = 0;

const infos = document.createElement("div");
css([infos], {
  'margin' : 'auto',
  'width' : '80%',
  'display' : 'flex',
  'justify-content' : 'center',
  'align-items' : 'center',
  'flex-direction' : 'column'
})
const img = document.createElement("img");
img.setAttribute("src", "img/circle.svg")
img.setAttribute("height", "150px");
css([img], {
  "opacity" : "35%",
  'display' : 'block',
  "margin" : "15px auto"
})
infos.appendChild(img);
let displayedText = document.createElement("p");
const originalText = "Moua est accueilli par un membre de l'Élysée. Le conseiller de l'ex président lui demande : </br><b>Comment souhaitez-vous gérer la France pendant l'absence momentanée du Président ?</b>";
displayedText.innerHTML = originalText;
css([displayedText],{
  'font-size' : '15%',
  'height' : '100px',
  'text-align' : 'center'
})
infos.appendChild(displayedText);


// buttons
const buttons = document.createElement("div");
buttons.classList.add("boutons");
buttons.style.height = "30%";
var x1 = document.createElement("BUTTON");
x1.innerHTML = "Je serai plus efficace en dirigeant seul.";
var x2 = document.createElement("BUTTON");
x2.innerHTML = "Je peux nommer un responsable.";
var x3 = document.createElement("BUTTON");
x3.innerHTML = "C'est mon gouvernement !<br/> Je nomme tous ceux qui y siègent !"

const t1 = "Mauvaise réponse ! La Vème république est une démocratie, et le Président ne peut pas..."
const t3 = "Bonne réponse ! Le président nomme un Premier Ministre qui lui propose ensuite des mi...."
const t2 = "Mauvaise réponse ! Il faut passer par un intermédiaire qui propose au président des ministres..."

const colors = ["red", "green", "red"];
function changeText(nb, txt, btn) {
  if (state === nb){
    displayedText.innerHTML = originalText;
    btn.style.backgroundColor = "purple";
    state = 0;
  }
  else {
    displayedText.innerHTML = txt;
    btn.style.backgroundColor = colors[nb-1];
    state = nb;
  }

}

x1.addEventListener("click", () => changeText(1, t1, x1));
x2.addEventListener("click", () => changeText(2, t2, x2));
x3.addEventListener("click", () => changeText(3, t3, x3));

css([x1, x2, x3], {
  'background-color' : 'purple',
  'color' : 'white',
  'width' : '80%',
  'height' : '50px',
  'padding': '10px 20px',
  'margin': '5% auto',
  'display' : 'block',
  'border': 'none',
  'border-radius': '12px',
})


buttons.appendChild(x1);
buttons.appendChild(x2);
buttons.appendChild(x3);


header.appendChild(title);
header.appendChild(subtitle);
slide.appendChild(header);
slide.appendChild(infos);
slide.appendChild(buttons);