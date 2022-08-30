console.log("hiiold");
function validateForm() {
    var names = document.getElementById('name').value;
    var lastname = document.getElementById('name1').value;
    var birth = document.getElementById('dob').value;
    var email = document.getElementById('mail').value;
    var f_name = document.getElementById('f-name').value;
    var f_lastname = document.getElementById('f-lastname').value;
    var m_name = document.getElementById('m-name').value;
    var m_lastname = document.getElementById('m-lastname').value;
    // var gen = document.getElementByName('gender').value;
    var nat_name = document.getElementById('nat-name').value;
    var address = document.getElementById('add').value;
    var city = document.getElementById('city').value;
    var phone = document.getElementById('phone').value;
    var mob = document.getElementById('mob').value;

    
    if (names.length == 0) {
        document.getElementById('Username-1').innerHTML = "** Please fill the user name field";
         
    }

     if (lastname.length == 0) {
        
        document.getElementById('Username-1').innerHTML = "** Please fill the user name field";
        
    }
    if (birth.length == 0) {
        
        document.getElementById('u-dob').innerHTML = "** Please fill the dob field";
         
    }
    if (email.length == 0) {
        
        document.getElementById('Email').innerHTML = "** Please fill mail field";
        
 
    }
    if (f_name.length == 0) {
        
        document.getElementById('F-name').innerHTML = "** Please fill Father's name field";
        

    }
    if (f_lastname.length == 0) {
       
        document.getElementById('F-name').innerHTML = "** Please fill Father's name field";
       

    }
    if (m_name.length == 0) {
        
        document.getElementById('M-name').innerHTML = "** Please fill Mother's name field";
       

    }
     if (m_lastname.length == 0) {
        document.getElementById('M-name').innerHTML = "** Please fill Mother's name field";
       
 
    }
     if (nat_name.length == 0) {
        document.getElementById('Nat-name').innerHTML = "** Please fill Nationality field";
        

    }
    if (address.length == 0) {
        document.getElementById('Address').innerHTML = "** Please fill Address field";
        
 
    }
    if (city.length == 0) {
        
        document.getElementById('City').innerHTML = "** Please fill City field";
      

    }
    if (phone.length == 0) {
        
        document.getElementById('Userphone').innerHTML = "** Please fill Phone field";
       

    }
    if (mob.length == 0 || mob.length<10) {
       
        document.getElementById('Usermob').innerHTML = "** Invalid Mobile field";
        
 
    }
   
   
}

function validateFirstName() {

    var names = document.getElementById('name').value;

    if (!isNaN(names)) {
        document.getElementById('Username-1').innerHTML = "** Only characters are allowed";
        return false;
    }

    else if ((names.length <= 2) || (names.length > 20)) {
        document.getElementById('Username-1').innerHTML = "** user name length must be between 2 and 20";
        return false;
    }
}



// ----------lastname-------


function validateLastName() {

    var lastname = document.getElementById('name1').value;
    if (!isNaN(lastname)) {
        document.getElementById('Username-1').innerHTML = "** Only characters are allowed.....";
        return false;
    }
    else if ((lastname.length <= 2) || (lastname.length > 20)) {
        document.getElementById('Username-1').innerHTML = "** user name length must be between 2 and 20.......";
        return false;
    }
}





// function ValidateDateOfBirth() {

//     if (dobu == " ") {
//         document.getElementById('Dob').innerHTML = "** Please fill the DOB field";
//         return false;
//         // console.log("there");
//     }

// }


// function ValidateEmail() {
//     var email = document.getElementById('mail').value;
//     if (email == "") {
//         document.getElementById('Email').innerHTML = "** Please fill the user Email field";
//         return false;
//     }
//     else if (emailu.indexOf('@') <= 0) {
//         document.getElementById('Email').innerHTML = "** @ is in invalid position of Email field";
//         return false;
//     }
//     else if ((email.charAt(emailu.length - 4) != '.') && (emailu.charAt(emailu.length - 4) != '.')) {
//         document.getElementById('Email').innerHTML = "** . is in invalid position of Email field";
//         return false;
//     }

// }



// function ValidateFatherName() {



//     if (!isNaN(father)) {
//         document.getElementById('F-name').innerHTML = "** Only characters are allowed";
//         return false;
//     }

//     else if ((father.length <= 2) || (father.length > 20)) {
//         document.getElementById('F-name').innerHTML = "** user name length must be between 2 and 20";
//         return false;
//     }


// }



    // if (mother == " ") {
    //     document.getElementById('M-name').innerHTML = "** Please fill the mandatory field";
    //     return false;
    //     console.log("you");
    // }

    // if ((mother.length <= 2) || (mother.length > 20)) {
    //     document.getElementById('M-name').innerHTML = "** user name length must be between 2 and 20";
    //     return false;
    // }
    // if (!isNaN(mother)) {
    //     document.getElementById('M-name').innerHTML = "** Only characters are allowed";
    //     return false;
    // }





    // if (nationality == " ") {
    //     document.getElementById('N-name').innerHTML = "** Please fill the mandatory field";
    //     return false;
    // }
    // if ((nationality.length <= 2) || (nationality.length > 10)) {
    //     document.getElementById('N-name').innerHTML = "** user name length must be between 2 and 20";
    //     return false;
    // }
    // if (!isNaN(nationality)) {
    //     document.getElementById('N-name').innerHTML = "** Only characters are allowed";
    //     return false;
    // }





    // if (haddress == " ") {
    //     document.getElementById('Address').innerHTML = "** Please fill the mandatory field";
    //     return false;
    // }
    // if ((haddress.length <= 2) || (a.length > 20)) {
    //     document.getElementById('Addresse').innerHTML = "** user name length must be between 2 and 20";
    //     return false;
    // }
    // if (!isNaN(haddress)) {
    //     document.getElementById('Address').innerHTML = "** Only characters are allowed";
    //     return false;
    // }




    // if (mobilenum == " ") {
    //     document.getElementById('U-mob').innerHTML = "** Please fill the mandatory field";
    //     return false;
    // }
    // if (isNaN(mobilenum)) {
    //     document.getElementById('U-mob').innerHTML = "** User must write digits only";
    //     return false;
    // }
    // if (mobilenum.length != 10) {
    //     document.getElementById('U-mob').innerHTML = "** Mobile number must write 10 digits only";
    //     return false;
    // }


