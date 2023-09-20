// 1. soal pertama tabel perkalian 
//    input : menampikan tabel bilangan perkalian 5
//         5 * 1  = 5
//         5 * 2  = 10
//         5 * n  = 5n
//         5 * 10 = 50
//    mengubah convert 5 dan 10 sebagai batasan perkalian
//       input = 5
const input = 9;
//       batasan = 10
const limit = 10;

//    rumus looping
for ( let i = 0 ; i <= limit ; i ++){
 console.log(`${input} x ${i} = ${input*i}\n` )
}




// soal no 2 palidrom
//input : variable data string 
// output : polindrome / Non-polindrome
//identifikasi : - sebuah kata yang dibalik sama dengan kata aslinya
//process 
//  1. deklarasi variable input dan variabel penampung reserve data
let data = "malam";
let datareserve = ""; // <- " " adalah untuk string (kata)
let result = "";
//  2. membalikan data dengan cara mengakses dari karakter terakir dan dimasukan ke variable penampung reserve
console.log(
data.charAt(4),
data.charAt(3),
data.charAt(2),
data.charAt(1),
data.charAt(0)
);
for (let ii = data.length - 1; ii >= 0; ii--){
    datareserve += data.charAt(ii);
}
console.log(datareserve);
//  3. jika data dan reserve data sama , maka result polindrome
if(data.toLocaleLowerCase() === datareserve.toLocaleLowerCase()){
    result = "palindrome";
}else{
    // jika tidak maka non  polindrome
    result = "non-polindrome"
}
console.log(result)







// soal nomer 3 konversi centimer ke kilometer
// input 
var inputcentimer = 10000;
// process
var kilometer = inputcentimer / 10000; // <--- 10000 cm = 1 km (setiap penuruhan / 10 )
var kilometer1 =  kilometer + " (1 kilometer sama dengan 10000 cm) ";
// output
console.log(kilometer1)





// soal nomer 4
// tulis kode format mata uang idr
//input 
//  1000 rupiah
let uang = 1000; // input angka
// process dengan input idm
let currency = uang.toLocaleString
    ("id",{style:"currency", currency: "IDR" })
console.log(currency)



// soal nomer 5 Write a code to remove the first occurrence of a given “search string” from a string
//Example : string = “Hello world”, search string = “ell” → “Ho world”
//input yang dibutuhkan
let inputkata1 = "Hello world";
let pencariankata1 = "ell";
let hasilkata = "";
//process melakukan looping 
for (let i = 0; i < inputkata1.length; i++) {
  let match = true;

  for (let j = 0; j < pencariankata1.length; j++) {
    if (inputkata1[i + j] !== pencariankata1[j]) {
      match = false;
      break;
    }
  }

  if (match) {
    i += pencariankata1.length - 1;
  } else {
     hasilkata += inputkata1[i];
  
  }
}

console.log(hasilkata);




  // soal no 6
  // input
  const inputkata = "hello world";
  let hasilkata1 = "";
  let capitalizeNext = true;   
  /// proces
  for (const char of inputkata) {
    if (capitalizeNext && /[a-zA-Z]/.test(char)) {
      hasilkata1 += char.toUpperCase();
      capitalizeNext = false;
    } else {
      hasilkata1 += char.toLowerCase();
    }
  
    if (char === ' ') {
      capitalizeNext = true;
    }
  }  
  console.log(hasilkata1);
  
  



  // soal no 7
  // pembalik string ( kata ) soal no 7
let data1 = "aku suka kamu ";
let datareserve1 = ""; // <- " " adalah untuk string (kata)

//  2. membalikan data dengan cara mengakses dari karakter terakir dan dimasukan ke variable penampung reserve
for (let ii = data1.length - 1; ii >= 0; ii--){
    datareserve1 += data1.charAt(ii);
}
console.log(datareserve1);





//                                         SLIDE 2                                    //
// soal no 1
// Write a code to swap the case of each character from string 
//                   Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’






// soal no 2 (Write a code to find the largest of two given integers)
// input
let x1 = 20
let x2 = 30
let interger1 ="";
// jika x1 lebih besr x2 
if (x1 > x2){
       interger1 += `ini bilangan terbesar ${x1}`
;} else if (x2 > x1){
   
interger1 += ` ini bilangan terbesar ${x2}`

;}else {
  interger1 +=`ini bilangan intergal ${x1}`
;}
console.log(interger1);



//soal no 3  (Write a conditional statement to sort three numbers)
let z1 = 1;
let z2 = 2;
let z3 = 3;
let pengurutanangka ="";


// process mengurutkan bilangan terkecil
if (z1 < z2 && z1 < z3 && z2 < z3){
  pengurutanangka = (`${z1}, ${z2}, ${z3}`)
}
  else if( z2 < z3 && z2 < z1 && z3 < z1){
  pengurutanangka = (`${z2}, ${z3}, ${z1}`)
}
 else if ( z3 < z1 && z3 < z2 && z1 < z2){
  pengurutanangka = (`${z3}, ${z1}, ${z2}`)
}
else if ( z2 == z3 && z3 < z1 && z2 < z1){
  pengurutanangka = (`${z3}, ${z2}, ${z1}`)
 } 
 else if ( z1 == z2 && z1 < z3 && z2 < z3){
  pengurutanangka = (`${z1}, ${z2}, ${z3}`)
 } 
 else {
  pengurutanangka = (`${z1}, ${z3}, ${z2} `)
};

console.log(pengurutanangka);





/// soal no 4
//tulis kode jika data 1 adalah number dan data 2 adalah string dan data 3 other 
let datautama = 1;
let dataakir = "";
datakedua = (typeof datautama);
console.log(typeof datautama);

//process
if (typeof datautama === "number"){
    dataakir += (`DATA 1`)
}else if (typeof datautama === "string"){
    dataakir += (`DATA 2`)
}else{
  dataakir += ("DATA 3")
}
console.log(dataakir);




/// soal no 5
// dua buah variabel:
const inputvariabel = 'An apple a day keeps the doctor away'; // input kata yang di inginkan
let hasilkata2 = ''; // untuk menyimpan 

for (let i = 0; i < inputvariabel.length; i++) {
  if (inputvariabel[i] === 'a') {
    hasilkata2 += '*';
  } else {
    hasilkata2 += inputvariabel[i];
  }
}  // <<== karakter sama dengan huruf "a". Jika ya, maka (*) akan ditambahkan ke hasilkata2.
// Jika tidak, maka karakter kata tetap

//hasil dari dari program
console.log(hasilkata2);

