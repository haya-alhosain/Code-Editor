let htmlCode = document.getElementById("html-code");
let cssCode = document.getElementById("css-code");
let jsCode = document.getElementById("js-code").value;
let output = document.getElementById("output");
const x = 5;
function run() {
   output.contentDocument.body.innerHTML = `${htmlCode.value}` + `<style> ${cssCode.value} </style>`;
   output.contentWindow.eval(jsCode);
}
