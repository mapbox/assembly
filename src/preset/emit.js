'use strict';

function declsCss(decls) {
  return Object.keys(decls)
    .map(prop => `${prop}:${decls[prop]}`)
    .join(';');
}

function emitNode(node) {
  if (node.type === 'rule') {
    return `${node.selectors.join(',')}{${declsCss(node.decls)}}`;
  }
  if (node.type === 'media') {
    return `@media ${node.params}{${emitNodes(node.nodes)}}`;
  }
  if (node.type === 'font-face') {
    return `@font-face{${declsCss(node.decls)}}`;
  }
  if (node.type === 'keyframes') {
    const steps = node.steps
      .map(step => `${step.selectors.join(',')}{${declsCss(step.decls)}}`)
      .join('');
    return `@keyframes ${node.name}{${steps}}`;
  }
  return '';
}

function emitNodes(nodes) {
  return nodes.map(emitNode).join('');
}

module.exports = { emitNodes };
