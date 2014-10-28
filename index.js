var xhr = require('xhr');

function BaseCore(api) {
  this.api = api;
}

BaseCore.prototype.signin = function(username, password, callback) {
  xhr({
    uri: this.api + '/api/login?_=' + Date.now(),
    json: {
      username: username.toLowerCase(),
      password: password
    },
    withCredentials: true,
    method: 'POST'
  }, function(err, resp, body) {
    if (err) {
      if (err.statusCode === 401) { // MFA
        return callback(new Error('MFA Code Required'));
      } else {
        return callback(err);
      }
    }
    else callback(null, body);
  });
};

BaseCore.prototype.signinMFA = function(username, password, code, callback) {
  xhr({
    uri: this.api + '/api/login?_=' + Date.now(),
    json: {
      username: username.toLowerCase(),
      password: password,
      code: code
    },
    withCredentials: true,
    method: 'POST'
  }, function(err, resp, body) {
    if (err) return callback(err);
    else callback(null, body);
  });
};

BaseCore.prototype.signout = function(callback) {
  xhr({
    uri: this.api + '/api/logout?_=' + Date.now(),
    method: 'POST',
    withCredentials: true
  }, function(err, resp, body) {
    if (err) return callback(err);
    else callback(null, body);
  });
};

BaseCore.prototype.getUser = function(callback) {
  xhr({
    uri: this.api + '/api/session?_=' + Date.now(),
    method: 'GET',
    json: true,
    withCredentials: true
  }, function(err, resp, body) {
    if (err) return callback(err);
    else callback(null, body);
  });
};

module.exports = BaseCore;
