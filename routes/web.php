<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {
    Route::get('/users', function () {
        return 'API RESP';
    });

    Route::get('/products', function () {
        return 'Product List';
    });
});

Route::get('/{any}', function () {
    return view('layout');
})->where('any', '.*');


Route::group(['namespace' => 'User'], function () {
    Route::get('/users', [UserController::class, 'index']);
});

