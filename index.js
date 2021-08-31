const Logger = require("./logger");
const monJournal = new Logger();
const fs = require("fs");
const path = require("path");

monJournal.on("message", (data) =>{console.log("monJournal appele avec: ", data)});
monJournal.on("message", (data) =>{fs.appendFile(
    path.join(__dirname,"test", "salut.txt"),
    "Nouveau message: "+"\n"+data.id+"\n"+data.temps+"\n"+data.msg+"\n\n",
    err =>{
        if (err) throw err;

        console.log("Fichier salut.txt est modifié");
    }
)});
monJournal.on("erreur", (data) =>{console.log("monJournal erreur: ", data)});

monJournal.log("sup");
monJournal.log("sup fool");
monJournal.log("smells like sugma in here");
monJournal.error("we did an oopsie woopsie");
monJournal.error("we did a fucky wucky");