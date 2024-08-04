<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.auth');
    }


    public function login(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string',
            'password' => 'required|string',
        ]);

        // Ambil kredensial dari request
        $credentials = $request->only('name', 'password');

        // Coba login tanpa remember
        if (Auth::attempt($credentials)) {
            // Jika login berhasil dan request AJAX, kirim respon JSON
            if ($request->ajax()) {
                return response()->json(['message' => 'Successfully logged in', 'redirect' => '/dashboard']);
            }
            // Jika login berhasil dan bukan request AJAX, redirect ke dashboard
            return redirect()->intended('/dashboard');
        }

        // Jika login gagal dan request AJAX, kirim respon JSON dengan error
        if ($request->ajax()) {
            return response()->json(['errors' => ['name' => ['The provided credentials do not match our records.']]], 422);
        }

        // Jika login gagal dan bukan request AJAX, kembali dengan error
        return back()->withErrors([
            'name' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['message' => 'Successfully logged out']);
    }
}
