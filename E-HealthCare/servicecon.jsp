<%@page import="lab.conn"%>
<%@page import="java.sql.*"%>


<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
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

String query=request.getParameter("query");
String email=request.getParameter("email");
String mobile=request.getParameter("mobile");

String disease=request.getParameter("disease");

     Connection con=conn.myconn();
     PreparedStatement pstm=con.prepareStatement("insert into service values(?,?,?,?,?)");
     pstm.setString(1, null);
     pstm.setString(2, query);
     
     pstm.setString(3, email);
     pstm.setString(4, mobile);
     pstm.setString(5, disease);
     

    
  int n = pstm.executeUpdate();
  if (n > 0) {
    
      response.sendRedirect("5.jsp");
  }
  else
  {
  	         
  	    response.sendRedirect("service.jsp");
  }
} catch (Exception ex) 
{

  ex.printStackTrace();
}
 
   

%>
</body>
</html>