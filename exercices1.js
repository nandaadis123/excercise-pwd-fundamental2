 //soal no 1
 function CelciusToFahrenheit (fahrenheit) {
    return (Celcius * 9/5 ) + 32
};

let Celcius = 45;
let fahrenheit = CelciusToFahrenheit(Celcius);
console.log(fahrenheit);

// soal no 2
var number = 2

 if (number %2 ===0){
    output= "genap"
 }else{
    output= "ganjil"
 }
console.log(output)

// soal no 3
// buat bilangan prima
// bilangan prima itu harus 2 dan semua angka ganjil

let  angkainput = 2;

//process untuk membuat bilangan habis di bagi 2 (ganjil jika false)
let genap = (angkainput % 2 == 0)
console.log(genap);
// process untuk membuat bilangan menjadi genap jika  false
let batas = (angkainput > 2)
console.log(batas)
//process untuk mencegah bilagan dibawah 2  menjadi terkesekusi
let satu = (angkainput < 2)
console.log(satu)



// soal no  4 if else if javascript
//bilangan prima terdiri ganjil dan 2
var isi = 1;
if(isi === 2 ){
    console.log( isi + " bilangan prima ")}
  else if (isi < 2) {
    console.log(isi + " bukan bilangan prima")
}else if (isi % 2 == 0) {
    console.log( isi + " bukan bilangan prima ")
}else{
    console.log(isi + " bilangan prima ")
}


// soal no 4 ( Write a code to find the sum of the numbers 1 to N. contoh 3 = 3+2+1 =6

//input
let angkaA = 5   
let jumlah = 0;
//process
for ( let juml =0; juml <= angkaA; juml++){
    jumlah = jumlah + juml;
}
console.log(jumlah);



// soal no 5 ( buat kode faktorial) n! =n*(n-1)
//input
let angakB = 2
let hasil =1;

//process( faktor 6 = 6*5*4*3*2*1)
for (let hasi=1; hasi <=angakB; hasi++){
    hasil = hasil * hasi
    console.log(hasi)
}
console.log(hasil);



// soal no 6  bilangan fibbonanci
const fibo = 5;  //jumlah banyaknya bilangan
let angkaAb =0; //jumlah angka pertama
let angkaBb =1; //jumlah angka kedua

for(let i = 0 ; i < fibo; i++){
    const hasilfibo = angkaAb + angkaBb; // fibonanci adalah gabungan dari angka 1 dan 2
    angkaAb = angkaBb;
    angkaBb =hasilfibo;
    console.log( hasilfibo  );
}
