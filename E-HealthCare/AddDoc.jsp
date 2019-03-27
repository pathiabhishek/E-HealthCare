<!DOCTYPE html>
<html lang="en">
<head>
	<title>doctor</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>HealthNow</h1>
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
			
					<span class="login100-form-title p-b-55">
					ADD DOCTOR
					</span>

					<div class="wrap-input100 validate-input m-b-16" data-validate = "Valid email is required: ex@abc.xyz">
		<div class="loginBox1" style="
    padding-top: 60px;
">
   

<form action="doctorcon.jsp" method="post">
<table>
<tr><td>state</td><td><select name="state" class="text"><option>select states</option>
<option>andhrapradesh</option>
<option>tamilnadu</option>
<option>telangana</option></select></td></tr>
<tr><td>category</td><td><select  name="category"class="text"><option>select category</option>
<option>mbbs</option>
<option>cardiologist</option>
<option>neuriologist</option>
<option>ENT</option></select></td></tr>
<tr><td>location</td><td><input type="text" name="location"></td></tr>
<tr><td>doctorname</td><td><input type="text" name="doctorname"></td></tr>
<tr><td>specialisation</td><td><input type="text" name="specialisation"></td></tr>
<tr><td>experience</td><td><input type="number" name="exp"></td></tr>
<tr><td>qualification</td><td><input type="text" name="qualification"></td></tr>
</table>
  <input type="submit" value="SUBMIT"> 
    <input type="reset" value="RESET"> 
        </form>
          </div>
    </div></div>
</body>
</html>