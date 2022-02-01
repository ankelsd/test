
<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

<link rel="icon" href="{{ asset('backend/_assets/images/favicon.ico')}}" type="image/x-icon">
<title>{{Config::get('constants.SITE_TITLE')}}</title>
<script src="{{ asset('backend/_assets/js/jquery-3.4.1.min.js')}}"></script>

</head>
<body class="login-bg h-100">
<?php if($show_loader){ ?>
<div class="splash">
  <div class="container h-100">
    <div class="row h-100 align-items-center spl-cntnt">
      <div class="col-12">


      </div>

    </div>

  </div>
</div>
<?php } ?>
<div class="container h-100">
  <div class="row h-100 align-items-center">
    <div class="col-md-6">
      <div class="login-lft">
        <div class="login-logo">

          <h2 class="log-cmpny-adrs-mob">Test</h2>
        </div>


        <div class="login-form-main">
          <h2>Login</h2>

          <span class="log-p-line"></span>
          <div class="login-form">
            @if($errors->any())
                <div class='alert alert-danger alert-dismissible loading wow fadeIn animated'>
                    {!! implode('', $errors->all('<div>:message</div>')) !!}
                <button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
                </div>
            @endif
            <form action="{{ route('login') }}" method="post" id="login_form">
                @csrf
              <label class="log-lbl">Email</label>

              <input type="email" name="email_id" class="login-input @error('email_id') is-invalid @enderror" placeholder="Enter email" id="email_id" value="{{ old('email_id') }}">

              <label class="log-lbl">Password</label>

              <input type="password" name="password" class="login-input @error('password') is-invalid @enderror" placeholder="Enter password" id="psd">

              <button type="submit" class="login-btn" ><i class="la la-lock"></i>Login</button>




              <div class="clearfix"></div>
            </form>
          </div>
        </div>
<script>
  setTimeout(function() {
    $('.splash').fadeOut('fast');
  }, 700);
  $(document).ready(function () {
    $("[name=username]").focus();

  });
</script>

      </div>
    </div><!--col-->
    <div class="col-md-6 log-rgt-mob">
      <div class="login-rgt">

        <div class="log-rgt-img"></div>
      </div>
    </div><!--col-->
  </div><!--row-->
</div><!--container-->
<div class="lds-css" style="display:none;">
    <div style="width:100%;height:100%" class="lds-eclipse">
        <div></div>
        <p>Please wait while we are processing your request.</p>
    </div>
</div>

<style>
  .alert{
    font-size:10px;
  }
</style>
<script>
  function showLoader(){
    $(".lds-css").fadeIn();
  }
  function hideLoader(){
    $(".lds-css").fadeOut();
  }
  $( document ).ready(function() {
  setTimeout(function(){
    $('.alert').fadeOut();
   }, 5000);
 });
</script>

</body>
</html>










