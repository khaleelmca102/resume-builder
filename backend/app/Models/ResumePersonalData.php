<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumePersonalData extends Model
{
    use HasFactory;
    protected $table = 'RESUME_PERSONAL_DATA';    
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'full_name',
        'phone_number',
        'email_id',
        'profile_title',
        'state',
        'city',
        'zipcode',
        'profile_description',
        'created_dtm',
        'updated_dtm'
    ];
}
