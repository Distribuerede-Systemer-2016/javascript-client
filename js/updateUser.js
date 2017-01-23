
//funktion der tillader en bruger at opdatere sin profiloplysninger
$("#updateUserButton").on("click", function() {
    var variable = confirm("Ønsker du at opdatere din bruger?");
    if (variable == true) {

        var user = {
            username: $("#newUserUserName").val(),
            password: $("#newUserPassword").val(),
            phonenumber: +$("#newUserPhonenumber").val(),
            address: $("#newUserAdress").val(),
            email: $("#newUserEmail").val(),
            mobilepay: +$("#mobilepay").prop("checked"),
            cash: +$("#cash").prop("checked"),
            transfer: +$("#transfer").prop("checked")
        };
        console.log(user);

        SDK.User.updateuser(user, function(err, data) {
            if (err) throw JSON.stringify(err);
            console.log(user.username);
            window.location.href = "userpage.html";

        });

    }

    else {

        window.close();

    }



});