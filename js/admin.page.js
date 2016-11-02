$(document).ready(function () {

  //Fires on page-load
  SDK.Book.getAll(function (err, data) {
    if (err) throw err;

    function printAuthors(authors) {
      return authors.map(function (author) {
        return author.firstName + " " + author.lastName;
      }).join(", ");
    }

    var $booksTableBody = $("#booksTableBody");
    data.forEach(function (book, i) {

      $booksTableBody.append(
        "<tr>" +
        "<td>" + book.title + "</td>" +
        "<td>" + book.subtitle + "</td>" +
        "<td>" + printAuthors(book.authors) + "</td>" +
        "<td>" + book.publisher.name + "</td>" +
        "<td>Kr. " + book.price + ",-</td>" +
        "</tr>");
    });

  });

  //Fires on page-load
  SDK.User.getAll(function (err, users) {
    if (err) throw err;

    var $usersTableBody = $("#usersTableBody");
    users.forEach(function (user) {

      $usersTableBody.append(
        "<tr>" +
        "<td>" + user.firstName + " " + user.lastName + "</td>" +
        "<td>" + user.username + "</td>" +
        "<td>" + user.email + "</td>" +
        "<td>" + user.id + "</td>" +
        "</tr>");
    });

  });

  var currentUser = SDK.User.current();
  $("#currentUserName").text(currentUser.firstName +  " " + currentUser.lastName);

  /**
   * Add a new Book
   */
  $("#addNewBookButton").on("click", function () {

    //Show modal
    $('#newBookModal').modal('show');

    //Fetch publishers, and set to DOM
    SDK.Publisher.getAll(function (err, publishers) {
      if (err) throw err;

      var $publishersRadio = $("#publishersRadio");
      publishers.forEach(function (publisher, i) {

        $publishersRadio.append(
          '<div class="radio">' +
            '<label>' +
              '<input type="radio" name="publisherRadios" id="optionsRadios' + i + '" value="' + publisher.id + '">' +
              publisher.name +
            '</label>' +
          '</div>'
        );

      });

    });

    //Fetch authors, and set to DOM
    SDK.Author.getAll(function(err, authors){
      if (err) throw err;

      var $authorsCheckbox = $("#authorsCheckbox");
      authors.forEach(function(author, i){

        $authorsCheckbox.append(
          '<div class="checkbox">' +
            '<label>' +
              '<input type="checkbox" value="' + author.id + '">' +
              author.firstName + ' ' + author.lastName +
            '</label>' +
          '</div>'
        );

      });

    });

    $("#createBookButton").on("click", function(){

      //Create JSON object
      var book = {
        title: $("#bookTitle").val(),
        subtitle: $("#bookSubTitle").val(),
        pageCount: $("#bookPageCount").val(),
        edition: $("#bookEdition").val(),
        price: $("#bookPrice").val(),
        authorIds: [],
        publisherId: $("input[name=publisherRadios]:checked").val()
      };

      //Fetch selected authors
      $('#authorsCheckbox').find('input:checked').each(function() {
        book.authorIds.push($(this).val());
      });

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

  $("#logOutLink").on("click", function(){
    SDK.logOut();
    window.location.href = "index.html";
  });


});
