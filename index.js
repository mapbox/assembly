var xhr = require('xhr');

function BaseCore(api) {
    this.api = api;
}

BaseCore.prototype.login = function(username, password, callback) {
    var endpoint = this.api + '/api/login?_=' + Date.now();
    xhr({
        uri: endpoint
    }, function(err, resp, body) {
    });
};

module.exports = BaseCore;
