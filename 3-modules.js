//modules
const { john, peter } = require("./4-name");
//destructured

const sayHi = require("./5-functions");
// console.log(names);
const data = require("./6-alternativeModuleExport");

require("./7-mindgrenade");
// require htr tae htl mhr invoke htr yin auto execute tl

console.log(data);

sayHi("susan");
sayHi(john);
// names loh inport in (require yin) names.john loh pyn khw loh ya
sayHi(peter);
