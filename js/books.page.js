$(document).ready(function () {

  //Fires on page-load
  SDK.Book.getAll(function(err, data){
    if(err) throw err;


    var $booksTableBody = $("#booksTableBody");
    data.forEach(function (book, i) {

      $booksTableBody.append(
        "<tr>" +
          "<td>" + book.title + "</td>" +
          "<td>" + book.isbn  + "</td>" +
          "<td>" + book.author + "</td>" +
          "<td>" + book.edition + "</td>" +
        "</tr>");

        $("#logOutLink").on("click", function(){
            SDK.logOut();
            window.location.href = "index.html";
        });
    });

  });

});

