function escalaDeGrisesPromedio(ctx, imgData) {
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

function escalaGrisLuminosidad(ctx, imgData) {
    for (var i = 0; i < imgData.height; i++) {
        for (var j = 0; j < imgData.width; j++) {
            var x = (i * 4) * imgData.width + j * 4;
            var avg = ((0.299 * imgData.data[x]) + (0.587 * imgData.data[x + 1]) + (0.114 * imgData.data[x + 2]));
            imgData.data[x] = avg;
            imgData.data[x + 1] = avg;
            imgData.data[x + 2] = avg;
        }
    }
    return imgData;
}

function escalaGrisTonalidad(ctx, imgData) {
    for (var i = 0; i < imgData.height; i++) {
        for (var j = 0; j < imgData.width; j++) {

            var x = (i * 4) * imgData.width + j * 4;
            var valorMaximo, valorMinimo;

            if ((imgData.data[x] >= imgData.data[x + 1]) && (imgData.data[x] >= imgData.data[x + 2])) {
                valorMaximo = imgData.data[x];
                if (imgData.data[x + 1] >= imgData.data[x + 2]) {
                    valorMinimo = imgData.data[x + 2];
                } else {
                    valorMinimo = imgData.data[x + 1];
                }
            } else if ((imgData.data[x + 1] >= imgData.data[x]) && (imgData.data[x + 1] >= imgData.data[x + 2])) {
                valorMaximo = imgData.data[x + 1];
                if (imgData.data[x] >= imgData.data[x + 2]) {
                    valorMinimo = imgData.data[x + 2];
                } else {
                    valorMinimo = imgData.data[x];
                }
            } else if ((imgData.data[x + 2] >= imgData.data[x + 1]) && (imgData.data[x + 2] >= imgData.data[x])) {
                valorMaximo = imgData.data[x + 2];
                if (imgData.data[x + 1] >= imgData.data[x]) {
                    valorMinimo = imgData.data[x];
                } else {
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
