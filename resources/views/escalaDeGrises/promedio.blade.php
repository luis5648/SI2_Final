@extends('layouts.layout')

@section('content')

  <figure class="figure text-center">
      <canvas id="promedio" class="rounded float-right"></canvas>
      <figcaption class="text-right pieFoto">Escala de grises.</figcaption>
  </figure>

  <figure class="figure" >
      <canvas id="umbralP"  class="rounded float-right"></canvas>
      <figcaption class="text-right pieFoto" id="umbralPromedio">Umbral.</figcaption>
  </figure>

  <div id="histogramaPromedio" class="tbHistograma" ></div>

  <div class="form-group row btnAccion">
    <div class="col-sm-10">
      <button type="button" class="btn btn-primary float-right" id="btnPromedio" onclick="inicializarPromedio()">Procesar</button>
    </div>
  </div>


@endsection
@section('codigo')
  <script src="{{asset('/js/promedio/escalaDeGrisesPromedio.js')}}"></script>
@endsection
