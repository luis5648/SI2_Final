<?php

use App\Interfaz;

Route::get('/', function () {
    $path = Interfaz::where('id','1')->first();
    return view('index',compact('path'));
})->name('inicio');

Route::resource('indice','InterfazController');

Route::get('promedios', 'EscalaGrisesController@promedio')->name('promedio.index');
Route::get('luminosidades', 'EscalaGrisesController@luminosidad')->name('luminosidades.index');
Route::get('tonalidades', 'EscalaGrisesController@tonalidad')->name('tonalidades.index');
Route::get('algoritmos', 'EscalaGrisesController@algoritmoLBP')->name('algoritmos.index');
