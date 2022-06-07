const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const surah = {
    'Maryam':{
        'arabicVerseText': 'فَنَادَىٰهَا مِن تَحْتِهَآ أَلَّا تَحْزَنِى قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّۭا',
        'verseText': 'So a voice reassured her from below her, “Do not grieve! Your Lord has provided a stream at your feet.',
        'surahAndAyah': '19:24',
    },
    'Ibrahim':{
        'arabicVerseText': 'وَمَثَلُ كَلِمَةٍ خَبِيثَةٍۢ كَشَجَرَةٍ خَبِيثَةٍ ٱجْتُثَّتْ مِن فَوْقِ ٱلْأَرْضِ مَا لَهَا مِن قَرَارٍۢ ',
        'verseText': 'And the parable of an evil word is that of an evil tree, uprooted from the earth, having no stability..',
        'surahAndAyah': '14:26',
    },
    'Ghafir':{
        'arabicVerseText': 'تَنزِيلُ ٱلْكِتَـٰبِ مِنَ ٱللَّهِ ٱلْعَزِيزِ ٱلْعَلِيمِ',
        'verseText': 'The revelation of this Book is from Allah—the Almighty, All-Knowing',
        'surahAndAyah': '40:2',
    },
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const surahName = request.params.name.toLowerCase()
    if( surah[surahName] ){
       response.json(surah[surahName]) 
    }else{
        response.json(surah['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})