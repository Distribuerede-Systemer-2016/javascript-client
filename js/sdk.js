var SDK = {

  serverURL: "http://localhost:3000/api",

  request: function (options, cb) {

    //Take care of headers
    var headers = {};
    if (options.headers) {
      Object.keys(options.headers).forEach(function (h) {
        headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
      });
    }

    //Perform XHR
    $.ajax({
      url: SDK.serverURL + options.url,
      method: options.method,
      headers: headers,
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(options.data),
      success: function (data, status, xhr) {
        cb(null, data, status, xhr);
      },
      error: function (xhr, status, errorThrown) {
        cb({xhr: xhr, status: status, error: errorThrown});
      }
    });
  },

  Book: {
    getAll: function (cb) {
      SDK.request({method: "GET", url: "/books", headers: {filter: {include: ["authors", "publisher"]}}}, cb);
    },
    create: function (data, cb) {
      SDK.request({method: "POST", url: "/books", data: data, headers: {authorization: SDK.Storage.load("tokenId")}}, cb);
    }
  },

  User: {
    getAll: function (cb) {
      SDK.request({method: "GET", url: "/staffs"}, cb);
    },
    current:function () {
      return SDK.Storage.load("user");
    }
  },

  Publisher: {
    getAll: function (cb) {
      SDK.request({method: "GET", url: "/publishers"}, cb);
    }
  },

  Author: {
    getAll: function (cb) {
      SDK.request({method: "GET", url: "/authors"}, cb);
    }
  },

  logOut:function() {
    SDK.Storage.remove("tokenId");
    SDK.Storage.remove("userId");
    SDK.Storage.remove("user");
  },

  login: function (username, password, cb) {
    this.request({
      data: {
        username: username,
        password: password
      },
      url: "/staffs/login?include=user",
      method: "POST"
    }, function (err, data) {

      //On login-error
      if (err) return cb(err);

      SDK.Storage.persist("tokenId", data.id);
      SDK.Storage.persist("userId", data.userId);
      SDK.Storage.persist("user", data.user);

      cb(null, data);

    });
  },

  Storage: {
    prefix: "BookStoreSDK",
    persist: function (key, value) {
      window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
    },
    load: function (key) {
      var val = window.localStorage.getItem(this.prefix + key);
      try {
        return JSON.parse(val);
      }
      catch (e){
        return val;
      }
    },
    remove:function (key) {
      window.localStorage.removeItem(this.prefix + key);
    }
  }

};
