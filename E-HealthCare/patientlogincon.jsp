<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
String name=request.getParameter("name");
String password=request.getParameter("password");
 Connection con=conn.myconn();
 PreparedStatement ps=con.prepareStatement("select * from patientreji where name='"+name+"' && password='"+password+"'");
 ResultSet rs=ps.executeQuery();
 if(rs.next())
 {
 
 response.sendRedirect("patienthome.jsp");
 }
 else{
	 response.sendRedirect("patientlogin.jsp");
 }
 %>
</body>
</html>