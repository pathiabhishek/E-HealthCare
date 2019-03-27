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
            <form class="form-horizontal" role="form1" action="patientrejicon.jsp">
                <h2>Patient Registration</h2>
                <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">User Name</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="User Name" class="form-control" autofocus name="name" required>
                    </div>
                </div>
                
                 <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Password</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="Password" class="form-control" autofocus name="password" required>
                    </div>
                </div>
                
                 <div class="form-group">
                    <label for="firstName" class="col-sm-3 control-label">Mobile No</label>
                    <div class="col-sm-9">
                        <input type="text" id="firstName" placeholder="Mobile No" class="form-control" autofocus name="mobile" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="email" class="col-sm-3 control-label">Email </label>
                    <div class="col-sm-9">
                        <input type="email" id="email" placeholder="Email" class="form-control" name= "email" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Country</label>
                    <div class="col-sm-9">
                        <input type="text" name="password" placeholder="Country" class="form-control" name="country" required>
                    </div>
                </div>
                 <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">State</label>
                    <div class="col-sm-9">
                        <input type="text" name="password" placeholder="State" class="form-control" name="state" required>
                    </div>
                </div>
                
                 <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">City</label>
                    <div class="col-sm-9">
                        <input type="text" name="password" placeholder="City" class="form-control" name="city" required>
                    </div>
                </div>
                
                
                
               
                <div class="form-group">
                    <label class="control-label col-sm-3">Gender</label>
                    <div class="col-sm-6">
                        <div class="row">
                            <div class="col-sm-4">
                                <label class="radio-inline">
                                    <input type="radio" id="femaleRadio" value="Female"name="gender">Female
                                </label>
                            </div>
                            <div class="col-sm-4">
                                <label class="radio-inline">
                                    <input type="radio" id="maleRadio" value="Male" name="gender" >Male
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                 <div class="form-group">
                    <label for="password" class="col-sm-3 control-label">Age</label>
                    <div class="col-sm-9">
                        <input type="number" name="password" placeholder="Age" class="form-control"  name="age"required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block">REGISTER</button>
            </form> <!-- /form -->
        </div> <!-- ./container -->
        <script>$(function(){
        	$.validator.setDefaults({
        		highlight: function(element){
        			$(element)
        			.closest('.form-group')
        			.addClass('has-error')
        		},
        		unhighlight: function(element){
        			$(element)
        			.closest('.form-group')
        			.removeClass('has-error')
        		}
        	});
        	
        	$.validate({
        		rules:
        		{	
        		    password: "required",
        			birthDate: "required",
        			weight: {
        			    required:true,
        			    number:true
        			},
        			
        			email: {
        				required: true,
        				email: true
        			}
        		},
        			messages:{			
        				email: {
        				required: true,
        				email: true
        			}
        		},
        				password: {
        					required: " Please enter password"
        				},
        				
        				email: {
        					required: ' Please enter email',
        					email: ' Please enter valid email'
        				},
        				
        				
        			}
        			
        	});
        });</script>
</body>
</html>