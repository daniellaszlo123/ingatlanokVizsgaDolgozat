<?php

use App\Models\Ingatlan;
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
        Schema::create('ingatlans', function (Blueprint $table) {
            $table->id();
            $table->foreignId("kategoria")->references("id")->on("kategoriaks");
            $table->string("leiras");
            $table->date("hirdetesDatuma");
            $table->boolean("tehermentes");
            $table->int("ar");
            $table->string("kepUrl");
            $table->timestamps();
        });

        Ingatlan::create(["kategoria"=>1, "leiras"=>"Leiras1", "hirdetesDatuma"=>"2020-12-06", "tehermentes"=>true, "ar"=>10000000, "kepUrl"=>"kepUrl1"]);
        Ingatlan::create(["kategoria"=>2, "leiras"=>"Leiras2", "hirdetesDatuma"=>"2022-03-10", "tehermentes"=>true, "ar"=>1999999, "kepUrl"=>"kepUrl2"]);
        Ingatlan::create(["kategoria"=>3, "leiras"=>"Leiras3", "hirdetesDatuma"=>"2021-10-15", "tehermentes"=>true, "ar"=>100000, "kepUrl"=>"kepUrl3"]);
        Ingatlan::create(["kategoria"=>5, "leiras"=>"Leiras4", "hirdetesDatuma"=>"2022-01-06", "tehermentes"=>false, "ar"=>999999, "kepUrl"=>"kepUrl4"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingatlans');
    }
};
