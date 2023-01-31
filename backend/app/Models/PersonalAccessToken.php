<?php

namespace App\Models;

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;
 
class PersonalAccessToken extends SanctumPersonalAccessToken
{
    protected $connection = 'mysql';
    protected $table = 'RESUME_ACCESS_TOKENS';
}