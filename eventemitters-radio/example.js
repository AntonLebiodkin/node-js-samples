const Radio = require('./radio');

const station = {
    freq: '106.5',
    name: 'KISS FM',
};

const radio = new Radio(station);

// add an 'open' event listener
radio.on('open', function(station) {
    console.log('"%s" FM %s OPENED', station.name, station.freq);
    console.log('♬ ♫♬');
});

// add a 'close' event listener
radio.on('close', function(station) {
    console.log('"%s" FM %s CLOSED', station.name, station.freq);
});

radio.open();
radio.initClosing();