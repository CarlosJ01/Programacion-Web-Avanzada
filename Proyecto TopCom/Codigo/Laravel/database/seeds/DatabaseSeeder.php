<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call(categorias::class);
        $this->call(Paqueterias::class);
        $this->call(Productos::class);
        $this->call(usarioRoot::class);
    }
}
