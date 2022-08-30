function validateForm() {
    var i_name = document.getElementById('i-name').value;
    var hsc_score = document.getElementById('hsc-score').value;
    var ssc_i_name = document.getElementById('ssc-i-name').value;
    var ssc_score = document.getElementById('ssc-score').value;
    var cur_i_name = document.getElementById('cur-i-name').value;
    var cur_name = document.getElementById('cur-name').value;
    var percentage = document.getElementById('percentage').value;
    //var backlog = document.getElementById('backlog').value;

   

    if (i_name.length == 0) {
        document.getElementById('ui').innerHTML = "** Please Enter Institute name";
	   
}

    if (hsc_score.length == 0) {
        document.getElementById('Hsc-sc').innerHTML = "** Please Enter your score";
	    
}

    if (ssc_i_name.length == 0) {
        document.getElementById('SSC-i-name').innerHTML = "** Please enter your institute name";
	   
}

    if (ssc_score.length == 0) {
        document.getElementById('ssc-sc').innerHTML = "** Please Enter your score";
	   
 }
    if (cur_name.length == 0) {
        document.getElementById('Cur-name').innerHTML = "** Please Enter a valid details";
	 
 }

    if (cur_i_name.length == 0) {
        document.getElementById('Cur-i-name').innerHTML = "**Please Enter a valid details";
    
	
}

    if (percentage.length == 0) {
        document.getElementById('Percentage').innerHTML = "** Please enter your percentage";

    }

    /* if (backlog.length == 0) {
        document.getElementById('Backlog').innerHTML = "** Please fill valid details";
    }*/
             
    
}