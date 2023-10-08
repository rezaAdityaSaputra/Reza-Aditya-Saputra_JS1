

function usia() {
    var usia = (document.getElementById("usia").value);

    if (usia < 15) {
        kelompokUsia = "Kelompok bocil-bocil";
    } else if (usia >= 15 && usia <= 24) {
        kelompokUsia = "Kelompok sepuh magang";
    } else if (usia >= 25 && usia <= 34) {
        kelompokUsia = "Kelompok sepuh tahap awal";
    } else if (usia >= 35 && usia <= 44) {
        kelompokUsia = "Kelompok sepuh tahap menengah";
    } else if (usia >= 45 && usia <= 54) {
        kelompokUsia = "Kelompok  sepuh tahap lanjut";
    } else if (usia >= 55 && usia <= 64) {
        kelompokUsia = "Kelompok sepuh legend";
    } else {
        kelompokUsia = "Kelompok sepuh mytic";
    }

    document.getElementById("hasilUmur").innerHTML = "Anda termasuk dalam: " + kelompokUsia;
}


function zodiak() {
    var pilihan = document.getElementById("pilihan zodiak kamu").value;
    var hasil = "";

    switch (pilihan) {
        case "Aries":
            hasil = " Aries adalah tanda zodiak pertama dalam zodiak Barat. Mereka dikenal sebagai pemimpin yang berani dan bersemangat.";
            break;
        case "Taurus":
            hasil = "Taurus adalah tanda zodiak kedua yang dikenal sebagai tanda bumi. Orang Taurus dikenal karena kestabilan dan ketahanan mereka.";
            break;
        case "Gemini":
            hasil = "Gemini adalah tanda zodiak ketiga yang dikenal karena kepribadian yang dualistik. Orang Gemini sering cerdas, komunikatif, dan sangat sosial.";
            break;
        case "Cancer":
            hasil = "Cancer adalah tanda zodiak keempat yang dikenal sebagai tanda air. Orang Cancer sering dianggap memiliki rasa empati yang kuat dan sangat peduli terhadap keluarga dan teman-teman. Mereka cenderung penuh perasaan, intuitif, dan melindungi.";
            break;
        case "Leo":
            hasil = "Leo adalah tanda zodiak kelima yang dikenal sebagai raja dari zodiak. Orang Leo biasanya percaya diri, bersemangat, dan sangat percaya diri.";
            break;
        default:
            hasil = "Zodiak tidak ditemukan.";
            break;
    }

    document.getElementById("hasilZodiak").innerHTML = hasil;
}

function buatSegitiga() {
    var jumlahBaris = document.getElementById("jumlahBaris").value;
    var segitiga = '';

    for (var i = 1; i <= jumlahBaris; i++) {
        for (var j = 1; j <= i; j++) {
            segitiga += '* ';
        }
        segitiga += '\n';
    }

    document.getElementById('segitiga').textContent = segitiga;

}


function AngkaGenap() {
   var angka = document.getElementById("angkaInput").value;
    var hasil = '';
    var i = 2; 

    do {
        hasil += i + ' ';
        i += 2; 
    } while (i <= angka);

    document.getElementById("Angka").textContent = "Angka genap dari 2 hingga " + angka + " adalah: " + hasil;
}

function hitungLuas() {
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;

    var luas = panjang*lebar;

    document.getElementById("luas").textContent = "Luas persegi panjangnya adalah = " + luas;
}