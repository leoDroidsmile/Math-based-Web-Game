<?php

use App\Http\Controllers\CheckSessionController;
use App\Http\Controllers\EditUserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\VerifyEmailController;
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

Route::post('/users/register', RegisterController::class)->name('register');
Route::post('/users/login', LoginController::class)->name('login');
Route::post('/users/forgot-password', ForgotPasswordController::class)->name('forgot-password');
Route::post('/users/reset-password', ResetPasswordController::class)->name('reset-password');
Route::post('/users/logout', LogoutController::class)->name('logout');
Route::post('/users/checkSession', CheckSessionController::class)->name('check-session');
Route::any('/users/edit', EditUserController::class)->name('edit-user');


// Verify email
Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');


// Resend link to verify email
Route::post('/email/verify/resend', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth:api', 'throttle:6,1'])->name('verification.send');


Route::get('profile', function () {
    // Only verified users may enter...
})->middleware('verified');