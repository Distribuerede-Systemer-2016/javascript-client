/**
 * Created by Christoffer on 07-12-2016.
 */
$(document).ready(function () {

    //Fires on page-load
    SDK.Ads.getAll(function (err, data) {
        if (err) throw err;


        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ads, i) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + ads.bookTitle + "</td>" +
                "<td>" + ads.bookAuthor + "</td>" +
                "<td>" + ads.bookEdition  + "</td>" +
                "<td>" + ads.rating + "</td>" +
                "<td>Kr. " + ads.price + ",-</td>" +
            "</tr>");
        });

    });





    $("#logOutLink").on("click", function(){
        SDK.logOut();
        window.location.href = "index.html";
    });


});
