let length;
let width;

function calculRectange() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `le mètres carré de ce réctangle est de : ${area}`;
}

let prix1;
let prix2;
let prix3;

function calculCaisse(){
    prix1 = parseFloat(document.getElementById('prix1').value);
    prix2 = parseFloat(document.getElementById('prix2').value);
    prix3 = parseFloat(document.getElementById('prix3').value);

    let total = prix1 + prix2 + prix3;
    document.getElementById('resultat').innerText = `le prix total est de : ${total}`
}