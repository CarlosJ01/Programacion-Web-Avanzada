<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('lista-categorias', 'Categorias@lista');

Route::get('fotos-carrusel', 'Recursos@fotosCarrusel');

Route::get('informacion-paguina-principal', 'Recursos@paguinaPrincipal');

Route::get('acerca-de-nosotros', 'Recursos@AcercaNosotros');

Route::get('mapa-ubicacion', 'Recursos@mapaUbicacion');

Route::get('listado-productos', 'Productos@listadoProductos');

Route::get('ofertas', 'Productos@ofertas');

Route::get('busqueda/{palabra}', 'Productos@Buscar');

Route::get('categoria/{id}', 'Categorias@listaCategoria');

Route::get('producto/{id}', 'Productos@Producto');
