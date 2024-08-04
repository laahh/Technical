<?php

namespace App\Services;

use GuzzleHttp\Client;

class TelegramService
{
    protected $client;
    protected $botToken;
    protected $chatId;

    public function __construct()
    {
        $this->client = new Client();
        $this->botToken = env('TELEGRAM_BOT_TOKEN');
        $this->chatId = env('TELEGRAM_CHANNEL_ID');
    }

    /**
     * Kirim pesan ke channel Telegram.
     *
     * @param string $message
     * @return void
     */
    public function sendMessage($message)
    {
        $url = "https://api.telegram.org/bot{$this->botToken}/sendMessage";
        $this->client->post($url, [
            'json' => [
                'chat_id' => $this->chatId,
                'text' => $message,
            ],
        ]);
    }
}
