
let qrImage=document.getElementById("qrimage");
let userInput=document.getElementById("user-input");

function  generateQR() {
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userInput.value;
}
