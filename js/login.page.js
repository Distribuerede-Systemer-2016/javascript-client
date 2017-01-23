/**
 * Created by mikkelaltmann on 11/11/2016.
 */
$(document).ready(function () {

    $("#loginButton").on("click", function(e){
        e.preventDefault();

        var username = $("#username").val();
        var password = $("#password").val();

        SDK.Identification.login(username, password, function(err, data){


            //On wrong credentials
            if(err) {
                return $("#loginForm").find(".form-group").addClass("has-error");

            }

            //Login OK!
            if (data.type == 1){
                $("#loginForm").find(".form-group").addClass("has-success");
                window.location.href = "adminpage.html";
            }
            else{
                $("#loginForm").find(".form-group").addClass("has-success");
                window.location.href = "userpage.html";

            }


        });
    });

    $("#logOutLink").on("click", function(){
        SDK.Identification.logOut();
        window.location.href = "index.html";

    });

});
