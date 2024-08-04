<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $newCustomers = Customer::where('status', 'NEW CUSTOMER')->count();
        $loyalCustomers = Customer::where('status', 'LOYAL CUSTOMER')->count();
        $customers = Customer::all()->count();
        return view('dashboard.index', compact('newCustomers', 'loyalCustomers', 'customers'));
    }

    public function getCustomerData()
    {
        $newCustomers = Customer::where('status', 'NEW CUSTOMER')->count();
        $loyalCustomers = Customer::where('status', 'LOYAL CUSTOMER')->count();

        return response()->json([
            'newCustomers' => $newCustomers,
            'loyalCustomers' => $loyalCustomers,
        ]);
    }
}
