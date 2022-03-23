import { minify } from 'csso';
// CommonJS is also supported
// const { minify } = require('csso');
 
const minifiedCss = minify('.test { color: #ff0000; }').css;
 
console.log(minifiedCss);
// .test{color:red}