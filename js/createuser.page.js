/**
 * Created by Christoffer on 13-12-2016.
 */
$(document).ready(function () {

    $("#createUserButton").on("click", function(e){
        e.preventDefault();

        var username = $("inputUsername").val();
        var pw = $("#inputPassword").val();
        var email = $("#inputEmail").val();
        var address = $("inputaddress").val();
        var phonenumber = $("inputPhonenumber").val();
        var mobilepay = $("inputMobilepay").val();
        var cash = $("inputCash").val();
        var transfer = $("inputTransfer").val();

        SDK.Book.create(username, email, pw, address, phonenumber, mobilepay, cash, transfer, function(err, data){

            if(err) {
            return $("#createUserForm").find(".form-group").addClass("has-error");
            }

            //user created succesfull
            $("#createUserForm").find(".form-group").addClass("has-success");




            $("#logOutLink").on("click", function(){
                SDK.logOut();
                window.location.href = "index.html";
            });

        });

    });

});










/*
$(document).ready(function () {
    SDK.User.create(function(err, data){
        if(err) throw err;

        function createuser(username, password, email, phonenumber, address, mobilepay, cash, transfer, cb) {
            var username = $("#username").val();
            var password = $("#password").val();
            var email = $ ("#email").val();
            var phonenumber = $ ("#phonenumber").val();
            var address = $ ("#adress").val();
            var mobilepay = $ ("#mobilepay").val();
            var cash = $ ("#cash").val();
            var transfer = $ ("#transfer").val();


            $.ajax({
                type: "POST",
                dataType: "json",
                xhrFields: { withCredentials: true },
                data: JSON.stringify({
                    "username" : username,
                    "password" : password,
                    "email" : email,
                    "phonenumber" : phonenumber,
                    "address" : address,
                    "mobilepay" : mobilepay,
                    "cash" : cash,
                    "transfer" : transfer
                }),
                success: function(data) {
                    alert(JSON.stringify(data));
                },
                error: function(data) {
                    alert(JSON.stringify(data));
                }
            });
        }


            $("#logOutLink").on("click", function(){
            SDK.logOut();
            window.location.href = "index.html";
        });
    })
});
    */