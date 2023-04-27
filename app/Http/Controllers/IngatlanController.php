<?php

namespace App\Http\Controllers;

use App\Models\Ingatlan;
use Illuminate\Http\Request;

class IngatlanController extends Controller
{
    public function osszesIngatlan()
    {
        return response()->json(Ingatlan::all());
    }

    public function egyIngatlan($id)
    {
        return response()->json(Ingatlan::find($id));
    }

    public function ujIngatlan(Request $req)
    {
        $ingatlan = new Ingatlan();
        $ingatlan->kategoria=$req->kategoria;
        $ingatlan->leiras=$req->leiras;
        $ingatlan->hirdetesDatuma=$req->hirdetesDatuma;
        $ingatlan->tehermentes=$req->tehermentes;
        $ingatlan->ar=$req->ar;
        $ingatlan->kepUrl=$req->kepUrl;
        $ingatlan->save();
    }

    public function ingatlanModos($id, Request $req)
    {
        $ingatlan = Ingatlan::find($id);
        $ingatlan->kategoria=$req->kategoria;
        $ingatlan->leiras=$req->leiras;
        $ingatlan->hirdetesDatuma=$req->hirdetesDatuma;
        $ingatlan->tehermentes=$req->tehermentes;
        $ingatlan->ar=$req->ar;
        $ingatlan->kepUrl=$req->kepUrl;
        $ingatlan->save();
    }
}
