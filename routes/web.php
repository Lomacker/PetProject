<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('layout');
});

Route::group(['namespace' => 'User'], function () {
    Route::get('/users', [UserController::class, 'index']);
});

