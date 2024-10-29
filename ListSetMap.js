console.log("Penggunaan List:");
// Inisialisasi List (Array)
let listMahasiswa = ["Budi", "Siti", "Agus"];

// Create: Menambahkan elemen baru ke dalam List
function tambahKeList(nama) {
    listMahasiswa.push(nama);
    console.log(`${nama} ditambahkan ke List`);
}

// Read: Menampilkan semua elemen dalam List
function tampilkanList() {
    console.log("Isi List:", listMahasiswa);
}

// Update: Mengubah elemen tertentu di dalam List berdasarkan index
function updateList(index, namaBaru) {
    if (index >= 0 && index < listMahasiswa.length) {
        listMahasiswa[index] = namaBaru;
        console.log(`List di index ${index} diperbarui menjadi ${namaBaru}`);
    } else {
        console.log("Index tidak valid");
    }
}

// Delete: Menghapus elemen tertentu di dalam List berdasarkan index
function hapusDariList(index) {
    if (index >= 0 && index < listMahasiswa.length) {
        const removed = listMahasiswa.splice(index, 1);
        console.log(`${removed} dihapus dari List`);
    } else {
        console.log("Index tidak valid");
    }
}

// Contoh penggunaan fungsi List
tambahKeList("Ani");
tampilkanList();
updateList(1, "Dewi");
tampilkanList();
hapusDariList(0);
tampilkanList();

console.log();
console.log("Penggunaan SET:");

// Inisialisasi Set
let setMahasiswa = new Set(["Budi", "Siti", "Agus"]);

// Create: Menambahkan elemen baru ke dalam Set
function tambahKeSet(nama) {
    if (!setMahasiswa.has(nama)) {
        setMahasiswa.add(nama);
        console.log(`${nama} ditambahkan ke Set`);
    } else {
        console.log(`${nama} sudah ada di Set`);
    }
}

// Read: Menampilkan semua elemen dalam Set
function tampilkanSet() {
    console.log("Isi Set:", [...setMahasiswa]);
}

// Update: Menghapus elemen lama dan menambahkan elemen baru (tidak ada index di Set)
function updateSet(namaLama, namaBaru) {
    if (setMahasiswa.has(namaLama)) {
        setMahasiswa.delete(namaLama);
        setMahasiswa.add(namaBaru);
        console.log(`${namaLama} diperbarui menjadi ${namaBaru} di Set`);
    } else {
        console.log(`${namaLama} tidak ditemukan di Set`);
    }
}

// Delete: Menghapus elemen tertentu dari Set
function hapusDariSet(nama) {
    if (setMahasiswa.has(nama)) {
        setMahasiswa.delete(nama);
        console.log(`${nama} dihapus dari Set`);
    } else {
        console.log(`${nama} tidak ditemukan di Set`);
    }
}

// Contoh penggunaan fungsi Set
tambahKeSet("Ani");
tampilkanSet();
updateSet("Siti", "Dewi");
tampilkanSet();
hapusDariSet("Budi");
tampilkanSet();

console.log();
console.log("Penggunaan MAP:");

// Inisialisasi Map
let mapNilai = new Map([
    ["Budi", 90],
    ["Siti", 85]
]);

// Create: Menambahkan pasangan kunci-nilai baru ke dalam Map
function tambahKeMap(nama, nilai) {
    mapNilai.set(nama, nilai);
    console.log(`${nama} dengan nilai ${nilai} ditambahkan ke Map`);
}

// Read: Menampilkan semua elemen dalam Map
function tampilkanMap() {
    mapNilai.forEach((nilai, nama) => {
        console.log(`Nama: ${nama}, Nilai: ${nilai}`);
    });
}

// Update: Mengubah nilai berdasarkan kunci di dalam Map
function updateMap(nama, nilaiBaru) {
    if (mapNilai.has(nama)) {
        mapNilai.set(nama, nilaiBaru);
        console.log(`Nilai ${nama} diperbarui menjadi ${nilaiBaru} di Map`);
    } else {
        console.log(`${nama} tidak ditemukan di Map`);
    }
}

// Delete: Menghapus pasangan kunci-nilai tertentu dari Map
function hapusDariMap(nama) {
    if (mapNilai.has(nama)) {
        mapNilai.delete(nama);
        console.log(`${nama} dihapus dari Map`);
    } else {
        console.log(`${nama} tidak ditemukan di Map`);
    }
}

// Contoh penggunaan fungsi Map
tambahKeMap("Agus", 88);
tampilkanMap();
updateMap("Budi", 95);
tampilkanMap();
hapusDariMap("Siti");
tampilkanMap();
