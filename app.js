import express from 'express';
import { execSync } from 'child_process';
import path from 'path'



const app = express();
app.use(express.json())

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
})

app.get('/api/markdown-files', (req, res) => {
    const output = execSync("cd public/assets/markdownFiles && ls", { encoding: 'utf-8' });
    res.send({data: output})
})

app.listen(8080, error => {
    if (error){
        console.log("Error starting the server", error);
        return
    }
    console.log("server running on ", 8080);
})