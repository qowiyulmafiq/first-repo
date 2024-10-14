/*Program 1*/
function findLargest() {
    // Get the input value and split it into an array of numbers
    let numbers = document.getElementById('numbers').value.split(',').map(Number);
    
    // Validate if the input is valid
    if (numbers.length === 0 || numbers.some(isNaN)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }
    
    // Find the largest number using Math.max
    let largest = Math.max(...numbers);
    
    // Display the result
    document.getElementById('result_1').innerText = `The largest number is: ${largest}`;
}

/*Program 2*/
function inputNama(){
    let nama_1 = document.getElementById('nama1').value
    let nama_2 = document.getElementById('nama2').value
    let nama_3 = document.getElementById('nama3').value
    let nama_4 = document.getElementById('nama4').value
    let nama_5 = document.getElementById('nama5').value

    if (nama_1 === "" || nama_2 === "" || nama_3 === "" || nama_4 === "" || nama_5 === "") {
        alert("Masukkan nama terlebih dahulu!");
        return;
    }

    document.getElementById('hasil-nama1').innerText = `${nama_1}`
    document.getElementById('hasil-nama2').innerText = `${nama_2}`
    document.getElementById('hasil-nama3').innerText = `${nama_3}`
    document.getElementById('hasil-nama4').innerText = `${nama_4}`
    document.getElementById('hasil-nama5').innerText = `${nama_5}`
}

function inputUts(){
    let uts_1 = document.getElementById('uts1').value
    let uts_2 = document.getElementById('uts2').value
    let uts_3 = document.getElementById('uts3').value
    let uts_4 = document.getElementById('uts4').value
    let uts_5 = document.getElementById('uts5').value

    if (uts_1 === "" || uts_2 === "" || uts_3 === "" || uts_4 === "" || uts_5 === "") {
        alert("Masukkan nilai terlebih dahulu!");
        return;
    }

    document.getElementById('nilai-uts1').innerText = `${uts_1}`
    document.getElementById('nilai-uts2').innerText = `${uts_2}`
    document.getElementById('nilai-uts3').innerText = `${uts_3}`
    document.getElementById('nilai-uts4').innerText = `${uts_4}`
    document.getElementById('nilai-uts5').innerText = `${uts_5}`
}

function inputUas(){
    let uas_1 = document.getElementById('uas1').value
    let uas_2 = document.getElementById('uas2').value
    let uas_3 = document.getElementById('uas3').value
    let uas_4 = document.getElementById('uas4').value
    let uas_5 = document.getElementById('uas5').value

    if (uas_1 === "" || uas_2 === "" || uas_3 === "" || uas_4 === "" || uas_5 === "") {
        alert("Masukkan nilai terlebih dahulu!");
        return;
    }

    document.getElementById('nilai-uas1').innerText = `${uas_1}`
    document.getElementById('nilai-uas2').innerText = `${uas_2}`
    document.getElementById('nilai-uas3').innerText = `${uas_3}`
    document.getElementById('nilai-uas4').innerText = `${uas_4}`
    document.getElementById('nilai-uas5').innerText = `${uas_5}`
}

function nilaiAkhir() {
    const uts = [
        parseFloat(document.getElementById('uts1').value),
        parseFloat(document.getElementById('uts2').value),
        parseFloat(document.getElementById('uts3').value),
        parseFloat(document.getElementById('uts4').value),
        parseFloat(document.getElementById('uts5').value)
    ];
    
    const uas = [
        parseFloat(document.getElementById('uas1').value),
        parseFloat(document.getElementById('uas2').value),
        parseFloat(document.getElementById('uas3').value),
        parseFloat(document.getElementById('uas4').value),
        parseFloat(document.getElementById('uas5').value)
    ];

    // Loop untuk menghitung nilai akhir dan meng-update nilai pada tabel
    for (let i = 0; i < 5; i++) {
        const nilaiAkhir = (uts[i] + uas[i]) / 2;
        document.getElementById(`nilai-total${i + 1}`).innerText = `${nilaiAkhir}`;
    }
}

function tentukanGrade(nilai) {
    let grade;
    if (nilai >= 81 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 61 && nilai <= 80) {
        grade = "B";
    } else if (nilai >= 41 && nilai <= 60) {
        grade = "C";
    } else if (nilai >= 21 && nilai <= 40) {
        grade = "D";
    } else if (nilai >= 0 && nilai <= 20) {
        grade = "E";
    } else {
        grade = "Nilai tidak valid";
    }
    return grade;
}

function tentukanStatus(grade) {
    let status;
    if (grade === "A" || grade === "B") {
        status = "Lulus";
    } else if (grade === "C" || grade === "D" || grade === "E") {
        status = "Tidak Lulus";
    } else {
        status = "Invalid";
    }
    return status;
}

function tentukanGradeDanStatus() {
    // Ambil nilai dari tabel
    const nilaiMahaSiswa = [
        parseFloat(document.getElementById('nilai-total1').innerText),
        parseFloat(document.getElementById('nilai-total2').innerText),
        parseFloat(document.getElementById('nilai-total3').innerText),
        parseFloat(document.getElementById('nilai-total4').innerText),
        parseFloat(document.getElementById('nilai-total5').innerText)
    ];

    // Tentukan grade dan status untuk setiap siswa
    nilaiMahaSiswa.forEach((nilai, index) => {
        const grade = tentukanGrade(nilai);
        const status = tentukanStatus(grade);

        // Masukkan hasil grade dan status ke tabel
        document.getElementById(`hasil-grade${index + 1}`).innerText = grade;
        document.getElementById(`hasil-status${index + 1}`).innerText = status;
    });
}

/*Program 3*/
function hitungBalok() {
    let panjang = document.getElementById('panjang-balok').value;
    let lebar = document.getElementById('lebar-balok').value;
    let tinggi = document.getElementById('tinggi-balok').value;

    if (panjang <= 0 || lebar <= 0 || tinggi <= 0 || isNaN(panjang) || isNaN(lebar) || isNaN(tinggi)) {
        alert('Masukkan dimensi balok yang valid.');
        return;
    }

    panjang = parseFloat(panjang);
    lebar = parseFloat(lebar);
    tinggi = parseFloat(tinggi);

    let volume = panjang * lebar * tinggi;
    let luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
    let keliling = 4 * (panjang * lebar * tinggi);

    document.getElementById('diket-balok').innerText = `panjang = ${panjang}
    lebar = ${lebar}
    tinggi = ${tinggi}`
    document.getElementById('hasil-volume-bal').innerText = `${volume} cm³`;
    document.getElementById('hasil-luas-bal').innerText = `${luas} cm²`;
    document.getElementById('hasil-keliling-bal').innerText = `${keliling} cm`;
}

function hitungKubus() {
    // Ambil input dari pengguna (sisi kubus)
    let sisi = document.getElementById('sisi-kubus').value;

    // Validasi input
    if (sisi <= 0 || isNaN(sisi)) {
        alert('Masukkan nilai sisi kubus yang valid.');
        return;
    }

    // Konversi sisi ke angka
    sisi = parseFloat(sisi);

    let volume = Math.pow(sisi, 3);
    let luas = 6 * Math.pow(sisi, 2);

    let keliling = sisi * 6;

    // Tampilkan hasil di tabel
    document.getElementById('diket-sisi').innerText = `sisi = ${sisi} cm`;
    document.getElementById('hasil-volume-kub').innerText = `${volume} cm³`;
    document.getElementById('hasil-luas-kub').innerText = `${luas} cm²`;
    document.getElementById('hasil-keliling-kub').innerText = `${keliling} cm`;
}

function hitungPrisma() {
    let alas = document.getElementById('alas-prisma').value;
    let tinggiSegitiga = document.getElementById('tinggi-segitiga-prisma').value;
    let tinggiPrisma = document.getElementById('tinggi-prisma').value;

    if (alas <= 0 || tinggiSegitiga <= 0 || tinggiPrisma <= 0 || isNaN(alas) || isNaN(tinggiSegitiga) || isNaN(tinggiPrisma)) {
        alert('Masukkan dimensi prisma yang valid.');
        return;
    }

    alas = parseFloat(alas);
    tinggiSegitiga = parseFloat(tinggiSegitiga);
    tinggiPrisma = parseFloat(tinggiPrisma);

    let luasAlas = (alas * tinggiSegitiga) / 2;
    let volume = luasAlas * tinggiPrisma;
    let luasPermukaan = (2 * luasAlas) + (alas + 2 * tinggiSegitiga) * tinggiPrisma;
    let keliling = alas + Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggiSegitiga, 2)) + tinggiSegitiga; 

    document.getElementById('diket-pris').innerText = `alas = ${alas}
    tinggi segitiga = ${tinggiSegitiga}
    tinggi prisma = ${tinggiPrisma}`
    document.getElementById('hasil-volume-pris').innerText = `${volume.toFixed(2)} cm³`;
    document.getElementById('hasil-luas-pris').innerText = `${luasPermukaan.toFixed(2)} cm²`;
    document.getElementById('hasil-keliling-pris').innerText = `${keliling.toFixed(2)} cm`;
}

function hitungBola() {
    const phi = 3.14
    let jariJari = document.getElementById('jari-jari').value

    if(jariJari <= 0){
        alert("Masukan dimensi bola yang valid")
        return
    }

    jariJari = parseFloat(jariJari)

    let luas = 4 * phi * Math.pow(jariJari, 2)
    let volume = (4/3) * phi * Math.pow(jariJari, 3)
    let keliling = 2 * phi * jariJari

    document.getElementById('diket-bola').innerText = `phi = ${phi}
    jari-jari = ${jariJari}`
    document.getElementById('hasil-volume-bola').innerText = `${volume.toFixed(2)} cm³`;
    document.getElementById('hasil-luas-bola').innerText = `${luas.toFixed(2)} cm²`;
    document.getElementById('hasil-keliling-bola').innerText = `${keliling.toFixed(2)} cm`;
}

