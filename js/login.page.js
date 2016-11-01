
$(document).ready(function () {

  $("#loginButton").on("click", function(e){
    e.preventDefault();

    var email = $("#inputEmail").val();
    var pw = $("#inputPassword").val();

    SDK.login(email, pw);

  });

  SDK.Book.getAll();

});
