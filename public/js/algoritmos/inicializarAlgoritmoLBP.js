document.querySelector("#btnAlgoritmoLBP_promedio").addEventListener("click", promedio_fue_escogido);
document.querySelector("#btnAlgoritmoLBP_luminosidad").addEventListener("click", luminosidad_fue_escogida);
document.querySelector("#btnAlgoritmoLBP_Tonalidad").addEventListener("click", tonalidad_fue_escogida);

function promedio_fue_escogido() {
    inicializarCanvas("promedio");
}

function luminosidad_fue_escogida() {
    inicializarCanvas("luminosidad");
}

function tonalidad_fue_escogida() {
    inicializarCanvas("tonalidad");
}

function inicializarCanvas(valor) {
    var c = document.getElementById("algoritmoLocalBinaryPattern");
    var cEG = document.getElementById("Escala_de_gris");
    var img = document.getElementById("scream");

    c = modificarTamanio(c, img);
    cEG = modificarTamanio(cEG, img);

    var ctx = c.getContext('2d');
    var ct = cEG.getContext('2d');

    ctx.drawImage(img, 0, 0);
    ct.drawImage(img, 0, 0);

    var imgData = ctx.getImageData(0, 0, c.width, c.height);

    if (valor === 'promedio') {
        imgData = escalaDeGrisesPromedio(imgData);

    } else if (valor === 'luminosidad') {
        imgData = escalaGrisLuminosidad(imgData);

    } else {
        imgData = escalaGrisTonalidad(imgData);

    }
    let escalaGris = document.querySelector("#escalaGris");
    escalaGris.innerHTML = "Escala de gris " + valor;

    ct.putImageData(imgData, 0, 0);
    inicializarConteo(imgData);
    convertirLBP(imgData,ctx,valor);
}

function inicializarConteo(imgData) {
    let anchoImagen = parseInt(imgData.width / 2);
    let largoImagen = imgData.height;

    imgData = mostrarUmbral(imgData, 0, 160)

    valorInicialLargo = parseInt((imgData.height) / 6);
    valorMedioLargo = parseInt((((imgData.height) / 6) + (imgData.height) / 6) + (imgData.height) / 6);
    valorFinalLargo = parseInt(imgData.height - (imgData.height / 6));

    let a = determinarLadoIzquierdo(anchoImagen,largoImagen,imgData,valorInicialLargo,valorMedioLargo,valorFinalLargo);
    alert(a);
}
function determinarLadoIzquierdo(anchoImagen,largoImagen,imgData,valorInicialLargo,valorMedioLargo,valorFinalLargo){
  let contadorIz = 0;

  valorInicialAncho = parseInt(((imgData.width / 2) / 6));
  valorMedioAncho = parseInt((((imgData.width / 2) / 6) + (imgData.width / 2) / 6) + ((imgData.width / 2) / 6));
  valorFinalAncho = parseInt(imgData.width / 2 - (imgData.width / 2) / 6);

  for (let i = 0; i < anchoImagen; i++) {
      for (let j = 0; j < largoImagen; j++) {
          var x = (i * 4) * imgData.width + j * 4;
          if ((valorInicialAncho == i) || (valorMedioAncho == i) || ((valorFinalAncho - 10) == i)) {
              if (((valorInicialLargo) == j) || (valorMedioLargo == j) || ((valorFinalLargo + 3) == j)) {
                  if (imgData.data[x] == 0) {
                      contadorIz++;
                  }
              }
          }
      }
  }

  return determinarLadoDerecho(anchoImagen,largoImagen,imgData,valorInicialLargo,valorMedioLargo,valorFinalLargo,contadorIz);
}

function determinarLadoDerecho(anchoImagen,largoImagen,imgData,valorInicialLargo,valorMedioLargo,valorFinalLargo,contadorIz){
  let contadorDer = 0;

  valorInicialAncho = parseInt(((imgData.width / 2) / 6) + (imgData.width / 2));
  valorMedioAncho = parseInt((((imgData.width / 2) / 6) + (imgData.width / 2) / 6) + ((imgData.width / 2) / 6)+ (imgData.width / 2));
  valorFinalAncho = parseInt(((imgData.width / 2) - ((imgData.width / 2) / 6)) + (imgData.width / 2));

  for (let i = 0; i < largoImagen; i++) {
    for (let j = anchoImagen; j < imgData.width; j++) {
          var x = (i * 4) * imgData.width + j * 4;
          if ((valorInicialAncho == j) || (valorMedioAncho == j) || ((valorFinalAncho - 10) == j)) {
              if (((valorInicialLargo) == i) || (valorMedioLargo == i) || ((valorFinalLargo + 3) == i)) {
                  if (imgData.data[x] == 0) {
                      contadorDer++;
                  }
              }
          }
      }
  }
  return (contadorIz+ "|" +contadorDer);
}
