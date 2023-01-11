let circle1 = document.getElementById("circle1")
let circle2 = document.getElementById("circle2")
let section1 = document.getElementById("section1")
let line1 = document.getElementById("vLine1")

window.onload = (event) => {
    reCountLineCoords(line1, circle1, circle2, section1)
};

window.onresize = (event) => reCountLineCoords(line1, circle1, circle2, section1)

function reCountLineCoords(line, circle1, circle2, section){
    let circle1Coords = circle1.getBoundingClientRect()
    let circle2Coords = circle2.getBoundingClientRect()
    let line1Coords = line.getBoundingClientRect()
    let section1Coords = section.getBoundingClientRect()

    line.style.left = (Number(circle1Coords.left) + Number(circle2Coords.width/2) - 2) + "px"
    line.style.top = (Number(circle1Coords.top) - Number(section1Coords.top) + Number(circle1Coords.height)) + "px"
    line.style.height = (Number(circle2Coords.top) - Number(circle1Coords.bottom)) + "px"
}





