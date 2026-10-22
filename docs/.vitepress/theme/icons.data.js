import path from 'path';

export default {
  watch: ['../../../src/svgs/*.svg'],
  load(files) {
    return files.map(file => path.basename(file, '.svg')).sort();
  }
};
