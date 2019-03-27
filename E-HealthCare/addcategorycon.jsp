<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% try{String state=request.getParameter("state");
String category=request.getParameter("category");

Connection con=conn.myconn();
PreparedStatement pstm=con.prepareStatement("insert into categ values(?,?,?)");
pstm.setString(1, null);
pstm.setString(2, state);
pstm.setString(3, category);



int n = pstm.executeUpdate();
if (n > 0) {

 response.sendRedirect("#");
}
else
 
{
	         
	    response.sendRedirect("AddCategory.jsp");
}
} catch (Exception ex) 
{

ex.printStackTrace();
}
%>
</body>
</html>