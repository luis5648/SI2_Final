
function mostrarGrafica(imgData, cadena){

var generarDatos = generateDataPoints(imgData);

var chart = new CanvasJS.Chart(cadena, {
  animationEnabled: true,
  title:{
    text: "Histograma"
  },
  axisX:{
    valueFormatString: "#",
    crosshair: {
      enabled: true,
      snapToDataPoint: true
    }
  },
  axisY: {
    title: "Pixeles",
    includeZero: false,
    valueFormatString: "#",
    crosshair: {
      enabled: true,
      snapToDataPoint: true,
      labelFormatter: function(e) {
        return CanvasJS.formatNumber(e.value, "#");
      }
    }
  },
  data: [{
    type: "area",
    xValueFormatString: "#",
    yValueFormatString: "#",
    dataPoints: generarDatos
  }]
});
chart.render();
}
function generateDataPoints(imgData) {
    arr = [];
    for (var i = 0; i < imgData.data.length; i += 4) {
        arr.push(
          { y: imgData.data[i], x: i }
        );
    }
    return arr;
}
