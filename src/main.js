//Fetch the items from the json file
function loadItems() {
  return fetch('data/data.json')
  .then(reponse => reponse.json())
  .then(json => json.items)
}


//main
loadItems()
.then(items => {
  console.log(items)
  displayItems(items)
  //setEventListeners(items)
})
.catch(console.log);