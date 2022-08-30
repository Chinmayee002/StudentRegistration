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



public class Myservlet2 extends HttpServlet {

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		PrintWriter out=response.getWriter();
		String button2=request.getParameter ("submit");
		String instname=request.getParameter("instname");
		String hscboard=request.getParameter("board");
		String hscscor=request.getParameter("score");
		int hscscore=Integer.parseInt(hscscor);
		String sscinstname=request.getParameter("sscinstname");
		String sscboard=request.getParameter("sscboard");
		String sscscor=request.getParameter("sscscore");
		int sscscore=Integer.parseInt(sscscor);
		String currentpur=request.getParameter("currentpur");
		String currentedu=request.getParameter("currentedu");
		String overallpe=request.getParameter("overallper");
		int overallper=Integer.parseInt(overallpe);
		String currentback=request.getParameter("currentback");
		String image=request.getParameter("image");
		
		if(button2.equals("submit")) {
			
			

			try {
				Class.forName("com.mysql.cj.jdbc.Driver"); 
				Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/studentregistration","root","root");
				PreparedStatement ps=con.prepareStatement
			("insert into registration2 values (?,?,?,?,?,?,?,?,?,?,?)");
			FileInputStream fs=new FileInputStream(image);
			
			ps.setString(1,instname);
			ps.setString(2, hscboard);
			ps.setInt(3,hscscore);
			ps.setString(4, sscinstname);
			ps.setString(5,sscboard);
			ps.setInt(6,sscscore);
			ps.setString(7,currentpur);
			ps.setString(8,currentedu);
			ps.setInt(9,overallper);
			ps.setString(10,currentback);
			ps.setBinaryStream(11,fs);
			
			int r=ps.executeUpdate();
			
			if(r==1){
				
				response.sendRedirect("index3.html");
				
			}
			
			else
			{
				response.sendRedirect("index2.html");
			}
			
			
		}
			catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		
	}

	

}
