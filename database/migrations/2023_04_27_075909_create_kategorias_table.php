<?php

use App\Models\Kategoria;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kategorias', function (Blueprint $table) {
            $table->id();
            $table->string("nev");
            $table->timestamps();
        });

        Kategoria::create(["nev"=>"Ház"]);
        Kategoria::create(["nev"=>"Lakás"]);
        Kategoria::create(["nev"=>"Építési telek"]);
        Kategoria::create(["nev"=>"Garázs"]);
        Kategoria::create(["nev"=>"Mezőgazdasági terület"]);
        Kategoria::create(["nev"=>"Ipari ingatlan"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kategorias');
    }
};
