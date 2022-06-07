document.querySelector('button').addEventListener('click', apiRequest)

function apiRequest(){
  //var ayah = Math.floor(Math.random() * 6236) + 1 
  const surahName = document.querySelector('input').value
  console.log(surahName)

  const url = `https://ayah-api-gen.herokuapp.com/api/${surahName}`
    

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        console.log(data)
        document.getElementById('arabicText').innerText = data.arabicVerseText
        document.getElementById('englishText').innerText = data.verseText
        document.getElementById('surahInfo').innerText = data.surahAndAyah
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}











