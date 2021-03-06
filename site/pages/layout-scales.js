import React from 'react';
import { Page } from '../page';
import scales from '../../src/scales';

const classSets = {
  'Grid Gutters': {
    classPatterns: ['grid--gut{n}'],
    scale: scales.gutter
  },
  Margins: {
    classPatterns: ['mx{n}', 'my{n}', 'ml{n}', 'mt{n}', 'mr{n}', 'mb{n}'],
    scale: scales.margin
  },
  'Margins (percentage-based)': {
    classPatterns: ['mr-{fraction}', 'ml-{fraction}'],
    scale: scales.fractions
  },
  Paddings: {
    classPatterns: ['px{n}', 'py{n}', 'pl{n}', 'pt{n}', 'pr{n}', 'pb{n}'],
    scale: scales.padding
  },
  Widths: {
    classPatterns: ['w{n}'],
    scale: scales.width
  },
  'Widths (percentage-based)': {
    classPatterns: ['w-{fraction}'],
    scale: scales.fractions
  },
  'Max-Widths': {
    classPatterns: ['wmax{n}'],
    scale: scales.maxWidth
  },
  'Min-Widths': {
    classPatterns: ['wmin{n}'],
    scale: scales.minWidth
  },
  Heights: {
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

export default class LayoutScales extends React.Component {
  render() {
    const rows = Object.keys(classSets).map(name => {
      const data = classSets[name];
      const scale = data.scale.map(v => {
        const value = typeof v === 'object' ? v[0].replace(/\\/, '') : v;
        return (
          <span
            key={value}
            className="w60 txt-s txt-mono align-r pr6 py3 border-b border-t border-l ml-neg1 mb-neg1 border-r border--gray-light color-gray"
          >
            {value}
          </span>
        );
      });

      const classPatterns = data.classPatterns.map(classPattern => {
        return (
          <div
            key={classPattern}
            className="mr3 mb3 px3 txt-mono color-blue-dark bg-blue-faint inline-block round"
          >
            {classPattern}
          </div>
        );
      });

      return (
        <div key={name} className="mb36">
          <div className="mb12">
            <div className="inline-block txt-bold mr12">{name}</div>
            {classPatterns}
          </div>
          <div className="flex flex--wrap">{scale}</div>
        </div>
      );
    });

    return (
      <Page path="/layout-scales/">
        <div className="mb24">
          <h1 className="txt-h2 txt-bold pt24 mb18">Layout Scales</h1>
          <p className="col w-1/2-ml mb36">
            These are the numbers, corresponding to pixel values, available for
            each set of layout classes. All of these class sets include{' '}
            <code className="txt-code">*-mm</code>,{' '}
            <code className="txt-code">*-ml</code>, and{' '}
            <code className="txt-code">*-mxl</code> variations to target screen
            sizes.
          </p>
        </div>
        {rows}
      </Page>
    );
  }
}
