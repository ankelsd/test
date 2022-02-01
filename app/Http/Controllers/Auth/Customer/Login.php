<?php

namespace App\Http\Controllers\Auth\Customer;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Session;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Schema;

use Illuminate\Http\Request;

use App\User_model;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;



class Login extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    private $controller = 'login'; 
    private $module = 'login'; 
    

    public function __construct()
    {
        $this->model = new User_model();
    }
    public function index()
    {

        
        //store_activity( $this->module, $this->controller,'view', 'view', array(), 'Viewed Shipping port Page');
            if(session('showloader')==1){
                    $data['show_loader'] = 1;
                 }else{
                    $data['show_loader'] = 0;
                 }
            session(['showloader'=> 1]);
            return view('template.customer.login_main', $data);

       }
    

    /*
     * ------------------------------------------------------
     * To Process User Login 
     * ------------------------------------------------------
     * @param post array with username, password
     * @return json array with status,message 
     */

    private function login($username, $password){
            session(['showloader'=> 0]);
            $user = DB::table('customers')->where('customer_email', $username)->where('deleted',0)->first();
           
            
            if (!empty($user)) {

                if ( ( Hash::check($password, $user->password)) && $user->status == 1) {
                    $result = array(
                        'status' => true,
                        'message' => 'Login Successful',
                        'data' => array(
                            'user' => $user
                        )
                    );
                    // $data = array(
                    //     'user_id' => $user->user_id,
                    //     'session_ip' => $request->ip();(),
                    //     'login_at' => date('Y-m-d h:i:s'),
                    // );
                    // $this->usermodel->insertLoginActivity($data);

                } else {

                    $result = array(
                        'status' => false,
                        'message' => 'Login Failed',
                        'data' => array(
                            'user' => $user
                        )
                    );                  
                }
                 
                
            }else{
                $result = array(
                        'status' => false,
                        'message' => 'Login Failed',
                        
                    );    
            }
            return $result;
    }
    public function process_login(Request $request){
           
            session('showloader', 0);
            if ($request->ajax())  {

                $validator = Validator::make($request->all(), [
                    'username' => 'required',
                    'password' => 'required',
                    
                ]);
                if ($validator->fails()) {

                    flash_data_helper('error','You have entered an invalid Email or Password');
                    $result = array('status' => true, );

                }else{ 
                        $uname = xss_filter($request->post('username'));
                        $passw =  xss_filter($request->post('password'));
                        $response = $this->login($uname, $passw);
                        $credentials  = array(
                            'username' => $uname,
                            'password' => $passw,
                        );
                        if($response['status']) {
                       
            
                       
      
                            $user_session = array(
                                'customer_name'           => $response['data']['user']->customer_name,
                                'customer_id'        => $response['data']['user']->customer_id,
                                //Config('constants.SES_SITE_USER_IMAGE')     => $response['data']['user']->profile_image,
                                //Config('constants.SES_SITE_USER_ROLE')      => $response['data']['user']->role_id,
                                'is_customer_logged'   => TRUE
                            );
                            session(['customer' => $user_session]);
                            $result = array('status' => true, 'message' => 'You have successfully Logged in..' );
                            //$this->session->setFlashdata('error', $result['message']);
                            /**Stores activity using helper function start**/
                           // store_activity($response['data']['user']->user_id, $this->request->uri->getSegment(1), $this->request->uri->getSegment(1), $this->request->uri->getSegment(2),  $this->request->uri->getSegment(2), $this->request->getPost(), array('success'=>$response['data']['user']->name." Logged in successfully"));
                            /**Stores activity using helper function Ends**/
                       } else {
                            //$username = $_POST['username'];
                           // $user = $this->model->getUserByUsername($uname);
                           // if($user) {
                            //     /**Stores activity using helper function start**/
                            //     store_activity($user->user_id, $this->request->uri->getSegment(1), $this->request->uri->getSegment(1), $this->request->uri->getSegment(2),  $this->request->uri->getSegment(2), $this->request->getPost(), array('success'=>$user->name." tried to Log in and the attempt was failed"));
                            //     /**Stores activity using helper function Ends**/
                            //}
                            $result = array('status' => false, 'message' => 'You have entered an invalid Email or Password' );
                            flash_data_helper('error',$result['message']);
                       }
                }
            } else {
                
                     $result = array('status' => false, 'message' => 'You are not authorized to access' );
                     flash_data_helper('error',$result['message']);
            }

            echo json_encode($result);
        }

         public function logout () {
        // $value = session()->get('student');
           
            session()->forget('customer');            
            return redirect()->route('customer_sign_in');
        }

        
    
}
