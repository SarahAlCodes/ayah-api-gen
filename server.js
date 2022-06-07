const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const surah = {
    'maryam':{
        'arabicVerseText': 'فَنَادَىٰهَا مِن تَحْتِهَآ أَلَّا تَحْزَنِى قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّۭا',
        'verseText': 'So a voice reassured her from below her, “Do not grieve! Your Lord has provided a stream at your feet.',
        'surahAndAyah': '19:24'
    },
    'ibrahim':{
        'arabicVerseText': 'وَمَثَلُ كَلِمَةٍ خَبِيثَةٍۢ كَشَجَرَةٍ خَبِيثَةٍ ٱجْتُثَّتْ مِن فَوْقِ ٱلْأَرْضِ مَا لَهَا مِن قَرَارٍۢ ',
        'verseText': 'And the parable of an evil word is that of an evil tree, uprooted from the earth, having no stability..',
        'surahAndAyah': '14:26'
    },
    'ghafir':{
        'arabicVerseText': 'تَنزِيلُ ٱلْكِتَـٰبِ مِنَ ٱللَّهِ ٱلْعَزِيزِ ٱلْعَلِيمِ',
        'verseText': 'The revelation of this Book is from Allah—the Almighty, All-Knowing',
        'surahAndAyah': '40:2'
    },
    'baqarah':{
        'arabicVerseText': 'ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ',
        'verseText': 'This is the Book! There is no doubt about it—a guide for those mindful of Allah',
        'surahAndAyah': '2:2'
    },
    'imran':{
        'arabicVerseText': 'إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلْإِسْلَـٰمُ ۗ وَمَا ٱخْتَلَفَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ إِلَّا مِنۢ بَعْدِ مَا جَآءَهُمُ ٱلْعِلْمُ بَغْيًۢا بَيْنَهُمْ ۗ وَمَن يَكْفُرْ بِـَٔايَـٰتِ ٱللَّهِ فَإِنَّ ٱللَّهَ سَرِيعُ ٱلْحِسَابِ',
        'verseText': 'Certainly, Allah’s only Way is Islam.1 Those who were given the Scripture did not dispute ˹among themselves˺ out of mutual envy until knowledge came to them. Whoever denies Allah’s signs, then surely Allah is swift in reckoning.',
        'surahAndAyah': '3:19'
    },
    'an-nisa':{
        'arabicVerseText': 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَـٰطِلِ إِلَّآ أَن تَكُونَ تِجَـٰرَةً عَن تَرَاضٍۢ مِّنكُمْ ۚ وَلَا تَقْتُلُوٓا۟ أَنفُسَكُمْ ۚ إِنَّ ٱللَّهَ كَانَ بِكُمْ رَحِيمًۭا',
        'verseText': 'O believers! Do not devour one another’s wealth illegally, but rather trade by mutual consent. And do not kill ˹each other or˺ yourselves. Surely Allah is ever Merciful to you.',
        'surahAndAyah': '4:29'
    },
    'al-maidah':{
        'arabicVerseText': 'قَالَ رَبِّ إِنِّى لَآ أَمْلِكُ إِلَّا نَفْسِى وَأَخِى ۖ فَٱفْرُقْ بَيْنَنَا وَبَيْنَ ٱلْقَوْمِ ٱلْفَـٰسِقِينَ',
        'verseText': 'Moses pleaded, “My Lord! I have no control over anyone except myself and my brother. So set us apart from the rebellious people.”',
        'surahAndAyah': '5:25'
    },
    'al-anam':{
        'arabicVerseText': 'فَلَمَّا جَنَّ عَلَيْهِ ٱلَّيْلُ رَءَا كَوْكَبًۭا ۖ قَالَ هَـٰذَا رَبِّى ۖ فَلَمَّآ أَفَلَ قَالَ لَآ أُحِبُّ ٱلْـَٔافِلِينَ',
        'verseText': 'When the night grew dark upon him, he saw a star and said, “This is my Lord!” But when it set, he said, “I do not love things that set.”',
        'surahAndAyah': '6:76'
    },
    'al-araf':{
        'arabicVerseText': 'وَلَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ بَعْدَ إِصْلَـٰحِهَا وَٱدْعُوهُ خَوْفًۭا وَطَمَعًا ۚ إِنَّ رَحْمَتَ ٱللَّهِ قَرِيبٌۭ مِّنَ ٱلْمُحْسِنِينَ',
        'verseText': 'Do not spread corruption in the land after it has been set in order. And call upon Him with hope and fear. Indeed, Allah’s mercy is always close to the good-doers.',
        'surahAndAyah': '7:56'
    },
    'al-anfal':{
        'arabicVerseText': 'إِنَّ شَرَّ ٱلدَّوَآبِّ عِندَ ٱللَّهِ ٱلَّذِينَ كَفَرُوا۟ فَهُمْ لَا يُؤْمِنُونَ',
        'verseText': 'Indeed, the worst of all beings in the sight of Allah are those who persist in disbelief, never to have faith—',
        'surahAndAyah': '8:55'
    },
    'at-tawbah':{
        'arabicVerseText': 'يُرِيدُونَ أَن يُطْفِـُٔوا۟ نُورَ ٱللَّهِ بِأَفْوَٰهِهِمْ وَيَأْبَى ٱللَّهُ إِلَّآ أَن يُتِمَّ نُورَهُۥ وَلَوْ كَرِهَ ٱلْكَـٰفِرُونَ',
        'verseText': 'They wish to extinguish Allah’s light1 with their mouths, but Allah will only allow His light to be perfected, even to the dismay of the disbelievers.',
        'surahAndAyah': '9:32'
    },             
    'unknown':{
        'verseText': 'unknown',
        'surahAndAyah': 'unknown'
    }
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