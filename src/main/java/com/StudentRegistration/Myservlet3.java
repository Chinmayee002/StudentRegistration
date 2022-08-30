package com.StudentRegistration;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



public class Myservlet3 extends HttpServlet {
	
       
   
  
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		String button3=request.getParameter ("submit");
		String image=request.getParameter ("img");
		String hmarkfile=request.getParameter ("hmarkfile");
		String smarkfile=request.getParameter ("smarkfile");
		String allmark=request.getParameter("allmark");
		

		if(button3.equals("FINAL SUBMIT")) {
			
			

			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/studentregistration","root","root");
				PreparedStatement ps=con.prepareStatement
		("insert into registration3 values (?,?,?,?)");
			FileInputStream fs=new FileInputStream(image);
			FileInputStream fs2=new FileInputStream(hmarkfile);
			FileInputStream fs3=new FileInputStream(smarkfile);
			FileInputStream fs4=new FileInputStream(allmark);
			
			
			ps.setBinaryStream(1,fs);
			ps.setBinaryStream(2,fs2);
			ps.setBinaryStream(3,fs3);
			ps.setBinaryStream(4,fs4);
			
			int r=ps.executeUpdate();
			
			if(r==1) {
				response.sendRedirect("success.html");
			}
			
			else {
				
				response.sendRedirect("index3.html");
			}
		}
			catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		
		
	}

	

}
