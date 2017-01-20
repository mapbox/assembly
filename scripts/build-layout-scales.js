'use strict';

const stripIndent = require('strip-indent');
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

  function buildMediaRules(selector, properties, v, multi) {
    multi = multi || '';
    Object.keys(screens).forEach((screen) => {
      let css = `${selector}-m${screen}${multi} { `;
      properties.forEach((prop) => {
        css += `${prop}: ${v} !important; `;
      });
      css += '}\n';

      screens[screen] += css;
    });
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
       */`
    );
    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .grid--gut${scale} {
          margin-left: -${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';
    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .grid--gut${scale} > .col {
          padding-left: ${value(scale)} !important;
        }
      `);
    }, '');

    scales.forEach((scale) => {
      buildMediaRules(`.grid--gut${scale}`, ['margin-left'], `-${value(scale)}`);
      buildMediaRules(`.grid--gut${scale}`, ['padding-left'], `${value(scale)}`, ' > .col');
    });

    return css;
  };

  variantGenerators.multiMargin = function (scales) {
    let css = stripIndent(`
    \n/**
       * Apply margin on all sides.
       *
       * @group
       * @example
       * <div class='m24 bg-darken10'>m24</div>
       * @memberof Margins
       */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .m${scale} {
          margin: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.m${scale}`, ['margin'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply margin on the top and bottom.
      *
      * @group
      * @example
      * <div class='my24 bg-darken10'>my24</div>
      * @memberof Margins
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .my${scale} {
          margin-top: ${value(scale)} !important;
          margin-bottom: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.my${scale}`, ['margin-top', 'margin-bottom'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply margin on the left and right.
      *
      * @group
      * @example
      * <div class='mx24 bg-darken10'>mx24</div>
      * @memberof Margins
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .mx${scale} {
          margin-left: ${value(scale)} !important;
          margin-right: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.mx${scale}`, ['margin-left', 'margin-right'], `${value(scale)}`);
    });

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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .mt${scale} {
          margin-top: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.mt${scale}`, ['margin-top'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply margin on the right.
      *
      * @group
      * @example
      * <div class='mr24 bg-darken10'>mr24</div>
      * @memberof Margins
      */`
    );
    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .mr${scale} {
          margin-right: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.mr${scale}`, ['margin-right'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .mb${scale} {
          margin-bottom: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.mb${scale}`, ['margin-bottom'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply margin on the left.
      *
      * @group
      * @example
      * <div class='ml24 bg-darken10'>ml24</div>
      * @memberof Margins
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .ml${scale} {
          margin-left: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.ml${scale}`, ['margin-left'], `${value(scale)}`);
    });

    return css;
  };

  variantGenerators.padding = function (scales) {
    let css = stripIndent(`
    \n/**
      * Apply padding on all sides.
      *
      * @group
      * @memberof Padding
      * @example
      * <div class='p24 bg-darken10'>p24</div>
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .p${scale} {
          padding: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.p${scale}`, ['padding'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply padding on the top and bottom.
      *
      * @group
      * @example
      * <div class='py24 bg-darken10'>py24</div>
      * @memberof Padding
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .py${scale} {
          padding-top: ${value(scale)} !important;
          padding-bottom: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.py${scale}`, ['padding-top', 'padding-bottom'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply padding on the left and right.
      *
      * @group
      * @example
      * <div class='px24 bg-darken10'>px24</div>
      * @memberof Padding
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .px${scale} {
          padding-left: ${value(scale)} !important;
          padding-right: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.px${scale}`, ['padding-left', 'padding-right'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply padding on the top.
      *
      * @group
      * @example
      * <div class='pt24 bg-darken10'>pt24</div>
      * @memberof Padding
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .pt${scale} {
          padding-top: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.pt${scale}`, ['padding-top'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply padding on the right.
      *
      * @group
      * @example
      * <div class='pr24 bg-darken10'>pr24</div>
      * @memberof Padding
      */`
    );
    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .pr${scale} {
          padding-right: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.pr${scale}`, ['padding-right'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply padding on the bottom.
      *
      * @group
      * @example
      * <div class='pb24 bg-darken10'>pb24</div>
      * @memberof Padding
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .pb${scale} {
          padding-bottom: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.pb${scale}`, ['padding-bottom'], `${value(scale)}`);
    });

    css += stripIndent(`
    \n/**
      * Apply padding on the left.
      *
      * @group
      * @example
      * <div class='pl24 bg-darken10'>pl24</div>
      * @memberof Padding
      */`
    );

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .pl${scale} {
          padding-left: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.pl${scale}`, ['padding-left'], `${value(scale)}`);
    });

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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .w${scale} {
          width: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.w${scale}`, ['width'], `${value(scale)}`);
    });

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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .wmax${scale} {
          max-width: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.wmax${scale}`, ['max-width'], `${value(scale)}`);
    });

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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .wmin${scale} {
          min-width: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.wmin${scale}`, ['min-width'], `${value(scale)}`);
    });

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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .h${scale} {
          height: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.h${scale}`, ['height'], `${value(scale)}`);
    });

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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .hmax${scale} {
          max-height: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.hmax${scale}`, ['max-height'], `${value(scale)}`);
    });

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

    css += scales.reduce((result, scale) => {
      return result += stripIndent(`
        .hmin${scale} {
          min-height: ${value(scale)} !important;
        }
      `);
    }, '');
    css += '/** @endgroup */\n';

    scales.forEach((scale) => {
      buildMediaRules(`.hmin${scale}`, ['min-height'], `${value(scale)}`);
    });

    return css;
  };

  let result = '\n/* Layout scales */\n';

  Object.keys(variantGenerators).forEach((d) => {
    result += variantGenerators[d](layoutScales[d]);
  });

  Object.keys(screens).forEach((d) => {
    result += '\n@media ' + mediaQueries['--' + d + '-screen'] + ' {\n';
    result += screens[d];
    result += '}\n';
  });

  return result;
}

module.exports = buildLayoutScales;
