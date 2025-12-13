//javascript code for the registeration 
$(document).ready(function(){
    $("#registerForm").on("submit",function(e){
        e.preventDefault();

        var email = $("#email").val();
        var pass = $("#password").val();
        var confirm = $("#confirmpassword").val();

        if(pass != confirm){
            $("#errormessage").text("");
            alert("Passwords do not match");
            return;
        }
        //saving credentials in localStorage
            localStorage.setItem("registeredEmail",email);
            localStorage.setItem("registeredPassword",pass);

            alert("Registration successful");
            window.location.href = "login.html";
        
    });

});

//javascript code for the login page
$(document).ready(function(){
  $("#LoginForm").on("submit",function(e){
    e.preventDefault();

    var email = $("#loginemail").val();
    var pass  = $("#loginpassword").val();

    var registeredEmail = localStorage.getItem("registeredEmail");
    var registeredPassword = localStorage.getItem("registeredPassword");

    if(email === registeredEmail && pass === registeredPassword ){
        alert("Login successful!!");
        window.location.href = "dashboard.html";
      }
      else{
        $("#errormessage").text("Invalid email or password");
      }
  });
});


