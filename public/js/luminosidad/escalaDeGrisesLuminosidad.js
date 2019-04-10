function inicializarLuminosidad(){
  var c    = document.getElementById("luminosidad");
  var img  = document.getElementById("scream");
         c = modificarTamanio(c,img)
  var ctx  = c.getContext('2d');

  ctx.drawImage(img, 0, 0);

  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  imgData     = escalaGrisLuminosidad(imgData);

  ctx.putImageData(imgData, 0, 0);

  mostrarGrafica(imgData,"histogramaLuminosidad");
  inicializarUmbral(imgData,img);

}

function inicializarUmbral(imgData,img){
  var c    = document.getElementById("umbralL");
         c = modificarTamanio(c,img)
  var ctx  = c.getContext('2d');
  let umbral  = document.querySelector("#umbralLuminosidad");

  ctx.drawImage(img, 0, 0);
  valor = 80;
  mostrarUmbral(imgData,ctx,valor);
  umbral.innerHTML = "Umbral de " + valor + ".";
}

function escalaGrisLuminosidad(imgData){
  for (var i = 0; i < imgData.height; i++) {
      for (var j = 0; j < imgData.width; j++) {
          var x = (i * 4) * imgData.width + j * 4;
          var avg = ((0.299 * imgData.data[x]) + (0.587 * imgData.data[x + 1]) + (0.114 * imgData.data[x + 2]));
          imgData.data[x]     = avg;
          imgData.data[x + 1] = avg;
          imgData.data[x + 2] = avg;
      }
  }
  return imgData;
}
