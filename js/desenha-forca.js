letrasSeparadas = palavraSecreta(palavras);
let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");

function desenhaTraco(palavraSecreta) {
    tela.style.display = "block";

    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    let sorteiaPalavra;
    pincel.strokeStyle = "0A3871";
    pincel.beginPath();
    let eixo = 800 / letrasSeparadas.length;
    for (let i = 0; i < letrasSeparadas.length; i++) {
        pincel.moveTo(300 + eixo * i, 640);
        pincel.lineTo(350 + eixo * i, 640);
    }
    pincel.stroke();
    pincel.closePath();
    desenhaForca();
}

function desenhaLetras(i) {
    pincel.lineWidth = 6;
    pincel.font = "bold 56px Inter";
    pincel.fillStyle = "black";
    pincel.strokeStyle = "0A3871";

    let eixo = 800 / letrasSeparadas.length;
    pincel.fillText(letrasSeparadas[i], 305 + eixo * i, 620);
    pincel.stroke();
}

function desenhaLetraIncorreta(teclas, tentativas) {
    pincel.lineWidth = 6;
    pincel.font = "bold 30px Inter";
    pincel.fillStyle = "black";
    pincel.strokeStyle = "0A3871";

    let eixo = 800 / letrasSeparadas.length;
    pincel.fillText(teclas, 535 + 40 * (6 - tentativas), 710, 40);
    pincel.stroke();
}

function desenhaForca() {
    pincel.beginPath();
    pincel.moveTo(550, 500);
    pincel.lineTo(650, 500);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(600, 500);
    pincel.lineTo(600, 200);
    pincel.lineTo(680, 200);
    pincel.stroke();
}

function desenhaCabeca() {
    pincel.beginPath();
    pincel.arc(680, 240, 40, 0, Math.PI * 2);
    pincel.stroke();
}

function desenhaCorpo() {
    pincel.beginPath();
    pincel.moveTo(680, 280);
    pincel.lineTo(680, 440);
    pincel.stroke();
}

function desenhaBracoEsquerdo() {
    pincel.beginPath();
    pincel.moveTo(680, 280);
    pincel.lineTo(640, 320);
    pincel.stroke();
}

function desenhaBracoDireito() {
    pincel.beginPath();
    pincel.moveTo(680, 280);
    pincel.lineTo(720, 320);
    pincel.stroke();
}

function desenhaPernaEsquerda() {
    pincel.beginPath();
    pincel.moveTo(680, 440);
    pincel.lineTo(720, 480);
    pincel.stroke();
}

function desenhaPernaDireita() {
    pincel.beginPath();
    pincel.moveTo(680, 440);
    pincel.lineTo(640, 480);
    pincel.stroke();
}