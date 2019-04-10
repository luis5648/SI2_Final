function convertirLBP(imgData,ctx, mensaje) {
    let temp = new Array(imgData.height + 1);
    let contador = 0;

    for (var i = 0; i <= imgData.height + 1; i++) {
        temp[i] = new Array(imgData.width + 1);
        for (var j = 0; j <= imgData.width + 1; j++) {
            var x = (i * 4) * imgData.width + j * 4;
            if( (i == 0) || (i == imgData.height + 1) ){
              temp[i][j] = 1;
            }
            else if ( (j == 0) || (j == imgData.width + 1) ) {
              temp[i][j] = 1;
            }
            else{
              temp[i][j] = imgData.data[contador];
              contador+=4;
            }
        }
    }
    let valorBinario;
    let cont = 0;

    arrayBinario = new Array(imgData.width * imgData.height);

    for (var i = 1; i <= imgData.height; i++) {
        for (var j = 1; j <= imgData.width; j++) {
            if((temp[i][j] <= temp[i][j-1]) || (1 == temp[i][j-1])){
              valorBinario = "1";
            }else {
              valorBinario = "0";
            }

            if((temp[i][j] <= temp[i-1][j-1]) || (1 == temp[i-1][j-1])){
              valorBinario = "1" + valorBinario;
            }else {
              valorBinario = "0" + valorBinario;
            }

            if((temp[i][j] <= temp[i-1][j]) || (1 == temp[i-1][j])){
              valorBinario = "1" + valorBinario;
            }else {
              valorBinario = "0" + valorBinario;
            }

            if((temp[i][j] <= temp[i-1][j+1]) || (1 == temp[i-1][j+1])){
              valorBinario = "1" + valorBinario;
            }else {
              valorBinario = "0" + valorBinario;
            }

            if((temp[i][j] <= temp[i][j+1]) || (1 == temp[i][j+1])){
              valorBinario = "1" + valorBinario;
            }else {
              valorBinario = "0" + valorBinario;
            }

            if((temp[i][j] <= temp[i+1][j+1]) || (1 == temp[i+1][j+1])){
              valorBinario = "1" + valorBinario;
            }else {
              valorBinario = "0" + valorBinario;
            }

            if((temp[i][j] <= temp[i+1][j]) || (1 == temp[i+1][j])){
              valorBinario = "1" + valorBinario;
            }else {
              valorBinario = "0" + valorBinario;
            }

            if((temp[i][j] <= temp[i+1][j-1]) || (1 == temp[i+1][j-1])){
              valorBinario = "1" + valorBinario;
            }else {
              valorBinario = "0" + valorBinario;
            }
            var digit = parseInt(valorBinario, 2);
            arrayBinario[cont] = digit;
            cont++;
        }
    }
    var incremental = 0;

    for (var i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = arrayBinario[incremental];
      imgData.data[i+1] = arrayBinario[incremental];
      imgData.data[i+2] = arrayBinario[incremental];
      imgData.data[i+3] = 255;

      incremental++;
    }
    let txtLBP  = document.querySelector("#Informacion");
    txtLBP.innerHTML = "LBP " + mensaje;
    ctx.putImageData(imgData, 0, 0);
}
