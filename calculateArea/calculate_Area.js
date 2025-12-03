let length;
let width;

function calculRectange() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
}

document.getElementById('result').innerText = `le mètres carré de ce réctangle est de : ${area}`;