<?php

use Illuminate\Database\Seeder;
use App\Categoria;

class categorias extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nuevaCategoria = new Categoria();
        $nuevaCategoria->nombre = 'Monitores';
        $nuevaCategoria->descripcion = 'Lo mejor en monitores para gaming con altas tazas de refrescamineto';
        $nuevaCategoria->imagen = '/imagenes/categorias/monitor.jpg';
        $nuevaCategoria->save();

        $nuevaCategoria = new Categoria();
        $nuevaCategoria->nombre = 'Memorias';
        $nuevaCategoria->descripcion = 'Mejores marcas para mantener tu informacion';
        $nuevaCategoria->imagen = '/imagenes/categorias/memoria.jpg';
        $nuevaCategoria->save();

        $nuevaCategoria = new Categoria();
        $nuevaCategoria->nombre = 'Procesadores y Graficas';
        $nuevaCategoria->descripcion = 'Mejores procesadores y graficas para una mejor experencia en pc';
        $nuevaCategoria->imagen = '/imagenes/categorias/procesadores.jpg';
        $nuevaCategoria->save();

        $nuevaCategoria = new Categoria();
        $nuevaCategoria->nombre = 'Perifericos';
        $nuevaCategoria->descripcion = 'Mouse, teclados, auidfonos, cables,  etc... todo para tu pc';
        $nuevaCategoria->imagen = '/imagenes/categorias/mouse.jpg';
        $nuevaCategoria->save();

        $nuevaCategoria = new Categoria();
        $nuevaCategoria->nombre = 'Laptops';
        $nuevaCategoria->descripcion = 'Las mejores laptos para gaming y productividad';
        $nuevaCategoria->imagen = '/imagenes/categorias/laptop.jpg';
        $nuevaCategoria->save();

        $nuevaCategoria = new Categoria();
        $nuevaCategoria->nombre = 'Componentes';
        $nuevaCategoria->descripcion = 'Gabinetes, targetas madre y mucho mas ...';
        $nuevaCategoria->imagen = '/imagenes/categorias/componente.jpg';
        $nuevaCategoria->save();
    }
}
