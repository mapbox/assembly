'use strict';

function timeLog(str) {
  const now = new Date();
  console.log(
    `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] ${str}`
  );
}

module.exports = timeLog;
