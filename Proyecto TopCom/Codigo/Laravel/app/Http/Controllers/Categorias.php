<?php

namespace App\Http\Controllers;

use App\Categoria;
use App\Producto;

use Illuminate\Http\Request;

class Categorias extends Controller
{
    public static function lista()
    {
        $categorias = Categoria::All();
        $listaCategorias = array();
        $lista = array();
        
        $i = 1;

        foreach ($categorias as $categoria) {
            $datosCategoria = array();
            $datosCategoria['id'] = $categoria->id;
            $datosCategoria['nombre'] = $categoria->nombre;
            $datosCategoria['descripcion'] = $categoria->descripcion;
            $datosCategoria['imagen'] = $categoria->imagen;
            $datosCategoria['url'] = '/categoria/'.strtolower($categoria->nombre);

            $lista[] = $datosCategoria;

            if ($i % 3 == 0) {
                $listaCategorias[] = $lista;
                $lista = array();
            }
            $i++;
        }

        return $listaCategorias;
    }

    public function listaCategoria($id)
    {
        $productos = Producto::where('idCategoria', $id)->orderBy('nombre')->get();

        $listasProductos = array();
        $lista = array();
        
        $i = 1;

        foreach ($productos as $producto) {
            $datos = array();
            $datos['key'] = $producto->id;
            $datos['nombre'] = $producto->nombre;
            $datos['descripcion'] = $producto->descripcion;
            $datos['precio'] = $producto->precio;
            $datos['imagen'] = $producto->imagen;
            $datos['url'] = '/producto/'.$producto->id;

            $lista[] = $datos;

            if ($i % 4 == 0) {
                $listasProductos[] = $lista;
                $lista = array();
            }
            $i++;
        }

        if ($i-1 % 4 != 0) {
            $listasProductos[] = $lista;
        }

        return $listasProductos;
    }
}
