import {
  ALL_COLORS,
  isNotAccessibleExceptBg
} from '../../src/preset/color-utils.js';
import { htmlExampleMarkup } from './html-example-markup.js';

const COLOR_GRIDS = {
  color: {
    names: ALL_COLORS.filter(color => !isNotAccessibleExceptBg(color)).concat(
      'text'
    ),
    gridClass: 'txt-s grid',
    itemClass: ''
  },
  bg: { names: ALL_COLORS, gridClass: 'grid', itemClass: ' py6 px6' }
};

function isDocPage(env) {
  const file = env?.relativePath || '';
  return file.startsWith('documentation/');
}

function headingCloseIndex(tokens, openIndex) {
  return tokens.findIndex(
    (token, index) => index > openIndex && token.type === 'heading_close'
  );
}

function nextHeadingOpen(tokens, fromIndex) {
  return tokens.findIndex(
    (token, index) => index >= fromIndex && token.type === 'heading_open'
  );
}

function headingText(tokens, openIndex) {
  const inline = tokens[openIndex + 1];
  return inline && inline.type === 'inline' ? inline.content : '';
}

function htmlToken(state, content) {
  const token = new state.Token('html_block', '', 0);
  token.content = content;
  return token;
}

function fenceToken(state, info, content) {
  const token = new state.Token('fence', 'code', 0);
  token.info = info;
  token.content = content;
  return token;
}

function expandColorGrids(state) {
  state.tokens = state.tokens.flatMap(token => {
    const [kind, prefix] = token.info.trim().split(/\s+/);
    if (token.type !== 'fence' || kind !== 'color-grid') return [token];
    const { names, gridClass, itemClass } = COLOR_GRIDS[prefix];
    const classes = names.map(name => `${prefix}-${name}`);
    const items = classes.map(
      name => `  <div class='col w-1/4 ${name}${itemClass}'>${name}</div>`
    );
    return [
      htmlToken(
        state,
        `<p class="txt-mono">${classes
          .map(name => `\`.${name}\``)
          .join(' ')}</p>\n`
      ),
      fenceToken(
        state,
        'example',
        `<div class='${gridClass}'>\n${items.join('\n')}\n</div>\n`
      )
    ];
  });
}

function tokenText(token) {
  if (token.content) return token.content;
  if (!token.children) return '';
  return token.children.map(child => child.content || '').join('');
}

function isTxtMonoToken(token) {
  return /class=["']txt-mono["']/.test(tokenText(token));
}

function dropTxtMono(tokens) {
  return tokens.filter((token, index) => {
    if (isTxtMonoToken(token)) return false;
    if (
      token.type === 'paragraph_open' &&
      tokens[index + 1] &&
      isTxtMonoToken(tokens[index + 1])
    ) {
      return false;
    }
    if (
      token.type === 'paragraph_close' &&
      tokens[index - 1] &&
      isTxtMonoToken(tokens[index - 1])
    ) {
      return false;
    }
    return true;
  });
}

function hasVisibleText(tokens) {
  return tokens.some(token => {
    if (token.type === 'fence') return false;
    return tokenText(token).trim().length > 0;
  });
}

function selectorsFromMono(tokens) {
  return tokens.flatMap(token => {
    if (!isTxtMonoToken(token)) return [];
    return [...tokenText(token).matchAll(/`([^`]+)`/g)].map(match =>
      match[1].trim()
    );
  });
}

function classesFromExample(content) {
  return [...content.matchAll(/class=['"]([^'"]+)['"]/g)].flatMap(match =>
    match[1].split(/\s+/).filter(Boolean)
  );
}

function isDemoChrome(name) {
  return /^(border(?:--[\w-]+)?|inline-block|block|relative|absolute|top|right|bottom|left|mt\d+|mb\d+|mr\d+|ml\d+|h\d+|w\d+)$/.test(
    name
  );
}

function unique(values) {
  return values.filter((value, index) => values.indexOf(value) === index);
}

function selectorsFromExample(content, section) {
  const classes = unique(classesFromExample(content));
  const kept =
    section === 'Typography'
      ? classes.filter(name =>
          /^(txt-|align-|pre$|pre--|prose|unprose)/.test(name)
        )
      : classes.filter(name => !isDemoChrome(name));
  return (kept.length > 0 ? kept : classes).map(name => `.${name}`);
}

function exampleContent(tokens) {
  const fence = tokens.find(
    token => token.type === 'fence' && token.info.trim() === 'example'
  );
  return fence ? fence.content : '';
}

function entrySelectors(inner, section) {
  const fromMono = unique(selectorsFromMono(inner));
  if (fromMono.length > 0) return fromMono;
  const example = exampleContent(inner);
  if (!example) return [];
  return selectorsFromExample(example, section);
}

function sectionTitle(tokens, index) {
  const h1 = tokens.findLastIndex(
    (token, i) =>
      i < index && token.type === 'heading_open' && token.tag === 'h1'
  );
  return headingText(tokens, h1);
}

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function pillsHtml(selectors) {
  const pillClass =
    selectors.length > 1
      ? 'mr3 py3 color-blue-deep round bg-blue-faint mb3 inline-block txt-s px3'
      : 'mr3 py3 color-blue-deep round bg-blue-faint mb3 inline-block px6';
  return selectors
    .map(selector => {
      const id = selector
        .trim()
        .replace(/\s+/g, '-')
        .replace(/\./g, '');
      const label = escapeAttr(selector.replace(/\\/g, ''));
      return `<span id="${id}" class="${pillClass}">${label}</span>`;
    })
    .join('');
}

function wrapH3Entry(state, openIndex, md) {
  const tokens = state.tokens;
  const closeIndex = headingCloseIndex(tokens, openIndex);
  const title = headingText(tokens, openIndex);
  const nextOpen = nextHeadingOpen(tokens, closeIndex + 1);
  const end = nextOpen === -1 ? tokens.length : nextOpen;
  const inner = tokens.slice(closeIndex + 1, end);
  const selectors = entrySelectors(inner, sectionTitle(tokens, openIndex));
  const fenceAt = inner.findIndex(
    token => token.type === 'fence' && token.info.trim() === 'example'
  );
  const desc = dropTxtMono(fenceAt === -1 ? inner : inner.slice(0, fenceAt));
  const rest = fenceAt === -1 ? [] : inner.slice(fenceAt);
  const description = hasVisibleText(desc)
    ? desc
    : [htmlToken(state, `<p>${escapeAttr(title)}</p>\n`)];
  const descHtml = md.renderer.render(description, md.options, state.env);
  const exampleHtml = rest
    .filter(token => token.type === 'fence' && token.info.trim() === 'example')
    .map(token => htmlExampleMarkup(md.options.highlight, token.content))
    .join('\n');
  tokens.splice(
    openIndex,
    end - openIndex,
    htmlToken(
      state,
      `<div class="border-t border-t--2 border--gray-faint">
<div class="grid-mxl grid--gut18-mxl pt36 pb60">
<div class="col w-1/3-mxl pr18-ml mb6">
<div class="txt-mono hmax240 overflow-auto scroll-styled">${pillsHtml(
        selectors
      )}</div>
</div>
<div class="col w-2/3-mxl">
<div class="mb24 prose">${descHtml}</div>
${exampleHtml}
</div>
</div>
</div>\n`
    )
  );
}

function wrapIntro(state, openIndex) {
  const tokens = state.tokens;
  const closeIndex = headingCloseIndex(tokens, openIndex);
  const nextOpen = nextHeadingOpen(tokens, closeIndex + 1);
  const end = nextOpen === -1 ? tokens.length : nextOpen;
  const inner = tokens.slice(closeIndex + 1, end);
  if (!hasVisibleText(inner)) return;
  tokens.splice(
    closeIndex + 1,
    end - (closeIndex + 1),
    htmlToken(state, '<div class="prose mb24">\n'),
    ...inner,
    htmlToken(state, '</div>\n')
  );
}

function wrapAllH3(state, md) {
  const start = state.tokens.findIndex(
    token => token.type === 'heading_open' && token.tag === 'h3'
  );
  if (start === -1) return;
  wrapH3Entry(state, start, md);
  wrapAllH3(state, md);
}

function headingOpens(tokens, tag) {
  return tokens
    .map(
      (token, index) =>
        token.type === 'heading_open' && token.tag === tag ? index : -1
    )
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
    if (token.type !== 'heading_open' || !HEADING_CLASSES[token.tag]) return;
    token.attrJoin('class', HEADING_CLASSES[token.tag]);
    linkToSelf(state, token, state.tokens[index + 1]);
  });
}

export function documentationLayout(md) {
  md.core.ruler.push('documentation_layout', state => {
    if (!isDocPage(state.env)) return;
    expandColorGrids(state);
    styleHeadings(state);
    headingOpens(state.tokens, 'h2')
      .reverse()
      .forEach(index => wrapIntro(state, index));
    headingOpens(state.tokens, 'h1')
      .reverse()
      .forEach(index => wrapIntro(state, index));
    wrapAllH3(state, md);
  });
}
