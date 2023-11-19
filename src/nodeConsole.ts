import { mitgliednummerGen } from "./mitgliednummerGen"

if(process.argv.length < 4) {
  console.log("usage in node.js: 'vorname=Lars nachname=Eschweiler npm run gen'")
}

console.log(mitgliednummerGen(process.argv[2], process.argv[3]))