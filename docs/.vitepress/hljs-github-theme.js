/** highlight.js GitHub theme, as a Shiki theme for VitePress. */
export default {
  name: 'hljs-github',
  type: 'light',
  colors: {
    'editor.background': '#ffffff',
    'editor.foreground': '#333333'
  },
  settings: [
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: '#999988', fontStyle: 'italic' }
    },
    {
      scope: [
        'keyword',
        'storage',
        'storage.type',
        'storage.modifier'
      ],
      settings: { foreground: '#333333', fontStyle: 'bold' }
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'variable',
        'variable.other'
      ],
      settings: { foreground: '#008080' }
    },
    {
      scope: [
        'string',
        'string.quoted',
        'punctuation.definition.string',
        'string punctuation.section.embedded source'
      ],
      settings: { foreground: '#DD1144' }
    },
    {
      scope: ['entity.name.tag', 'punctuation.definition.tag'],
      settings: { foreground: '#000080' }
    },
    {
      scope: ['entity', 'entity.name'],
      settings: { foreground: '#000080' }
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#008080' }
    },
    {
      scope: ['support', 'support.constant', 'support.variable'],
      settings: { foreground: '#0086B3' }
    },
    {
      scope: ['constant', 'entity.name.constant'],
      settings: { foreground: '#008080' }
    }
  ],
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: '#999988', fontStyle: 'italic' }
    },
    {
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#333333', fontStyle: 'bold' }
    },
    {
      scope: [
        'constant.numeric',
        'constant.language',
        'variable',
        'variable.other'
      ],
      settings: { foreground: '#008080' }
    },
    {
      scope: [
        'string',
        'string.quoted',
        'punctuation.definition.string',
        'string punctuation.section.embedded source'
      ],
      settings: { foreground: '#DD1144' }
    },
    {
      scope: ['entity.name.tag', 'punctuation.definition.tag'],
      settings: { foreground: '#000080' }
    },
    {
      scope: ['entity', 'entity.name'],
      settings: { foreground: '#000080' }
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: '#008080' }
    },
    {
      scope: ['support', 'support.constant', 'support.variable'],
      settings: { foreground: '#0086B3' }
    },
    {
      scope: ['constant', 'entity.name.constant'],
      settings: { foreground: '#008080' }
    }
  ]
};
