<%@page import="medical.conn"%>
<%@page import="java.sql.PreparedStatement"%>

<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% try{String location=request.getParameter("location");
String state=request.getParameter("state");

Connection con=conn.myconn();
PreparedStatement pstm=con.prepareStatement("insert into loc values(?,?,?)");
pstm.setString(1, null);
pstm.setString(2, location);
pstm.setString(3, state);



int n = pstm.executeUpdate();
if (n > 0) {

 response.sendRedirect("AddDoc.jsp");
}
else
 
{
	         
	    response.sendRedirect("Addloc.jsp");
}
} catch (Exception ex) 
{

ex.printStackTrace();
}
%>
</body>
</html>