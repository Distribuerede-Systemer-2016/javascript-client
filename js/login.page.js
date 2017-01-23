
$(document).ready(function () {

  $("#loginButton").on("click", function(e){
    e.preventDefault();

    var email = $("#inputEmail").val();
    var pw = $("#inputPassword").val();

    SDK.login(email, pw, function(err, data){

      //On wrong credentials
      if(err) {
        return $("#loginForm").find(".form-group").addClass("has-error");
      }

      //Login OK!
        if (data.type == 1){
            $("#loginForm").find(".form-group").addClass("has-success");
            window.location.href = "admin.html";
        }
        else{
            $("#loginForm").find(".form-group").addClass("has-success");
            window.location.href = "ads.html";

        }


        $("#logOutLink").on("click", function(){
            SDK.logOut();
            window.location.href = "index.html";
        });

    });

  });

});
