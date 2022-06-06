const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'matcha':  {
        'type': 'black',
        'origin': 'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    },
    'unknown': {
        'type': 'black',
        'origin': 'Yo mommas HOuse',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavor': 'delicious'
    }

}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})

// var arText;
// var enText;``
// var surah;
// var ayahNumber;
// var surahAndAyah;