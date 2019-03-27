<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link href="lab.css" rel="stylesheet">
</head>
<body>
<body background="https://static-communitytable.parade.com/wp-content/uploads/2014/03/rethink-target-heart-rate-number-ftr.jpg" style=" width:800px; background-size: cover;"></body>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="logo">

<img alt="" src="images/21272369_1444288518993712_3965194344490626832_n.jpg"  style="
    width: 100px;
    height: 100px;
">

</div>
<h1 align="center" style="width:800px;color:skyblue;">MEDICAL OVERVIEW</h1>
<div class="menu">
<ul><li><a href="adminlogin.jsp">ADMIN</a></li>
<li><a href="patientlogin.jsp">PATIENT</a></li>
<li><a href="service.jsp">SERVICE</a></li>
<li><a href="about.jsp">ABOUT</a></li></ul>
</div>

<div class="container">
            <form class="form-horizontal" role="form" action="patientlogincon.jsp">
                <h2>PATIENT LOGIN</h2>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">User Name</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="USER NAME" class="form-control" autofocus name="name" required>
                    </div>
                </div>
                
                
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Password</label>
                    <div class="col-sm-9">
                        <input type="password" id="password" placeholder="Password" class="form-control" name="password" required>
                    </div>
                </div>
               
                <button type="submit" class="btn btn-primary btn-block">Sign-In</button>
              <h3><a href="patientrej.jsp">New Patient Register?</a></h3>
            </form>
      
             <!-- /form -->
        </div> <!-- ./container -->

</body>
</html>