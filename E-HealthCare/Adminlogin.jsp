<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="style.css" rel="stylesheet">
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
 <li><a href="Adminlogin.jsp">Admin</a></li>
 <li><a href="#">Patient</a></li>
 <li><a href="search.jsp">Search</a></li>
 <li><a href="#">Services</a></li>
</ul>
  </nav>
  </div>

</header>
<br><br>
<div class="loginBox" style="
    padding-top: 60px;
">
     <h2>ADMIN LOGIN</h2>

<img src="user.png" class="user">
<form action="Adminlogincon.jsp" method="post">
 
 <p>USERNAME</p>
  <input type="text"   name="user" style="padding-left: 10px;">
	<p>PASSWORD</p>
 <input type="password"  name="password" style=" padding-left: 10px;">
  <input type="submit" value="LOGIN"> 
    <input type="reset" value="RESET"> 
        </form>
          </div>
   <style>
   html{
   background: url(setes.jpg);
   height: 100%;
   background-position: center;
   background-repeat: no-repeat;
   background-size:cover;}</style>
   
</body>
</html>