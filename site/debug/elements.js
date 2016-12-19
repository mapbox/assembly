import React from 'react';

class Elements extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb18'>
          Elements
        </h1>
        <div className='grid'>
          <div className='col col--4'>
            unstyled
            <p>Lorem <sup>ipsum</sup> dolor <sub>sit</sub> amet, <abbr>consectetur adipisicing elit</abbr>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <code>Cool code</code> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <kbd>T</kbd> aliquip ex ea commodo consequat.</p>
            <p><img src='http://placehold.it/800' alt='' /></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <pre>
              <code>
                I am a code block
              </code>
            </pre>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <blockquote>
              <p>Duis aute irure dolor in reprehenderit.</p>
            </blockquote>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='col col--4'>
            classes
            <p>Lorem <sup className='txt-sup'>ipsum</sup> dolor <sub className='txt-sub'>sit</sub> amet, <abbr className='txt-abbr'>consectetur adipisicing elit</abbr>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <code className='txt-code'>Cool code</code> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <kbd className='txt-kbd'>T</kbd> aliquip ex ea commodo consequat.</p>
            <p><img src='http://placehold.it/800' alt='' /></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr className='txt-hr' />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <pre>
              <code>
                I am a code block
              </code>
            </pre>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <blockquote className='txt-blockquote'>
              <p>Duis aute irure dolor in reprehenderit.</p>
            </blockquote>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='col col--4 txt'>
            txt parent
            <p>Lorem <sup>ipsum</sup> dolor <sub>sit</sub> amet, <abbr>consectetur adipisicing elit</abbr>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <code>Cool code</code> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <kbd>command</kbd> aliquip ex ea commodo consequat.</p>
            <p><img src='http://placehold.it/800' alt='' /></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <hr />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <pre>
              <code>I am a code block</code>
            </pre>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <blockquote>
              <p>Duis aute irure dolor in reprehenderit.</p>
            </blockquote>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    );
  }
}

export { Elements };
