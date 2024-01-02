<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Kompetisi;
use App\Http\Resources\KompetisiCollection;

class KompetisiController extends Controller
{
    public function index(){
        $komp = new KompetisiCollection(Kompetisi::paginate(8));
        return Inertia::render('Kompetisi',[
            'data' => $komp,
        ]);

    }
}
