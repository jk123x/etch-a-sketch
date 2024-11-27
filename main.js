for (let i = 0; i < 256; i++) {
    var div = document.createElement("square");
    div.style.width = "40px";
    div.style.height = "40px";
    div.style.background = "black";
    document.getElementById("container").appendChild(div);
}
const gridItems = document.querySelectorAll("square");

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

gridItems.forEach((div) => {
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = randomColor();
});
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
        const userInput = prompt("Let's redesign the grid! Enter a number from 1-100:");
        const parsedInput = parseInt(userInput);
        const userInputSquared = (parsedInput * parsedInput);
        console.log(userInputSquared);
        
        container.innerHTML = "";
        if (0 < userInput && userInput <= 100) {
            clearGrid(); 
            createGrid();
            function createGrid(userInputSquared) {
                for (let i = 0; i < userInputSquared; i++) {
                    const gridCell = document.createElement("div");
                    const gridsize = 672;
                    const widthOrHeight = `${(gridsize / parsedInput) - 2}px`;
                    const sketchArea = document.querySelector("container");
                    sketchArea.style.width = `${gridsize}px`;
                    sketchArea.style.height = `${gridsize}px`;
                    gridCell.style.width = gridCell.style.height = widthOrHeight;
                    container.appendChild(gridCell);
                    gridCell.forEach((div) => {
                        div.addEventListener("mouseover", () => {
                            div.style.backgroundColor = randomColor();
                        });
                    });
                }
            }
        } else {
            alert("Only type numbers from 1-100");
        }
        });
      
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
    

      
//document.getElementById("container").appendChild(div);

            //for (let i = 0; i < userInputSquared; i++) {
                //var div = document.createElement("square");
                //div.style.width = "100vh";
                //div.style.height = "100vh";
                //div.style.background = "black";
                //document.getElementById("container").appendChild(div);
           //}
        //});

    