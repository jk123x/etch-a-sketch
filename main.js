var div = document.createElement("square");
div.style.width = "40px";
div.style.height = "40px";
div.style.background = "black";
document.getElementById("container").appendChild(div);

for (let i = 0; i < 255; i++) {
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
//div.addEventListener("mouseout", () => {
    //div.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${0.87})`
});
});
//});

//gridItems.forEach((div) => {
    //div.addEventListener("mouseout", () => {
        //div.style.background-color: rgba(0, 0, 0, 0.87);
    //});
    //});