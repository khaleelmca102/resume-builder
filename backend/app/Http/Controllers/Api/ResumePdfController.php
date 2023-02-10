<?php

namespace App\Http\Controllers\Api;
use PDF;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ResumePersonalData;
use Storage;

class ResumePdfController extends Controller
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
        $user_id = 1;
        $user = ResumePersonalData::where('user_id', $user_id)
            ->select('*')
            ->first();
        //return view('resume-templates.e1')->render();    
        $pdf = PDF::loadView('resume-templates/e1', [
            'title' => $user->full_name,
            'description' => 'This is an example Laravel pdf tutorial.',
            'footer' => 'by <a href="https://codeanddeploy.com">codeanddeploy.com</a>'
        ]);
        
        $path_to_store = $user_id.'/resume.pdf';

        $content = $pdf->output();
        Storage::disk('public')->put('assets/resumes/'.$path_to_store,$content);
        $url = '/public/assets/resumes/'.$path_to_store;
        //$url = "https://d11lgjnokvb2au.cloudfront.net/4/resume.pdf"; 
       return response()->json(['pdfurl'=>$url, 'content'=>base64_encode($content)],201);
    }   
}
