<!DOCTYPE html>
<html lang="en">
<head>
	<title>Location</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>MEDICAL INFORMATION</h1>
<header>
  <div class="container">
    <div class="logo-box">
      <a href="/">
        <img src="">
      </a>
    </div>
    <nav>
  

<ul>
 <li><a href="Addloc.jsp">Addlocation</a></li>
 <li><a href="AddDoc.jsp">AddDoctor</a></li>
 <li><a href="AddCategory.jsp">AddCategory</a></li>
 <li><a href="#">Check Patientinfo</a></li>
 <li><a href="Adminlogin.jsp">Logout</a></li>
</ul>

  </nav>
  </div>

</header>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
				<form class="login100-form validate-form" action="addlocationcon.jsp" method="post">
					<span class="login100-form-title p-b-55">
					ADD LOCATION
					</span>

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
						location:<input class="input100" type="text" name="location" >
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-envelope"></span>
						</span>
					</div>

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
						statename<input class="input100" type="text" name="state" >
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<span class="lnr lnr-lock"></span>
						</span>
					</div>

					<div class="container-login100-form-btn p-t-25">
						<input type="submit" value="submit" class="submit">
					</div>

				</form>
			</div>
		</div>
	</div>
	
	

	
<!--===============================================================================================-->	
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="js/main.js"></script>

</body>
</html>