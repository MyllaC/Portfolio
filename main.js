//Para usar o API do github:

fetch('https://api.github.com/users/daltonmenezes')
  .then(rawData => rawData.json())
  .then(data => console.log(data))
