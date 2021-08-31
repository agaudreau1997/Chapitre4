const Logger = require("./logger");
const monJournal = new Logger();

monJournal.on("message", (data) =>{console.log("monJournal appele avec: ", data)})
monJournal.on("erreur", (data) =>{console.log("monJournal erreur: ", data)})

monJournal.log("sup");
monJournal.log("sup fool");
monJournal.log("smells like sugma in here");
monJournal.error("we did an oopsie woopsie");
monJournal.error("we did a fucky wucky");