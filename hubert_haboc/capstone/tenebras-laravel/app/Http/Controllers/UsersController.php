<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    function store(Request $request) 
    {
        $user = new User();

        $user->email = $request->email;
        $user->password = $request->password;
        $user->name = $request->name;
        $user->company_name = $request->company_name;       
        
        $user->save();

        return $user;
    }

    function index() 
    {
        return User::all();
    }

    function update(Request $request, $id) 
    {
        $user = User::find($id);

        $user->email = $request->email;
        $user->password = $request->password;
        $user->name = $request->name;
        $user->company_name = $request->company_name;
       
        $user->save();

        return $user;
    }

    function destroy($id) 
    {
        $user = User::find($id);
        $user-> delete();

        return "Deleted User";
    }

    function show($id) 
    {
        $user = User::find($id);

        if ($user == "") {
            return "User Not Found";
        }

        else return User::find($id);
    }

    function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $user = User::all()
         ->where('email', '=', $email)
         ->where('password', '=', $password)
         ->first();

        return $user;
    }
}
