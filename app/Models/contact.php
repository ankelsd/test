<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class contact extends Model
{

    protected $table = 'contact';

    public function customer() {
		return $this->belongsTo('App\Models\customer','customer_id','customer_id');
    }
}
