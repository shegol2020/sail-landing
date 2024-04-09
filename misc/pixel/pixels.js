const canvas = document.querySelector(".canvas");
const eraser = document.querySelector(".eraser");
const chosenColor = document.querySelector(".chosen-color");

canvas.addEventListener("click", (e) => {
    if(eraser.checked){
        e.target.style.backgroundColor = "white";
    } else {
      e.target.style.backgroundColor = chosenColor.value;
    }
})
