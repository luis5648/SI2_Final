<?php

use Illuminate\Database\Seeder;

class Interfaz extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
     public function run()
     {
       $data = [
         ['path' => '/img/ficha5.jpg'],
       ];
       DB::table('interfazs')->insert($data);
     }
}
