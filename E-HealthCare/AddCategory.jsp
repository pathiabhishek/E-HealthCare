<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="style.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/util.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
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
			
				
<span class="login100-form-title p-b-55">
					ADD CATEGORY
					</span>
				
	
<div class="cate">

<form action="addcategorycon.jsp" method="post"><table>
<tr>stateName:<select name="state" class="text"><option>Telangana</option>
<option>Tamilnadu</option>
<option>karnataka</option></select></tr><br>
Category:<input type="text" class="tab" name="category"><br>
<tr><input type="submit" value="submit" class="submit">
</tr></table>
</form>
</div></div></div>
</body>
</html>