import { Marked } from "https://cdn.jsdelivr.net/npm/marked/+esm";
import { markedHighlight } from "https://cdn.jsdelivr.net/npm/marked-highlight/+esm";
import hljs from "https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/+esm";


init()

async function getMarkdownFiles() {
    try {

        const response = await fetch("/api/markdown-files");

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error(error.message);
    }
}


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

function init() {
    createHeader()
    const homeElement = document.getElementById("home")

    const homePath = "/frontpage/frontpage.md"
    homeElement.addEventListener("click", event => {
        event.preventDefault();
        renderContent(homePath)
    })
    renderContent(homePath)
}

function navigateTo(button, path) {
    const buttons = document.querySelectorAll("button");
    renderContent(path)
    setActiveButton(button, buttons)
}

function setActiveButton(activeButton, buttons) {
    buttons.forEach(button => button.classList.remove("buttonHighlight"));
    activeButton.classList.add("buttonHighlight");
}

function createButton(name, fileName) {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("navButtons");
    buttonElement.textContent = name;
    buttonElement.id = name;

    buttonElement.addEventListener("click", () => navigateTo(buttonElement, `/assets/markdownFiles/${fileName}`))

    return buttonElement;
}

function sortFiles(fileA, fileB) {
    const fileNumberA = Number(fileA.split(".")[1])
    const fileNumberB = Number(fileB.split(".")[1])
    if (fileNumberA < fileNumberB) return -1
    if (fileNumberA > fileNumberB) return 1
    return 0;
}

async function createHeader() {
    const navElement = document.getElementById("nav")
    const markdownFilesNames = await getMarkdownFiles();
    const sortedMDFilesNames = markdownFilesNames.trim().split("\n").sort(sortFiles)

    sortedMDFilesNames.forEach(fileName => {
        const buttonElement = createButton(formatFileNameAsLabel(fileName), fileName);
        navElement.appendChild(buttonElement);

    })
}

function formatFileNameAsLabel(fileName) {
    const pathSplit = fileName.split(".")
    const nameUnderscoreSplit = pathSplit[0].split("_");
    let name = nameUnderscoreSplit[0]
    if (nameUnderscoreSplit.length > 1) {
        name += " " + nameUnderscoreSplit[1]
    }
    return name.charAt(0).toUpperCase() + name.slice(1)
}

async function renderContent(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Could not load ${path}`);
        const md = await response.text();
        document.getElementById("main").innerHTML = marked.parse(md);

    } catch (error) {
        document.getElementById("main").textContent = error.message;
    }
}