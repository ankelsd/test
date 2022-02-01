<?php

namespace App\Http\Controllers;
use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Dashboard\Mainmodules;
use App\Models\contact;
use Session;
use Auth;
use DB;

class DashboardController extends Controller
{

	private $menu = 'dashboard';
    private $module = 'dashboard';
    private $controller = 'dashboard';
    private $action = 'dashboard';

    public function index($searchid="day"){
        $data['menu'] = $this->menu;
        $contact = contact::where('id','!=','');
        if($searchid == 'day')
        {
            $data['contact'] = $contact->whereDate('created_at','=',date('Y-m-d'))->get();
        }
        else if($searchid == 'week')
        {
            $data['contact'] =   $contact->whereBetween('created_at',[Carbon::now()->subWeek()->startOfWeek(), Carbon::now()->subWeek()->endOfWeek()])->get();

        }
        else if($searchid == 'month')
        {
            $data['contact'] =   $contact->whereMonth(
                'created_at', '=', Carbon::now()->subMonth()->month
            )->get();

        }

        return view('dashboard.view', $data);
    }
}
