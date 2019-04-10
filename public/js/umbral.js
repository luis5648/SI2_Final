function mostrarUmbral(imgData, ctx, umbral){
  for (var i = 0; i < imgData.data.length; i += 4) {
    if(imgData.data[i] >= umbral){
      imgData.data[i] = 255;
      imgData.data[i+1] = 255;
      imgData.data[i+2] = 255;
      imgData.data[i+3] = 255;
    }
    else{
      imgData.data[i] = 0;
      imgData.data[i+1] = 0;
      imgData.data[i+2] = 0;
      imgData.data[i+3] = 255;
    }
  }
  if(ctx != 0){
    ctx.putImageData(imgData, 0, 0);
  }
  else{
    return imgData;
  }
}
