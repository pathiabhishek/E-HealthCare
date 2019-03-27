<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="medical.conn"%>
<%@page import="java.sql.Connection"%>
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

<%
try{


Connection con=conn.myconn();
PreparedStatement pstm=con.prepareStatement("select * from doc ");

ResultSet rs=pstm. executeQuery();
String doc=null;
String cat=null;
String loc=null;
%>




<div class="">
<form action ="search.jsp" method="post">
Location:<select  name="loc1">
<% while(rs.next())
{
	loc=rs.getString(4);
	System.out.println("locccccccc1" +loc);
	
	
	%>
<option value="<%=loc %>"><%=loc %></option>
<%} %>
</select>
<input type="submit" value="check">
</form>
</div>



<% String location =request.getParameter("loc1");

System.out.println("LOCATIONnnnnnn"+location);


%>

<%}catch(Exception e)
{
	e.printStackTrace();
}

%>

</body>
</html>