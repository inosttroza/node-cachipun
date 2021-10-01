// const btnPapel = document.getElementById("papel");
// btnPapel.addEventListener("onclick", () => {
//     eleccionCachipun("papel");
// });

const _empate = 0;
const _gano = 1;
const _perdio = 2;

// const cambiaImagenInterval = () => setInterval(function(){
//     const serverOpcion = calcMachineOption();
//     machineImg.src = "./img/" + serverOpcion + ".svg";
// }, 100);

function eleccionCachipun(usuarioOpcion) {
    const resultText = document.getElementById("start-text");
    resultText.style.background = "white";
    const userImg = document.getElementById("user-img");  
    userImg.src = "./img/" + usuarioOpcion + ".png";
    resultText.innerHTML = "Escogiendo...";   
    //let intervalo = cambiaImagenInterval();

    setTimeout(function () {
        //clearInterval(intervalo);
        //const serverOpcion =calcMachineOption();

        const machineImg = document.getElementById("machine-img");        
        const serverOpcion = machineImg.src.split('/')[machineImg.src.split('/').length-1].split('.')[0].toLowerCase();
        machineImg.src = "./img/" + serverOpcion + ".png";       
        const result = calculaResultado(usuarioOpcion,serverOpcion);
    
        switch (result) {
            case _empate:
                resultText.innerHTML = "Empate";
                resultText.style.background = "silver";
                break;
            case _gano:
                resultText.innerHTML = "Ganaste!";
                resultText.style.background = "green";
                break;
            case _perdio:
                resultText.innerHTML = "Perdiste!";
                resultText.style.background = "red";
                break;
        }
    }, 2000);
}   

//reemplace por el modulo NPM 'cachipun-ino'
// function calcMachineOption() {
//     const number = Math.floor(Math.random() * 3);
//     switch (number) {
//         case 0:
//             return "piedra";
//         case 1:
//             return "papel";
//         case 2:
//             return "tijera";
//     }
// }

function calculaResultado(userOption, serverOpcion) {
    if (userOption === serverOpcion) {
        return _empate;
    } else if (userOption === "piedra") {
        if (serverOpcion === "papel") return _perdio;
        if (serverOpcion === "tijera") return _gano;
    } else if (userOption === "papel") {
        if (serverOpcion === "tijera") return _perdio;
        if (serverOpcion === "piedra") return _gano;
    } else if (userOption === "tijera") {
        if (serverOpcion === "piedra") return _perdio;
        if (serverOpcion === "papel") return _gano;
        }
  
}