<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\UsersController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/projects", [ProjectsController::class, 'index']);
Route::get("/projects/{id}", [ProjectsController::class, 'show']);
Route::post("/projects", [ProjectsController::class, 'store']);
Route::put("/projects/{id}", [ProjectsController::class, 'update']);
Route::delete("/projects/{id}", [ProjectsController::class, 'destroy']);

Route::get("/users", [UsersController::class, 'index']);
Route::get("/users/{id}", [UsersController::class, 'show']);
Route::post("/users", [UsersController::class, 'store']);
Route::put("/users/{id}", [UsersController::class, 'update']);
Route::delete("/users/{id}", [UsersController::class, 'destroy']);
Route::post("/login", [UsersController::class, 'login']);
