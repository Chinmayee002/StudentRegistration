
function validate_fileupload(fileName) {
    var allowed_extensions = new Array("jpg", "png", "jpeg");
    var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.

    for (var i = 0; i <= allowed_extensions.length; i++) {
        if (allowed_extensions[i] == file_extension) {
            return true; // valid file extension
        }

    }
    console.log("err");
    document.getElementById('img-err').innerHTML = "**Wrong file uploaded"
    return false;
}

function validate_docfileupload(fileName) {
    var allowed_extensions = new Array("pdf", "doc", "docx");
    var file_extension = fileName.split('.').pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.

    for (var i = 0; i <= allowed_extensions.length; i++) {
        if (allowed_extensions[i] == file_extension) {
            return true; // valid file extension
        }
    }
    console.log("err");
    document.getElementById('err').innerHTML = "**Wrong file-type file uploaded"

    return false;
}



function validate() {
    var pass = document.getElementById('image').value;
    var hmarks=document.getElementById('H-mark').value;
    var smarks=document.getElementById('S-mark').value;
    var allpdf=document.getElementById('All-mark').value;



    if(pass.length==0){
        document.getElementById('img-err').innerHTML = "** Please upload your recent photo";
		   
}
    if(hmarks.length==0){
        document.getElementById('err').innerHTML = "** Please upload your Hsc Marksheet";
		
   }
    if(smarks.length==0){
        document.getElementById('err-1').innerHTML = "** Please upload your Ssc Marksheet";
		   
}
    if(allpdf.length==0){
        document.getElementById('err-2').innerHTML = "** Please upload your All documents";
 
		
   }
   
    
}