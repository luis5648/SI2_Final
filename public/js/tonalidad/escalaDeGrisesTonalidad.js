function inicializarTonalidad(){
  var c    = document.getElementById("tonalidad");
  var img  = document.getElementById("scream");
  c = modificarTamanio(c,img)
  var ctx  = c.getContext('2d');

  ctx.drawImage(img, 0, 0);

  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  imgData     = escalaGrisTonalidad(imgData);

  ctx.putImageData(imgData, 0, 0);

  mostrarGrafica(imgData,"histogramaTonalidad");
  inicializarUmbral(imgData,img);
}

function inicializarUmbral(imgData,img){
  var c    = document.getElementById("umbralT");
  c = modificarTamanio(c,img)
  var ctx  = c.getContext('2d');
  let umbral  = document.querySelector("#umbralTonalidad");

  ctx.drawImage(img, 0, 0);
  valor=100;
  mostrarUmbral(imgData,ctx,valor); 
  umbral.innerHTML = "Umbral de " + valor + ".";
}

function escalaGrisTonalidad(imgData){
  for (var i = 0; i < imgData.height; i++) {
      for (var j = 0; j < imgData.width; j++) {

          var x = (i * 4) * imgData.width + j * 4;
          var valorMaximo, valorMinimo;

          if((imgData.data[x] >= imgData.data[x + 1]) && (imgData.data[x] >= imgData.data[x + 2])){
            valorMaximo = imgData.data[x];
            if(imgData.data[x + 1] >= imgData.data[x + 2]){
              valorMinimo = imgData.data[x + 2];
            }else{
              valorMinimo = imgData.data[x + 1];
            }
          }else if((imgData.data[x + 1] >= imgData.data[x]) && (imgData.data[x + 1] >= imgData.data[x + 2])){
            valorMaximo = imgData.data[x + 1];
            if(imgData.data[x] >= imgData.data[x + 2]){
              valorMinimo = imgData.data[x + 2];
            }else{
              valorMinimo = imgData.data[x];
            }
          }else if((imgData.data[x + 2] >= imgData.data[x + 1]) && (imgData.data[x + 2] >= imgData.data[x])){
            valorMaximo = imgData.data[x + 2];
            if(imgData.data[x + 1] >= imgData.data[x]){
              valorMinimo = imgData.data[x];
            }else{
              valorMinimo = imgData.data[x + 1];
            }
          }
          var avg = (valorMinimo + valorMaximo) / 2;
          imgData.data[x] = avg;
          imgData.data[x + 1] = avg;
          imgData.data[x + 2] = avg;
      }
  }
  return imgData;
}
