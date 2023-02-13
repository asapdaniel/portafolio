const textArea = document.querySelector(".text-area");
const mensaje =  document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar(stringencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringencriptada = stringencriptada

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringencriptada.includes(matrizCodigo[i][e])){
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][o],matrizCodigo[i][1])
        }
    }
    return stringencriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringdesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdesencriptada = stringdesencriptada

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptada.includes(matrizCodigo[i][e])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringdesencriptada
}
