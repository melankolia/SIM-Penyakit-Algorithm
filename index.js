let sakitKepala = true;
let sakitMata = true;
let sakitPerut = true;
let demam = true;
let berak = true;

function convertBoolean(checkboxes){
  if (checkboxes == true){
    return 1;
  }
  else if (checkboxes == false){
    return 0;
  }
}
 
let DBD = ((convertBoolean(sakitKepala) + convertBoolean(sakitMata) + convertBoolean(sakitPerut) + convertBoolean(demam) + convertBoolean(berak)) / 5).toFixed(1) ;
let DB = ((convertBoolean(sakitKepala) + convertBoolean(sakitMata) + convertBoolean(demam)) / 3).toFixed(1);

if (DBD >= 0.8){
  console.log('Anda Kena Penyakit DBD');
}
if (DB >= 0.8){
  console.log('Anda Kena Penyakit DB');
}