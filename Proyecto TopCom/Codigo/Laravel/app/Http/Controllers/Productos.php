<?php

namespace App\Http\Controllers;

use App\Producto;
use Illuminate\Http\Request;

class Productos extends Controller{

    public function listadoProductos(){
        $productos = Producto::All()->sortBy('nombre');

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

    public function ofertas(){
        $productos = Producto::where('inventario', 1)->orderBy('nombre')->get();
        
        $listasProductos = array();
        $lista = array();

        $i = 1;

        foreach ($productos as $producto) {
            $datos = array();
            $datos['key'] = $producto->id;
            $datos['nombre'] = $producto->nombre;
            $datos['descripcion'] = $producto->descripcion;
            $datos['precioAnterior'] = number_format(floatval(str_replace(",", "", $producto->precio)) * 1.25, 2);
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

    public function Buscar($palabra)
    {
        $productos = Producto::where('nombre', 'like', '%' . $palabra . '%')->orderBy('nombre')->get();
        
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

    public function Producto($id){
        $producto = Producto::find($id);

        if ($producto == null) {
            return array();
        }

        $datosProducto = array();
        $datosProducto['nombre'] = $producto->nombre;
        $datosProducto['descripcion'] = $producto->descripcion;
        $datosProducto['precio'] = $producto->precio;
        $datosProducto['imagen'] = $producto->imagen;
        $datosProducto['inventario'] = $producto->inventario;

        return $datosProducto;
    }
}