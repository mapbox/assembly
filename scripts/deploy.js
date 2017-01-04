'use strict';

const fs = require('fs');
const path = require('path');
const globby = require('globby');
const S3 = require('aws-sdk/clients/s3');
const pkg = require('../package');

const bucket = new S3({
  params: {
    Bucket: 'www.mapbox.com/assembly/' + pkg.version
  }
});

const glob = [
  path.join(__dirname, '../dist/opensans-*'),
  path.join(__dirname, '../dist/assembly*')
];

globby(glob)
  .then((files) => {
    const uploadFiles = files.map((file) => {
      return bucket.upload({
        Key: path.basename(file),
        Body: fs.createReadStream(file)
      }).promise();
    });

    return Promise.all(uploadFiles);
  })
  .then(() => {
    console.log('DEPLOYED Assembly', pkg.version);
  })
  .catch((err) => {
    console.log(err.stack);
  });
