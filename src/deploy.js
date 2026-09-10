'use strict';

const fs = require('fs');
const path = require('path');
const globby = require('globby');
const S3 = require('aws-sdk/clients/s3');
const mime = require('mime');
const pkg = require('../package');

async function deploy() {
  const bucket = new S3({
    params: {
      Bucket: 'mapbox-assembly/v' + pkg.version
    }
  });
  const files = await globby(path.join(__dirname, '../dist/assembly*'));
  await Promise.all(
    files.map(file =>
      bucket
        .upload({
          ACL: 'public-read',
          Key: path.basename(file),
          Body: fs.createReadStream(file),
          ContentType: mime.getType(file)
        })
        .promise()
    )
  );
  console.log('DEPLOYED Assembly', pkg.version);
}

deploy().catch(err => {
  console.log(err.stack);
  process.exitCode = 1;
});
