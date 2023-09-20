//// soal no 1 day 4
//
// fungsi .padstart  : untuk mengisi awal (kiri) sebuah string dengan karakter lain, 
//sehingga string tersebut mencapai panjang tertentu. 
function createTriangle(tinggi) {
    let counter = 1;
    let triangle = "";
  
    for (let i = 1; i <= tinggi; i++) {
      for (let j = 1; j <= i; j++) {
        triangle += counter.toString().padStart(2, "0") + " ";
        counter++;
      }
      triangle += "\n";
      console.log(triangle)
    }
  
    return triangle;
  }

  const tinggi = 5; // untuk membuat tinggi segitiga
  const trianglePattern = createTriangle(tinggi);
  console.log(trianglePattern);
  
       
/// soal no 2
/**
 * jika kelipatan 3 maka berubah menjadi Fizz
 * jika kelipatan 5 maka berubah menjadi Buzz
 * jika kelipatan 3 dan 5 berubah menjadi FizzBuzz
 * n adalah jumlah total looping atau input
 */
// input:
function kelipatanfizzbuzz(B){
        let hasila = "";
    for (ac = 1; ac <= B ; ac ++){
        if(ac % 15 === 0){
            hasila +=`${ac} fizzBuzz \n`
        }else if (ac % 5 === 0){
            hasila +=`${ac} buzz \n`
        }else if (ac % 3 === 0){
            hasila +=`${ac} fizz \n`
        }else {
            hasila += `${ac} \n`
        } 
    } return hasila;
}
const hasila = kelipatanfizzbuzz (25);

console.log(hasila);

/// soal no 3



/// soal no 4



/// soal no 5