
  
  //------- Validation--------------------------
  var passwordcheck = function() {
    if (document.getElementById('txtPassword').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords match';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords do not match';
    }
  }
  // -------------submit form---------------------
      function onSubmit(){
        document.getElementById("formSubmit").submit();
        alert("login successful");
      }
  //-------------reload page -----------------------
      function reload(){
        location.reload();
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

//-----------------------old function -----------------------------
// function validate()
//     {
//       var Username = document.getElementById("txtUserName");
//       var Password = document.getElementById("txtPassword");
      
//       if(Username.value=="" ||Password.value=="")
//         {
//           alert("login sucessful");
//           window.location.reload;
//           return false;
          
//         }
//         else
//         {
//           alert("login failed");
//         }
//     }
// //------------------------on form submit function-----------------
//     function onSubmit(){
//       document.getElementById("formSub").submit();
//     }
// //----------------------reload page ------------------------------
//     function reload(){
//       location.reload();
//     }
