<?php

namespace App\Http\Controllers;

use App\Models\Ingatlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class IngatlanController extends Controller
{
    public function osszesIngatlan()
    {
        return response()->json(Ingatlan::all());
    }

    public function osszesIngatlanKateggel()
    {
        return response()->json(DB::select(DB::raw("
            SELECT i.id, k.nev as kategoria, leiras, hirdetesDatuma, tehermentes, ar, kepUrl
            FROM ingatlans i INNER JOIN kategorias k ON i.kategoria=k.id
        ")));
    }

    public function kategNevSzerint($nev)
    {
        return response()->json(DB::select(DB::raw("
            SELECT k.id
            FROM kategorias k
            WHERE k.nev='@{$nev}'
        ")));
    }

    public function egyIngatlan($id)
    {
        return response()->json(Ingatlan::find($id));
    }

    public function ingatlanTorles($id)
    {
        Ingatlan::find($id)->delete();
    }

    public function ujIngatlan(Request $req)
    {
        $ingatlan = new Ingatlan();
        $kateg = $req->kategoria;
        $kategId = kategNevSzerint($kateg);
        $ingatlan->kategoria=$kategId[count($kategId)-1];
        $ingatlan->leiras=$req->leiras;
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
