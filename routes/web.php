<?php

use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {
    Route::get('/users', function () {
        return 'API RESP';
    });

    Route::get('/products', function () {
        return 'Product List';
    });
});

Route::group(['namespace' => 'App\Http\Controllers\User'], function () {
    Route::get('/users', 'IndexController');
});


Route::get('/{any}', function () {
    return view('layout');
})->where('any', '.*');




