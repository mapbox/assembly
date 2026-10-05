'use strict';

const path = require('path');
const postcss = require('postcss');
const postcssDiscardComments = require('postcss-discard-comments');
const del = require('del');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const buildCss = require('../src/build-css');

jest.setTimeout(30000);

function getTmp() {
  return path.join(os.tmpdir(), crypto.randomBytes(16).toString('hex'));
}

function cleanup(tmp) {
  return del(tmp, { force: true });
}

function discardComments(css) {
  return postcss()
    .use(postcssDiscardComments())
    .process(css).css;
}

function declsForSelector(css, selector) {
  const decls = {};
  postcss.parse(css).walkRules(rule => {
    if (rule.selector !== selector) return;
    if (rule.parent && rule.parent.type === 'atrule') return;
    rule.walkDecls(decl => {
      decls[decl.prop] = decl.important
        ? `${decl.value} !important`
        : decl.value;
    });
  });
  return decls;
}

function mediaParamsForSelector(css, selector) {
  const params = [];
  postcss.parse(css).walkRules(rule => {
    if (rule.selector !== selector) return;
    if (
      rule.parent &&
      rule.parent.type === 'atrule' &&
      rule.parent.name === 'media'
    ) {
      params.push(rule.parent.params);
    }
  });
  return params;
}

describe('buildCss', () => {
  test('defaults', async () => {
    const tmp = `${getTmp()}/test.css`;
    await buildCss({ outfile: tmp, quiet: true });
    const css = await fs.promises.readFile(tmp, 'utf8');
    const stripped = discardComments(css);

    expect(declsForSelector(stripped, '.flex')).toEqual({
      display: 'flex !important'
    });
    expect(declsForSelector(stripped, '.px12')).toEqual({
      'padding-left': '12px !important',
      'padding-right': '12px !important'
    });
    expect(declsForSelector(stripped, '.bg-blue')).toEqual({
      'background-color': '#0F71FA !important'
    });
    expect(declsForSelector(stripped, '.w-1\\/2')).toEqual({
      width: '50% !important'
    });
    expect(declsForSelector(stripped, '.grid--gut12')).toEqual({
      'margin-left': '-12px'
    });
    expect(declsForSelector(stripped, '.gap12')).toEqual({
      gap: '12px !important'
    });
    expect(declsForSelector(stripped, '.grid')).toEqual({
      display: 'flex !important',
      'flex-wrap': 'wrap !important'
    });
    expect(declsForSelector(stripped, '.gridbox')).toEqual({
      display: 'grid !important'
    });
    expect(declsForSelector(stripped, '.gridbox--cols3')).toEqual({
      'grid-template-columns': 'repeat(3, minmax(0, 1fr)) !important'
    });
    expect(declsForSelector(stripped, '.aspect-16\\/9')).toEqual({
      'aspect-ratio': '16/9 !important'
    });
    expect(declsForSelector(stripped, '.object-cover')).toEqual({
      'object-fit': 'cover !important'
    });
    expect(declsForSelector(stripped, '.flex--space-evenly-main')).toEqual({
      'justify-content': 'space-evenly !important'
    });
    expect(declsForSelector(stripped, '.rotate90')).toEqual({
      rotate: '90deg !important'
    });
    expect(declsForSelector(stripped, '.scale50')).toEqual({
      scale: '0.5 !important'
    });
    expect(declsForSelector(stripped, '.translate-x12')).toEqual({
      translate: '12px 0 !important'
    });
    expect(declsForSelector(stripped, '.btn')['background-color']).toBe(
      '#0F71FA'
    );
    expect(mediaParamsForSelector(stripped, '.flex-mm')).toEqual([
      'screen and (min-width: 640px)'
    ]);
    expect(stripped).toMatchSnapshot();
    await cleanup(tmp);
  });

  test('all options', async () => {
    const options = {
      outfile: `${getTmp()}/test2.css`,
      files: [
        path.join(__dirname, './fixtures/b.css'),
        path.join(__dirname, './fixtures/a.css')
      ],
      variables: {
        '--blue-dark': '#223B53',
        '--blue': '#3887BE',
        '--blue-light': '#52A1D8',
        '--blue-faint': '#F4F7FB',
        '--beige': '#FFF8DC'
      },
      mediaQueries: {
        '--l-screen': 'screen and (min-width: 760px)',
        '--ms-screen': '(min-width: 433px)'
      },
      colorVariants: {
        range: ['blue-faint']
      },
      quiet: true
    };

    await buildCss(options);
    const css = await fs.promises.readFile(options.outfile, 'utf8');
    const stripped = discardComments(css);

    expect(declsForSelector(stripped, '.a')).toEqual({ color: '#223B53' });
    expect(declsForSelector(stripped, '.b')).toEqual({ color: '#FFF8DC' });
    expect(stripped).toContain('(min-width: 433px)');
    expect(mediaParamsForSelector(stripped, '.flex-ml')).toEqual([
      'screen and (min-width: 760px)'
    ]);
    expect(stripped).toMatchSnapshot();
    await cleanup(options.outfile);
  });
});
