package com.StudentRegistration;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 
public class myServlet extends HttpServlet {
	

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		String button=request.getParameter("submit");
		//String button2=request.getParameter("next");
		
		String fname=request.getParameter("firstname");
		String lname=request.getParameter("lastname");
		String dob=request.getParameter("dob");
		String email=request.getParameter("email");
		String fatherFname=request.getParameter("fatherFname");
		String fatherLname=request.getParameter("fatherLname");
		String motherFname=request.getParameter("motherFname");
		String motherLname=request.getParameter("motherLname");
		String street=request.getParameter("street");
		String city=request.getParameter("city");
		String country=request.getParameter("country");
		String homephno=request.getParameter("Homephonenumber");
		String MobileNo=request.getParameter("Mobilenumber");
		String gender=request.getParameter("gender");
//		if(button.equals("submit")) {
//			
//		out.print(fname);
//		response.sendRedirect("index2.html");
//		}
		//if(button.equals("submit")) {
			if(button.equals("submit")) {

			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/studentregistration","root","root");
				PreparedStatement ps=con.prepareStatement
			("insert into registration values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			ps.setString(1,fname);
			ps.setString(2, lname);
			ps.setString(3,dob);
			ps.setString(4, email);
			ps.setString(5,fatherFname);
			ps.setString(6, fatherLname);
			ps.setString(7,motherFname);
			ps.setString(8,motherLname);
			ps.setString(9,street);
			ps.setString(10,city);
			ps.setString(11,country);
			ps.setString(12, homephno);
			ps.setString(13,MobileNo);
			ps.setString(14, gender);
			int r=ps.executeUpdate();
			
		if(r==1){
			
			response.sendRedirect("index2.html");
			
		}
		
		else
		{
			response.sendRedirect("index.html");
		}
		}
			
			
			catch(Exception e) {
				e.printStackTrace();
			}
//			if(button2.equals("next")) {
//				response.sendRedirect("index2.html");
//			}
		}	
		else {
				
			}
		
		
		
	}

}
