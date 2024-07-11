<?php

use Illuminate\Database\Seeder;
use App\Paqueteria;

class Paqueterias extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nuevaPaqueteria = new Paqueteria();
        $nuevaPaqueteria->nombre = 'FedExp';
        $nuevaPaqueteria->diasEnvio = '3';
        $nuevaPaqueteria->precioEnvio = '150.00';
        $nuevaPaqueteria->save();
        
        $nuevaPaqueteria = new Paqueteria();
        $nuevaPaqueteria->nombre = 'DHL';
        $nuevaPaqueteria->diasEnvio = '5';
        $nuevaPaqueteria->precioEnvio = '125.00';
        $nuevaPaqueteria->save();

        $nuevaPaqueteria = new Paqueteria();
        $nuevaPaqueteria->nombre = 'Estafeta';
        $nuevaPaqueteria->diasEnvio = '7';
        $nuevaPaqueteria->precioEnvio = '100.00';
        $nuevaPaqueteria->save();
    }
}
