<?php

namespace App\Http\Controllers;
use Carbon\Carbon;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\customer;
use App\Models\contact;
use Session;
use Auth;
use DB;

class UserManagementController extends Controller
{

	private $menu = 'client';
    private $module = 'client';
    private $controller = 'client';
    private $action = 'client';
    public function index(){
        $data['menu'] = $this->menu;

        $data['customer'] = customer::all();
        return view('client.view', $data);
    }

    public function client_add()
    {
        $data['menu'] = $this->menu;
        return view('client.add', $data);

    }

    public function client_store(Request $Request)
    {
        $token = $this->generateRandomStringpswd(8);
        $new_password = Hash::make($token);
        $client = new customer;
        $client->customer_name = $Request->client_name;
        $client->customer_email = $Request->client_email;
        $client->password = $new_password;
        $client->save();
        return redirect(route('user_management'))->with('dataupdated', 'Successfully Added');

    }

    public function contact_store(Request $Request)
    {
        $contact = new contact;
        $contact->contact_name = $Request->contact_name;
        $contact->contact_number = $Request->contact_number;
        $contact->customer_id = $Request->customer_id;
        $contact->save();
        return redirect(route('user_management'))->with('dataupdated', 'Successfully Added');

    }

    public function client_delete($id)
    {
        customer::where('customer_id',$id)->delete();
        return redirect(route('user_management'))->with('dataupdated', 'Successfully Deleted');

    }

    public function view_contacts($id)
    {
        $data['menu'] = $this->menu;

        $data['contact'] = contact::all();
        return view('client.contactview', $data);

    }

    public function add_contacts($id)
    {
        $data['menu'] = $this->menu;
        $data['id'] = $id;
        return view('client.contactadd', $data);

    }

    private function generateRandomStringpswd($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

}
