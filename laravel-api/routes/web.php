<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VerifyEmailController;
use App\Http\Controllers\ResetPasswordController;

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

// Verify email
Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');


// Reset Passwowrd
Route::get('/reset-password/{token}', [ResetPasswordController::class, 'redirectResetPassword'])
    ->middleware(['guest'])
    ->name('password.reset');
