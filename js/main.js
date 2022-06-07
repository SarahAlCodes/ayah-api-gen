// document.querySelector('button').addEventListener('click', apiRequest)

// async function apiRequest(){
//     const teaName = document.querySelector('input').value
//     try{
//         const response = await fetch(`https://ayah-api-gen.herokuapp.com/api/${teaName}`)
//         const data = await response.json()
//         console.log(data)

//         document.getElementById('').innerText = data.
//         document.getElementById('').innerText = data.
//         document.getElementById('').innerText = data.
//         document.getElementById('').innerText = data.
            
//     }catch(error){
//         console.log(error)
//     }
// }


// //Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', apiRequest)

function apiRequest(){
  const surahName = document.querySelector('input').value
  console.log(surahName)

  const url = `https://ayah-api-gen.herokuapp.com/api/${surahName}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)
        document.getElementById('#arabicText').innerText = data.arabicVerseText
        document.getElementById('#englishText').innerText = data.verseText
        document.querySelector('#surahInfo').innerText = data.surahAndAyah
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}















