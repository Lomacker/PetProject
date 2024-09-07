<?php

use Illuminate\Support\Facades\Route;


// /api/users
Route::prefix('api')->group(function () {
    Route::get('/users', function () {
        return 'API RESP';
    });

    Route::get('/products', function () {
        return 'Product List';
    });
});

// /users
Route::group(['namespace' => 'App\Http\Controllers\User'], function () {
    Route::get('/users', 'IndexController');
});


Route::get('/{any}', function () {
    return view('layout');
})->where('any', '.*');




