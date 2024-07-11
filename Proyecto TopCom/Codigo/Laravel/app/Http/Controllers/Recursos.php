<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Categorias;

class Recursos extends Controller
{
    public function fotosCarrusel(){
        $fotos = array();

        $fotos[] = '/imagenes/carrusel/carrusel01.png';
        $fotos[] = '/imagenes/carrusel/carrusel02.png';
        $fotos[] = '/imagenes/carrusel/carrusel03.png';
        
        return $fotos;
    }
    
    public function paguinaPrincipal()
    {
        $informacion = array();

        $informacion[] = Recursos::fotosCarrusel();
        $informacion[] = Categorias::lista();

        return $informacion;
    }

    public function AcercaNosotros(){
        $json = array();

        $informacion = array();
        $card = array();
        $card['key'] = 0;
        $card['titulo'] = 'Acerca de Nosotros';
        $card['texto'] = 'TopCom S.A. de C.V. es una empresa 100% mexicana con más de 30 años en el mercado, líder en la comercialización de Hardware, Somos una empresa consolidada y solvente que cuenta con sucursales en morelia, En cada una de nuestras sucursales, contamos con personal altamente capacitado en el área de cómputo, así como comprometidos en brindarle la asesoria y el trato calido y amable que usted merece, de la manera ofrecemos soluciones a su medida enfocadas a generar valor para nuestros clientes.';
        $informacion[] = $card;

        $card = array();
        $card['key'] = 1;
        $card['titulo'] = 'Misión';
        $card['texto'] = 'Satisfacer las necesidades tecnológicas de nuestros clientes, manteniendo nuestro liderazgo, mediante la comercialización de tecnología y a precios justos.';
        $informacion[] = $card;

        $card = array();
        $card['key'] = 2;
        $card['titulo'] = 'Visión';
        $card['texto'] = 'Llegar a ser la empresa líder a nivel nacional en la comercialización de tecnología, contando con la dedicación y esfuerzo de todos los miembros que integramos esta organización, mediante un proceso de mejora continua.';
        $informacion[] = $card;

        $json[] = $informacion; 

        $valores = array();
        $valor = array();
        $valor['key'] = 1;
        $valor['valor'] = 'Ética';
        $valor['texto'] = 'Estamos expresamente comprometidos a que toda nuestra actividad empresarial se realice con integridad y honestidad, siguiendo normas morales de conducta.';
        $valores[] = $valor;

        $valor['key'] = 2;
        $valor['valor'] = 'Espíritu de lucha';
        $valor['texto'] = 'La base para el éxito continuo es la obtención de buenos resultados. Un factor esencial para conseguirlo, es que tanto la organización como sus colaboradores realicen sus actividades con un enfoque dinámico y creativo.';
        $valores[] = $valor;

        $valor['key'] = 3;
        $valor['valor'] = 'Profesionalismo';
        $valor['texto'] = 'Implica una constante preparación a los desafíos que conlleva un entorno cambiante.';
        $valores[] = $valor;

        $valor['key'] = 4;
        $valor['valor'] = 'Calidad y servicio';
        $valor['texto'] = 'Realizar el máximo esfuerzo en atención a nuestros clientes, tratando de cumplir las expectativas con calidad y trato humano bajo la premisa de ganar-ganar.';
        $valores[] = $valor;

        $valor['key'] = 5;
        $valor['valor'] = 'Trabajo en equipo';
        $valor['texto'] = 'Es la causa común que debe prevalecer en todas nuestras actividades, incluyendo las relaciones con todos los integrantes de la organización, para efecto de lograr los objetivos de la empresa.';
        $valores[] = $valor;

        $valor['key'] = 6;
        $valor['valor'] = 'Innovación';
        $valor['texto'] = 'Mejorar nuestros procesos innovando con las mejores tecnologías, adaptándonos a las necesidades presentes y futuras de nuestros clientes.';
        $valores[] = $valor;

        $json[] = $valores;

        return $json;
    }

    public function mapaUbicacion(){
        $datos = array();
        $datos['urlMapa'] = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.550697859314!2d-101.15950928089343!3d19.6891650509159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d1206d0ee243d%3A0xf194d638ece8164f!2sPlaza%20Las%20Americas%20Morelia!5e0!3m2!1ses!2smx!4v1591070782674!5m2!1ses!2smx';
        $datos['Mensaje'] = 'Encuentranos en Av. Lic. Enrique Ramírez Miguel 670, Chapultepec Oriente, 58260 Morelia, Mich. Local: 501';

        return $datos;
    }
}
