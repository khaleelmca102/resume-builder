<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\CheckEmailRequest;
use App\Http\Requests\CheckOtpRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\UserOtp;

class AuthController extends Controller
{
    public static function cleanString($string, $replace_value = '-') {
		$string = str_replace('+', 'plus', $string);
		$string = str_replace('#', 'hash', $string);
		$string = str_replace(array('&amp','&'), 'and', $string);
		$string = str_replace(array('[\', \']'), '', $string);
		$string = preg_replace('/\[.*\]/U', '', $string);
		$string = preg_replace('/&(amp;)?#?[A-Za-z0-9]+;/i', '', $string);
		$string = htmlentities($string, ENT_COMPAT, 'utf-8');
		$string = preg_replace('/\s+/', ' ', $string);
		$string = preg_replace('/&([A-Za-z])(acute|uml|circ|grave|ring|cedil|slash|tilde|caron|lig|quot|rsquo);/i', '\\1', $string);
		$string = preg_replace(array('/[^A-Za-z0-9\+]/i', '/[-]+/'), $replace_value, $string);
		$string = preg_replace('/\_+/', $replace_value, $string);
		$string = strtolower(trim($string, $replace_value));
		return trim($string, $replace_value);
	}
	
	public static function generateCode($lenght=6, $type = "string"){
		$code = "";
		$charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		if ($type == 'numeric') {
			$charset = "0123456789";
		}
		for ($i = 0; $i < $lenght; $i++) {
			$random_int = mt_rand();
			$code .= $charset[$random_int % strlen($charset)];
		}
		return $code;
	}

    public function signUp(SignupRequest $request){
        $now = date('Y-m-d H:i:s');
        $data = $request->validated();
        $user = User::where('email_id', '=', $data['email_id'])->first();
        if ($user === null) {
            $user_title = $this->cleanString($data['name']);
            $user = User::create([
                'user_name'=> $data['name'],
                'user_title'=> $user_title,
                'email_id'=> $data['email_id'],
                'password'=> md5($data['password']),
                'created_time' => $now
            ]);
            
            $token = $user->createToken('main')->plainTextToken;
        } else {
            $token = null;
        }

        return response(compact('user','token'));
    }

    public function checkEmail(CheckEmailRequest $request){
        $data = $request->validated();
        $user = User::where('email_id', '=', $data['email_id'])->first();
        if ($user === null) {
            // $email_id = $data['email_id'];
            // $mailSubject = "Signup One Time Password (OTP)";
            // $mailContent = "Please use the following One Time Password (OTP) to signup with Tutorialspoint.";
            // $OTP = $this->generateCode();
            // $emailData = [
            //     "name" => "Guest",
            //     "otp" => $OTP,
            //     "mailContent" => $mailContent,
            // ];
            // $mailFrom = 'contact@tutorialspoint.com';
            // $mailFromName = 'Tutorialspoint';
            // \Mail::send('emails.otp', $emailData, function ($message) use ($mailSubject, $email_id, $mailFrom, $mailFromName) {
            //     $message->from($mailFrom, $mailFromName);
            //     $message->subject($mailSubject);
            //     $message->to($email_id);
            // });
            // UserOtp::updateOrCreate(['email_id' => $email_id], ['secret_code' => $OTP, 'attempts' => 0]);
            return response()->json(["message" => "OTP has been sent to the given email id"], 200);
        } else {
            return response()->json(["message" => "Email Id Already Exists"], 422);
        }
    }

    public function checkOtp(CheckOtpRequest $request){
        $data = $request->validated();
        $userOTP = UserOtp::where('email_id', '=', $data['email_id'])->first();
        $emailId = $data['email_id'];
        $secret_code = $data['otp'];
        if ($userOTP === null) {    
            return response()->json(["message" => "Email Id Not Exists"], 422);
        } else {
            $attemptsCount = $userOTP->attempts;
            if ($attemptsCount >= 3) {
                return response()->json([
                    "message" => "Validaton limited",
                    "errors" => ['message' =>['Too many failed attempts, Please try after sometime']],
                ], 422);
            }
            if ($userOTP->secret_code != $secret_code) {
                $attemptsCount += 1;
                UserOtp::where('email_id', $emailId)
                    ->limit(1)
                    ->update(['attempts' => $attemptsCount]);
                if ($attemptsCount == 3) {
                    UserOtp::where('email_id', $emailId)
                        ->limit(1)
                        ->update(['secret_code' => '']);
                }
                return response()->json([
                    "message" => "OTP Validation failed",
                    "errors" => ['message' => ['Invalid One time Password (OTP) ']],
                ], 422);
            }
            UserOtp::where('email_id', $emailId)
                ->limit(1)
                ->update([
                    'attempts' => $attemptsCount,
                    'isValid' => 1,
                    'secret_code' => '',
                    'attempts' => 0,
                ]);
            return response()->json(["message" => "OTP validation is successful"], 200);
        }
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
