   // onload modal dialog
   var modal = document.getElementById("modal-welcome");
   var span = document.getElementsByClassName("close")[0];
   window.onload = function() {
   modal.style.display = "block";
   }
   span.onclick = function() {
   modal.style.display = "none";
   }
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }

   //set welcome name
   function setName(){
       var name = document.getElementById("welcome-input").value;
       if(name=="" || name == null){ 
           alert ('Isi Nama Anda');
           document.getElementById("welcome-input").focus();
       }else{
           document.getElementById("welcome-name").innerText = name;
           modal.style.display = "none";
           name.value="";
       }
   }

   //validate form
   function validateForm(){
       var name = document.forms["message-form"]["full-name"].value;
       var date = document.forms["message-form"]["birth-date"].value;
       var email = document.forms["message-form"]["email"].value;
       var phone = document.forms["message-form"]["phone"].value;
       var gender = document.forms["message-form"]["gender"].value;
       var message = document.forms["message-form"]["message"].value;

       if(name == "" || date == "" || gender == "" || message == "" || email =="" || phone ==""){
           alert("Data Harus diisi");
           return false;
       }

       setData(name, date, email, phone, gender, message);
       return false;
   }

   function setData(name, date, email, phone, gender, message){
       document.getElementById("lb-name").innerText = name;
       document.getElementById("lb-date").innerText = date;
       document.getElementById("lb-email").innerText = email;
       document.getElementById("lb-phone").innerText = phone;
       document.getElementById("lb-gender").innerText = gender;
       document.getElementById("lb-message").innerText = message;
   }