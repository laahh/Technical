<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;

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

Route::get('/', function () {
    return view('welcome');
});


// auth
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');


// customers Master Data
Route::get('customers/index', [CustomerController::class, 'index'])->name('customers.index');
Route::get('customers/create', [CustomerController::class, 'create'])->name('customers.create');
Route::get('customers/{id}/edit', [CustomerController::class, 'edit'])->name('customers.edit');
Route::post('customers/store', [CustomerController::class, 'store'])->name('customers.store');
Route::delete('customers/delete/{id}', [CustomerController::class, 'destroy'])->name('customers.destroy');
Route::put('customers/update/{id}', [CustomerController::class, 'update'])->name('customers.update');


// dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('auth');
Route::get('/api/customers', [DashboardController::class, 'getCustomerData']);

// landingpage
Route::get('/{any}', function () {
    return view('landingpage.index');
})->where('any', '.*');
