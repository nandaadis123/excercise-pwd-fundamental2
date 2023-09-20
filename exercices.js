// 1. INPUT : Length , width (mencari luas persegi panjang)
let lenght = 3;
let width = 10;
// process :
let area = lenght * width
// output :
console.log(area);


// 2. perimeter of retangle (mencari keliling persegi panjang)
//input : length , width
let lengthA = 5;
let widthB = 4;
//process
let paramater = (2*(lengthA + widthB)) // 2* panjang+lebar
// output :
console.log(paramater);

// perimeter bangun ruang
//input (panjang , tinggi, lebar)
let long = 6;
let high = 3;
let widthC = 2;

// process
let parameter1 = long*high*widthC // panjang * tinggi * lebar
//output
console.log(parameter1) ;



//3. write a code to find diameter ,curcumference and area of acircle
//input keliling lingkaran
let jari = 10;
let pr = 3.14; //phi

//process
let rumus1 = (2*pr*jari);

//output keliling
console.log(rumus1);

// process luas lingkaran
let rumus2 = (pr*jari*jari);

//output luas lingkaran
console.log(rumus2);

//proses mencari diameter
let rumus3 = 2*jari;

// output mencari diameter
console.log(rumus3);



// 4. write a code find angles of triangle if two angles are given
//input 
var sudut1 = 55;
var sudut2 = 30;
var totalsudut = 180;

//proses mencari sudut
var sudut3 = totalsudut-sudut1-sudut2;
//output sudut 3
console.log(sudut3);



//5. mencari perbedaan tanggal dalam hari 
//input
var date1 = new Date ("2020-01-15");
var date2 = new Date ("2020-01-10");

//process mencari perbedaan
var result1 = (date1-date2) / (24*1000*3600)
//output 
console.log(result1);



// 6. mencari tanggal ke tahun /bulan /tangga;
//input 
var jumlahari = 1200 //jumlah hari

//process 
var year = Math.floor(jumlahari / 365 );
var month = Math.floor(jumlahari % 365 / 30);
var hari = Math.floor(jumlahari % 365 %30 );
var month2 = Math.floor(jumlahari % 30)

//output
console.log(year);
console.log(month);
console.log(hari);