alert(" Selamat Datang ");
function hanyaAngka1(evt) {//untuk menjadikan inputan hanya int saja
    var charCode = (evt.which) ? evt.which : Event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
 
    return false;
    return true;
}
function hanyaAngka2(evt) {
    var charCode = (evt.which) ? evt.which : Event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
 
    return false;
    return true;
}
function cek(){
    if(hitung.angka1.value == "" || hitung.angka2.value == ""){
    alert("data kosong"); //jika angka kosong maka pesan akan tampil
    exit;
    }
}
function tambah(){
    cek(); //panggil function cek
    a=eval(hitung.angka1.value); //mengisi variabel a dengan isi dari input name angka1
    b=eval(hitung.angka2.value); //mengisi variabel b dengan isi dari input name angka2
    c=a+b //menjumlahkan kedua variabel
    hitung.total.value = c; //memberikan hasil penjumlahan ke input name total

    document.body.style.backgroundColor = "#00FF00"; // mengganti bg menjadi kode tersebut
}   