<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserOtp extends Model
{

    public $timestamps = false;
    protected $table = 'USER_OTP';
    protected $primaryKey = null;
    public $incrementing = false;
    protected $fillable = [
        'email_id',
        'secret_code',
        'attempts',
        'isValid'
    ];
}
