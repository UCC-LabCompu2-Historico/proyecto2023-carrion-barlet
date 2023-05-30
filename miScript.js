/* Descripción de que hace la función
* @method Nombre de la función
* @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
* @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
* @return Valor que retorna
*/
function drawMap() {

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "imagenes/continentes-de-la-tierra.png";


    ctx.drawImage(img, 0, 100, 512, 300, 0,0, 768, 540);
    ctx.beginPath();

    let origen = document.getElementById("origen").value;

    if (origen==="Buenos Aires") {
        //buenos aires//
        ctx.fillStyle = "#69c2b8"
        ctx.fillRect(215, 400 , 10 , 10)
        ctx.moveTo(215,400);

        let destino = document.getElementById("destino").value;
        if (destino==="Buenos Aires") {
            //buenos aires//
            //MESSAGE D ERREUR A METTRE

        }
        else if (destino==="Nueva York") {
            //nueva york//
            ctx.fillStyle = "#a778d9"
            ctx.fillRect(150, 180 , 10 , 10)
            ctx.lineTo(150,180);
            ctx.strokeStyle="#ee4463";
            ctx.lineWidth=3;
            ctx.closePath();
            ctx.stroke();
            ctx.clearRect(10,10,100,100);
        }

        else if (destino==="Londres") {
            //londres//
            ctx.fillStyle = "#cb7ebc"
            ctx.fillRect(320, 132 , 10 , 10)
            ctx.lineTo(320,132);
            ctx.strokeStyle="#eebe44";
            ctx.lineWidth=3;
            ctx.closePath();
            ctx.stroke();
            ctx.clearRect(10,10,100,100);

        }
        else if (destino==="Paris") {
            //paris//
            ctx.fillStyle = "#5f1988"
            ctx.fillRect(330, 147 , 10 , 10)
            ctx.lineTo(330,147);
            ctx.strokeStyle="#69ee44";
            ctx.lineWidth=3;
            ctx.closePath();
            ctx.stroke();
            ctx.clearRect(100,100,100,100);


        }

    }
    else if (origen==="Nueva York") {
        //nueva york//
        ctx.fillStyle = "#0520ce"
        ctx.fillRect(150, 180 , 10 , 10)
        ctx.moveTo(150,180);
    }

    else if (origen==="Londres") {
        //londres//
        ctx.fillStyle = "#00abf1"
        ctx.fillRect(320, 132 , 10 , 10)
        ctx.moveTo(320,132);
    }
    else if (origen==="Paris") {
        //paris//
        ctx.fillStyle = "#5867c4"
        ctx.fillRect(330, 147 , 10 , 10)
        ctx.moveTo(330,147);
    }


    /*let destino = document.getElementById("destino").value;

    if (destino==="Buenos Aires") {
        //buenos aires//
        ctx.fillStyle = "#863063"
        ctx.fillRect(215, 400 , 10 , 10)
        ctx.lineTo(215,400);
        ctx.strokeStyle="#4488EE";
        ctx.lineWidth=3;
        ctx.closePath();
        ctx.stroke();

    }
    else if (destino==="Nueva York") {
        //nueva york//
        ctx.fillStyle = "#a778d9"
        ctx.fillRect(150, 180 , 10 , 10)
        ctx.lineTo(150,180);
        ctx.strokeStyle="#4488EE";
        ctx.lineWidth=3;
        ctx.closePath();
        ctx.stroke();

    }

    else if (destino==="Londres") {
        //londres//
        ctx.fillStyle = "#cb7ebc"
        ctx.fillRect(320, 132 , 10 , 10)
        ctx.lineTo(320,132);
        ctx.strokeStyle="#4488EE";
        ctx.lineWidth=3;
        ctx.closePath();
        ctx.stroke();

    }
    else if (destino==="Paris") {
        //paris//
        ctx.fillStyle = "#5f1988"
        ctx.fillRect(330, 147 , 10 , 10)
        ctx.lineTo(330,147);
        ctx.strokeStyle="#4488EE";
        ctx.lineWidth=3;
        ctx.closePath();
        ctx.stroke();

    }
    ctx.clearRect(10,10,100,100);*/




}