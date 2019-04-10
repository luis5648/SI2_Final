<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Proyecto</title>

    <!-- Bootstrap CSS CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <!-- Our Custom CSS -->
    <link rel="stylesheet" href="{{asset('css/navbarSide.css')}}">
    <link rel="stylesheet" href="{{asset('css/styles.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan" rel="stylesheet">
    <!-- Font Awesome JS -->
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>

</head>

<body>

    <div class="wrapper">
        <!-- Sidebar  
        <nav id="sidebar" class="barraLateral">
            <div class="sidebar-header">
                <a href="{{route('inicio')}}">
                    <h3>Sistemas Inteligentes</h3>
                </a>
                <strong>S.I.</strong>
            </div>

            <ul class="list-unstyled">
                <li class="{{ request()->is('promedios') ? 'active' : '' }}">
                    <a href="{{route('promedio.index')}}">
                        <i class="fas fa-images"></i>
                        Promedio
                    </a>
                </li>
                <li>
                    <a href="{{route('luminosidades.index')}}">
                        <i class="fas fa-images"></i>
                        Luminosidad
                    </a>
                </li>
                <li>
                    <a href="{{route('tonalidades.index')}}">
                        <i class="fas fa-images"></i>
                        Tonalidad
                    </a>
                </li>
                <li>
                    <a href="{{route('algoritmos.index')}}">
                        <i class="fas fa-images"></i>
                        Algoritmo Local Binary Pattern
                    </a>
                </li>
            </ul>
        </nav>
-->
        <!-- Page Content  -->
        <div id="content">

            
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">

                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <h3 style="color: white">Detección de fichas de dominó</h3>

                </div>
            </nav>
            
            @if (Session::has('message'))
            <div class="alert alert-info">{{Session::get('message')}}</div>
            @endif
            <figure class="figure">
                <img id="scream" src="{{asset($path->path)}}" alt="The Scream" class="rounded float-left">
                <figcaption class="text-right pieFoto">Imagen seleccionada</figcaption>

                <a style="margin-left: 35pt;" href="{{route('algoritmos.index')}}" class="btn btn-dark">algoritmos</a>
            </figure>


            @yield('elegirImagen')

            @yield('content')

        </div>
    </div>
    @yield('codigo')
    <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <!-- Popper.JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <!-- Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <!-- Codigo binarizacion -->
    <script src="{{asset('/js/canvasjs.min.js')}}"></script>
    <script src="{{asset('/js/umbral.js')}}"></script>
    <script src="{{asset('/js/histograma.js')}}"></script>
    <script src="{{asset('/js/modificarCanvas.js')}}"></script>


    <script type="text/javascript">
        $(document).ready(function() {
            $('#sidebarCollapse').on('click', function() {
                $('#sidebar').toggleClass('active');
            });
        });
    </script>

</html>
