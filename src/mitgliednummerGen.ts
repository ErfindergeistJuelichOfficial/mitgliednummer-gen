export function mitgliednummerGen(vorname: string, nachname: string){
  return vorname.charAt(0) + nachname.charAt(0) + (1000 + Math.floor(Math.random() * Math.floor(9000))) + String.fromCharCode(97 + Math.floor(Math.random() * Math.floor(26)));
}
