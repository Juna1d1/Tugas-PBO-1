// Definisi kelas Orang (induk)
class Orang {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }

    tampilkanInformasi() {
        return `Nama: ${this.nama}, Alamat: ${this.alamat}`;
    }

    tampilkanPeran() {
        return "Peran: Orang biasa";
    }
}

// Definisi kelas Mahasiswa (turunan dari Orang)
class Mahasiswa extends Orang {
    constructor(nama, alamat, nim) {
        super(nama, alamat);  // Memanggil konstruktor kelas induk
        this.nim = nim;
    }

    tampilkanInformasi() {
        return `${super.tampilkanInformasi()}, NIM: ${this.nim}`;
    }

    tampilkanPeran() {
        return "Peran: Mahasiswa";
    }
}

// Definisi kelas Dosen (turunan dari Orang)
class Dosen extends Orang {
    constructor(nama, alamat, nidn) {
        super(nama, alamat);  // Memanggil konstruktor kelas induk
        this.nidn = nidn;
    }

    tampilkanInformasi() {
        return `${super.tampilkanInformasi()}, NIDN: ${this.nidn}`;
    }

    tampilkanPeran() {
        return "Peran: Dosen";
    }
}

// Definisi kelas Guru (turunan dari Orang)
class Guru extends Orang {
    constructor(nama, alamat, nuptk) {
        super(nama, alamat);  // Memanggil konstruktor kelas induk
        this.nuptk = nuptk;
    }

    tampilkanInformasi() {
        return `${super.tampilkanInformasi()}, NUPTK: ${this.nuptk}`;
    }

    tampilkanPeran() {
        return "Peran: Guru";
    }
}

// Definisi OrangView untuk menampilkan data
class OrangView {
    render(orang) {
        return `
${orang.tampilkanInformasi()}
${orang.tampilkanPeran()}
        `;
    }
}

// Definisi OrangController untuk mengelola interaksi model dan view
class OrangController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanOrang() {
        const mahasiswa = new this.model.Mahasiswa("Budi", "Jl. Merdeka", "123456");
        const dosen = new this.model.Dosen("Pak Agus", "Jl. Mawar", "654321");
        const guru = new this.model.Guru("Ibu Rini", "Jl. Melati", "789123");

        console.log(this.view.render(mahasiswa));
        console.log(this.view.render(dosen));
        console.log(this.view.render(guru));
    }
}

// Inisialisasi dan Penggunaan Controller
const orangController = new OrangController({ Mahasiswa, Dosen, Guru }, new OrangView());
orangController.tampilkanOrang();

// Menggunakan polimorfisme (memeriksa peran)
const orang1 = new Orang("Andi", "Jl. Sudirman");
const mahasiswa1 = new Mahasiswa("Budi", "Jl. Merdeka", "123456");
const dosen1 = new Dosen("Pak Agus", "Jl. Mawar", "654321");
const guru1 = new Guru("Ibu Rini", "Jl. Melati", "789123");

console.log(orang1.tampilkanPeran());    // Output: Peran: Orang biasa
console.log(mahasiswa1.tampilkanPeran()); // Output: Peran: Mahasiswa
console.log(dosen1.tampilkanPeran());     // Output: Peran: Dosen
console.log(guru1.tampilkanPeran());      // Output: Peran: Guru
