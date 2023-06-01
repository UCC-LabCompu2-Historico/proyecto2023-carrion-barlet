/* Descripción de que hace la función
* @method Nombre de la función
* @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
* @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
* @return Valor que retorna
*/

const ciudades = ["Buenos Aires", "New York", "Londres", "Paris"];
const coordX = [215,150,320, 330];
const coordY = [400,180,132,147];

function verifOrigen(origen){
    var flag=0;
    for (var i = 0; i < ciudades.length; i++) {
        if (origen === ciudades[i]) {
            flag = 1
        }
    }
    if (flag === 1) {
    }
    else {
        alert("AirFacu no vuela a este origen");
        document.getElementById("origen").value=''
    }
}

function verifDestino(destino){
    var flug=0;
    for (var i = 0; i < ciudades.length; i++) {
        if (destino === ciudades[i]) {
            flug = 1
        }
    }
    if (flug === 1) {
    }
    else {
        alert("AirFacu no vuela a este destino");
        document.getElementById("destino").value=''
    }
}
/*
function showMap() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "imagenes/continentes-de-la-tierra.png";
    ctx.drawImage(img, 0, 100, 512, 300, 0,0, 768, 540);
    ctx.beginPath();
}*/

function comprar(){
    drawMap();
    precio();
}

function drawMap() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "imagenes/continentes-de-la-tierra.png";
    ctx.drawImage(img, 0, 100, 512, 300, 0, 0, 768, 540);
    ctx.beginPath();
    let origen = document.getElementById("origen").value;
    for (let i = 0; i < ciudades.length; i++) {
        if (origen === ciudades[i]) {
            ctx.fillStyle = "#35b70a"
            ctx.fillRect(coordX[i], coordY[i], 10, 10)
            ctx.moveTo(coordX[i], coordY[i]);
        }
    }
    let destino = document.getElementById("destino").value;
    for (let i = 0; i < ciudades.length; i++) {
        if (destino === ciudades[i]) {
            ctx.fillStyle = "#ce0505"
            ctx.fillRect(coordX[i], coordY[i], 10, 10)
            ctx.lineTo(coordX[i], coordY[i]);
            ctx.strokeStyle = "#1f3cad";
            ctx.lineWidth = 3;
            ctx.closePath();
            ctx.stroke();
        }
    }
}

function precio(){
    let personas = document.getElementById("nb_personas").value;
    let equipaje = document.getElementById("nb_equipaje").value;
    let precio_billete = 1000;
    let precio_equipaje = equipaje * 100;
    document.getElementById('precio_billete').innerText = (precio_billete * personas + precio_equipaje).toString();
}

