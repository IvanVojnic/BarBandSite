let circle1 = document.getElementById("circle1")
let circle2 = document.getElementById("circle2")
let circle3 = document.getElementById("circle3")
let section1 = document.getElementById("section1")
let line1 = document.getElementById("vLine1")
let line2 = document.getElementById("vLine2")
let line3 = document.getElementById("vLine3")
let secondHeader = document.getElementById("solHeader2")
let mainHeader = document.getElementById("myHeader")
let mainHeaderCoords = mainHeader.getBoundingClientRect()

window.onload = (event) => {
    reCountLineCoords(line1, circle1, circle2, section1)
    reCountLineCoords(line2, circle1, circle2, section1, true, false, secondHeader)
    reCountLineCoords(line3, circle2, circle3, section1, false, true, secondHeader)
};

window.onresize = (event) => {
    reCountLineCoords(line1, circle1, circle2, section1)
    reCountLineCoords(line2, circle1, circle2, section1, true, false, secondHeader)
    reCountLineCoords(line3, circle2, circle3, section1, false, true, secondHeader)
}

window.onscroll = (event) => {
    if (document.documentElement.scrollTop < 1) {
        mainHeader.classList.remove("headerFixed")
        mainHeader.classList.add("headerStatic")
    } else {
        mainHeader.classList.remove("headerStatic")
        mainHeader.classList.add("headerFixed")
    }
}

function reCountLineCoords(line, circle1, circle2, section, toHeader, fromHeader, header = null){
    let circle1Coords = circle1.getBoundingClientRect();
    let circle2Coords = circle2.getBoundingClientRect();
    let section1Coords = section.getBoundingClientRect();
    let headerCoords = null;
    if (header != null) {
        headerCoords = header.getBoundingClientRect();
    }

    if (toHeader) {
        line.style.left = (Number(circle2Coords.left) + Number(circle2Coords.width/2) - 2) + "px";
        line.style.top = (Number(circle2Coords.top) - Number(section1Coords.top) + Number(circle2Coords.height)) + "px";
        line.style.height = (Number(headerCoords.top) - Number(circle2Coords.bottom) - 20) + "px";
    } else if (fromHeader) {
        line.style.left = (Number(circle2Coords.left) + Number(circle2Coords.width/2) - 2) + "px";
        line.style.top = (Number(headerCoords.top) - Number(section1Coords.top) + Number(headerCoords.height) + 20) + "px";
        line.style.height = (Number(circle2Coords.top) - Number(headerCoords.bottom) - 20) + "px";
    } else {
        line.style.left = (Number(circle1Coords.left) + Number(circle1Coords.width/2) - 2) + "px";
        line.style.top = (Number(circle1Coords.top) - Number(section1Coords.top) + Number(circle1Coords.height)) + "px";
        line.style.height = (Number(circle2Coords.top) - Number(circle1Coords.bottom)) + "px";
    }
}





