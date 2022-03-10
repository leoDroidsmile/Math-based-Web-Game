<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Initialize the login action.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        if (! $token = Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => false,
                'msg' => 'Wrong credentials.',
            ]);
        }

        if(! Auth::user()->hasVerifiedEmail())
            return response()->json([
                'success' => false,
                'msg' => 'Email is not verified.',
            ]);

        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => Auth::setToken($token)->user(),
        ]);
    }
}
