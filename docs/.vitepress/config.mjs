import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress';

import { documentationLayout } from './documentation-layout.js';
import { htmlExampleMarkup } from './html-example-markup.js';
import hljsGithub from './hljs-github-theme.js';

const configDir = path.dirname(fileURLToPath(import.meta.url));
const distJs = path.resolve(configDir, '../../dist/assembly.js');

function assemblyJsPlugin() {
  return {
    name: 'assembly-js',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0];
        if (url !== '/assembly.js' && url !== '/assembly/assembly.js') {
          next();
          return;
        }
        if (!fs.existsSync(distJs)) {
          next();
          return;
        }
        res.setHeader('Content-Type', 'application/javascript');
        fs.createReadStream(distJs).pipe(res);
      });
    },
    closeBundle() {
      const outDir = path.resolve(configDir, '../../_site');
      if (fs.existsSync(distJs) && fs.existsSync(outDir)) {
        fs.copyFileSync(distJs, path.join(outDir, 'assembly.js'));
      }
    }
  };
}

function colorUtilsEsm() {
  return {
    name: 'color-utils-esm',
    transform(code, id) {
      const file = id.split('?')[0].replace(/\\/g, '/');
      if (!file.endsWith('/src/preset/color-utils.js')) return null;
      return code.replace(
        /module\.exports = \{([^}]+)\};?\s*$/,
        'export {$1};'
      );
    }
  };
}

function exampleFence(md) {
  const defaultFence = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    if (token.info.trim() === 'example') {
      return `${htmlExampleMarkup(options.highlight, token.content)}\n`;
    }
    return `<div class="mt12 pre">${defaultFence(tokens, idx, options, env, slf)}</div>\n`;
  };
}

export default defineConfig({
  title: 'Assembly.css',
  description:
    'A CSS framework that makes the hard parts of building anything on the web easy.',
  base: '/assembly/',
  outDir: '../_site',
  cleanUrls: true,
  appearance: false,
  vite: {
    plugins: [assemblyJsPlugin(), colorUtilsEsm()],
    server: {
      fs: {
        allow: ['..']
      }
    }
  },
  markdown: {
    theme: {
      light: hljsGithub,
      dark: hljsGithub
    },
    anchor: {
      permalink: false
    },
    config(md) {
      exampleFence(md);
      documentationLayout(md);
    }
  }
});
