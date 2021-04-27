'use strict';

// ALERT: Layout scale media variants are built alongside the scales themselves
// in build-layout-scales.js.
// ALERT: This is only built to work with single-class selectors at the moment.

const fs = require('fs');
const _ = require('lodash');
const pify = require('pify');
const path = require('path');
const postcss = require('postcss');

// These are the files we'll read for the target classes.
const targetFiles = ['layout', 'theming', 'typography'];

// These are the classes we'll build media variants for.
const targetClassArray = [
  // Layout
  'grid',
  'col',
  'col--auto',
  'inline',
  'block',
  'inline-block',
  'none',
  'fixed',
  'absolute',
  'relative',
  'static',
  'sticky',
  'top',
  'right',
  'left',
  'bottom',
  'z-neg1',
  'z0',
  'z1',
  'z2',
  'z3',
  'z4',
  'z5',
  'mx-auto',
  'flex',
  'inline-flex',
  'flex--column',
  'flex--column-reverse',
  'flex--row',
  'flex--row-reverse',
  'flex--wrap',
  'flex--start-cross',
  'flex--start-main',
  'flex--end-cross',
  'flex--end-main',
  'flex--center-main',
  'flex--center-cross',
  'flex--stretch-cross',
  'flex--space-between-main',
  'flex-child-grow',
  'flex-child-no-shrink',
  'bleed',
  'bleed-r',
  'bleed-l',
  'unbleed',
  'fl',
  'fr',
  'unfloat',
  // Theming
  'border',
  'border-t',
  'border-r',
  'border-b',
  'border-l',
  'border--0',
  'border-t--0',
  'border-r--0',
  'border-b--0',
  'border-l--0',
  'round',
  'round-t',
  'round-r',
  'round-b',
  'round-l',
  'round-tl',
  'round-tr',
  'round-br',
  'round-bl',
  'round-bold',
  'round-t-bold',
  'round-r-bold',
  'round-b-bold',
  'round-l-bold',
  'round-tl-bold',
  'round-tr-bold',
  'round-br-bold',
  'round-bl-bold',
  'round-full',
  'round-t-full',
  'round-r-full',
  'round-b-full',
  'round-l-full',
  'round-tl-full',
  'round-tr-full',
  'round-br-full',
  'round-bl-full',
  'unround',
  'unround-t',
  'unround-r',
  'unround-b',
  'unround-l',
  'unround-tl',
  'unround-tr',
  'unround-br',
  'unround-bl',
  // Typography
  'txt-h1',
  'txt-h2',
  'txt-h3',
  'txt-h4',
  'txt-h5',
  'txt-xl',
  'txt-l',
  'txt-m',
  'txt-ms',
  'txt-s',
  'txt-xs'
];

const targetClasses = new Set(targetClassArray);

function buildMediaVariants() {
  const screens = {
    m: [],
    l: [],
    xl: []
  };

  // Track the classes we found so we can throw an error if the list above
  // becomes outdated and includes classes that have been removed.
  const classesRemaining = new Set(targetClasses);

  function findRules(root) {
    root.walkRules(rule => {
      const className = rule.selector.replace(/^\./, '');
      if (!targetClasses.has(className)) return;
      classesRemaining.delete(className);
      Object.keys(screens).forEach(screenSize => {
        const mediaRule = rule.clone({
          selector: `${rule.selector}-m${screenSize}`
        });
        screens[screenSize].push(mediaRule);
      });
    });
  }

  const findRulesInTargetFiles = targetFiles.map(targetFile => {
    const filePath = path.join(__dirname, `../src/${targetFile}.css`);
    return pify(fs.readFile)(filePath, 'utf8').then(css => {
      return postcss()
        .use(findRules)
        .process(css, { from: filePath, to: filePath });
    });
  });

  return Promise.all(findRulesInTargetFiles).then(() => {
    if (classesRemaining.size > 0) {
      throw new Error(
        `The following classes were not found: ${Array.from(
          classesRemaining
        ).join(', ')}`
      );
    }

    let result = '';
    Object.keys(screens).forEach(screenSize => {
      const mediaAtRule = postcss.atRule({
        name: 'media',
        params: `(--${screenSize}-screen)`
      });
      // Sort the rules so the output is deterministic, despite async file reading
      const sortedRules = _.sortBy(screens[screenSize], rule => {
        const suffixlessClassName = rule.selector
          .replace(/-m[mlx]{1,2}$/, '')
          .replace(/^\./, '');
        return targetClassArray.indexOf(suffixlessClassName);
      });
      sortedRules.forEach(rule => {
        mediaAtRule.append(rule);
      });
      result += mediaAtRule.toString() + '\n\n';
    });
    return result;
  });
}

module.exports = buildMediaVariants;
