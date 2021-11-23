//file system module
//non blocking (async) yaw sync yaw ya dl

const { readFileSync, writeFileSync } = require("fs");
// const fs =require ('fs'); dr so ll a pw ka nae tutu pl and then fs.blah blah loh ya dl

console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync(
  "./content/third-writtenByNode.txt",
  `here is the result ${first} ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("start next");
//flag a so tr ka only append tl so shi pee thrr ko ma phyat wo ma hote yin over ride tl
