<?php

namespace App\Http\Controllers;

use App\Interfaz;
use Illuminate\Http\Request;
use Session;

class InterfazController extends Controller
{

    public function index()
    {
        $path = Interfaz::where('id','1')->first();

        return view('layouts.layout',compact('path'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Interfaz  $interfaz
     * @return \Illuminate\Http\Response
     */
    public function show(Interfaz $interfaz)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Interfaz  $interfaz
     * @return \Illuminate\Http\Response
     */
    public function edit(Interfaz $interfaz)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Interfaz  $interfaz
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Interfaz $interfaz)
    {
      $request->validate([
        'valor' => 'required',
      ]);
      $interfaz = Interfaz::where('id','1')->first();
      $interfaz->path = $request->valor;
      
      $interfaz->update();
      Session::flash('message','Imagen Seleccionada');
      return redirect()->route('indice.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Interfaz  $interfaz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Interfaz $interfaz)
    {
        //
    }
}
