/**
 * Created by Christoffer on 13-12-2016.
 */
$("#addNewAdButton").on("click", function() {

    var ad = {
        isbn: +$("#newAdIsbn").val(),
        comment: $("#newAdComment").val(),
        rating: +$("#newAdRating").val(),
        price: +$("#newAdPrice").val()

    };
    console.log(ad);

    SDK.Ad.create(ad, function(err, data) {
        if (err) throw JSON.stringify(err);
        console.log(ad.isbn);

        alert("Tillykke, du har nu oprettet en ny annonce!");
        window.location.href = "ads.html";
    });

});