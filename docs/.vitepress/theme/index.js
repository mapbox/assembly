import Layout from './Layout.vue';
import HtmlExample from './HtmlExample.vue';
import '../../../dist/assembly.css';
import './docs.css';

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('HtmlExample', HtmlExample);
  }
};
