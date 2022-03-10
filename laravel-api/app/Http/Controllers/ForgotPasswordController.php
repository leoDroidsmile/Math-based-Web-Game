<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    /**
     * Initialize the login action.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );
    
        if( $status === Password::RESET_LINK_SENT)
            return response()->json([
                'success' => true,
                'msg' => 'Reset Email was sent.',
            ]);
        else
            return response()->json([
                'success' => true,
                'msg' => 'Errors occured while sending email.',
            ]);
    }
}
