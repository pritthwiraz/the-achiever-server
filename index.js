const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Data/Courses.json');

app.get('/', (req, res) =>{
    res.send('Courses API Running')
})

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.listen(port, () =>{
    console.log('server running on Port', port);
})


