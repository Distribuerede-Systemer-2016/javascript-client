/**
 * Created by Christoffer on 13-12-2016.
 */
$("#addNewUserButton").on("click", function() {

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

    SDK.User.create(user, function(err, data) {
        if (err) throw JSON.stringify(err);
        console.log(user.username);

        /*alert("Tillykke, du har nu opretet en bruger");*/
        window.location.href = "index.html";
    });

});




 */