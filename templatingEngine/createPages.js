import fs from 'fs';
import { Marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';  


const marked = new Marked(
  markedHighlight({
	emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

function readPage(path){
    return fs.readFileSync(path, 'utf-8')
}

export function constructPage(MDPath){
    const main = marked.parse(readPage(MDPath));
    const header = readPage('public/components/header/header.html');
    const footer = readPage('public/components/footer/footer.html');

    return header + main + footer;

}