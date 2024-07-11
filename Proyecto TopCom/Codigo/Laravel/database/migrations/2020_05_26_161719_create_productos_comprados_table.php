<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosCompradosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos_comprados', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idCompra');
            $table->unsignedBigInteger('idProducto');
            $table->integer('cantidad');
            $table->float('precio', 8, 2);
            $table->foreign('idCompra')->references('id')->on('compras');
            $table->foreign('idProducto')->references('id')->on('productos');
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
        Schema::dropIfExists('productos_comprados');
    }
}
