var SDK = {

  request:function(options, cb){
    $.ajax({
      url: "http://localhost:3000/api" + options.url,
      method: options.method,
      headers: options.headers,
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(options.data),
      success:function(data, status, xhr){
        cb(null, data, status, xhr);
      },
      error:function(xhr, status, errorThrown){
        cb({xhr:xhr, status:status, error:errorThrown});
      }
    });
  },

  Book:{
    getAll:function(){

    }
  },

  login: function(username, password){
    this.request({
      data:{
        username:username,
        password:password
      },
      url: "/staffs/login",
      method: "POST"
    }, function(err, data){

      if(err) return console.log(err);

      console.log(data);

    });
  }

};
