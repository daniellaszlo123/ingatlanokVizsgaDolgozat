<?php

use App\Http\Controllers\IngatlanController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/api/ingatlanok", [IngatlanController::class, "osszesIngatlanKateggel"]);
Route::post("/api/ujingatlan", [IngatlanController::class, "ujIngatlan"]);
Route::delete("/api/ingatlantorol", [IngatlanController::class, "ingatlanTorles"]);

Route::get('/', function () {
    return view('welcome');
});
