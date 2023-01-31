<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\ResumePersonalData;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class ResumePersonalDataController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = ResumePersonalData::where('user_id', $request->user_id)
            ->select('*')
            ->first();

        return response(compact('user'));
    }

   
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateResumeBasicInfoRequest  $request
     * @param  \App\Models\ResumePersonalData  $resumePersonalData
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {        
        $user = ResumePersonalData::where('user_id',$request->user_id)->first();
        $current_date_time = Carbon::now()->toDateTimeString(); 
        if ($user === null) {
            ResumePersonalData::create([
                'user_id'=>$request->user_id,
                'full_name'=>$request->full_name,
                'phone_number'=>$request->phone_number,
                'email_id'=>$request->email_id,
                'state'=>$request->state,
                'profile_title'=>$request->profile_title,
                'city'=>$request->city,
                'zipcode'=>$request->zipcode,
                'profile_description'=>$request->profile_description,
                'created_dtm'=>$current_date_time
            ]);
        } else {
            $user->update([
                'full_name'=>$request->full_name,
                'phone_number'=>$request->phone_number,
                'email_id'=>$request->email_id,
                'state'=>$request->state,
                'profile_title'=>$request->profile_title,
                'city'=>$request->city,
                'zipcode'=>$request->zipcode,
                'profile_description'=>$request->profile_description,
                'updated_dtm'=>$current_date_time
            ]);
        }
        return response()->json('Success');
    }

    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ResumePersonalData  $resumePersonalData
     * @return \Illuminate\Http\Response
     */
    public function destroy(ResumePersonalData $resumeBasicInfo)
    {
        //
    }
}
