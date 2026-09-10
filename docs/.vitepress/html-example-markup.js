export function htmlExampleMarkup(highlight, content) {
  const source = content.replace(/\n$/, '');
  const highlighted =
    typeof highlight === 'function' ? highlight(source, 'html', '') : '';
  const highlightedAttr = highlighted
    ? ` highlighted="${encodeURIComponent(highlighted)}"`
    : '';
  return `<HtmlExample encoded="${encodeURIComponent(content)}"${highlightedAttr}></HtmlExample>`;
}
