'use strict';

const stripIndent = require('strip-indent');
const indentString = require('indent-string');
const mediaQueries = require('../src/media-queries');
const layoutScales = require('../src/scales');

function buildLayoutScales() {
  const variantGenerators = {};
  const screens = {
    m: '',
    l: '',
    xl: ''
  };

  function value(v) {
    if (v === '-full') {
      return '100%';
    } else if (v === '-auto') {
      return 'auto';
    } else if (v === '-none') {
      return 'none';
    } else if (typeof v === 'string' && v.indexOf('neg') !== -1) {
      return `-${v.replace('-neg', '')}px`;
    } else {
      return `${v}px`;
    }
  }

  function buildMediaRules(template) {
    const mediaFree = template('');
    Object.keys(screens).forEach((screen) => {
      screens[screen] += template(`-m${screen}`);
    });
    return mediaFree;
  }

  variantGenerators.gutter = function (scales) {
    let css = stripIndent(`
      /**
       * Apply column gutters to all columns in a grid by adding a <code>grid--gut{size}</code> modifier to the <code>grid</code> element. Class set includes <code>*-mm</code>, <code>*-ml</code>, and <code>*-mxl</code> variations to target screen sizes.
       *
       * @example
       * <div class='grid grid--gut12'>
       *   <div class='col col--2'>
       *     <div class='border border--darken10'>col--2</div>
       *   </div>
       *   <div class='col col--4'>
       *     <div class='border border--darken10'>col--4</div>
       *   </div>
       *   <div class='col col--6'>
       *     <div class='border border--darken10'>col--6</div>
       *   </div>
       * </div>
       * @memberof Grid
       * @group
       */
    `);
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .grid--gut${scale}${mediaSuffix} {
          margin-left: -${value(scale)};
        }
      `));
    });
    css += '\n/** @endgroup */\n';


    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .grid--gut${scale}${mediaSuffix} > .col,
        .grid--gut${scale}${mediaSuffix} > .col-mm,
        .grid--gut${scale}${mediaSuffix} > .col-ml,
        .grid--gut${scale}${mediaSuffix} > .col-mxl {
          padding-left: ${value(scale)};
        }
      `));
    });

    return css;
  };

  variantGenerators.multiMargin = function (scales) {
    let css = stripIndent(`
      /**
       * Apply margin on all sides.
       *
       * @group
       * @example
       * <div class='m24 bg-darken10'>m24</div>
       * @memberof Margins
       */
    `);

    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .m${scale}${mediaSuffix} {
          margin: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply margin on the top and bottom.
       *
       * @group
       * @example
       * <div class='my24 bg-darken10'>my24</div>
       * @memberof Margins
       */
    `);

    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .my${scale}${mediaSuffix} {
          margin-top: ${value(scale)} !important;
          margin-bottom: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply margin on the left and right.
       *
       * @group
       * @example
       * <div class='mx24 bg-darken10'>mx24</div>
       * @memberof Margins
       */`
    );

    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .mx${scale}${mediaSuffix} {
          margin-left: ${value(scale)} !important;
          margin-right: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.singleMargin = function (scales) {
    let css = stripIndent(`
      /**
       * Apply margin on the top.
       *
       * @group
       * @example
       * <div class='mt24 bg-darken10'>mt24</div>
       * @memberof Margins
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .mt${scale}${mediaSuffix} {
          margin-top: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply margin on the right.
       *
       * @group
       * @example
       * <div class='mr24 bg-darken10'>mr24</div>
       * @memberof Margins
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .mr${scale}${mediaSuffix} {
          margin-right: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply margin on the bottom.
       *
       * The negative margin classes, <code>mb-neg</code>, can be useful for certain design patterns like underline tabs.
       *
       * @group
       * @example
       * <div class='mb24 bg-darken10'>mb24</div>
       * @memberof Margins
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .mb${scale}${mediaSuffix} {
          margin-bottom: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply margin on the left.
       *
       * @group
       * @example
       * <div class='ml24 bg-darken10'>ml24</div>
       * @memberof Margins
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .ml${scale}${mediaSuffix} {
          margin-left: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.padding = function (scales) {
    let css = stripIndent(`
      /**
       * Apply padding on all sides.
       *
       * @group
       * @memberof Padding
       * @example
       * <div class='p24 bg-darken10'>p24</div>
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .p${scale}${mediaSuffix} {
          padding: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply padding on the top and bottom.
       *
       * @group
       * @example
       * <div class='py24 bg-darken10'>py24</div>
       * @memberof Padding
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .py${scale}${mediaSuffix} {
          padding-top: ${value(scale)} !important;
          padding-bottom: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply padding on the left and right.
       *
       * @group
       * @example
       * <div class='px24 bg-darken10'>px24</div>
       * @memberof Padding
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .px${scale}${mediaSuffix} {
          padding-left: ${value(scale)} !important;
          padding-right: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply padding on the top.
       *
       * @group
       * @example
       * <div class='pt24 bg-darken10'>pt24</div>
       * @memberof Padding
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .pt${scale}${mediaSuffix} {
          padding-top: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply padding on the right.
       *
       * @group
       * @example
       * <div class='pr24 bg-darken10'>pr24</div>
       * @memberof Padding
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .pr${scale}${mediaSuffix} {
          padding-right: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply padding on the bottom.
       *
       * @group
       * @example
       * <div class='pb24 bg-darken10'>pb24</div>
       * @memberof Padding
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .pb${scale}${mediaSuffix} {
          padding-bottom: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    css += stripIndent(`
      /**
       * Apply padding on the left.
       *
       * @group
       * @example
       * <div class='pl24 bg-darken10'>pl24</div>
       * @memberof Padding
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .pl${scale}${mediaSuffix} {
          padding-left: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.width = function (scales) {
    let css = stripIndent(`
      /**
       * Set an element's width.
       *
       * In addition to numeric values, there are \`w-full\` and \`w-auto\` classes.
       *
       * @group
       * @memberof Sizing
       * @example
       * <div class='w96 bg-darken10'>w96</div>
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .w${scale}${mediaSuffix} {
          width: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.maxWidth = function (scales) {
    let css = stripIndent(`
      /**
       * Set an element's maximum width.
       *
       * In addition to numeric values, there are \`wmax-full\` and \`wmax-none\` classes.
       *
       * @group
       * @memberof Sizing
       * @example
       * <div class='wmax6 bg-darken10'>wmax6</div>
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .wmax${scale}${mediaSuffix} {
          max-width: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.minWidth = function (scales) {
    let css = stripIndent(`
      /**
       * Set an element's minimum width.
       *
       * In addition to numeric values, there is the \`wmin-full\` class.
       *
       * @group
       * @memberof Sizing
       * @example
       * <div class='inline-block wmin96 bg-darken10'>wmin96</div>
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .wmin${scale}${mediaSuffix} {
          min-width: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.height = function (scales) {
    let css = stripIndent(`
      /**
       * Set an element's height.
       *
       * In addition to numeric values, there are \`h-full\` and \`h-auto\` classes.
       *
       * @group
       * @memberof Sizing
       * @example
       * <div class='h24 bg-darken10'>h24</div>
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .h${scale}${mediaSuffix} {
          height: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.maxHeight = function (scales) {
    let css = stripIndent(`
      /**
       * Set an element's maximum height.
       *
       * In addition to numeric values, there are \`hmax-full\` and \`hmax-none\` classes.
       *
       * @group
       * @memberof Sizing
       * @example
       * <div class='hmax12 bg-darken10'>hmax12</div>
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .hmax${scale}${mediaSuffix} {
          max-height: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  variantGenerators.minHeight = function (scales) {
    let css = stripIndent(`
      /**
       * Set an element's minimum height.
       *
       * In addition to numeric values, there is the \`hmin-full\` class.
       *
       * @group
       * @memberof Sizing
       * @example
       * <div class='hmin48 bg-darken10'>hmin48</div>
       */`
    );
    scales.forEach((scale) => {
      css += buildMediaRules((mediaSuffix) => stripIndent(`
        .hmin${scale}${mediaSuffix} {
          min-height: ${value(scale)} !important;
        }
      `));
    });
    css += '\n/** @endgroup */\n';

    return css;
  };

  let result = '\n/* Layout scales */\n';

  Object.keys(variantGenerators).forEach((d) => {
    result += variantGenerators[d](layoutScales[d]);
  });

  Object.keys(screens).forEach((d) => {
    result += '\n@media ' + mediaQueries['--' + d + '-screen'] + ' {\n';
    result += indentString(screens[d], 2);
    result += '\n}\n';
  });

  return result;
}

module.exports = buildLayoutScales;

if (require.main === module) {
  buildLayoutScales();
}
