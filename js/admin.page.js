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
              "<td><input role='button' value='Slet bog' class='btn btn-success btn-md DeleteBookButton' data-isbn=" + book.isbn + " ></td>"+
              "</tr>")
    });

  });

  //Fires on page-load
  SDK.User.getAll(function (err, users) {
    if (err) throw err;

    var $usersTableBody = $("#userTableBody");
    users.forEach(function (user) {

      $usersTableBody.append(
        "<tr>" +
        "<td>" + user.username + "</td>" +
        "<td>" + user.email + "</td>" +
        "<td>" + user.phonenumber + "</td>" +
        "<td>" + user.adress + "</td>" +
        "<td>" + user.mobilepay + "</td>" +
        "<td>" + user.cash + "</td>" +
        "<td>" + user.transfer + "</td>" +
        "</tr>");
    });

  });

  var currentUser = SDK.User.current();
  $("#currentUser").text(currentUser.user);

  /**
   * Add a new Book
   */
  $("#createBookButton").on("click", function () {

    //Show modal
    $('#newBookModal').modal('show');



    $("#createBookButton").on("click", function(){

      //Create JSON object
      var book = {
        title: $("#bookTitle").val(),
        edition: $("#bookEdition").val(),
          isbn: $("#bookIsbn").val(),
          author: $("#bookAuthor").val(),
      };

      //Create book
      SDK.Book.create(book, function(err, data){
        if(err) throw err;

        $("#newBookModal").modal("hide");
      });

    });

  });
    /**
     * Delete a book
     */

    $(".DeleteBookButton").on("click", function () {
        var variable = confirm("Ønsker du at slette denne bog?");
        if (variable == true) {

            var $deleteBook = $(this);
            console.log($deleteBook);
            var book = {
                isbn: $deleteBook.data("isbn")
            };
            SDK.Admin.deletebook(book, function (err, data) {
                if (err) throw JSON.stringify(err);
                location.reload();
            })
        }
        else {
            window.close();
        }
  /**
   * Add a new User
   */
  $("#addNewUserButton").on("click", function () {

  });
        //Create book
        SDK.Book.delete(book, function(err, data){
            if(err) throw err;

            $("#deleteBookModale").modal("hide");
        });

    });

});
  $("#logOutLink").on("click", function(){
    SDK.logOut();
    window.location.href = "index.html";
  });



;
