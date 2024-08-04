<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Panggil CustomerSeeder
        $this->call(CustomerSeeder::class);

        // Buat user dengan nama ifaaprillianto dan email ifa.aprillianto@gmail.com
        User::create([
            'name' => 'ifaaprillianto',
            'email' => 'ifa.aprillianto@gmail.com',
            'password' => Hash::make('password123'),
        ]);
    }
}
