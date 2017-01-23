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
  });

  //Fires on page-load
    SDK.Admin.showusers(function (err, data) {
        if (err) throw JSON.stringify(err);
        console.log(data);

        var $userTableBody = $("#userTableBody");
        data.forEach(function (admin) {
            $userTableBody.append(
                "<tr>" +
                "<td>" + admin.username + "</td>" +
                "<td>" + admin.email + "</td>" +
                "<td>" + admin.phonenumber + "</td>" +
                "<td>" + admin.address + "</td>" +
                //slet knappen skal kun komme når der er en bruger der er logget ind
                "<td><input role='button' value='Slet bruger' class='btn btn-success btn-md DeleteUserButton' data-userid=" + admin.userId + "></td>" +
                "</tr>")
        });

        $(".DeleteUserButton").on("click", function () {
            window.alert("Er du sikker på at du vil slette brugeren?");

            var $deleteUser = $(this);

            var user = {
                id: $deleteUser.data("userid")
            };
            SDK.Admin.deleteuser(user, function (err, data) {
                if (err) throw JSON.stringify(err);
                location.reload();

            })

        })

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
   * Add a new User
   */
  $("#addNewUserButton").on("click", function () {

  });
 });

});
  $("#logOutLink").on("click", function(){
    SDK.logOut();
    window.location.href = "index.html";
  });



;
