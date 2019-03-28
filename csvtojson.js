const csvToJson = require('csvtojson');

// csvToJson()
//   .fromFile('./nouns.csv')
//   .then( (json) => {
//     console.log(json);
//   })

const convertCSVtoJSON = async (file) => {
  const json = await csvToJson().fromFile(file);
  return json;
}

module.exports = {
  convertCSVtoJSON
}
