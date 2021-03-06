<?php

use Illuminate\Http\Request;

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

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::get('categories', 'Api\CategoryController@index');
Route::post('categories', 'Api\CategoryController@store');
Route::get('categories/edit/{category}', 'Api\CategoryController@edit');
Route::put('categories/{category}', 'Api\CategoryController@update');
Route::delete('categories/{category}', 'Api\CategoryController@destroy');
