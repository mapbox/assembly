export function htmlExampleMarkup(highlight, content) {
  const source = content.replace(/\n$/, '');
  const highlighted = highlight(source, 'html', '');
  return `<HtmlExample encoded="${encodeURIComponent(
    source
  )}" highlighted="${encodeURIComponent(highlighted)}"></HtmlExample>`;
}
