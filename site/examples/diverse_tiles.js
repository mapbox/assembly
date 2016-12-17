import React from 'react';
import fs from 'fs';
import path from 'path';
import { HtmlExample } from '../html_example';

const html = fs.readFileSync(path.join(__dirname, 'diverse_tiles.html'), 'utf8');

function DiverseTiles() {
  return (
    <div>
      <h2 className='txt-subhead mb12'>
        Diverse tiles
      </h2>
      <HtmlExample code={html} />
    </div>
  );
}

export { DiverseTiles };
