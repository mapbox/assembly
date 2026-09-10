'use strict';

const { emitNodes } = require('./emit');

const NODES = [
  {
    "type": "rule",
    "selectors": [
      "html",
      "body",
      "div",
      "span",
      "applet",
      "object",
      "iframe",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "blockquote",
      "pre",
      "a",
      "abbr",
      "acronym",
      "address",
      "big",
      "cite",
      "code",
      "del",
      "dfn",
      "em",
      "img",
      "ins",
      "kbd",
      "q",
      "s",
      "samp",
      "small",
      "strike",
      "strong",
      "sub",
      "sup",
      "tt",
      "var",
      "b",
      "u",
      "i",
      "center",
      "dl",
      "dt",
      "dd",
      "ol",
      "ul",
      "li",
      "fieldset",
      "form",
      "label",
      "legend",
      "table",
      "caption",
      "tbody",
      "tfoot",
      "thead",
      "tr",
      "th",
      "td",
      "article",
      "aside",
      "canvas",
      "details",
      "embed",
      "figure",
      "figcaption",
      "footer",
      "header",
      "hgroup",
      "menu",
      "nav",
      "output",
      "ruby",
      "section",
      "summary",
      "time",
      "mark",
      "audio",
      "video"
    ],
    "decls": {
      "margin": "0",
      "padding": "0",
      "border": "0",
      "font-size": "100%",
      "vertical-align": "baseline"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "article",
      "aside",
      "details",
      "figcaption",
      "figure",
      "footer",
      "header",
      "hgroup",
      "menu",
      "nav",
      "section",
      "main"
    ],
    "decls": {
      "display": "block"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "html"
    ],
    "decls": {
      "box-sizing": "border-box"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6"
    ],
    "decls": {
      "font-weight": "normal"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "*",
      "*::before",
      "*::after"
    ],
    "decls": {
      "box-sizing": "inherit"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "body"
    ],
    "decls": {
      "line-height": "1"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "ol",
      "ul"
    ],
    "decls": {
      "list-style": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "blockquote",
      "q"
    ],
    "decls": {
      "quotes": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "blockquote:before",
      "blockquote:after",
      "q:before",
      "q:after"
    ],
    "decls": {
      "content": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "table"
    ],
    "decls": {
      "border-collapse": "collapse",
      "border-spacing": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "hr"
    ],
    "decls": {
      "margin": "0",
      "border": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "html"
    ],
    "decls": {
      "box-sizing": "border-box"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "*",
      "*:after",
      "*:before"
    ],
    "decls": {
      "box-sizing": "inherit"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "button"
    ],
    "decls": {
      "background": "transparent",
      "border": "0",
      "color": "inherit",
      "font": "inherit",
      "margin": "0",
      "padding": "0",
      "width": "auto",
      "text-align": "left",
      "appearance": "none",
      "user-select": "none",
      "cursor": "pointer",
      "border-radius": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "button:disabled"
    ],
    "decls": {
      "cursor": "default"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "button::-moz-focus-inner"
    ],
    "decls": {
      "padding": "0",
      "border": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "abbr"
    ],
    "decls": {
      "text-decoration": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "svg"
    ],
    "decls": {
      "display": "inline-block"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "a"
    ],
    "decls": {
      "color": "inherit",
      "text-decoration": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "img"
    ],
    "decls": {
      "max-width": "100%",
      "vertical-align": "top"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "video"
    ],
    "decls": {
      "width": "100%",
      "height": "auto"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "q::before",
      "q::after"
    ],
    "decls": {
      "content": "''"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "pre"
    ],
    "decls": {
      "display": "block",
      "white-space": "pre-wrap",
      "tab-size": "2"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "legend"
    ],
    "decls": {
      "display": "block",
      "width": "100%"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control] *:focus"
    ],
    "decls": {
      "outline": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] *:focus"
    ],
    "decls": {
      "box-shadow": "var(--focus-shadow)",
      "transition": "box-shadow var(--transition)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] input:focus + .checkbox",
      "[data-assembly-focus-control='visible'] input:focus + .radio",
      "[data-assembly-focus-control='visible'] input:focus + .switch",
      "[data-assembly-focus-control='visible'] input:focus + .toggle"
    ],
    "decls": {
      "box-shadow": "var(--focus-shadow)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] .range input[type=range]"
    ],
    "decls": {
      "box-shadow": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] .range input[type=range]:focus::-webkit-slider-thumb"
    ],
    "decls": {
      "box-shadow": "var(--focus-shadow)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] .range input[type=range]:focus::-ms-fill-upper"
    ],
    "decls": {
      "box-shadow": "var(--focus-shadow)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] .range input[type=range]:focus::-ms-fill-lower"
    ],
    "decls": {
      "box-shadow": "var(--focus-shadow)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] .range input[type=range]:focus::-ms-thumb"
    ],
    "decls": {
      "box-shadow": "var(--focus-shadow)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] .range input[type=range]:focus::-moz-range-thumb"
    ],
    "decls": {
      "box-shadow": "var(--focus-shadow)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control] .range::-moz-focus-outer"
    ],
    "decls": {
      "border": "0"
    }
  },
  {
    "type": "font-face",
    "decls": {
      "font-family": "'Open Sans'",
      "font-weight": "400",
      "font-display": "swap",
      "src": "url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-regular.v1.woff2') format('woff2'),\n    url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-regular.v1.woff') format('woff')"
    }
  },
  {
    "type": "font-face",
    "decls": {
      "font-family": "'Open Sans'",
      "font-weight": "300",
      "font-display": "swap",
      "src": "url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-light.v1.woff2') format('woff2'),\n    url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-light.v1.woff') format('woff')"
    }
  },
  {
    "type": "font-face",
    "decls": {
      "font-family": "'Open Sans'",
      "font-style": "italic",
      "font-display": "swap",
      "src": "url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-italic.v1.woff2') format('woff2'),\n    url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-italic.v1.woff') format('woff')"
    }
  },
  {
    "type": "font-face",
    "decls": {
      "font-family": "'Open Sans'",
      "font-weight": "bold",
      "font-display": "swap",
      "src": "url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-bold.v1.woff2') format('woff2'),\n    url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-bold.v1.woff') format('woff')"
    }
  },
  {
    "type": "font-face",
    "decls": {
      "font-family": "'Open Sans'",
      "font-weight": "bold",
      "font-style": "italic",
      "font-display": "swap",
      "src": "url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-bolditalic.v1.woff2') format('woff2'),\n    url('https://api.mapbox.com/mapbox-assembly/fonts/opensans-bolditalic.v1.woff') format('woff')"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".table",
      ".prose table:not(.unprose)"
    ],
    "decls": {
      "width": "100%",
      "background-color": "transparent",
      "border-spacing": "0",
      "border-collapse": "separate",
      "border": "1px solid var(--gray-light)",
      "border-radius": "var(--border-radius)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose table:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "18px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".table th",
      ".table td",
      ".prose table th:not(.unprose)",
      ".prose table td:not(.unprose)"
    ],
    "decls": {
      "text-align": "left",
      "vertical-align": "top",
      "padding": "12px",
      "border-style": "solid",
      "border-color": "var(--gray-light)",
      "border-left-width": "1px",
      "border-bottom-width": "1px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".table th:first-child",
      ".table td:first-child",
      ".prose table th:first-child:not(.unprose)",
      ".prose table td:first-child:not(.unprose)"
    ],
    "decls": {
      "border-left-width": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".table :not(thead) tr:last-of-type th",
      ".table :not(thead) tr:last-of-type td",
      ".prose table :not(thead) tr:last-of-type th:not(.unprose)",
      ".prose table :not(thead) tr:last-of-type td:not(.unprose)"
    ],
    "decls": {
      "border-bottom-width": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".table--dark",
      ".prose--dark table:not(.unprose)"
    ],
    "decls": {
      "background": "transparent",
      "border-color": "var(--white)",
      "color": "var(--white)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".table--dark th",
      ".table--dark td",
      ".prose--dark th:not(.unprose)",
      ".prose--dark td:not(.unprose)"
    ],
    "decls": {
      "border-bottom-color": "var(--white)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".table--dark th + td"
    ],
    "decls": {
      "border-left-color": "var(--white)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn:hover",
      ".btn.is-active"
    ],
    "decls": {
      "background-color": "var(--blue-deep)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn--stroke:hover",
      ".btn--stroke.is-active"
    ],
    "decls": {
      "background-color": "transparent",
      "color": "var(--blue-deep)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn:disabled"
    ],
    "decls": {
      "pointer-events": "none",
      "color": "var(--disabled75)",
      "background-color": "var(--disabled25)",
      "box-shadow": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--stroke:disabled"
    ],
    "decls": {
      "pointer-events": "none",
      "background-color": "transparent",
      "box-shadow": "inset 0 0 0 1px var(--disabled75)",
      "color": "var(--disabled75)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn--pill-stroke:hover",
      ".btn--pill-stroke.is-active"
    ],
    "decls": {
      "z-index": "2"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-hc"
    ],
    "decls": {
      "border-radius": "0 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-hl"
    ],
    "decls": {
      "border-top-right-radius": "0 !important",
      "border-bottom-right-radius": "0 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-hr"
    ],
    "decls": {
      "border-top-left-radius": "0 !important",
      "border-bottom-left-radius": "0 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-hc:not(.btn--pill-stroke)",
      ".btn.btn--pill-hr:not(.btn--pill-stroke)"
    ],
    "decls": {
      "margin-left": "1px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-vc"
    ],
    "decls": {
      "border-radius": "0 !important",
      "display": "block",
      "width": "100%"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-vt"
    ],
    "decls": {
      "border-bottom-right-radius": "0 !important",
      "border-bottom-left-radius": "0 !important",
      "display": "block",
      "width": "100%"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-vb"
    ],
    "decls": {
      "border-top-right-radius": "0 !important",
      "border-top-left-radius": "0 !important",
      "display": "block",
      "width": "100%"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn.btn--pill-vc:not(.btn--pill-stroke)",
      ".btn.btn--pill-vb:not(.btn--pill-stroke)"
    ],
    "decls": {
      "margin-top": "1px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn--pill-stroke.btn--pill-hc"
    ],
    "decls": {
      "margin-left": "-1px",
      "margin-right": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn--pill-stroke.btn--pill-hr"
    ],
    "decls": {
      "margin-left": "-1px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn--pill-stroke.btn--pill-vc"
    ],
    "decls": {
      "margin-top": "-1px",
      "margin-bottom": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn--pill-stroke.btn--pill-vb"
    ],
    "decls": {
      "margin-top": "-1px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".link:hover",
      ".link.is-active"
    ],
    "decls": {
      "color": "var(--blue-dark)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".link:disabled"
    ],
    "decls": {
      "pointer-events": "none",
      "cursor": "default",
      "color": "var(--disabled75)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".fieldset",
      ".input",
      ".select",
      ".textarea"
    ],
    "decls": {
      "appearance": "none",
      "font-family": "inherit",
      "background": "var(--transparent)",
      "border": "0",
      "margin": "0",
      "padding": "0",
      "box-shadow": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input",
      ".textarea",
      ".select"
    ],
    "decls": {
      "box-shadow": "inset 0 0 0 1px var(--gray-light)",
      "padding": "6px 12px",
      "border-radius": "var(--border-radius)",
      "transition": "background-color var(--transition),\n    box-shadow var(--transition)",
      "display": "block",
      "width": "100%"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input:focus",
      ".textarea:focus"
    ],
    "decls": {
      "box-shadow": "inset 0 0 0 1px var(--gray)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "[data-assembly-focus-control='visible'] .select.select--stroke:focus"
    ],
    "decls": {
      "box-shadow": "inset 0 0 0 1px var(--gray), var(--focus-shadow)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input::placeholder",
      ".textarea::placeholder"
    ],
    "decls": {
      "color": "var(--disabled75)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input::-ms-clear",
      ".input::-ms-reveal"
    ],
    "decls": {
      "display": "none",
      "width": "0",
      "height": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input[type='search']"
    ],
    "decls": {
      "appearance": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input[type='search']::-webkit-search-decoration",
      ".input[type='search']::-webkit-search-cancel-button"
    ],
    "decls": {
      "appearance": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input:disabled",
      ".textarea:disabled",
      ".select--stroke:disabled"
    ],
    "decls": {
      "pointer-events": "none",
      "color": "var(--darken50)",
      "background-color": "var(--disabled10)",
      "box-shadow": "inset 0 0 0 1px var(--disabled25) !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".input[readonly]",
      ".textarea[readonly]"
    ],
    "decls": {
      "background-color": "var(--disabled10)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select:hover"
    ],
    "decls": {
      "color": "var(--gray-deep)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select:focus + .select-arrow"
    ],
    "decls": {
      "border-top-color": "var(--gray)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select option"
    ],
    "decls": {
      "background-color": "var(--white)",
      "color": "var(--gray-deep)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select option:disabled"
    ],
    "decls": {
      "color": "var(--darken25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select::-ms-expand"
    ],
    "decls": {
      "display": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select option"
    ],
    "decls": {
      "color": "var(--gray-deep)"
    }
  },
  {
    "type": "media",
    "params": "all and (-ms-high-contrast: active)",
    "nodes": [
      {
        "type": "rule",
        "selectors": [
          ".select:focus::-ms-value"
        ],
        "decls": {
          "background-color": "var(--transparent)",
          "color": "inherit"
        }
      }
    ]
  },
  {
    "type": "media",
    "params": "all and (-ms-high-contrast: none)",
    "nodes": [
      {
        "type": "rule",
        "selectors": [
          ".select:focus::-ms-value"
        ],
        "decls": {
          "background-color": "var(--transparent)",
          "color": "inherit"
        }
      }
    ]
  },
  {
    "type": "rule",
    "selectors": [
      ".select--s + .select-arrow"
    ],
    "decls": {
      "right": "8px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select--stroke .select--s"
    ],
    "decls": {
      "padding": "3px 24px 3px 6px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select:disabled"
    ],
    "decls": {
      "pointer-events": "none",
      "color": "var(--disabled75)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".select:disabled + .select-arrow"
    ],
    "decls": {
      "border-top-color": "var(--darken25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input"
    ],
    "decls": {
      "appearance": "none",
      "width": "100%",
      "margin": "0",
      "border": "0",
      "background": "var(--transparent)",
      "cursor": "pointer",
      "padding": "8px 0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-webkit-slider-runnable-track"
    ],
    "decls": {
      "width": "100%",
      "height": "4px",
      "padding": "0",
      "border": "0",
      "border-radius": "2px",
      "background": "currentColor",
      "vertical-align": "middle",
      "cursor": "pointer",
      "box-shadow": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-moz-range-track"
    ],
    "decls": {
      "width": "100%",
      "height": "4px",
      "padding": "0",
      "border": "0",
      "border-radius": "2px",
      "background": "currentColor",
      "vertical-align": "middle",
      "cursor": "pointer",
      "box-shadow": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-ms-track"
    ],
    "decls": {
      "width": "100%",
      "height": "4px",
      "cursor": "pointer",
      "background": "var(--transparent)",
      "border-color": "var(--transparent)",
      "border-width": "12px 0",
      "color": "var(--transparent)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-ms-fill-lower"
    ],
    "decls": {
      "background": "currentColor",
      "border": "0",
      "box-shadow": "none",
      "border-radius": "2px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-ms-fill-upper"
    ],
    "decls": {
      "background": "currentColor",
      "border": "0",
      "box-shadow": "none",
      "border-radius": "2px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-webkit-slider-thumb"
    ],
    "decls": {
      "box-sizing": "border-box",
      "transition": "background var(--transition)",
      "appearance": "none",
      "box-shadow": "none",
      "width": "20px",
      "height": "20px",
      "margin-top": "-8px",
      "border-radius": "50%",
      "border": "1px solid currentColor",
      "background": "var(--white)",
      "cursor": "grab"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-moz-range-thumb"
    ],
    "decls": {
      "box-sizing": "border-box",
      "transition": "background var(--transition)",
      "width": "20px",
      "height": "20px",
      "border-radius": "50%",
      "border": "1px solid currentColor",
      "background": "var(--white)",
      "cursor": "grab"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-ms-thumb"
    ],
    "decls": {
      "box-sizing": "border-box",
      "transition": "background var(--transition)",
      "width": "20px",
      "height": "20px",
      "margin-top": "0",
      "border-radius": "50%",
      "border": "1px solid currentColor",
      "background": "var(--white)",
      "cursor": "grab"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-webkit-slider-thumb:active"
    ],
    "decls": {
      "cursor": "grabbing"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-moz-range-thumb:active"
    ],
    "decls": {
      "cursor": "grabbing"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input::-ms-thumb:active"
    ],
    "decls": {
      "cursor": "grabbing"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range--s > input"
    ],
    "decls": {
      "padding": "4px 0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range--s > input::-webkit-slider-runnable-track"
    ],
    "decls": {
      "height": "2px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range.range--s > input::-moz-range-track"
    ],
    "decls": {
      "height": "2px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range.range--s > input::-ms-track"
    ],
    "decls": {
      "border-width": "9px 0",
      "height": "2px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range--s > input::-webkit-slider-thumb"
    ],
    "decls": {
      "width": "12px",
      "height": "12px",
      "margin-top": "-5px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range--s > input::-moz-range-thumb"
    ],
    "decls": {
      "width": "12px",
      "height": "12px",
      "margin-top": "-5px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range--s > input::-ms-thumb"
    ],
    "decls": {
      "width": "12px",
      "height": "12px",
      "margin-top": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input:disabled::-webkit-slider-runnable-track"
    ],
    "decls": {
      "background": "var(--disabled25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input:disabled::-moz-range-track"
    ],
    "decls": {
      "background": "var(--disabled25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input:disabled::-ms-fill-upper"
    ],
    "decls": {
      "background": "var(--disabled25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input:disabled::-ms-fill-lower"
    ],
    "decls": {
      "background": "var(--disabled25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input:disabled::-webkit-slider-thumb"
    ],
    "decls": {
      "border-color": "var(--disabled25)",
      "background": "var(--gray-faint)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input:disabled::-ms-thumb"
    ],
    "decls": {
      "border-color": "var(--disabled25)",
      "background": "var(--gray-faint)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".range > input:disabled::-moz-range-thumb"
    ],
    "decls": {
      "border-color": "var(--disabled25)",
      "background": "var(--gray-faint)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".checkbox-container",
      ".switch-container",
      ".radio-container"
    ],
    "decls": {
      "user-select": "none",
      "display": "inline-flex"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".toggle-container > input",
      ".checkbox-container > input",
      ".switch-container > input",
      ".radio-container > input"
    ],
    "decls": {
      "border": "0",
      "clip": "rect(0 0 0 0)",
      "height": "1px",
      "margin": "-1px",
      "overflow": "hidden",
      "padding": "0",
      "position": "absolute",
      "width": "1px",
      "white-space": "nowrap"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".checkbox",
      ".radio"
    ],
    "decls": {
      "cursor": "pointer",
      "top": "3px",
      "flex-shrink": "0",
      "width": "18px",
      "height": "18px",
      "border-radius": "var(--border-radius)",
      "position": "relative",
      "border-width": "1px",
      "border-style": "solid",
      "border-color": "var(--transparent)",
      "transition": "color var(--transition),\n    border var(--transition),\n    background-color var(--transition)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".btn:not(.btn--stroke) > .checkbox"
    ],
    "decls": {
      "border-color": "var(--transparent)",
      "top": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".checkbox > .icon"
    ],
    "decls": {
      "position": "absolute",
      "width": "18px",
      "height": "18px",
      "inset": "-1px",
      "display": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".radio::before"
    ],
    "decls": {
      "content": "''",
      "background-color": "currentColor",
      "border-radius": "50%",
      "position": "absolute",
      "inset": "2px",
      "display": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".switch::after"
    ],
    "decls": {
      "content": "''",
      "background-color": "currentColor",
      "position": "absolute",
      "display": "block",
      "border-radius": "50%",
      "width": "calc(50% - 2px)",
      "left": "2px",
      "top": "2px",
      "bottom": "2px",
      "transition": "left var(--transition), background-color var(--transition)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".switch--l::after"
    ],
    "decls": {
      "left": "3px",
      "top": "3px",
      "bottom": "3px",
      "width": "calc(50% - 3px)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".switch--s-label",
      ".checkbox--s-label",
      ".radio--s-label"
    ],
    "decls": {
      "top": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:disabled"
    ],
    "decls": {
      "pointer-events": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:disabled + .checkbox",
      "input:disabled + .radio",
      "input:disabled + .switch",
      "input:checked:disabled + .checkbox",
      "input:checked:disabled + .radio",
      "input:checked:disabled + .switch"
    ],
    "decls": {
      "pointer-events": "none",
      "color": "var(--darken25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:disabled + .switch"
    ],
    "decls": {
      "border-color": "var(--disabled25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:disabled + .radio",
      "input:disabled + .checkbox"
    ],
    "decls": {
      "background-color": "var(--disabled25)",
      "border-color": "var(--transparent)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked:disabled + .checkbox",
      "input:checked:disabled + .radio",
      "input:checked:disabled + .switch"
    ],
    "decls": {
      "background-color": "var(--disabled25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:disabled + .switch::after",
      "input:checked:disabled + .switch::after"
    ],
    "decls": {
      "background-color": "var(--darken25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked + .checkbox > .icon",
      "input:checked + .radio::before"
    ],
    "decls": {
      "display": "block"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked + .radio"
    ],
    "decls": {
      "color": "var(--gray)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked + .checkbox"
    ],
    "decls": {
      "border": "1px solid var(--transparent)",
      "background-color": "var(--gray)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked + .switch::after"
    ],
    "decls": {
      "left": "50%",
      "background-color": "var(--white)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked + .switch"
    ],
    "decls": {
      "border-color": "var(--transparent)",
      "background-color": "var(--gray)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked + .toggle"
    ],
    "decls": {
      "background": "var(--gray)",
      "color": "var(--white)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:disabled + .toggle"
    ],
    "decls": {
      "pointer-events": "none",
      "color": "var(--darken25)",
      "border-color": "var(--transparent)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "input:checked:disabled + .toggle"
    ],
    "decls": {
      "background-color": "var(--disabled25)",
      "color": "var(--darken25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      "body",
      "input",
      "textarea"
    ],
    "decls": {
      "color": "var(--gray-dark)",
      "font-size": "var(--font-size-m)",
      "line-height": "var(--line-height-m)",
      "font-family": "var(--font-stack-base)",
      "font-weight": "normal",
      "-webkit-font-smoothing": "antialiased"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-kbd",
      ".prose:not(.unprose) kbd"
    ],
    "decls": {
      "font-family": "var(--font-stack-mono)",
      "border": "1px solid var(--darken25)",
      "line-height": "var(--line-height-s)",
      "border-radius": "3px",
      "padding": "2px 3px",
      "box-shadow": "0 1px 0 0 var(--darken10)",
      "font-size": "90%",
      "font-weight": "normal"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-kbd--dark",
      ".prose--dark kbd:not(.unprose)"
    ],
    "decls": {
      "border": "1px solid var(--lighten25)",
      "box-shadow": "0 1px 0 0 var(--lighten25)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-sub",
      ".prose sub:not(.unprose)"
    ],
    "decls": {
      "top": "0.5ex"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-code",
      ".pre",
      ".prose code:not(.unprose)",
      ".prose pre:not(.unprose)"
    ],
    "decls": {
      "font-family": "var(--font-stack-mono)",
      "white-space": "pre-wrap",
      "font-size": "90%",
      "line-height": "1.5em",
      "background": "var(--darken5)",
      "border-radius": "3px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-code--dark",
      ".pre--dark",
      ".prose--dark code:not(.unprose)",
      ".prose--dark pre:not(.unprose)"
    ],
    "decls": {
      "background": "var(--lighten5)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".pre",
      ".prose pre:not(.unprose)"
    ],
    "decls": {
      "padding": "12px",
      "overflow": "auto"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose pre:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "12px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose pre code:not(.unprose)"
    ],
    "decls": {
      "background": "transparent",
      "padding": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-code",
      ".prose code:not(.unprose)"
    ],
    "decls": {
      "padding": "2px 4px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-abbr",
      ".prose abbr:not(.unprose)"
    ],
    "decls": {
      "border-bottom": "1px dotted currentColor",
      "cursor": "help"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-hr",
      ".prose hr:not(.unprose)"
    ],
    "decls": {
      "margin": "17px 0",
      "border": "0",
      "height": "1px",
      "background": "var(--darken10)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-hr--dark",
      ".prose--dark hr:not(.unprose)"
    ],
    "decls": {
      "background": "var(--lighten10)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose ol:not(.unprose)",
      ".prose ul:not(.unprose)",
      ".txt-ol",
      ".txt-ul"
    ],
    "decls": {
      "margin-left": "24px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose ol:not(.unprose)",
      ".prose ul:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "12px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose ol ol:not(.unprose)",
      ".prose ul ul:not(.unprose)",
      ".prose ol ol ol:not(.unprose)",
      ".prose ul ul ul:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "6px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-ul",
      ".prose ul:not(.unprose)"
    ],
    "decls": {
      "list-style": "disc"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-ol",
      ".prose ol:not(.unprose)"
    ],
    "decls": {
      "list-style": "decimal"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-li",
      ".prose li:not(.unprose)"
    ],
    "decls": {
      "display": "list-item"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose li:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "6px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-blockquote",
      ".prose blockquote:not(.unprose)"
    ],
    "decls": {
      "quotes": "none",
      "font-style": "normal",
      "padding-left": "18px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose blockquote:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "18px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-sup",
      ".txt-sub",
      ".prose sup:not(.unprose)",
      ".prose sub:not(.unprose)"
    ],
    "decls": {
      "height": "0",
      "line-height": "1",
      "vertical-align": "baseline",
      "position": "relative",
      "font-size": "75%"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-sup",
      ".prose sup:not(.unprose)"
    ],
    "decls": {
      "bottom": "1ex"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-capitalize-first::first-letter"
    ],
    "decls": {
      "text-transform": "capitalize !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".txt-underline-on-hover:hover"
    ],
    "decls": {
      "text-decoration": "underline !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose del:not(.unprose)",
      ".prose s:not(.unprose)",
      ".txt-strike"
    ],
    "decls": {
      "text-decoration": "line-through !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose h1:not(.unprose)"
    ],
    "decls": {
      "font-weight": "bold",
      "font-size": "var(--font-size-h1)",
      "line-height": "var(--line-height-h1)",
      "margin-bottom": "12px",
      "padding-top": "36px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose h2:not(.unprose)"
    ],
    "decls": {
      "font-weight": "bold",
      "font-size": "var(--font-size-h2)",
      "line-height": "var(--line-height-h2)",
      "margin-bottom": "12px",
      "padding-top": "24px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose h3:not(.unprose)"
    ],
    "decls": {
      "font-weight": "bold",
      "font-size": "var(--font-size-h3)",
      "line-height": "var(--line-height-h3)",
      "margin-bottom": "12px",
      "padding-top": "24px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose h4:not(.unprose)"
    ],
    "decls": {
      "font-weight": "bold",
      "font-size": "var(--font-size-h4)",
      "line-height": "var(--line-height-h4)",
      "margin-bottom": "12px",
      "padding-top": "18px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose h5:not(.unprose)",
      ".prose h6:not(.unprose)"
    ],
    "decls": {
      "font-weight": "bold",
      "font-size": "var(--font-size-h5)",
      "line-height": "var(--line-height-h5)",
      "margin-bottom": "12px",
      "padding-top": "12px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose p:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "12px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose small:not(.unprose)"
    ],
    "decls": {
      "display": "block",
      "font-size": "var(--font-size-s)",
      "line-height": "var(--line-height-s)",
      "margin-bottom": "12px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose a:not(.unprose)"
    ],
    "decls": {
      "color": "var(--blue)",
      "text-decoration": "underline"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose--dark a:not(.unprose)"
    ],
    "decls": {
      "color": "var(--white)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose a:not(.unprose):hover"
    ],
    "decls": {
      "color": "var(--blue-dark)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose--dark a:not(.unprose):hover"
    ],
    "decls": {
      "color": "var(--lighten75)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose img:not(.unprose)",
      ".prose video:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "12px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose h1:first-child:not(.unprose)",
      ".prose h2:first-child:not(.unprose)",
      ".prose h3:first-child:not(.unprose)",
      ".prose h4:first-child:not(.unprose)",
      ".prose h5:first-child:not(.unprose)",
      ".prose h6:first-child:not(.unprose)"
    ],
    "decls": {
      "padding-top": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".prose *:last-child:not(.unprose)"
    ],
    "decls": {
      "margin-bottom": "0"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".opacity0-on-hover:hover",
      ".opacity0-on-active.is-active"
    ],
    "decls": {
      "opacity": "0 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".opacity25-on-hover:hover",
      ".opacity25-on-active.is-active"
    ],
    "decls": {
      "opacity": "0.25 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".opacity50-on-hover:hover",
      ".opacity50-on-active.is-active"
    ],
    "decls": {
      "opacity": "0.5 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".opacity75-on-hover:hover",
      ".opacity75-on-active.is-active"
    ],
    "decls": {
      "opacity": "0.75 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".opacity100-on-hover:hover",
      ".opacity100-on-active.is-active",
      ".opacity100-on-focus:focus"
    ],
    "decls": {
      "opacity": "1 !important"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".clearfix::after"
    ],
    "decls": {
      "content": "'' !important",
      "display": "block !important",
      "clear": "both !important"
    }
  },
  {
    "type": "keyframes",
    "name": "pulse",
    "steps": [
      {
        "selectors": [
          "0%"
        ],
        "decls": {
          "transform": "scale(0.5)",
          "opacity": "0"
        }
      },
      {
        "selectors": [
          "45%"
        ],
        "decls": {
          "opacity": "0.5"
        }
      },
      {
        "selectors": [
          "90%"
        ],
        "decls": {
          "transform": "scale(1.25)",
          "opacity": "0"
        }
      },
      {
        "selectors": [
          "100%"
        ],
        "decls": {
          "transform": "scale(1.25)",
          "opacity": "0"
        }
      }
    ]
  },
  {
    "type": "keyframes",
    "name": "spin",
    "steps": [
      {
        "selectors": [
          "0%"
        ],
        "decls": {
          "transform": "rotate(0deg)"
        }
      },
      {
        "selectors": [
          "100%"
        ],
        "decls": {
          "transform": "rotate(360deg)"
        }
      }
    ]
  },
  {
    "type": "keyframes",
    "name": "fadein",
    "steps": [
      {
        "selectors": [
          "0%"
        ],
        "decls": {
          "opacity": "0"
        }
      },
      {
        "selectors": [
          "100%"
        ],
        "decls": {
          "opacity": "1"
        }
      }
    ]
  },
  {
    "type": "keyframes",
    "name": "fadeinout",
    "steps": [
      {
        "selectors": [
          "0%"
        ],
        "decls": {
          "opacity": "0"
        }
      },
      {
        "selectors": [
          "50%"
        ],
        "decls": {
          "opacity": "1"
        }
      },
      {
        "selectors": [
          "100%"
        ],
        "decls": {
          "opacity": "0"
        }
      }
    ]
  },
  {
    "type": "keyframes",
    "name": "shake",
    "steps": [
      {
        "selectors": [
          "from",
          "to"
        ],
        "decls": {
          "transform": "translate3d(0, 0, 0)"
        }
      },
      {
        "selectors": [
          "10%",
          "30%",
          "50%",
          "70%",
          "90%"
        ],
        "decls": {
          "transform": "translate3d(-12px, 0, 0)"
        }
      },
      {
        "selectors": [
          "20%",
          "40%",
          "60%",
          "80%"
        ],
        "decls": {
          "transform": "translate3d(12px, 0, 0)"
        }
      }
    ]
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled::-webkit-scrollbar"
    ],
    "decls": {
      "width": "6px",
      "height": "6px",
      "background": "transparent"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled::-webkit-scrollbar:hover"
    ],
    "decls": {
      "background": "transparent"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled::-webkit-scrollbar-track"
    ],
    "decls": {
      "background": "none"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled::-webkit-scrollbar-thumb"
    ],
    "decls": {
      "background": "rgba(0, 0, 0, 0.25)",
      "border-color": "transparent",
      "width": "6px",
      "border-radius": "3px"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled::-webkit-scrollbar-thumb:hover"
    ],
    "decls": {
      "background": "rgba(0, 0, 0, 0.35)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled::-webkit-scrollbar-track:hover"
    ],
    "decls": {
      "background": "transparent"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled--dark::-webkit-scrollbar-thumb"
    ],
    "decls": {
      "background": "rgba(255, 255, 255, 0.3)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".scroll-styled--dark::-webkit-scrollbar-thumb:hover"
    ],
    "decls": {
      "background": "rgba(255, 255, 255, 0.4)"
    }
  },
  {
    "type": "rule",
    "selectors": [
      ".loading",
      ".loading--dark"
    ],
    "decls": {
      "display": "block",
      "height": "36px",
      "width": "36px",
      "border-radius": "50%",
      "border": "3px solid var(--darken25)",
      "border-top-color": "currentColor",
      "animation": "assembly-loading 0.8s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95)"
    }
  },
  {
    "type": "keyframes",
    "name": "assembly-loading",
    "steps": [
      {
        "selectors": [
          "to"
        ],
        "decls": {
          "transform": "rotate(360deg)"
        }
      }
    ]
  },
  {
    "type": "media",
    "params": "print",
    "nodes": [
      {
        "type": "rule",
        "selectors": [
          ".none-print"
        ],
        "decls": {
          "display": "none !important"
        }
      }
    ]
  }
];

function baseCss() {
  return emitNodes(NODES);
}

module.exports = { baseCss };
