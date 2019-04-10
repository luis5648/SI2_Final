<?php

namespace App\Http\Controllers;

use App\EscalaGrises;
use App\Interfaz;
use Illuminate\Http\Request;

class EscalaGrisesController extends Controller
{

    public function promedio()
    {
      $path = Interfaz::where('id','1')->first();
      return view('escalaDeGrises.promedio',compact('path'));
    }

    public function luminosidad(){
      $path = Interfaz::where('id','1')->first();
      return view('escalaDeGrises.luminosidad',compact('path'));
    }

    public function tonalidad(){
      $path = Interfaz::where('id','1')->first();
      return view('escalaDeGrises.tonalidad',compact('path'));
    }

    public function algoritmoLBP(){
      $path = Interfaz::where('id','1')->first();
      return view('algoritmoLBP.algoritmos',compact('path'));
    }
}
