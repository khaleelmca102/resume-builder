<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ResumePersonalDataController;
use App\Http\Controllers\Api\ResumePdfController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/personaldata', [ResumePersonalDataController::class, 'index']);
    Route::post('/personaldata', [ResumePersonalDataController::class, 'update']);
    Route::post('/resume',[ResumePdfController::class, 'index']);
});


Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/checkemail', [AuthController::class, 'checkEmail']);
Route::post('/checkotp', [AuthController::class, 'checkOtp']);
Route::post('/setuser', [AuthController::class, 'signUp']);
Route::post('/login', [AuthController::class, 'login']);

//Route::get('/resume',[ResumePdfController::class, 'index']);