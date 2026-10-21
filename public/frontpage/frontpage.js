


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


function init() {
    createHeader()
}


function createButton(name, fileName) {
    const borderButtomHighlight = document.createElement("div");
    borderButtomHighlight.classList.add("navPadding")
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("navButtons");
    buttonElement.textContent = name;
    buttonElement.id = fileName;
    
    const urlSplitted = location.href.split("/");    
    if (urlSplitted[3] === fileName) {
        borderButtomHighlight.id = "borderButtomHighlight";
        buttonElement.classList.add("buttonHighlight");
    }
    
    buttonElement.addEventListener("click", () => location.href = `/${fileName}`)
    borderButtomHighlight.appendChild(buttonElement);
    return borderButtomHighlight;
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

