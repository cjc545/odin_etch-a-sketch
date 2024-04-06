const divContainer = document.querySelector("div.container");
const canvasButton = document.querySelector("button.canvasSize")
let divRow = document.createElement ("div");
setAttributes(divRow, {"class": "divRow"});

const gridWidth = divContainer.clientWidth;
const gridHeight = divContainer.clientHeight;
let getCellHeight = (gridSize) => `${gridHeight / gridSize}px`;
let getCellWidth = (gridSize) => `${gridWidth / gridSize}px`;
let colour = "#ffac09"

let gridSize = 32;
//-------------------------------------------------------------------------------
divContainer.appendChild(divRow);
divRowFill(gridSize)
divRowDuplicate(gridSize);
getItemListeners();

function getItemListeners(){
  const divItem = document.getElementsByClassName("item")
  for(let i = 0; i < divItem.length; i++){
    divItem[i].addEventListener("mouseenter", () =>{
      console.log("hello")
    })
    divItem[i].addEventListener("mouseleave", () =>{
      divItem[i].style.backgroundColor = colour
    })
  }
}



canvasButton.addEventListener("click", canvasButtonFunctionality)

function canvasButtonFunctionality(){
  let input = window.prompt("How long would you like the canvas to be? (10 - 100")

  if(input >= 10 && input <= 100){
    divContainer.innerHTML = "";
    divRow.innerHTML = "";
    divContainer.appendChild(divRow);
    divRowFill(input)
    divRowDuplicate(input);
    getItemListeners()
  }
  else{canvasButtonFunctionality()}
}

function divRowFill(gridSize){
  for(let i = 0; i < gridSize; i++){
      let divItem = document.createElement(`div`)
      setAttributes(divItem, {"class": "item", "style": `width=${getCellWidth(gridSize)}, height=${getCellWidth(gridSize)}`})
      divRow.appendChild(divItem)
  }
}

function divRowDuplicate(gridSize){
  for(let i = 1; i < gridSize; i++){
    let divRowCloned = document.querySelector("div.divRow").cloneNode(true);
    setAttributes(divRowCloned, {"class": `divRow`})
    divContainer.appendChild(divRowCloned);
  }
}


function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  window.onkeydown = function(e) {
    if(e.keyCode == 16)
      colour = "#FFFFF"
    
  }
  window.onkeyup = function(e) {
    if(e.keyCode == 16){
      colour = "#ffac09"
    }
    if(e.keyCode == 82)
      colour = randomHexColorCode();
  }