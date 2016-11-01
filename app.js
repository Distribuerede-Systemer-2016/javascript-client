$(document).ready(function () {

  $.ajax({
    url: "http://localhost:8080/api/book",
    method: "GET",
    success: function (foo, bar, lorem){
      console.log(foo, bar, lorem)
    },
    error:function(foo, bar){
      console.log(foo, bar)
    }
  });

});