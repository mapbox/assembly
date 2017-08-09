'use strict';

const svgstore = require('svgstore');
const _ = require('lodash');
const fs = require('fs');
const pify = require('pify');
const path = require('path');
const SVGO = require('svgo');

const svgDir = path.join(__dirname, '../src/svgs');
const svgo = new SVGO({
  plugins: [
    {
      removeAttrs: {
        attrs: 'path:(fill|color|style|width|height|overflow)'
      }
    }
  ]
});

const baseJsTemplate = options => {
  return `
    (function () {
      var Assembly = window.Assembly = window.Assembly || {};
      Assembly._svgSprite = '${options.svgSprite}';
      var parsedSvgSprite = (new DOMParser()).parseFromString(Assembly._svgSprite, 'text/xml');
      var appendSvg = function () {
        document.body.appendChild(parsedSvgSprite.getElementById('svg-symbols'));
      }
      if (document.readyState !== 'loading') {
        appendSvg();
      } else {
        document.addEventListener('DOMContentLoaded', appendSvg);
      }
    }());
  `;
};

const spriteItems = [];

function processSvgFile(filename) {
  return new Promise((resolve, reject) => {
    const extname = path.extname(filename);
    if (extname !== '.svg') return resolve();

    const basename = path.basename(filename, extname);
    const handleError = err => {
      console.log(`Error with icon "${basename}"`);
      reject(err);
    };

    fs.readFile(filename, 'utf8', (readError, content) => {
      if (readError) return handleError(readError);
      try {
        svgo.optimize(content, optimizedContent => {
          try {
            spriteItems.push({
              id: `icon-${basename}`,
              svg: optimizedContent.data
            });
            resolve();
          } catch (e) {
            handleError(e);
          }
        });
      } catch (e) {
        handleError(e);
      }
    });
  });
}

/**
 * Build Svg loader, which includes SVG data for all icons.
 *
 * @param {Array<string>} [icons] - Array of icon names to include in the
 *   loader. Icon names correspond to SVG file names excluding the `.svg` suffix.
 */
function buildSvgLoader(icons) {
  const sprite = svgstore();

  return pify(fs.readdir)(svgDir)
    .then(filenames => {
      // Error if user tries to include icons that don't exist
      icons.forEach(svg => {
        if (!filenames.includes(svg + '.svg')) {
          throw new Error(`an icon matching ${svg} does not exist`);
        }
      });

      const files =
        icons.length !== 0
          ? filenames.filter(f => icons.includes(f.split('.svg')[0]))
          : filenames;

      return Promise.all(
        files.map(filename => {
          return processSvgFile(path.join(svgDir, filename), sprite);
        })
      );
    })
    .then(() => {
      // This sorting is necessary to get a detemrinistic
      // order testable with snapshots
      _.sortBy(spriteItems, 'id').forEach(item =>
        sprite.add(item.id, item.svg)
      );
      sprite
        .element('svg')
        .attr('id', 'svg-symbols')
        .attr('style', 'display:none');

      const cleanedSprite = sprite.toString().replace(/\n/g, '');
      const jsContent = baseJsTemplate({ svgSprite: cleanedSprite });
      return jsContent;
    });
}

module.exports = buildSvgLoader;
if (require.main === module) {
  buildSvgLoader().catch(err => console.error(err.stack));
}
