@extends('layouts.layout')

@section('content')

  <figure class="figure text-center">
      <canvas id="Escala_de_gris" width="220" height="277" class="rounded float-right"></canvas>
      <figcaption class="text-right pieFoto" id="escalaGris"></figcaption>
  </figure>

<figure class="figure text-center">
    <canvas id="algoritmoLocalBinaryPattern" width="220" height="277" class="rounded float-right"></canvas>
    <figcaption class="text-right pieFoto" id="Informacion"></figcaption>
</figure>

<br/>

<div class="container">
  <div class="row">

    <div class="col-sm">
      <button type="button" class="btn btn-secondary" id="btnAlgoritmoLBP_luminosidad">Detección por luminocidad</button>
    </div>
    
    <div class="col-sm">
      <button type="button" class="btn btn-secondary" id="btnAlgoritmoLBP_promedio" hidden="true">Promedio</button>
    </div>
    <div class="col-sm">
      <button type="button" class="btn btn-secondary" id="btnAlgoritmoLBP_Tonalidad" hidden="true">Tonalidad</button>
    </div> 
  </div>
</div>

@endsection
@section('codigo')
  <script src="{{asset('/js/tonalidad/escalaDeGrisesTonalidad.js')}}"></script>
  <script src="{{asset('/js/luminosidad/escalaDeGrisesLuminosidad.js')}}"></script>
  <script src="{{asset('/js/promedio/escalaDeGrisesPromedio.js')}}"></script>
  <script src="{{asset('/js/algoritmos/inicializarAlgoritmoLBP.js')}}"></script>
  <script src="{{asset('/js/algoritmos/algoritmoLBP.js')}}"></script>
@endsection
