for (let i = 0; i < 256; i++) {
    var div = document.createElement("square");
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.background = "black";
    div.style.border = "1px solid eggshell";
    document.getElementById("container").appendChild(div);
}


const gridItems = document.querySelectorAll("square");

gridItems.forEach((div) => {
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = randomColor();
});
});

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
        const userInput = prompt("Let's redesign the grid! Enter a number from 1-100:");
        const parsedInput = parseInt(userInput);
        if (userInput > 100) {
            alert("Please choose a number from 1-100 :)")   
        } else {
            clearGrid(); 
        }
        createGrid(parsedInput); 
        });

function clearGrid(){
    for (let i = 0; i < 256; i++) {
    while (container.firstChild) 
    container.removeChild(container.firstChild);
        }
    }

function createGrid(parsedInput) {
    for (let i = 0; i < parsedInput ** 2; i++) {
        var div = document.createElement("square");
        div.id = "square";
        div.style.width = (672 / parsedInput) - 2 + "px";
        div.style.height = (672 / parsedInput) - 2 + "px";
        div.style.background = "eggshell";
        div.style.border = "1px solid black";
        document.getElementById("container").appendChild(div);
    }
        document.querySelectorAll("square").forEach((div) => {
            div.addEventListener("mouseover", () => {
            div.style.backgroundColor = randomColor();
            })
        })
    };
        


      

    

      


    