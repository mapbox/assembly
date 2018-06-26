'use strict';

const fs = require('fs');
const path = require('path');
const globby = require('globby');
const S3 = require('aws-sdk/clients/s3');
const mime = require('mime');
const pkg = require('../package');

const bucket = new S3({
  params: {
    Bucket: 'mapbox-assembly/fonts'
  }
});

globby(path.join(__dirname, '../fonts/opensans-*'))
  .then(files => {
    const uploadFiles = files.map(file => {
      return bucket
        .upload({
          ACL: 'public-read',
          Key: path.basename(file),
          Body: fs.createReadStream(file),
          ContentType: mime.getType(file)
        })
        .promise();
    });

    return Promise.all(uploadFiles);
  })
  .then(() => {
    console.log('DEPLOYED fonts', pkg.version);
  })
  .catch(err => {
    console.log(err.stack);
  });
