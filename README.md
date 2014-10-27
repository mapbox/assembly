# base-core

Core interactions with the Mapbox authentication API.

## Api

```js
var bc = new BaseCore('http://endpoint');
```

* `bc.signin(username, password, callback)`
* `bc.signinMFA(username, password, callback)`
* `bc.signout(callback)`

## Develop

```
npm install
npm test
```
