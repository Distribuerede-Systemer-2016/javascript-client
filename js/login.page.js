
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
      $("#loginForm").find(".form-group").addClass("has-success");

        if (data.type === 1){
            window.location.href = "admin.html";
        } else {
            window.location.href = "ads.html";
        }


        $("#logOutLink").on("click", function(){
            SDK.logOut();
            window.location.href = "index.html";
        });

    });

  });

});
