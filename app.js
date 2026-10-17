import express from 'express';
import { execSync } from 'child_process';
import { constructPage } from './templatingEngine/pages.js';


const app = express();
app.use(express.json())

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send(constructPage('public/frontpage/frontpage.md'))
})

app.get('/api/markdown-files', (req, res) => {
    const output = execSync("cd public/assets/markdownFiles && ls", { encoding: 'utf-8' });
    res.send({data: output})
});

app.get('/:mdFile', (req, res) => {
    res.send(constructPage(`public/assets/markdownFiles/${req.params.mdFile}`))
});

app.listen(8080, error => {
    if (error){
        console.log("Error starting the server", error);
        return
    }
    console.log("server running on ", 8080);
})