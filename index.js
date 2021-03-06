// 1. Import Files
const elements = require('./elements.json')

// 2. Code Starts
function getByName (name) {
  if(!name) throw new Error('No Name given to search for data')
  if(!elements.map(e => e.name.toLowerCase()).includes(name.toLowerCase())) throw new Error(`Could not find Element ${name} in our Data!`)
  for (var i = 0; i < elements.length; i++){
    if (elements[i].name.toLowerCase() == name.toLowerCase()){
      return elements[parseInt(elements[i].number)-1]
    }
  }
}

function getBySymbol (symbol) {
  if(!symbol) throw new Error('No Symbol given to search for data')
  if(!elements.map(e => e.symbol.toLowerCase()).includes(symbol.toLowerCase())) throw new Error(`Could not find Element ${symbol} in our Data!`)
  for (var i = 0; i < elements.length; i++){
    if (elements[i].symbol.toLowerCase() == symbol.toLowerCase()){
      return elements[parseInt(elements[i].number)-1]
    }
  }
}

function getByNumber (num) {
  if(!num) throw new Error('No Number given to search for data')
  if(isNaN(num)) throw new Error('Number must be a number!')
  if((num > 119) || (num < 0)) throw new Error(`Could not find Element ${num} in our data!`)
  return elements[parseInt(num)-1]
}

function getByQuery (query){
  if(!query) throw new Error('No Query given to search for data')
  var data;
  for (var i = 0; i < elements.length; i++){
    if(elements[i].name.toLowerCase().startsWith(query.toLowerCase())){
      var data = elements[parseInt(elements[i].number)-1]
    }
  }
  if(!data) throw new Error(`Could not search Query ${data} in our dat!`)
  else return data
}

// 3. Export Everything
module.exports.getByName = getByName;
module.exports.getByNumber = getByNumber;
module.exports.getBySymbol = getBySymbol;
module.exports.getByQuery = getByQuery;
module.exports.version = require('./package.json').version
