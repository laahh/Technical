<?php

namespace App\Http\Controllers;

use App\Jobs\SendLoyalCustomerEmail;
use Carbon\Carbon;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Jobs\SendWelcomeEmail;
use App\Mail\NewCustomerWelcomeMail;
use Illuminate\Support\Facades\Mail;
use Yajra\DataTables\Facades\DataTables;
use Illuminate\Support\Facades\Validator;
use App\Services\TelegramService;


class CustomerController extends Controller
{

    protected $telegramService;

    public function __construct(TelegramService $telegramService)
    {
        $this->telegramService = $telegramService;
    }

    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = Customer::all();
            return Datatables::of($data)
                ->addIndexColumn()
                ->addColumn('action', function ($row) {
                    $btn = '<a href="javascript:void(0)" class="edit btn btn-primary btn-sm" data-id="' . $row->user_id . '" style="margin-right: 10px;">Edit</a>';
                    $btn .= '<a href="javascript:void(0)" class="delete btn btn-danger btn-sm ml-2" data-id="' . $row->user_id . '">Delete</a>';
                    return $btn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }
    }

    public function create()
    {
        return view('customers.create');
    }

    public function store(Request $request)
    {

        //pengecekan apakah customer_id ada atau tidak
        if ($request->customer_id) {
            $customer = Customer::find($request->customer_id);

            // Jika customer_id tidak ditemukan, kembalikan respon JSON dengan pesan error
            if (!$customer) {
                return response()->json(['error' => 'Customer not found.'], 404);
            }

            // Update customer jika customer_id ditemukan
            $customer->update([
                'name' => $request->name,
                'email' => $request->email,
                'status' => $request->status ?? 'LOYAL CUSTOMER'
            ]);

            // Dispatch job to send welcome email
            SendLoyalCustomerEmail::dispatch($customer);
            // Mengirim notifikasi ke Telegram
            $message = "🔔 Update Status Customer\n\n"
                . "📅 Tanggal: " . now()->format('d M Y H:i') . "\n"
                . "👤 Nama Customer: {$customer->name}\n"
                . "📧 Email: {$customer->email}\n"
                . "🔄 Status Baru: LOYAL CUSTOMER\n"
                . "✨ Status Lama: NEW CUSTOMER\n\n"
                . "Terima kasih atas perhatian Anda.";
            $this->telegramService->sendMessage($message);



            return response()->json([
                'success' => true,
                'message' => 'Customer updated successfully',
                'customer' => $customer
            ], 201);
        } else {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'email' => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }
            // Generate unique user_id based on today's date and current count
            $today = now()->format('dmY');
            $customerCountToday = Customer::whereDate('created_at', now()->format('Y-m-d'))->count(); 
            $user_id = $today . str_pad($customerCountToday + 1, 3, '0', STR_PAD_LEFT);


            // Create or update customer
            $customer = Customer::create([
                'user_id' => $user_id,
                'name' => $request->name,
                'email' => $request->email,
                'status' => $request->status ?? 'NEW CUSTOMER'
            ]);
            // Dispatch job to send welcome email

            SendWelcomeEmail::dispatch($customer);

            // Mengirim notifikasi ke Telegram
            $message = "🎉 Customer Baru Ditambahkan\n\n"
                . "📅 Tanggal: " . now()->format('d M Y H:i') . "\n"
                . "👤 Nama Customer: {$customer->name}\n"
                . "📧 Email: {$customer->email}\n"
                . "🔖 Status: New\n\n"
                . "Selamat datang dan terima kasih atas bergabungnya!";
            $this->telegramService->sendMessage($message);


            return response()->json([
                'success' => true,
                'message' => 'Customer created successfully',
                'customer' => $customer
            ], 201);
        }
    }


    public function edit($id)
    {
        $customer = Customer::findOrFail($id);
        return response()->json(['customer' => $customer]);
    }





    public function destroy($id)
    {
        $customer = Customer::find($id);
        if ($customer) {
            $customer->delete();
            return response()->json(['success' => 'Customer deleted successfully.']);
        }

        return response()->json(['error' => 'Customer not found.'], 404);
    }
}
