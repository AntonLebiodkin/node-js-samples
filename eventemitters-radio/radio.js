var EventEmitter = require('events').EventEmitter;

class Radio extends EventEmitter {
    constructor(station) {
        super();
        this.station = station;
    }

    open() {
        this.emit('open', this.station);
    }

    initClosing() {
        setTimeout(function() {
            this.emit('close', this.station);
        }.bind(this), 5000);
    }    
};

module.exports = Radio;
