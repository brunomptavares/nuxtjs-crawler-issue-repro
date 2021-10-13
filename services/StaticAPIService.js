let fs = require('fs');

let saveStaticAPIData = function (fileName = 'test', fileContent = '{}') {
  fs.writeFileSync("./static-api-data/" + fileName + ".json", JSON.stringify(fileContent, null, 2));
}

let getStaticAPIData = function (fileName = '{}') {
  let staticData = {};

  try {
      staticData = require("../static-api-data/" + fileName + ".json");
  } catch (ex) {}

  return staticData;
}

module.exports = { saveStaticAPIData, getStaticAPIData }