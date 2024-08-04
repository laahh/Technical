<?php

namespace Database\Factories;

use Carbon\Carbon;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{

    protected $model = Customer::class;

    public function definition()
    {
        $date = Carbon::now()->format('dmY');
        $newIncrement = $this->generateUniqueIncrement($date);

        return [
            'user_id' => $date . $newIncrement,
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'status' => $this->faker->randomElement(['NEW CUSTOMER', 'LOYAL CUSTOMER']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    /**
     * Generate a unique increment value for the user_id.
     *
     * @param string $date
     * @return string
     */
    private function generateUniqueIncrement($date)
    {
        $cacheKey = 'customer_counter_' . $date;
        $increment = Cache::get($cacheKey, 0);

        // Update the counter and store it back in cache
        $newIncrement = str_pad($increment + 1, 3, '0', STR_PAD_LEFT);
        Cache::put($cacheKey, $increment + 1, now()->addMinutes(10));

        return $newIncrement;
    }
}
