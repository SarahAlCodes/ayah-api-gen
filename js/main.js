

// //Example fetch using pokemonapi.co
// var arText;
// var enText;
// var surah;
// var ayahNumber;
// var surahAndAyah;

// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)

//     const url = "https://api.alquran.cloud/ayah/"+ayah+"/en.asad"

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         enText = data.data.text;
//         surah = data.data.surah.englishName;
//         ayahNumber = data.data.surah.numberOfAyahs;
//         surahAndAyah = surah + " : "+ ayahNumber 
//         document.querySelector("verseText").innerHTML = enText;
//         document.querySelector("surahAndAyah").innerHTML = surahAndAyah;
//         console.log(enText);
//         console.log(surah);
//         console.log(ayahNumber);
//         console.log( "success" );
//     })
//         document.querySelector('h3').innerText = data.explanation
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// var arText;
// var enText;
// var surah;
// var ayahNumber;
// var surahAndAyah;

// document.querySelector('button').addEventListener('click', getQuote)


// function getQuote() {
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   var url = "https://api.alquran.cloud/ayah/"+ayah+"/en.asad";
//   var urlArabic = "https://api.alquran.cloud/ayah/"+ayah;
//   arText;
//   enText;
//   surah;
//   ayahNumber;
//   surahAndAyah;
  
//   fetch( urlArabic, function(data) {
//     arText = data.data.text;
//     document.querySelector("arabicVerseText").innerHTML = arText;
//     console.log(arText);
//   });
            
//   fetch( url, function(data) {
//     console.log(data);
//     enText = data.data.text;
//     surah = data.data.surah.englishName;
//     ayahNumber = data.data.surah.numberOfAyahs;
//     surahAndAyah = surah + " : "+ ayahNumber 
//     document.querySelector("verseText").innerHTML = enText;
//     document.querySelector("surahAndAyah").innerHTML = surahAndAyah;
//     console.log(enText);
//     console.log(surah);
//     console.log(ayahNumber);
//     console.log( "success" );
//   })
//     .done(function() {
//       console.log("second success");
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }