function drawMap() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "imagenes/continentes-de-la-tierra.png";

    ctx.drawImage(img, 0, 100, 512, 300, 0,0, 768, 540);

    let origen = document.getElementById("origen").value;

    if (origen==="Buenos Aires") {
        //buenos aires//
        ctx.fillStyle = "#FFDE59"
        ctx.fillRect(215, 400 , 10 , 10)
    }
    else if (origen==="New York") {
        //new york//
        ctx.fillStyle = "#ce0505"
        ctx.fillRect(150, 180 , 10 , 10)
    }

    else if (origen==="Londres") {
        //londres//
        ctx.fillStyle = "#00abf1"
        ctx.fillRect(320, 132 , 10 , 10)
    }
    else if (origen==="Paris") {
        //paris//
        ctx.fillStyle = "#5f1988"
        ctx.fillRect(330, 147 , 10 , 10)
    }

}