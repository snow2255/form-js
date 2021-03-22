
  
  //----------Password validation---------------------------
function validatePassword() {  
  var passw = document.getElementById("txtPassword").value;  
  //Empty password field validation/check 
  if(passw == "") {  
     document.getElementById("msgPasswordval").innerHTML = "**Password field cannot be empty!";  
     return false;  
  }  
   
 //minimum password length validation/check
  if(passw.length < 8) {  
     document.getElementById("msgPasswordval").innerHTML = "**Password length must be at least 8 characters";  
     return false;  
  }  
  
//maximum length of password validation/check
  if(passw.length > 15) {  
     document.getElementById("msgPasswordval").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Validations passed");  
  }  
} 
  
//------- Password match/confirmation check-------------------------
function matchPassword() {  
  var pass = document.getElementById("txtPassword");  
  var confPass = document.getElementById("confirmPassword");  
  if(pass != confPass)  
  {   
    alert("Passwords did not match");  
  } else {  
    alert("Passwords match");  
  }  
} 


//-------------------------Excess code------------------
//-------------------------Excess code------------------
      
//--------------------jquery validate----------------
// $('#password, #confirm_password').on('keyup', function () {
//     if ($('#password').val() == $('#confirm_password').val()) {
//       $('#message').html('Matching').css('color', 'green');
//     } else 
//       $('#message').html('Not Matching').css('color', 'red');
//   });
