'use strict';

const UTILITY_RULES = [
  ['table--fixed', { 'table-layout': 'fixed' }],
  [
    'btn',
    {
      display: 'inline-block',
      'font-weight': 'bold',
      'background-color': 'var(--blue)',
      'font-size': 'var(--font-size-s)',
      color: 'var(--white)',
      'border-radius': '18px',
      padding: '6px 18px',
      'text-align': 'center',
      transition:
        'background-color var(--transition),\n    border-color var(--transition),\n    color var(--transition)'
    }
  ],
  [
    'btn--stroke',
    {
      'background-color': 'transparent',
      'box-shadow': 'inset 0 0 0 1px currentColor',
      color: 'var(--blue)'
    }
  ],
  [
    'btn--s',
    {
      'font-size': 'var(--font-size-xs)',
      'line-height': 'var(--line-height-s)',
      padding: '3px 12px',
      'border-radius': '15px'
    }
  ],
  ['btn--pill-stroke', { position: 'relative' }],
  [
    'link',
    {
      cursor: 'pointer',
      color: 'var(--blue)',
      transition: 'color var(--transition)'
    }
  ],
  [
    'input--s',
    {
      'font-size': 'var(--font-size-s)',
      'line-height': 'var(--line-height-s)',
      padding: '3px 6px'
    }
  ],
  ['textarea', { resize: 'vertical', overflow: 'auto' }],
  [
    'textarea--s',
    {
      'font-size': 'var(--font-size-s)',
      'line-height': 'var(--line-height-s)',
      padding: '3px 6px'
    }
  ],
  [
    'select-container',
    { display: 'inline-flex', position: 'relative', 'align-items': 'center' }
  ],
  [
    'select',
    {
      appearance: 'none',
      'background-color': 'var(--transparent)',
      'font-size': 'var(--font-size-m)',
      'line-height': 'var(--line-height-m)',
      color: 'currentColor',
      padding: '6px 30px 6px 0',
      cursor: 'pointer',
      'box-shadow': 'none'
    }
  ],
  [
    'select-arrow',
    {
      position: 'absolute',
      right: '12px',
      top: 'calc(50% - 1px)',
      'pointer-events': 'none',
      'border-left': '4px solid var(--transparent)',
      'border-right': '4px solid var(--transparent)',
      'border-top': '5px solid var(--gray)',
      width: '8px',
      height: '8px',
      'margin-top': '-1px',
      transition: 'border-top-color var(--transition)'
    }
  ],
  [
    'select--s',
    {
      'font-size': 'var(--font-size-s)',
      'line-height': 'var(--line-height-s)',
      padding: '3px 24px 3px 0'
    }
  ],
  [
    'select--stroke',
    {
      padding: '6px 30px 6px 12px',
      'box-shadow': 'inset 0 0 0 1px var(--gray-light)',
      color: 'var(--gray) !important'
    }
  ],
  ['range', { display: 'flex', 'align-items': 'center', height: '36px' }],
  ['range--s', { height: '24px' }],
  [
    'checkbox',
    {
      color: 'var(--white)',
      'border-color': 'var(--gray)',
      transition:
        'color var(--transition),\n    border var(--transition),\n    background-color var(--transition)'
    }
  ],
  [
    'radio',
    {
      'border-radius': '50%',
      color: 'var(--gray)',
      'border-color': 'currentColor'
    }
  ],
  [
    'switch',
    {
      cursor: 'pointer',
      top: '3px',
      'flex-shrink': '0',
      position: 'relative',
      width: '30px',
      height: '18px',
      'border-radius': '9999px',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'currentColor',
      color: 'var(--gray)',
      transition:
        'color var(--transition),\n    background-color var(--transition),\n    border-color var(--transition)'
    }
  ],
  ['switch--l', { width: '40px', height: '24px', top: '0' }],
  [
    'toggle-group',
    { display: 'inline-flex', 'text-align': 'center', 'border-radius': '18px' }
  ],
  ['toggle-container', { 'max-width': '100%' }],
  [
    'toggle',
    {
      'flex-shrink': '0',
      cursor: 'pointer',
      color: 'var(--gray)',
      'font-size': 'var(--font-size-s)',
      padding: '3px 18px',
      'border-radius': '15px',
      'background-color': 'var(--transparent)',
      transition:
        'color var(--transition),\n    background-color var(--transition)'
    }
  ],
  [
    'toggle--s',
    {
      'font-size': 'var(--font-size-xs)',
      'line-height': 'var(--line-height-s)',
      padding: '0 12px'
    }
  ],
  ['txt-mono', { 'font-family': 'var(--font-stack-mono)', 'font-size': '90%' }],
  ['txt-bold', { 'font-weight': 'bold !important' }],
  [
    'txt-h1',
    {
      'font-size': 'var(--font-size-h1)',
      'line-height': 'var(--line-height-h1)'
    }
  ],
  [
    'txt-h2',
    {
      'font-size': 'var(--font-size-h2)',
      'line-height': 'var(--line-height-h2)'
    }
  ],
  [
    'txt-h3',
    {
      'font-size': 'var(--font-size-h3)',
      'line-height': 'var(--line-height-h3)'
    }
  ],
  [
    'txt-h4',
    {
      'font-size': 'var(--font-size-h4)',
      'line-height': 'var(--line-height-h4)'
    }
  ],
  [
    'txt-h5',
    {
      'font-size': 'var(--font-size-h5)',
      'line-height': 'var(--line-height-h5)'
    }
  ],
  [
    'txt-xl',
    {
      'font-size': 'var(--font-size-xl)',
      'line-height': 'var(--line-height-xl)'
    }
  ],
  [
    'txt-l',
    { 'font-size': 'var(--font-size-l)', 'line-height': 'var(--line-height-l)' }
  ],
  [
    'txt-m',
    { 'font-size': 'var(--font-size-m)', 'line-height': 'var(--line-height-m)' }
  ],
  [
    'txt-ms',
    {
      'font-size': 'var(--font-size-ms)',
      'line-height': 'var(--line-height-ms)'
    }
  ],
  [
    'txt-s',
    { 'font-size': 'var(--font-size-s)', 'line-height': 'var(--line-height-s)' }
  ],
  [
    'txt-xs',
    {
      'font-size': 'var(--font-size-xs)',
      'line-height': 'var(--line-height-xs)'
    }
  ],
  ['txt-light', { 'font-weight': 'lighter !important' }],
  ['txt-normal', { 'font-weight': 'normal !important' }],
  ['txt-em', { 'font-style': 'italic !important' }],
  ['txt-uppercase', { 'text-transform': 'uppercase !important' }],
  ['txt-lowercase', { 'text-transform': 'lowercase !important' }],
  ['txt-capitalize', { 'text-transform': 'capitalize !important' }],
  ['txt-capitalize-first', { 'text-transform': 'lowercase !important' }],
  ['txt-underline', { 'text-decoration': 'underline !important' }],
  ['txt-nowrap', { 'white-space': 'nowrap !important' }],
  ['txt-break-word', { 'word-break': 'break-all !important' }],
  [
    'txt-truncate',
    {
      display: 'block',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
      overflow: 'hidden'
    }
  ],
  ['txt-spacing05', { 'letter-spacing': '0.05em !important' }],
  ['txt-spacing1', { 'letter-spacing': '0.1em !important' }],
  ['txt-spacing2', { 'letter-spacing': '0.2em !important' }],
  ['txt-shadow-darken10', { 'text-shadow': '1px 1px 1px var(--darken10)' }],
  ['txt-shadow-darken25', { 'text-shadow': '1px 1px 1px var(--darken25)' }],
  ['txt-shadow-darken50', { 'text-shadow': '1px 1px 1px var(--darken50)' }],
  ['txt-shadow-lighten10', { 'text-shadow': '1px 1px 1px var(--lighten10)' }],
  ['txt-shadow-lighten25', { 'text-shadow': '1px 1px 1px var(--lighten25)' }],
  ['txt-shadow-lighten50', { 'text-shadow': '1px 1px 1px var(--lighten50)' }],
  ['prose--dark', { color: 'var(--white)' }],
  ['align-l', { 'text-align': 'left !important' }],
  ['align-r', { 'text-align': 'right !important' }],
  ['align-center', { 'text-align': 'center !important' }],
  ['align-t', { 'vertical-align': 'top !important' }],
  ['align-b', { 'vertical-align': 'bottom !important' }],
  ['align-middle', { 'vertical-align': 'middle !important' }],
  ['border', { 'border-style': 'solid', 'border-width': '1px' }],
  ['border-t', { 'border-style': 'solid', 'border-top-width': '1px' }],
  ['border-r', { 'border-style': 'solid', 'border-right-width': '1px' }],
  ['border-b', { 'border-style': 'solid', 'border-bottom-width': '1px' }],
  ['border-l', { 'border-style': 'solid', 'border-left-width': '1px' }],
  ['border--0', { 'border-width': '0 !important' }],
  ['border-t--0', { 'border-top-width': '0 !important' }],
  ['border-r--0', { 'border-right-width': '0 !important' }],
  ['border-b--0', { 'border-bottom-width': '0 !important' }],
  ['border-l--0', { 'border-left-width': '0 !important' }],
  ['border--2', { 'border-width': '2px !important' }],
  ['border-t--2', { 'border-top-width': '2px !important' }],
  ['border-r--2', { 'border-right-width': '2px !important' }],
  ['border-b--2', { 'border-bottom-width': '2px !important' }],
  ['border-l--2', { 'border-left-width': '2px !important' }],
  ['border--dash', { 'border-style': 'dashed !important' }],
  ['round', { 'border-radius': 'var(--border-radius) !important' }],
  [
    'round-t',
    {
      'border-radius':
        'var(--border-radius) var(--border-radius) 0 0 !important'
    }
  ],
  [
    'round-r',
    {
      'border-radius':
        '0 var(--border-radius) var(--border-radius) 0 !important'
    }
  ],
  [
    'round-b',
    {
      'border-radius':
        '0 0 var(--border-radius) var(--border-radius) !important'
    }
  ],
  [
    'round-l',
    {
      'border-radius':
        'var(--border-radius) 0 0 var(--border-radius) !important'
    }
  ],
  ['round-tl', { 'border-top-left-radius': 'var(--border-radius) !important' }],
  [
    'round-tr',
    { 'border-top-right-radius': 'var(--border-radius) !important' }
  ],
  [
    'round-br',
    { 'border-bottom-right-radius': 'var(--border-radius) !important' }
  ],
  [
    'round-bl',
    { 'border-bottom-left-radius': 'var(--border-radius) !important' }
  ],
  ['round-bold', { 'border-radius': 'var(--border-radius-bold) !important' }],
  [
    'round-t-bold',
    {
      'border-radius':
        'var(--border-radius-bold) var(--border-radius-bold) 0 0 !important'
    }
  ],
  [
    'round-r-bold',
    {
      'border-radius':
        '0 var(--border-radius-bold) var(--border-radius-bold) 0 !important'
    }
  ],
  [
    'round-b-bold',
    {
      'border-radius':
        '0 0 var(--border-radius-bold) var(--border-radius-bold) !important'
    }
  ],
  [
    'round-l-bold',
    {
      'border-radius':
        'var(--border-radius-bold) 0 0 var(--border-radius-bold) !important'
    }
  ],
  [
    'round-tl-bold',
    { 'border-top-left-radius': 'var(--border-radius-bold) !important' }
  ],
  [
    'round-tr-bold',
    { 'border-top-right-radius': 'var(--border-radius-bold) !important' }
  ],
  [
    'round-br-bold',
    { 'border-bottom-right-radius': 'var(--border-radius-bold) !important' }
  ],
  [
    'round-bl-bold',
    { 'border-bottom-left-radius': 'var(--border-radius-bold) !important' }
  ],
  ['round-full', { 'border-radius': 'var(--border-radius-full) !important' }],
  [
    'round-t-full',
    {
      'border-radius':
        'var(--border-radius-full) var(--border-radius-full) 0 0 !important'
    }
  ],
  [
    'round-r-full',
    {
      'border-radius':
        '0 var(--border-radius-full) var(--border-radius-full) 0 !important'
    }
  ],
  [
    'round-b-full',
    {
      'border-radius':
        '0 0 var(--border-radius-full) var(--border-radius-full) !important'
    }
  ],
  [
    'round-l-full',
    {
      'border-radius':
        'var(--border-radius-full) 0 0 var(--border-radius-full) !important'
    }
  ],
  [
    'round-tl-full',
    { 'border-top-left-radius': 'var(--border-radius-full) !important' }
  ],
  [
    'round-tr-full',
    { 'border-top-right-radius': 'var(--border-radius-full) !important' }
  ],
  [
    'round-br-full',
    { 'border-bottom-right-radius': 'var(--border-radius-full) !important' }
  ],
  [
    'round-bl-full',
    { 'border-bottom-left-radius': 'var(--border-radius-full) !important' }
  ],
  ['unround', { 'border-radius': '0 !important' }],
  [
    'unround-t',
    {
      'border-top-left-radius': '0 !important',
      'border-top-right-radius': '0 !important'
    }
  ],
  [
    'unround-r',
    {
      'border-top-right-radius': '0 !important',
      'border-bottom-right-radius': '0 !important'
    }
  ],
  [
    'unround-b',
    {
      'border-bottom-left-radius': '0 !important',
      'border-bottom-right-radius': '0 !important'
    }
  ],
  [
    'unround-l',
    {
      'border-top-left-radius': '0 !important',
      'border-bottom-left-radius': '0 !important'
    }
  ],
  ['unround-tl', { 'border-top-left-radius': '0 !important' }],
  ['unround-tr', { 'border-top-right-radius': '0 !important' }],
  ['unround-br', { 'border-bottom-right-radius': '0 !important' }],
  ['unround-bl', { 'border-bottom-left-radius': '0 !important' }],
  ['cursor-default', { cursor: 'default !important' }],
  ['cursor-pointer', { cursor: 'pointer !important' }],
  ['cursor-crosshair', { cursor: 'crosshair !important' }],
  ['cursor-move', { cursor: 'move !important' }],
  ['cursor-notallowed', { cursor: 'not-allowed !important' }],
  ['cursor-grab', { cursor: 'grab !important' }],
  ['cursor-grabbing', { cursor: 'grabbing !important' }],
  ['cursor-col-resize', { cursor: 'col-resize !important' }],
  ['cursor-row-resize', { cursor: 'row-resize !important' }],
  ['opacity0', { opacity: '0 !important' }],
  ['opacity25', { opacity: '0.25 !important' }],
  ['opacity50', { opacity: '0.5 !important' }],
  ['opacity75', { opacity: '0.75 !important' }],
  ['opacity100', { opacity: '1 !important' }],
  [
    'icon',
    { display: 'block', fill: 'currentColor', height: '1em', width: '1em' }
  ],
  ['grid', { display: 'flex !important', 'flex-wrap': 'wrap !important' }],
  ['col', { display: 'block', 'max-width': '100%', 'flex-shrink': '1' }],
  ['col--auto', { width: 'auto !important', flex: 'auto', 'flex-basis': '0' }],
  ['inline', { display: 'inline !important' }],
  ['block', { display: 'block !important' }],
  ['inline-block', { display: 'inline-block !important' }],
  ['none', { display: 'none !important' }],
  ['fixed', { position: 'fixed !important' }],
  ['absolute', { position: 'absolute !important' }],
  ['relative', { position: 'relative !important' }],
  ['static', { position: 'static !important' }],
  ['sticky', { position: 'sticky !important' }],
  ['top', { top: '0 !important' }],
  ['right', { right: '0 !important' }],
  ['left', { left: '0 !important' }],
  ['bottom', { bottom: '0 !important' }],
  ['z-neg1', { 'z-index': '-1 !important' }],
  ['z0', { 'z-index': '0 !important' }],
  ['z1', { 'z-index': '1 !important' }],
  ['z2', { 'z-index': '2 !important' }],
  ['z3', { 'z-index': '3 !important' }],
  ['z4', { 'z-index': '4 !important' }],
  ['z5', { 'z-index': '5 !important' }],
  [
    'mx-auto',
    { 'margin-left': 'auto !important', 'margin-right': 'auto !important' }
  ],
  ['ml-auto', { 'margin-left': 'auto !important' }],
  ['mr-auto', { 'margin-right': 'auto !important' }],
  ['flex', { display: 'flex !important' }],
  ['inline-flex', { display: 'inline-flex !important' }],
  ['flex--column', { 'flex-direction': 'column !important' }],
  ['flex--column-reverse', { 'flex-direction': 'column-reverse !important' }],
  ['flex--row', { 'flex-direction': 'row !important' }],
  ['flex--row-reverse', { 'flex-direction': 'row-reverse !important' }],
  ['flex--center-main', { 'justify-content': 'center !important' }],
  ['flex--center-cross', { 'align-items': 'center !important' }],
  ['flex--start-cross', { 'align-items': 'flex-start !important' }],
  ['flex--start-main', { 'justify-content': 'flex-start !important' }],
  ['flex--end-cross', { 'align-items': 'flex-end !important' }],
  ['flex--end-main', { 'justify-content': 'flex-end !important' }],
  ['flex--wrap', { 'flex-wrap': 'wrap !important' }],
  ['flex--stretch-cross', { 'align-items': 'stretch !important' }],
  [
    'flex--space-between-main',
    { 'justify-content': 'space-between !important' }
  ],
  ['flex--space-around-main', { 'justify-content': 'space-around !important' }],
  ['flex--space-evenly-main', { 'justify-content': 'space-evenly !important' }],
  ['flex-child-grow', { 'flex-grow': '1 !important', 'min-width': '0' }],
  ['flex-child-no-shrink', { 'flex-shrink': '0 !important' }],
  ['gridbox', { display: 'grid !important' }],
  ['inline-gridbox', { display: 'inline-grid !important' }],
  ['gridbox--row', { 'grid-auto-flow': 'row !important' }],
  ['gridbox--column', { 'grid-auto-flow': 'column !important' }],
  ['gridbox--dense', { 'grid-auto-flow': 'dense !important' }],
  ['gridbox--column-dense', { 'grid-auto-flow': 'column dense !important' }],
  ['gridbox--center', { 'place-items': 'center !important' }],
  ['gridbox--stretch', { 'place-items': 'stretch !important' }],
  ['gridbox--start', { 'place-items': 'start !important' }],
  ['gridbox--end', { 'place-items': 'end !important' }],
  ['gridbox--space-between', { 'place-content': 'space-between !important' }],
  ['gridbox--space-around', { 'place-content': 'space-around !important' }],
  ['gridbox--space-evenly', { 'place-content': 'space-evenly !important' }],
  ['object-contain', { 'object-fit': 'contain !important' }],
  ['object-cover', { 'object-fit': 'cover !important' }],
  ['object-fill', { 'object-fit': 'fill !important' }],
  ['object-none', { 'object-fit': 'none !important' }],
  ['object-scale-down', { 'object-fit': 'scale-down !important' }],
  [
    'bleed',
    { 'margin-left': 'calc(50% - 50vw)', 'margin-right': 'calc(50% - 50vw)' }
  ],
  ['bleed-r', { 'flex-grow': '1', 'margin-right': 'calc(50% - 50vw)' }],
  ['bleed-l', { 'flex-grow': '1', 'margin-left': 'calc(50% - 50vw)' }],
  ['unbleed', { 'flex-grow': '0', 'margin-left': '0', 'margin-right': '0' }],
  ['fl', { float: 'left !important' }],
  ['fr', { float: 'right !important' }],
  ['unfloat', { float: 'none !important' }],
  [
    'triangle',
    {
      width: '12px !important',
      height: '12px !important',
      'font-size': '0 !important',
      'line-height': '0 !important'
    }
  ],
  [
    'triangle--u',
    {
      'border-left': '6px solid transparent !important',
      'border-right': '6px solid transparent !important',
      'border-bottom': '9px solid currentColor !important'
    }
  ],
  [
    'triangle--r',
    {
      'border-top': '6px solid transparent !important',
      'border-bottom': '6px solid transparent !important',
      'border-left': '9px solid currentColor !important'
    }
  ],
  [
    'triangle--d',
    {
      'border-left': '6px solid transparent !important',
      'border-right': '6px solid transparent !important',
      'border-top': '9px solid currentColor !important'
    }
  ],
  [
    'triangle--l',
    {
      'border-top': '6px solid transparent !important',
      'border-bottom': '6px solid transparent !important',
      'border-right': '9px solid currentColor !important'
    }
  ],
  [
    'triangle-l',
    {
      width: '24px !important',
      height: '24px !important',
      'font-size': '0 !important',
      'line-height': '0 !important'
    }
  ],
  [
    'triangle-l--u',
    {
      'border-left': '12px solid transparent !important',
      'border-right': '12px solid transparent !important',
      'border-bottom': '18px solid currentColor !important'
    }
  ],
  [
    'triangle-l--r',
    {
      'border-top': '12px solid transparent !important',
      'border-bottom': '12px solid transparent !important',
      'border-left': '18px solid currentColor !important'
    }
  ],
  [
    'triangle-l--d',
    {
      'border-left': '12px solid transparent !important',
      'border-right': '12px solid transparent !important',
      'border-top': '18px solid currentColor !important'
    }
  ],
  [
    'triangle-l--l',
    {
      'border-top': '12px solid transparent !important',
      'border-bottom': '12px solid transparent !important',
      'border-right': '18px solid currentColor !important'
    }
  ],
  ['animation-pulse', { animation: 'pulse 1.5s ease-in-out' }],
  ['animation-spin', { animation: 'spin 1.5s linear' }],
  ['animation-fade-in', { animation: 'fadein 1.5s ease-in forwards' }],
  [
    'animation-fade-out',
    { animation: 'fadein 1.5s ease-out reverse forwards' }
  ],
  [
    'animation-fade-in-out',
    { animation: 'fadeinout 1.5s ease-in-out forwards' }
  ],
  ['animation-shake', { animation: 'shake 1.5s ease-in-out' }],
  ['animation--speed-025', { 'animation-duration': '250ms' }],
  ['animation--speed-05', { 'animation-duration': '500ms' }],
  ['animation--speed-1', { 'animation-duration': '1s' }],
  ['animation--speed-2', { 'animation-duration': '2s' }],
  ['animation--speed-4', { 'animation-duration': '4s' }],
  ['animation--delay', { 'animation-delay': '1s' }],
  ['animation--infinite', { 'animation-iteration-count': 'infinite' }],
  [
    'loading--dark',
    {
      color: 'var(--white)',
      'border-left-color': 'var(--lighten25)',
      'border-right-color': 'var(--lighten25)',
      'border-bottom-color': 'var(--lighten25)'
    }
  ],
  ['loading--s', { height: '18px', width: '18px' }],
  [
    'events-none',
    { '-webkit-touch-callout': 'none', 'pointer-events': 'none' }
  ],
  [
    'events-all',
    { '-webkit-touch-callout': 'default', 'pointer-events': 'all' }
  ],
  ['unselectable', { 'user-select': 'none' }],
  ['selectable', { 'user-select': 'text' }],
  ['transition', { transition: 'all var(--transition)' }],
  ['transition-none', { transition: 'auto' }],
  ['overflow-scroll', { overflow: 'scroll !important' }],
  [
    'overflow-auto',
    { overflow: 'auto !important', '-webkit-overflow-scrolling': 'touch' }
  ],
  ['overflow-hidden', { overflow: 'hidden !important' }],
  [
    'hide-visually',
    {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px',
      'white-space': 'nowrap'
    }
  ]
];

function utilityRules() {
  return {
    rules: UTILITY_RULES,
    tokens: UTILITY_RULES.map(rule => rule[0])
  };
}

module.exports = { utilityRules };
