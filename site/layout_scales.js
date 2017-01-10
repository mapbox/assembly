import React from 'react';
import fs from 'fs';
import path from 'path';
import execall from 'execall';

const layoutCss = fs.readFileSync(path.join(__dirname, '../src/layout.css'), 'utf8');

// Expects regular expressions with one sub-match that is the number
function findNumbers(re) {
  return execall(re, layoutCss).map((match) => {
    return match.sub[0];
  });
}

const classSets = {
  'Grid Gutters': {
    classPatterns: ['grid--gut{n}'],
    numbers: findNumbers(/\.grid--gut(\d+) {/g)
  },
  'Z-Indexes': {
    classPatterns: ['z{n}'],
    numbers: findNumbers(/\.z(\d+|-neg\d+) {/g)
  },
  'Multi-Side Margins': {
    classPatterns: ['m{n}', 'mx{n}', 'my{n}'],
    numbers: findNumbers(/\.m(\d+) {/g)
  },
  'Single-Side Margins': {
    classPatterns: ['ml{n}', 'mt{n}', 'mr{n}', 'mb{n}'],
    numbers: findNumbers(/\.mt(\d+|-neg\d+) {/g)
  },
  'Paddings': {
    classPatterns: ['p{n}', 'px{n}', 'py{n}', 'pl{n}', 'pt{n}', 'pr{n}', 'pb{n}'],
    numbers: findNumbers(/\.p(\d+) {/g)
  },
  'Widths': {
    classPatterns: ['w{n}'],
    numbers: findNumbers(/\.w(\d+|-full) {/g)
  },
  'Max-Widths': {
    classPatterns: ['wmax{n}'],
    numbers: findNumbers(/\.wmax(\d+|-full) {/g)
  },
  'Min-Widths': {
    classPatterns: ['wmin{n}'],
    numbers: findNumbers(/\.wmin(\d+|-full) {/g)
  },
  'Heights': {
    classPatterns: ['h{n}'],
    numbers: findNumbers(/\.h(\d+|-full) {/g)
  },
  'Max-Heights': {
    classPatterns: ['hmax{n}'],
    numbers: findNumbers(/\.hmax(\d+|-full) {/g)
  },
  'Min-Heights': {
    classPatterns: ['hmin{n}'],
    numbers: findNumbers(/\.hmin(\d+|-full) {/g)
  }
};

class LayoutScales extends React.Component {
  render() {
    const rows = Object.keys(classSets).map((name) => {
      const data = classSets[name];
      const numbers = data.numbers.map((number) => {
        const numberClasses = 'round border border--gray-light flex-child txt-mono py6 px12 mr3 mb3';
        return (
          <span
            key={number}
            className={numberClasses}
          >
            {number}
          </span>
        );
      });

      const classPatterns = data.classPatterns.map((classPattern) => {
        return (
          <div
            key={classPattern}
            className='inline-block txt-code mr6 mb6'
          >
            {classPattern}
          </div>
        );
      });

      return (
        <div
          key={name}
          className='py12'
        >
          <div className='mb6'>
            <div className='inline-block txt-bold mr24'>
              {name}
            </div>
            {classPatterns}
          </div>
          <div className='flex-parent-inline flex-parent--wrap'>
            {numbers}
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className='mb24'>
          <h1 className='txt-subhead txt-bold pt24 mb12'>
            Layout Scales
          </h1>
          <p className='mb12'>
            These are the numbers, corresponding to pixel values, available for each set of layout classes.
          </p>
          <p className='mb12'>
            All of these class sets include <code className='txt-code'>*-mm</code>, <code className='txt-code'>*-ml</code>, and <code className='txt-code'>*-mxl</code> variations to target screen sizes.
          </p>
        </div>
        {rows}
      </div>
    );
  }
}

export { LayoutScales };
