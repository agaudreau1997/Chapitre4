const fs = require("fs");
const path = require("path");

/*
fs.mkdirSync(path.join(__dirname,"test"), {});
console.log("Le dossier Test est crée");
fs.mkdir(path.join(__dirname,"test2"),{}, err => {
    if(err) throw err;

    console.log("Le dossier test 2 est crée");
}); 
*/
fs.appendFile(
    path.join(__dirname,"test", "salut.txt"),
    "Salut le monde!\n",
    err =>{
        if (err) throw err;

        console.log("Fichier salut.txt est crée");
    }
);

console.log("fin du programme");
