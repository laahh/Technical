<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table = 'customers';

    // Menetapkan primary key
    protected $primaryKey = 'user_id';

    // Memberitahu Laravel bahwa primary key tidak otomatis increment
    public $incrementing = false;

    // Menetapkan tipe data dari primary key
    protected $keyType = 'string';
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'status',
    ];
}
