
<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="icon" href="{{ asset('backend/_assets/images/favicon.ico')}}" type="image/x-icon">
<title>Test</title>
<link rel="stylesheet" href="{{ asset('backend/_assets/css/bootstrap.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/font-awesome.min.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/line-awesome.min.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/multiple-select.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/styles.css')}}">


<link rel="stylesheet" href="{{ asset('backend/_assets/css/bootstrap-datetimepicker.css')}}">

<link rel="stylesheet" href="{{ asset('backend/_assets/css/datatable/dataTables.bootstrap4.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/datatable/buttons.bootstrap4.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/jquery.fancybox.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/spectrum.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/jquery.accordion.css')}}">

<!--CSS relevent to this module-->
<link rel="stylesheet" href="{{ asset('backend/_assets/css/assets-styles.css')}}">
<link rel="stylesheet" href="{{ asset('backend/_assets/css/custom-style.css')}}">
</head>
<body class="d-flex flex-column h-100 cust-bg">
<div class="flex-shrink-0">
<div class="header-main">
	<div class="container-custom">
		<div class="hdr-top d-flex align-items-center justify-content-between">
			<div class="logo">
				<span class="logo-img"><a href="{{route('common_dashboard')}}"><img src=""></a></span>
				<span class="logo-txt">Test</span>
			</div>
			<div class="usr-profile d-flex align-items-center mt-2 mb-2">

					@if(Auth::check())
						@if(Auth::user()->role_id==8)
							<span class="prof-pic"><img src="{{ url('/uploads/user_image/'.Auth::user()->profile_image)}}" class="img-fluid"></span>
						@else
							@if(auth()->user()->role_id==1 && auth()->user()->user_id!=1)
								<span class="prof-pic"><img src="{{ url('/uploads/user_image/'.Auth::user()->profile_image)}}" class="img-fluid"></span>
							@else
							<span class="prof-pic"><img src="{{ url('/uploads/user_image/'.Auth::user()->profile_image)}}" class="img-fluid"></span>
							@endif
						@endif
						<div>
							<span class="usr-name">{{Auth::user()->first_name.' '.Auth::user()->last_name}}</span>
							{{--<span class="usr-posi">Admin</span>--}}

								<span class="usr-posi">
									{{ get_role_by_id(auth()->user()->role_id) }}
								</span>

						</div>
						<div class="dropdown">
							<button class="btn lgt-btn" type="button" data-toggle="dropdown">
								<i class="la la-angle-down"></i>
							</button>
							<div class="dropdown-menu log-out-mnu">
								@if(auth()->user()->role_id==1)
									<a class="dropdown-item" href="{{ route('assetgroups') }}" ><i class="la la-anchor"></i> Permissions</a>
								@endif
									<a class="dropdown-item" href="{{route('admin_change_password')}}"><i class="la la-lock"></i> Change Password</a>
									<a class="dropdown-item" href="{{ route('admin_logout') }}" ><i class="la la-power-off"></i> Logout</a>
							</div>
						</div>
						@endif



			</div>
		</div>
	</div><!--container-custom-->
	<div class="hdr-menu">
		<div class="container-custom">
			<nav class="navbar navbar-expand-lg cust-nav">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<a href="javascript:;" class="srch-btn-cust srch-btn-mob">
					<i class="la la-search"></i>
				</a>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">


						<li class="nav-item dropdown">
							<a class="nav-link" href="javascript:;" >Dashboard</a>

                        </li>
                        <li class="nav-item dropdown">
							<a class="nav-link" href="{{route('user_management')}}" >Clients</a>

                        </li>
                        <li class="nav-item dropdown">
							<a class="nav-link" href="javascript:;" >Logout</a>

					    </li>

					</ul>

				</div>
			</nav>
		</div>
	</div><!---hdr-menu-->


</div><!--header-main-->

<style>
.g-sett-box img{
	width:50px;
	height: 50px;
    display: block;
    margin: 0 auto;
}
</style>



<div class="content-area">
<div class="container-custom">
		<div class="row">
			<div class="col-md-12 mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5>Clients</h5>
                    <div>
                        <a href="{{route('user_management_add')}}" class="btn btn-sm btn-primary btn-st">Add New <i class="la la-plus"></i></a>
                    </div>
                </div>

			<div class="table-hdng d-flex align-items-center justify-content-between tble-ttle welcome-txts">
                <form method="POST" action="{{route('user_management_store')}}" name="client_module" id="client_module" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">


                                <div class="card-block">
                                    <div class="row">

                                        <div class="form-group col-md-4">
                                            <label class="form-label">Client Name</label>
                                            <input type="text" name="client_name" id="client_name"  value=""  class="clsCompCode form-control"  >

                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label">Client Email</label>
                                            <input type="text" name="client_email" id="client_email"  value=""  class="clsCompName form-control" >

                                        </div>



                                    </div>
                                </div><!--card-block-->
                                <div class="card-footer text-center border-top mt-0">

                                    @if( Request::segment(3)!='view')
                                        <button type="submit" id="submit1" class="btn btn-sm btn-primary btn-st">{{ Request::segment(3)=='create'?'Save':'Update' }} <i class="la la-check"></i></button>
                                        <a href="{{route('user_management')}}" class="btn btn-sm btn-secondary btn-st">{{ Request::segment(3)=='view'?'Back':'cancel' }} <i class="la la-close"></i></a>
                                    @else
                                        <a href="{{route('user_management')}}" class="btn btn-sm btn-primary btn-st">{{ Request::segment(3)=='view'?'Back':'cancel' }} <i class="la la-close"></i></a>
                                    @endif

                                </div>
                            </div><!--card-->
                        </div><!--col-->
                    </div><!--row-->
                </form>




                </div>

				<div class="row">





				</div><!-----Row---->
			</div><!-----Col---->

				@if (session()->has('message'))
					{!! session('message') !!}
				@endif

		</div>


</div><!--container-custom-->
</div><!--content-area-->
<!---Content End-------->


</div>
</div><!--flex-shrink-0-->
<div class="footer mt-auto">
	<div class="container-custom">
	<div class="d-flex align-items-center justify-content-between cnt">

		</div>
	</div>
</div>

<script src="{{ asset('backend/_assets/js/jquery-3.4.1.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/popper.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/bootstrap.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/bootstrap-dropdownhover.js')}}"></script>
<script src="{{ asset('backend/_assets/js/moment.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/bootstrap-datetimepicker.js')}}"></script>
<script src="{{ asset('backend/_assets/js/multiple-select.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/highcharts.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/jquery.dataTables.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/dataTables.bootstrap4.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/dataTables.buttons.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/buttons.bootstrap4.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/buttons.colVis.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/buttons.flash.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/jszip.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/buttons.html5.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/datatable/buttons.print.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/jquery.fancybox.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/jquery.bootstrap-touchspin.min.js')}}"></script>
<script src="{{ asset('backend/_assets/js/spectrum.js')}}"></script>
<script src="{{ asset('backend/_assets/js/jquery.accordion.js')}}"></script>

<script src="{{ asset('backend/_assets/js/scripts.js')}}"></script>
<script src="{{ asset('backend/_assets/js/price-range.js')}}"></script>


</body>
</html>
