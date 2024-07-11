<?php

use Illuminate\Database\Seeder;
use App\Usuario;

class usarioRoot extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $usuarioRoot = new Usuario();
        $usuarioRoot->nombre = 'Mr. Root';
        $usuarioRoot->apellidos = ''; 
        $usuarioRoot->correo = 'root@mail.com';
        $usuarioRoot->contrasenia = bcrypt('root123');
        $usuarioRoot->save();
    }
}
