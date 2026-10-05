import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { ALL_COLORS } = require('../../src/preset/color-utils.js');
const { presetAssembly } = require('../../src/preset.js');
const layoutScales = require('../../src/scales.json');

const SAFELIST = new Set(presetAssembly({ safelist: true }).safelist);

const SELECTOR_VALUES = Object.assign(
  { color: ALL_COLORS.concat('text') },
  layoutScales
);

const COLOR_GRIDS = {
  color: { gridClass: 'txt-s grid', itemClass: '' },
  bg: { gridClass: 'grid', itemClass: ' py6 px6' }
};

// A `{key}` placeholder expands to every value of `SELECTOR_VALUES[key]` whose
// class Assembly generates. Lines are interleaved per value.
function expandSelectors(lines) {
  const placeholder = lines.join('\n').match(/\{(\w+)\}/);
  if (!placeholder) return lines;
  return SELECTOR_VALUES[placeholder[1]]
    .flatMap(value =>
      lines.map(line => line.replace(placeholder[0], String(value)))
    )
    .filter(selector => SAFELIST.has(selector.slice(1)));
}

function isFence(token, info) {
  return token.type === 'fence' && token.info.trim() === info;
}

function isEntryBoundary(token) {
  return token.type === 'heading_open' || isFence(token, 'selectors');
}

function nextBoundary(tokens, fromIndex) {
  const index = tokens.findIndex(
    (token, i) => i >= fromIndex && isEntryBoundary(token)
  );
  return index === -1 ? tokens.length : index;
}

function htmlToken(state, content) {
  const token = new state.Token('html_block', '', 0);
  token.content = content;
  return token;
}

function expandColorGrids(state) {
  state.tokens.forEach(token => {
    const [kind, prefix] = token.info.trim().split(/\s+/);
    if (token.type !== 'fence' || kind !== 'color-grid') return;
    const { gridClass, itemClass } = COLOR_GRIDS[prefix];
    const items = expandSelectors([`.${prefix}-{color}`]).map(selector => {
      const name = selector.slice(1);
      return `  <div class='col w-1/4 ${name}${itemClass}'>${name}</div>`;
    });
    token.info = 'example';
    token.content = `<div class='${gridClass}'>\n${items.join('\n')}\n</div>\n`;
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function pillsHtml(selectors, usedIds) {
  const pillClass =
    selectors.length > 1
      ? 'mr3 py3 color-blue-deep round bg-blue-faint mb3 inline-block txt-s px3'
      : 'mr3 py3 color-blue-deep round bg-blue-faint mb3 inline-block px6';
  return selectors
    .map(selector => {
      const id = selector.replace(/\s+/g, '-').replace(/\./g, '');
      const idAttr = usedIds.has(id) ? '' : ` id="${escapeHtml(id)}"`;
      usedIds.add(id);
      return `<span${idAttr} class="${pillClass}">${escapeHtml(
        selector
      )}</span>`;
    })
    .join('');
}

function wrapEntry(state, openIndex, md, usedIds) {
  const tokens = state.tokens;
  const end = nextBoundary(tokens, openIndex + 1);
  const selectors = expandSelectors(
    tokens[openIndex].content.trim().split('\n')
  );
  const inner = tokens.slice(openIndex + 1, end);
  const exampleAt = inner.findIndex(token => isFence(token, 'example'));
  const split = exampleAt === -1 ? inner.length : exampleAt;
  const render = list => md.renderer.render(list, md.options, state.env);
  tokens.splice(
    openIndex,
    end - openIndex,
    htmlToken(
      state,
      `<div class="border-t border-t--2 border--gray-faint">
<div class="grid-mxl grid--gut18-mxl pt36 pb60">
<div class="col w-1/3-mxl pr18-ml mb6">
<div class="txt-mono hmax240 overflow-auto scroll-styled">${pillsHtml(
        selectors,
        usedIds
      )}</div>
</div>
<div class="col w-2/3-mxl">
<div class="mb24 prose">${render(inner.slice(0, split))}</div>
${render(inner.slice(split))}
</div>
</div>
</div>\n`
    )
  );
}

function wrapIntro(state, openIndex) {
  const tokens = state.tokens;
  const closeIndex = tokens.findIndex(
    (token, index) => index > openIndex && token.type === 'heading_close'
  );
  const end = nextBoundary(tokens, closeIndex + 1);
  const inner = tokens.slice(closeIndex + 1, end);
  if (inner.length === 0) return;
  tokens.splice(
    closeIndex + 1,
    inner.length,
    htmlToken(state, '<div class="prose mb24">\n'),
    ...inner,
    htmlToken(state, '</div>\n')
  );
}

function headingOpens(tokens) {
  return tokens
    .map((token, index) => (token.type === 'heading_open' ? index : -1))
    .filter(index => index >= 0);
}

const HEADING_CLASSES = {
  h1: 'txt-h2 txt-bold mb18 pt24',
  h2: 'txt-l txt-bold pt12 mt12'
};

function linkToSelf(state, heading, inline) {
  const open = new state.Token('link_open', 'a', 1);
  open.attrs = [['class', 'block'], ['href', `#${heading.attrGet('id')}`]];
  inline.children = [
    open,
    ...inline.children,
    new state.Token('link_close', 'a', -1)
  ];
}

function styleHeadings(state) {
  state.tokens.forEach((token, index) => {
    if (token.type !== 'heading_open') return;
    token.attrJoin('class', HEADING_CLASSES[token.tag]);
    linkToSelf(state, token, state.tokens[index + 1]);
  });
}

export function documentationLayout(md) {
  md.core.ruler.push('documentation_layout', state => {
    if (!state.env.relativePath?.startsWith('documentation/')) return;
    expandColorGrids(state);
    styleHeadings(state);
    headingOpens(state.tokens)
      .reverse()
      .forEach(index => wrapIntro(state, index));
    const usedIds = new Set(
      headingOpens(state.tokens).map(index => state.tokens[index].attrGet('id'))
    );
    for (let index = 0; index < state.tokens.length; index++) {
      if (isFence(state.tokens[index], 'selectors')) {
        wrapEntry(state, index, md, usedIds);
      }
    }
  });
}
