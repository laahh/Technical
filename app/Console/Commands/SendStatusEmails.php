<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\Customer;
use Illuminate\Console\Command;
use App\Jobs\SendLoyalCustomerEmail;
use App\Jobs\SendWelcomeEmail;

class SendStatusEmails extends Command
{
    protected $signature = 'emails:send-status';
    protected $description = 'Send status emails to customers with specific status every hour';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        // Get customers with specific statuses
        $loyalCustomers = Customer::where('status', 'LOYAL CUSTOMER')
            ->where('updated_at', '<', Carbon::now()->subHour())
            ->get();

        $newCustomers = Customer::where('status', 'NEW CUSTOMER')
            ->where('updated_at', '<', Carbon::now()->subHour())
            ->get();

        // Dispatch job to send email for loyal customers
        foreach ($loyalCustomers as $customer) {
            SendLoyalCustomerEmail::dispatch($customer);
        }

        // Dispatch job to send email for new customers
        foreach ($newCustomers as $customer) {
            SendWelcomeEmail::dispatch($customer);
        }

        $this->info('Emails have been dispatched to loyal and new customers.');
    }
}
