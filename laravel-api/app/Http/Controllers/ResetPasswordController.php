<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Http\RedirectResponse;

class ResetPasswordController extends Controller
{
    /**
     * Initialize the login action.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:4|confirmed',
        ]);
    
        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) use ($request) {
                error_log("aaaaaaa");
    
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();
    
                $user->setRememberToken(Str::random(60));
    
                event(new PasswordReset($user));
            }
        );
    
        if($status == Password::PASSWORD_RESET)
            response()->json([
                'success' => true,
                'msg' => 'The password was successfully changed.',
            ]);
        else
            response()->json([
                'success' => false,
                'msg' => 'There are some errors',
            ]);
    }

    public function redirectResetPassword(Request $request) : RedirectResponse {

        return redirect(config('constants.FRONTEND_URL') . '/#/auth/reset-password' . '?token=' . $request->token . '&email=' . $request->email);
    }
}
