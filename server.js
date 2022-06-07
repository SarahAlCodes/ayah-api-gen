const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const surah = {
    'baqarah':{
        'arabicVerseText': 'ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ',
        'verseText': 'This is the Book! There is no doubt about it—a guide for those mindful of Allah',
        'surahAndAyah': '2:2'
    },
    'imran':{
        'arabicVerseText': 'إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلْإِسْلَـٰمُ ۗ وَمَا ٱخْتَلَفَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَـٰبَ إِلَّا مِنۢ بَعْدِ مَا جَآءَهُمُ ٱلْعِلْمُ بَغْيًۢا بَيْنَهُمْ ۗ وَمَن يَكْفُرْ بِـَٔايَـٰتِ ٱللَّهِ فَإِنَّ ٱللَّهَ سَرِيعُ ٱلْحِسَابِ',
        'verseText': 'Certainly, Allah\’s only Way is Islam. Those who were given the Scripture did not dispute ˹among themselves˺ out of mutual envy until knowledge came to them. Whoever denies Allah\’s signs, then surely Allah is swift git afin reckoning.',
        'surahAndAyah': '3:19'
    },
    'an-nisa':{
        'arabicVerseText': 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَأْكُلُوٓا۟ أَمْوَٰلَكُم بَيْنَكُم بِٱلْبَـٰطِلِ إِلَّآ أَن تَكُونَ تِجَـٰرَةً عَن تَرَاضٍۢ مِّنكُمْ ۚ وَلَا تَقْتُلُوٓا۟ أَنفُسَكُمْ ۚ إِنَّ ٱللَّهَ كَانَ بِكُمْ رَحِيمًۭا',
        'verseText': 'O believers! Do not devour one another\’s wealth illegally, but rather trade by mutual consent. And do not kill ˹each other or˺ yourselves. Surely Allah is ever Merciful to you.',
        'surahAndAyah': 'Quran 4:29'
    },
    'al-maidah':{
        'arabicVerseText': 'قَالَ رَبِّ إِنِّى لَآ أَمْلِكُ إِلَّا نَفْسِى وَأَخِى ۖ فَٱفْرُقْ بَيْنَنَا وَبَيْنَ ٱلْقَوْمِ ٱلْفَـٰسِقِينَ',
        'verseText': 'Moses pleaded, “My Lord! I have no control over anyone except myself and my brother. So set us apart from the rebellious people.”',
        'surahAndAyah': 'Quran  5:25'
    },
    'al-anam':{
        'arabicVerseText': 'فَلَمَّا جَنَّ عَلَيْهِ ٱلَّيْلُ رَءَا كَوْكَبًۭا ۖ قَالَ هَـٰذَا رَبِّى ۖ فَلَمَّآ أَفَلَ قَالَ لَآ أُحِبُّ ٱلْـَٔافِلِينَ',
        'verseText': 'When the night grew dark upon him, he saw a star and said, “This is my Lord!” But when it set, he said, “I do not love things that set.”',
        'surahAndAyah': 'Quran 6:76'
    },
    'al-araf':{
        'arabicVerseText': 'وَلَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ بَعْدَ إِصْلَـٰحِهَا وَٱدْعُوهُ خَوْفًۭا وَطَمَعًا ۚ إِنَّ رَحْمَتَ ٱللَّهِ قَرِيبٌۭ مِّنَ ٱلْمُحْسِنِينَ',
        'verseText': 'Do not spread corruption in the land after it has been set in order. And call upon Him with hope and fear. Indeed, Allah\’s mercy is always close to the good-doers.',
        'surahAndAyah': 'Quran 7:56'
    },
    'al-anfal':{
        'arabicVerseText': 'إِنَّ شَرَّ ٱلدَّوَآبِّ عِندَ ٱللَّهِ ٱلَّذِينَ كَفَرُوا۟ فَهُمْ لَا يُؤْمِنُونَ',
        'verseText': 'Indeed, the worst of all beings in the sight of Allah are those who persist in disbelief, never to have faith—',
        'surahAndAyah': 'Quran 8:55'
    },
    'at-tawbah':{
        'arabicVerseText': 'يُرِيدُونَ أَن يُطْفِـُٔوا۟ نُورَ ٱللَّهِ بِأَفْوَٰهِهِمْ وَيَأْبَى ٱللَّهُ إِلَّآ أَن يُتِمَّ نُورَهُۥ وَلَوْ كَرِهَ ٱلْكَـٰفِرُونَ',
        'verseText': 'They wish to extinguish Allah\’s light1 with their mouths, but Allah will only allow His light to be perfected, even to the dismay of the disbelievers.',
        'surahAndAyah': 'Quran 9:32'
    },            
    'yunus':{
        'arabicVerseText': 'وَمَا ظَنُّ ٱلَّذِينَ يَفْتَرُونَ عَلَى ٱللَّهِ ٱلْكَذِبَ يَوْمَ ٱلْقِيَـٰمَةِ ۗ إِنَّ ٱللَّهَ لَذُو فَضْلٍ عَلَى ٱلنَّاسِ وَلَـٰكِنَّ أَكْثَرَهُمْ لَا يَشْكُرُونَ',
        'verseText': 'What do those who fabricate lies against Allah expect on Judgment Day? Surely Allah is ever Bountiful to humanity, but most of them are ungrateful.',
        'surahAndAyah': 'Quran 10:60'
    }, 
    'hud':{
        'arabicVerseText': 'الٓر ۚ كِتَـٰبٌ أُحْكِمَتْ ءَايَـٰتُهُۥ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ',
        'verseText': 'Alif-Lãm-Ra. ˹This is˺ a Book whose verses are well perfected and then fully explained. ˹It is˺ from the One ˹Who is˺ All-Wise, All-Aware.',
        'surahAndAyah': '11:1'
    },  
    'yusuf':{
        'arabicVerseText': 'وَلَأَجْرُ ٱلْـَٔاخِرَةِ خَيْرٌۭ لِّلَّذِينَ ءَامَنُوا۟ وَكَانُوا۟ يَتَّقُونَ',
        'verseText': 'And the reward of the Hereafter is far better for those who are faithful and are mindful ˹of Allah˺.',
        'surahAndAyah': 'Quran 12:57'
    },  
    'ar-rad':{
        'arabicVerseText': 'الٓمٓر ۚ تِلْكَ ءَايَـٰتُ ٱلْكِتَـٰبِ ۗ وَٱلَّذِىٓ أُنزِلَ إِلَيْكَ مِن رَّبِّكَ ٱلْحَقُّ وَلَـٰكِنَّ أَكْثَرَ ٱلنَّاسِ لَا يُؤْمِنُونَ',
        'verseText': 'Alif-Lãm-Mĩm-Ra. These are the verses of the Book. What has been revealed to you ˹O Prophet˺ from your Lord is the truth, but most people do not believe.',
        'surahAndAyah': 'Quran 13:1'
    },  
    'ibrahim':{
        'arabicVerseText': 'وَمَثَلُ كَلِمَةٍ خَبِيثَةٍۢ كَشَجَرَةٍ خَبِيثَةٍ ٱجْتُثَّتْ مِن فَوْقِ ٱلْأَرْضِ مَا لَهَا مِن قَرَارٍۢ ',
        'verseText': 'And the parable of an evil word is that of an evil tree, uprooted from the earth, having no stability..',
        'surahAndAyah': 'Quran 14:26'
    },
    'al-hijr':{
        'arabicVerseText': 'وَٱلْأَرْضَ مَدَدْنَـٰهَا وَأَلْقَيْنَا فِيهَا رَوَٰسِىَ وَأَنۢبَتْنَا فِيهَا مِن كُلِّ شَىْءٍۢ مَّوْزُونٍۢ',
        'verseText': 'As for the earth, We spread it out and placed upon it firm mountains, and caused everything to grow there in perfect balance.',
        'surahAndAyah': 'Quran 15:19'
    }, 
    'an-nahl':{
        'arabicVerseText': 'وَمَا بِكُم مِّن نِّعْمَةٍۢ فَمِنَ ٱللَّهِ ۖ ثُمَّ إِذَا مَسَّكُمُ ٱلضُّرُّ فَإِلَيْهِ تَجْـَٔرُونَ',
        'verseText': 'Whatever blessings you have are from Allah. Then whenever hardship touches you, to Him ˹alone˺ you cry ˹for help˺.',
        'surahAndAyah': 'Quran 16:53'
    }, 
    'al-isra':{
        'arabicVerseText': 'وَيَخِرُّونَ لِلْأَذْقَانِ يَبْكُونَ وَيَزِيدُهُمْ خُشُوعًۭا ۩',
        'verseText': 'And they fall down upon their faces weeping, and it increases them in humility.',
        'surahAndAyah': 'Quran 17:109'
    }, 
    'al-kahf':{
        'arabicVerseText': 'إِنَّا جَعَلْنَا مَا عَلَى ٱلْأَرْضِ زِينَةًۭ لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًۭا',
        'verseText': 'We have indeed made whatever is on earth as an adornment for it, in order to test which of them is best in deeds.',
        'surahAndAyah': 'Quran 18:7'
    }, 
    'maryam':{
        'arabicVerseText': 'فَنَادَىٰهَا مِن تَحْتِهَآ أَلَّا تَحْزَنِى قَدْ جَعَلَ رَبُّكِ تَحْتَكِ سَرِيًّۭا',
        'verseText': 'So a voice reassured her from below her, “Do not grieve! Your Lord has provided a stream at your feet.',
        'surahAndAyah': 'Quran 19:24'
    },
    'taha':{
        'arabicVerseText': 'إِنَّهُۥ مَن يَأْتِ رَبَّهُۥ مُجْرِمًۭا فَإِنَّ لَهُۥ جَهَنَّمَ لَا يَمُوتُ فِيهَا وَلَا يَحْيَىٰ',
        'verseText': 'But whoever comes to Him as a believer, having done good, they will have the highest ranks:',
        'surahAndAyah': 'Quran 20:75'
    }, 
     
    'unknown':{
        'arabicVerseText': 'unknown',
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