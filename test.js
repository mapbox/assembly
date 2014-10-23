var test = require('tape'),
  BaseCore = require('./');

if (!localStorage.bcUser) localStorage.bcUser = prompt('user');
if (!localStorage.bcPassword) localStorage.bcPassword = prompt('password');

var user = localStorage.bcUser,
    pw = localStorage.bcPassword;

test('BaseCore', function(t) {
    var bc = new BaseCore('https://122e4e-mapbox.global.ssl.fastly.net');
    bc.login(user, pw, function() {
        t.end();
    });
});
