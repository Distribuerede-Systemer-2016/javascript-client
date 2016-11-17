$(document).ready(function () {

  //Fires on page-load
  SDK.Book.getAll(function(err, data){
    if(err) throw err;

    var decrypted = encryptDecrypt(data);
      decrypted = JSON.parse(decrypted);


    var $booksTableBody = $("#booksTableBody");
    decrypted.forEach(function (book, i) {

      $booksTableBody.append(
        "<tr>" +
          "<td>" + book.title + "</td>" +
          "<td>" + book.author + "</td>" +
          "<td>" + book.version + "</td>" +
          "<td>" + book.priceAB + "</td>" +
          "<td>" + book.priceSAXO + "</td>" +
          "<td>" + book.priceCDON + "</td>" +
          "<td>" + book.ISBN + "</td>" +
        "</tr>");
    });

  });



});

