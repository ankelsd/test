<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;
use Session;
use DB;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::COMMON_DASHBOARD;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');

    }
    public function username()
        {
            return 'email_id';
        }

    protected function credentials(Request $request) {
            return array_merge($request->only($this->username(), 'password'), ['status' => 1, 'deleted'=>0, 'enable_web_login'=>1]);
      }



    public function userlogin(){
        if(session('showloader')==1){
            $data['show_loader'] = 1;
        }else{
            $data['show_loader'] = 0;
        }
        session(['showloader'=> 1]);

		// $empRecd = DB::table('tbl_activesite')->where("siteid", $_SERVER["REMOTE_ADDR"])->count();
		// if($empRecd==0) {
		// 	$update = DB::table('tbl_activesite')->insert([ 'sitename' => '1', 'siteid' => $_SERVER["REMOTE_ADDR"], 'lastupdate' => date("Y-m-d H:m")]);
		// }

        return view('auth.login', $data);
    }

	public function logout(Request $request) {


	//vm_store_activity_history('5', '78', auth()->user()->user_id, 'dashboard', '', 'view', 'view', array(), get_user_name_user(auth()->user()->user_id).' logged out');


	  Auth::logout();
	  Session::flush();
	  return redirect()->route('userlogin');
	}
}
