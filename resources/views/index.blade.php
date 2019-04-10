@extends('layouts.layout')

@section('elegirImagen')

<div>

    <input type="file" id="real-file" hidden="hidden" >


      <form action="{{route('indice.update',1)}}" method="post">
          @method('put')
          @csrf
          <input type="input" id="archivo" name="valor" hidden="hidden" value="hola">
          <button type="button" id="custom-button" class="mr-5"><i class="fas fa-plus"></i> Elige una imagen</button>
          <button type="submit" id="custom-button" class="ml-5"><i class="fas fa-save"></i> Guardar Imagen</button>
      </form>
</div>

@endsection
@section('codigo')
<script>
    const realFileBtn = document.getElementById("real-file");
    const customBtn = document.getElementById("custom-button");
    const customTxt = document.getElementById("custom-text");

    customBtn.addEventListener("click", function() {
        realFileBtn.click();
    });

    realFileBtn.addEventListener("change", function() {

        let imagen = document.getElementById('#scream');
        let cadena = '';
        if (realFileBtn.value) {
            let path = "/img/" + realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

            for(let i = path.length-4; i <= path.length-1; i++){
              cadena += path[i];
            }
            $('#archivo').val(path);
        } else {
            $('#archivo').val('');
        }
    });
</script>
@endsection
