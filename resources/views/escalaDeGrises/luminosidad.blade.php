@extends('layouts.layout')

@section('content')
  <figure class="figure text-center">
      <canvas id="luminosidad" width="220" height="277" class="rounded float-right"></canvas>
      <figcaption class="text-right pieFoto">Escala de grises.</figcaption>
  </figure>

  <figure class="figure" >
      <canvas id="umbralL" width="220" height="277" class="rounded float-right"></canvas>
      <figcaption class="text-right pieFoto" id="umbralLuminosidad">Umbral.</figcaption>
  </figure>

  <div id="histogramaLuminosidad" class="tbHistograma" ></div>

  <div class="form-group row btnAccion">
    <div class="col-sm-10">
      <button type="button" class="btn btn-primary float-right" id="btnLuminosidad" OnClick="inicializarLuminosidad()">Procesar</button>
    </div>
  </div>
@endsection
@section('codigo')
  <script src="{{asset('/js/luminosidad/escalaDeGrisesLuminosidad.js')}}"></script>
@endsection
