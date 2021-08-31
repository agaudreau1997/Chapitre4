const uuid = require("uuid");
const EventEmitter = require("events");
class Logger extends EventEmitter{
    log(msg){
        let maDate = new Date().toLocaleString();
        this.emit("message", {id: uuid.v4(), temps: maDate, msg: msg})
    }
    error(msg){
        let maDate = new Date().toLocaleString();
        this.emit("erreur", {id: uuid.v4(), temps: maDate, erreur: msg})
    }
};

module.exports = Logger;
