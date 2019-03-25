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
<% try{
String state=request.getParameter("state");

String category=request.getParameter("category");
String location=request.getParameter("location");

String doctorname=request.getParameter("doctorname");
String specialisation=request.getParameter("specialisation");
String exp=request.getParameter("exp");
String qualification=request.getParameter("qualification");
Connection con=conn.myconn();
PreparedStatement pstm=con.prepareStatement("insert into doc values(?,?,?,?,?,?,?,?)");
pstm.setString(1, null);
pstm.setString(2, state);
pstm.setString(3, category);
pstm.setString(4, location);
pstm.setString(5, doctorname);
pstm.setString(6, specialisation);
pstm.setString(7, exp);
pstm.setString(8, qualification);



int n = pstm.executeUpdate();
if (n > 0) {

 response.sendRedirect("AddCategory.jsp");
}
else
 
{
	         
	    response.sendRedirect("AddDoc.jsp");
}
} catch (Exception ex) 
{

ex.printStackTrace();
}
%>
</body>
</html>