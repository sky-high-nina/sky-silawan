
let inputuser = document.getElementById ('inputuser');
let intputpass = document.getElementById( 'inputpass');
let btlogin = document.getElementById('btnlogin');

 btnlogin.addEventListener ("click", function(e) {
	
   e.preventDefault()
   
    if (inputuser.value == "sky") {
		
       if (inputpass.value == "4321" ){
       
	   
	    location.href = "mainpage.html";
    
	} else {
       alert ("Invalid Password");
	   }
	} else {
     alert ("Invalid Username");
    }
 });
