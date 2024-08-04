<?php

namespace App\Mail;

use App\Models\Customer;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Contracts\Queue\ShouldQueue;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $customer;

    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }

    public function build()
    {
        return $this->markdown('emails.new_customer_welcome')
            ->with('promoCode', 'UNTUNGTERUS');
    }
}
