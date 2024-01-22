<?php
use App\Http\Controllers\AccController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KompetisiController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\RoadmapController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboardadmin', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'verified'])->name('dashboardadmin');

Route::get('/blogpage', function(){
    return Inertia::render('BlogPage');
});

Route::get('/blog', function(){
    return Inertia::render('SectionBlog');
});

Route::get('/ourteam', function(){
    return Inertia::render('OurTeam');
});

Route::get('/roadmap', function(){
    return Inertia::render('RoadMap');
});

Route::post('/forum', [ForumController::class, 'storeForum']);

Route::get('/forums', [ForumController::class, 'index']);

Route::get('/dashboardforums', [ForumController::class,'showForum'])->name('dashboardforums');

Route::get('/forum/edit', [ForumController::class,'edit'])->middleware(['auth', 'verified'])->name('edit.forum');

Route::post('/forum/update', [ForumController::class,'update'])->middleware(['auth', 'verified'])->name('update.forum');

Route::post('/forum/delete', [ForumController::class,'destroy'])->middleware(['auth', 'verified'])->name('delete.forum');


Route::get('/kompe', [KompetisiController::class, 'index']);

Route::get('/home',[AccController::class, 'index'])->middleware('auth')->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
