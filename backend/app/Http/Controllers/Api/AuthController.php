<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request){
        $data = $request->validated();
        $user = User::where('email', '=', $data['email'])->first();
        if ($user === null) {
            $user = User::create([
                'name'=> $data['name'],
                'email'=> $data['email']
            ]);
            $token = $user->createToken('main')->plainTextToken;
        } else {
            $token = null;
        }
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
    }

    public function login(LoginRequest $request){
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Provided Email or Password incorrect'
            ], 422);
        }
        /** @var User $user */
        $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user','token'));
    }    

    public function logout(Request $request){
        /** @var User $user */
        $user = $request->user();

        $request->user()->currentAccessToken()->delete();

        return response('',204);
    }
}
