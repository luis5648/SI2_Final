function inicializarPromedio(){
  var c    = document.getElementById("promedio");
  var img  = document.getElementById("scream");

  c = modificarTamanio(c,img)

  var ctx  = c.getContext('2d');
  ctx.drawImage(img, 0, 0);

  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  imgData     = escalaDeGrisesPromedio(imgData);

  ctx.putImageData(imgData, 0, 0);

  mostrarGrafica(imgData,"histogramaPromedio");
  inicializarUmbral(imgData,img);
}

function inicializarUmbral(imgData,img){
  var c    = document.getElementById("umbralP");
  c = modificarTamanio(c,img)

  var ctx  = c.getContext('2d');
  let umbral  = document.querySelector("#umbralPromedio");

  ctx.drawImage(img, 0, 0);
  valor = 64;
  mostrarUmbral(imgData,ctx,valor);
  umbral.innerHTML = "Umbral de " + valor + ".";
}

function escalaDeGrisesPromedio(imgData){
  for (var i = 0; i < imgData.height; i++) {
      for (var j = 0; j < imgData.width; j++) {
          var x = (i * 4) * imgData.width + j * 4;
          var avg = (imgData.data[x] + imgData.data[x + 1] + imgData.data[x + 2]) / 3;
          imgData.data[x] = avg;
          imgData.data[x + 1] = avg;
          imgData.data[x + 2] = avg;
      }
  }
  return imgData;
}
