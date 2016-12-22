import React from 'react';
import fs from 'fs';
import path from 'path';
import { HtmlExample } from '../html_example';

const html = fs.readFileSync(path.join(__dirname, 'tooltip.html'), 'utf8');

function Tooltip() {
  return (
    <div>
      <h2 className='pt24 txt-bold uppercase mb12 mt24'>
        Tooltip
      </h2>
      <HtmlExample code={html} />
    </div>
  );
}

export { Tooltip };
