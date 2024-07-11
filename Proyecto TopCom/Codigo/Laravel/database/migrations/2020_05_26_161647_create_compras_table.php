<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComprasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idUsuario');
            $table->string('numeroTargeta', 19);
            $table->text('direccionEnvio');
            $table->unsignedBigInteger('idPaqueteria');
            $table->date('fechaLlegada');
            $table->float('total', 8, 2);
            $table->foreign('idUsuario')->references('id')->on('usuarios');
            $table->foreign('idPaqueteria')->references('id')->on('paqueterias');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('compras');
    }
}
