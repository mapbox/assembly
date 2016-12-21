import React from 'react';
import fs from 'fs';
import path from 'path';
import { HtmlExample } from '../html_example';

const html = fs.readFileSync(path.join(__dirname, 'menu_nav.html'), 'utf8');

function MenuNav() {
  return (
    <div>
      <h2 className='pt24 txt-bold uppercase mb12 mt24'>
        Menu navigation
      </h2>
      <HtmlExample code={html} />
    </div>
  );
}

export { MenuNav };
