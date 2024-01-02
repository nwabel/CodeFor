<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AccController extends Controller
{
    public function index(){
        if(Auth::id()){
            $usertype = Auth()->user()->usertype;

            if($usertype == 'user'){
                return redirect('/dashboard');
            }else if($usertype == 'admin'){
                return redirect('/dashboardadmin');
            }
        }
    }
}
