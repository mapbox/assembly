import React from 'react';
import scales from '../src/scales';

const classSets = {
  'Grid Gutters': {
    classPatterns: ['grid--gut{n}'],
    scale: scales.gutter
  },
  'Multi-Side Margins': {
    classPatterns: ['m{n}', 'mx{n}', 'my{n}'],
    scale: scales.multiMargin
  },
  'Single-Side Margins': {
    classPatterns: ['ml{n}', 'mt{n}', 'mr{n}', 'mb{n}'],
    scale: scales.singleMargin
  },
  'Paddings': {
    classPatterns: ['p{n}', 'px{n}', 'py{n}', 'pl{n}', 'pt{n}', 'pr{n}', 'pb{n}'],
    scale: scales.padding
  },
  'Widths': {
    classPatterns: ['w{n}'],
    scale: scales.width
  },
  'Max-Widths': {
    classPatterns: ['wmax{n}'],
    scale: scales.maxWidth
  },
  'Min-Widths': {
    classPatterns: ['wmin{n}'],
    scale: scales.minWidth
  },
  'Heights': {
    classPatterns: ['h{n}'],
    scale: scales.height
  },
  'Max-Heights': {
    classPatterns: ['hmax{n}'],
    scale: scales.maxHeight
  },
  'Min-Heights': {
    classPatterns: ['hmin{n}'],
    scale: scales.minHeight
  }
};

class LayoutScales extends React.Component {
  render() {
    const rows = Object.keys(classSets).map((name) => {
      const data = classSets[name];
      const scale = data.scale.map((number) => {
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
            {scale}
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
