<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserManagementController;

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

Route::pattern('id', '[0-9]+');
Auth::routes();

Route::get('/admin', 'Auth\LoginController@userlogin')->name('userlogin');
Route::get('/admin/logout', 'Auth\LoginController@logout')->name('admin_logout');

Route::get('/login', function () {
    return redirect('/admin');
})->name('login');

Route::get('/', function () {
    return view('welcome');
});

//Route::group(['middleware' => 'auth'], function(){

    Route::get('common/dashboard/{search?}', [DashboardController::class, 'index'])->name('common_dashboard');
    Route::get('user/list', [UserManagementController::class, 'index'])->name('user_management');
    Route::get('user/add', [UserManagementController::class, 'client_add'])->name('user_management_add');
    Route::post('user/store', [UserManagementController::class, 'client_store'])->name('user_management_store');
    Route::get('user/delete/{id}', [UserManagementController::class, 'client_delete'])->name('user_management_delete');

    Route::get('user/viewcontacts/{id}', [UserManagementController::class, 'view_contacts'])->name('view_contacts');
    Route::get('user/addcontacts/{id}', [UserManagementController::class, 'add_contacts'])->name('add_contacts');
    Route::post('contact/store', [UserManagementController::class, 'contact_store'])->name('contact_store');
//});
