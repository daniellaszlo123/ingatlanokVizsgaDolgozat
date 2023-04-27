<?php

namespace App\Http\Controllers;

use App\Models\Kategoria;
use Illuminate\Http\Request;

class KategoriaController extends Controller
{
    public function osszesKateg()
    {
        return response()->json(Kategoria::all());
    }

    public function egyKateg($id)
    {
        return response()->json(Kategoria::find($id));
    }

    public function kategTorles($id)
    {
        Kategoria::find($id)->delete();
    }

    public function ujKateg(Request $req)
    {
        $kateg = new Kategoria();
        $kateg->nev=$req->nev;
        $kateg->save();
    }

    public function kategModos($id, Request $req)
    {
        $kateg = Kategoria::find($id);
        $kateg->nev=$req->nev;
        $kateg->save();
    }
}
