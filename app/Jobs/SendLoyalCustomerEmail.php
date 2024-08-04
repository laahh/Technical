<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use App\Mail\LoyalCustomerEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SendLoyalCustomerEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $customer;

    public function __construct($customer)
    {
        $this->customer = $customer;
    }

    public function handle()
    {
        Mail::to($this->customer->email)->send(new LoyalCustomerEmail($this->customer));
    }
}
