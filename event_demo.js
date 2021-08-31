const EventEmitter = require("events");
class MaClasseEmeteur extends EventEmitter{ }
const emeteur = new MaClasseEmeteur();

// enregistrement du gestionnaire d'evement
emeteur.on("evenement", () => console.log("Il vient d'avoir un evenement"));
emeteur.on("evenement2", () => console.log("Il vient d'avoir un evenement2"));
emeteur.on("autre", () => console.log("sup"));

//initialiser des evenements
emeteur.emit("evenement");
emeteur.emit("evenement2");
emeteur.emit("autre");
emeteur.emit("autre");