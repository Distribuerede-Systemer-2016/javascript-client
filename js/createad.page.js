/**
 * Created by Christoffer on 13-12-2016.
 */
$(document).ready(function() {
    SDK.Book.getAll(function(err, data) {
        if(err) throw err;
        data.forEach(function (book, i) {
            $("#dropDownBooks").append("<option>" + value.book + "</option>");
        });
    });
});

function createAd() {
    var userid = $("#currentUserName").val();
    var isbn = $("#bookIsbn").val();
    var price = $("#bookPrice").val();
    var isbn = $("#bookIsbn").val();
    $.ajax({
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        url: "https://localhost:8000/createad",
        data: JSON.stringify({
            "username" : username,
            "password" : password
        }),
        success: function(data) {
            alert(JSON.stringify(data));
        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    });
}