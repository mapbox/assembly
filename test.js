var test = require('tape'),
  BaseCore = require('./');

if (!localStorage.bcUser) localStorage.bcUser = prompt('user (no mfa)');
if (!localStorage.bcPassword) localStorage.bcPassword = prompt('password (no mfa)');

if (!localStorage.bcUserMFA) localStorage.bcUserMFA = prompt('user (mfa)');
if (!localStorage.bcPasswordMFA) localStorage.bcPasswordMFA = prompt('password (mfa)');

var user = localStorage.bcUser,
    pw = localStorage.bcPassword;

var userMFA = localStorage.bcUserMFA,
    pwMFA = localStorage.bcPasswordMFA;

test('(signout)', signout);
test('base-core#signin', function(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signin(user, pw, function(err, user) {
    t.equal(err, null, 'No error returned');
    t.ok(user, 'User returned');
    t.end();
  });
});

test('(signout)', signout);
test('base-core#signin+MFA - fail', function(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signin(userMFA, pwMFA, function(err, user) {
    t.equal(err.message, 'MFA Code Required');
    t.end();
  });
});

test('(signout)', signout);
test('base-core#signin+MFA - succeed', function(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signinMFA(userMFA, pwMFA, prompt('mfa token'), function(err, user) {
    t.equal(err, null, 'No error');
    t.ok(user, 'User returned');
    t.end();
  });
});

// test('(signout)', signout);
// test('(signin)', signin);
// test('base-core#getUser', function(t) {
//   var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
//   bc.getUser(function(err, userB) {
//     t.equal(err, null, 'No error returned');
//     t.equal(user._id, userB._id, 'Same user returned');
//     t.end();
//   });
// });

test('(signout)', signout);
test('(signin)', signin);
test('base-core#signout', function(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signin(user, pw, function(err, user) {
    t.equal(err, null, 'No error returned');
    t.ok(user, 'User returned');
    bc.signout(function(err, user) {
      t.equal(err, null, 'No error returned');
      t.equal(user, null, 'No error returned');
      t.end();
    });
  });
});

function signout(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signout(function(err, user) {
    t.end();
  });
}

function signin(t) {
  var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
  bc.signin(user, pw, function(err, user) {
    t.end();
  });
}
