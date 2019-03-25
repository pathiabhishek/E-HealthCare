package medical;

import java.sql.Connection;
import java.sql.DriverManager;

public class conn {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		
		myconn();

	}
	
	public static Connection myconn()
	{
		Connection con=null;
		
		try 
		{
			Class.forName("com.mysql.jdbc.Driver");
			System.out.println("CONNECTED");
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/medical", "root", "root");
			System.out.println("CONNECTED TO DB");
			 
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return con;
	}

}
