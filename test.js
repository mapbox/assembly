var test = require('tape'),
  BaseCore = require('./');

if (!localStorage.bcUser) localStorage.bcUser = prompt('user');
if (!localStorage.bcPassword) localStorage.bcPassword = prompt('password');

var user = localStorage.bcUser,
    pw = localStorage.bcPassword;

test('base-core#signin', function(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signin(user, pw, function(err, user) {
    t.equal(err, null, 'No error returned');
    t.ok(user, 'User returned');
    bc.getUser(function(err, userB) {
      t.equal(err, null, 'No error returned');
      t.equal(user._id, userB._id, 'Same user returned');
      t.end();
    });
  });
});

test('base-core#signout', function(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signout(function(err, user) {
    t.equal(err, null, 'No error returned');
    t.equal(user, null, 'No error returned');
    t.end();
  });
});
