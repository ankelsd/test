@extends('template.backend.main')
@section('content')
<div class="content-area">
<div class="container-custom">
		<div class="row">
			<div class="col-md-12 mb-4">
				<div class="db-tble-box">
					<div class="table-hdng d-flex align-items-center justify-content-between tble-ttle">
						<h2>Order Status</h2>
					</div>
					<form method="POST" id="order_status-form" action="{{route('order_status_update')}}">
						@csrf
						<input type="hidden" name="order_status_id" value="{{$info->order_status_id}}">
						<div class="row">
							<div class="form-group col-lg-4">
								<label class="form-label">Order Status Name</label>
								<input type="text" name="order_status_name" class="form-control cust-inpt" value="{{$info->order_status_name}}">
							</div><!--col-->
							
							<div class="col-md-12">
								<div class="save-cncl-main">
									<button type="submit" class="cmn-btn">Save <i class="la la-check"></i></button>
									<a href="{{route('order_status')}}" class="cmn-btn cncl-btn">Cancel <i class="la la-close"></i></a>
								</div>
							</div>
						</div>
					</form>
					
				</div><!-----Col---->
			
			</div>
		</div>
	
	
</div><!--container-custom-->
</div><!--content-area-->
<!---Content End-------->
<script>

$(document).ready(function() {

$('#order_status-form').validate({
        ignore: [],
        rules: {
              order_status_name: {
              required: true,
              minlength: 4,
              
            },
            
        },
        messages: {
          order_status_name:{
            required: "Order Status Name is required",
          },
          
        },
        submitHandler: function(form) {
            showLoader();
            form.submit();
          }
     
        
    }); 

});
</script>
@endsection