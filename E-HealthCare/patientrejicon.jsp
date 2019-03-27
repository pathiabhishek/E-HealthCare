
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
try{  
	System.out.println("VEERA");

String name=request.getParameter("name");
String password=request.getParameter("password");
String mobile=request.getParameter("mobile");
String email=request.getParameter("email");
String country=request.getParameter("country");
String state=request.getParameter("state");
String city=request.getParameter("city");
String gender=request.getParameter("gender");
String age=request.getParameter("age");
     Connection con=conn.myconn();
     PreparedStatement pstm=con.prepareStatement("insert into patientreji values(?,?,?,?,?,?,?,?,?)");
     pstm.setString(1, null);
     pstm.setString(2, name);
     pstm.setString(3, password);
     pstm.setString(4, email);
     pstm.setString(5, country);
     pstm.setString(6, state);
     pstm.setString(7, city);
     pstm.setString(8, gender);
     pstm.setString(9, age);

    
  int n = pstm.executeUpdate();
  if (n > 0) {
    
      response.sendRedirect("patientlogin.jsp");
  }
  else
  {
  	         
  	    response.sendRedirect("patientrej.jsp");
  }
} catch (Exception ex) 
{

  ex.printStackTrace();
}
 
   

%>
</body>
</html>