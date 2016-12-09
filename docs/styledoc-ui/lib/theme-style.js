export const themeStyle = `

body { margin: 0; }
* { box-sizing: border-box; }

[class^='styledoc-'] {
  font-family: "Open Sans";
  color: rgba(0,0,0,.75);
  line-height: 1.5;
}

[class^='styledoc-heading-title-'] {
  padding-top: 40px;
}

[class^='styledoc-heading-title-'] a {
  color: rgba(0,0,0,.75);
  margin-bottom: 10px;
  text-decoration: none;
}

[class^='ƒstyledoc-heading-title-'] a:hover {
  color: rgba(0,0,0,.9);
}

.styledoc-logo {
  margin-bottom: 20px;
}

.styledoc-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ebf6fd;
  padding: 20px;
  width: 160px;
  height: 100vh;
}

.styledoc-nav-item {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: rgba(0,0,0,.5);
  text-decoration: none;
}

.styledoc-nav-item:hover {
  color: rgba(0,0,0,.75);
}

.styledoc-container {
  position: relative;
  left: 80px;
  width: calc(100vw - 240px);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.styledoc-selector-group {
  margin-bottom: 40px;
  border-bottom: 5px solid rgba(0,0,0,.1);
}

.styledoc-heading-container {
  margin-bottom: 40px;
}

.styledoc-heading-title-1 {
  font-size: 20px;
  font-weight: bold;
}

.styledoc-heading-title-2 {
  font-size: 20px;
  font-weight: bold;
}

.styledoc-heading-title-3 {
  font-size: 20px;
  font-weight: bold;
}

.styledoc-heading-title-4 {
  font-size: 16px;
  font-weight: bold;
}

.styledoc-heading-title-5 {
  font-size: 12px;
  font-weight: bold;
}

.styledocs-description {
  font-size: 20px;
  color: rgba(0,0,0,.5);
}

.styledoc-selector-name {
  font-family:Menlo, Bitstream Vera Sans Mono, Monaco, Consolas, monospace;
  font-size: 16px;
  margin-bottom: 10px;
}

.styledoc-selector-description {
  color: rgba(0,0,0,.5);
  font-size: 16px;
  margin-bottom: 20px;
}

.styledoc-selector-description a {
  color: #0077cc;
}

.styledoc-selector-description a:hover {
  color: #3246dc;
}

.styledoc-group-member {
  font-family:Menlo, Bitstream Vera Sans Mono, Monaco, Consolas, monospace;
  border-radius: 4px;
  padding: 2px 4px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  background: rgba(0,0,0,.05);
}

`;
