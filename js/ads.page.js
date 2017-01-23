/**
 * Created by Christoffer on 07-12-2016.
 */
$(document).ready(function () {

    //Fires on page-load
    SDK.Ad.getAll(function (err, data) {
        if (err) throw JSON.stringify(err);
        console.log(data);


        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {
            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td><input role='button' value='Reserver annonce' class='btn btn-success btn-md ReserveAdButton' data-adid=" + ad.adId + "></td>" +
                "</tr>")
        });
        $(".ReserveAdButton").on("click", function () {
            //window.alert("Er du sikker på at du vil reservere denne annonce?");
            var variable = confirm("Ønsker du at reservere denne bog?");
            if (variable == true) {

                var $reserveAd = $(this);
                var ad = {
                    id: $reserveAd.data("adid")
                };
                SDK.Ad.reservead(ad, function (err, data) {
                    if (err) throw JSON.stringify(err);
                    location.reload();
                })
            }
            else {
                window.close();
            }
        })

    });





    $("#logOutLink").on("click", function(){
        SDK.logOut();
        window.location.href = "index.html";
    });


});
