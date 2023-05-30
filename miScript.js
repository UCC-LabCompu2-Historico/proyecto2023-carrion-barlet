function drawMap() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "imagenes/continentes-de-la-tierra.png";

    ctx.drawImage(img, 0, 100, 512, 300, 0,0, 768, 540);
}