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
            $table->foreignId("kategoria")->references("id")->on("kategorias");
            $table->string("leiras");
            $table->date("hirdetesDatuma")->default(now());
            $table->boolean("tehermentes");
            $table->integer("ar");
            $table->string("kepUrl");
            $table->timestamps();
        });

        Ingatlan::create(["kategoria"=>1, "leiras"=>"Leiras1", "hirdetesDatuma"=>"2020-12-06", "tehermentes"=>true, "ar"=>10000000, "kepUrl"=>"https://i.pinimg.com/550x/ab/c8/b2/abc8b21982f0de8b686a499473de76f5.jpg"]);
        Ingatlan::create(["kategoria"=>2, "leiras"=>"Leiras2", "hirdetesDatuma"=>"2022-03-10", "tehermentes"=>true, "ar"=>1999999, "kepUrl"=>"https://www.wolfhaus.hu/assets/WOLF-AT/WOLF-Haus/Fertighaeuser-Seiten/Bungalow/Vivus/fertighaus-bungalow-vivus96__ResizedImageWzcwOCw0NjJd.jpg"]);
        Ingatlan::create(["kategoria"=>3, "leiras"=>"Leiras3", "hirdetesDatuma"=>"2021-10-15", "tehermentes"=>true, "ar"=>100000, "kepUrl"=>"https://royalingatlanstudio.hu/wp-content/uploads/2022/09/IMG_5390-2.jpg"]);
        Ingatlan::create(["kategoria"=>5, "leiras"=>"Leiras4", "hirdetesDatuma"=>"2022-01-06", "tehermentes"=>false, "ar"=>999999, "kepUrl"=>"https://www.szephazak.hu/image/?id=18246&ext=jpg&th=xl"]);
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
