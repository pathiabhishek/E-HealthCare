<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="lab.css" rel="stylesheet">
</head>
<body>
<body background="https://static-communitytable.parade.com/wp-content/uploads/2014/03/rethink-target-heart-rate-number-ftr.jpg" style=" width:800px; background-size: cover;">
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
<h1 align="center" style="color:skyblue;">MEDICAL OVERVIEW</h1>
<div class="menu1">
<ul><li><a href="adminlogin.jsp">ADMIN</a></li>
<li><a href="patientlogin.jsp">PATIENT</a></li>
<li><a href="service.jsp">SERVICE</a></li>
<li><a href="about.jsp">ABOUT</a></li></ul>
</div>
<div class="container">
            <form class="form-horizontal" role="form1" action="servicecon.jsp">
                <h2>SERVICE QUERY</h2>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Query</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="Query" class="form-control" autofocus name="query" required>
                    </div>
                </div>
              
                
                <div class="form-group">
                    <label for="email" class="col-sm-3 control-label">Email </label>
                    <div class="col-sm-9">
                        <input type="email" id="email" placeholder="Email" class="form-control" name= "email" required>
                    </div>
                </div>
                
                  <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Mobile No</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="Mobile No" class="form-control" autofocus name="mobile" required>
                    </div>
                </div>
                    <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Medical Disease Name</label>
                    <div class="col-sm-9">
                        
                        
                        <select name="disease">        
            <option value="fever">FEVER</option>
            <option value="headache">HEAD ACHE</option>
            <option value="CANCER">CANCER</option>
            <option value="tronsiles">tronsiles</option>
            
    </select>
                    </div>
                </div>          
          
            <button type="submit" class="btn btn-primary btn-block">SUBMIT</button>
            </form> <!-- /form -->
        </div> <!-- ./container -->
        </body>
</html>