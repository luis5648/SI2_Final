@extends('layouts.layout')

@section('content')
  <figure class="figure text-center">
      <canvas id="tonalidad" width="220" height="277" class="rounded float-right"></canvas>
      <figcaption class="text-right pieFoto">Escala de grises.</figcaption>
  </figure>

  <figure class="figure" >
      <canvas id="umbralT" width="220" height="277" class="rounded float-right"></canvas>
      <figcaption class="text-right pieFoto" id="umbralTonalidad">Umbral.</figcaption>
  </figure>

  <div id="histogramaTonalidad" class="tbHistograma" ></div>

  <div class="form-group row btnAccion">
    <div class="col-sm-10">
      <button type="button" class="btn btn-primary float-right" id="btnTonalidad" onclick="inicializarTonalidad()">Procesar</button>
    </div>
  </div>
@endsection
@section('codigo')
  <script src="{{asset('/js/tonalidad/escalaDeGrisesTonalidad.js')}}"></script>
@endsection
