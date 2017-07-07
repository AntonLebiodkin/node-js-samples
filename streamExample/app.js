const express = require('express');
const app = express();
const responseTime = require('response-time')
const JSONStream = require('JSONStream');
const os = require('os');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/streams');

const Book = require('./book.model');

// require('./initBooks');

app.use(responseTime((req, res, time) => {
  console.log(req.method, req.url, time + 'ms');
}));

const initMemoryUsage = (process.memoryUsage().heapUsed)/ (1024 * 1024);

app.get('/', function (req, res) {
    res.send('Hello');
})
app.get('/getBooks', function (req, res) {
    console.log('GETTING BOOKS WITHOUT STREAMS');
    console.log(typeof Book.find);

    return Book.find({})
        .then(books => {
            const withoutStreamsUsage = (process.memoryUsage().heapUsed)/ (1024 * 1024);
            console.log('books found');            
            console.log('MEM USED: ', withoutStreamsUsage - initMemoryUsage, ' MB');
            
            return res.send(JSON.stringify(books));
        })
})

app.get('/getBooksStreams', function(req, res) {
    const withStreamsUsage = (process.memoryUsage().heapUsed)/ (1024 * 1024);
    console.log('GETTING BOOKS WITH STREAMS');
    console.log('MEM USED: ', withStreamsUsage - initMemoryUsage, ' MB');

    return Book.find({}).stream().pipe(JSONStream.stringify()).pipe(res);
});

const port = 3001;
app.listen(port, function () {
  console.log('Example app listening on port ', port)
})