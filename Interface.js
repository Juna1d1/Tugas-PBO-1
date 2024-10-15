// Definisi antarmuka melalui pola objek
const KendaraanInterface = {
    bergerak: function() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
};

// Kelas dasar yang memeriksa implementasi antarmuka
class Kendaraan {
    constructor() {
        if (new.target === Kendaraan) {
            throw new Error("Kelas 'Kendaraan' tidak boleh diinstansiasi langsung.");
        }
    }

    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Pesawat extends Kendaraan {
    constructor() {
        super(); // Memanggil konstruktor kelas dasar
    }

    bergerak() {
        console.log("Pesawat terbang di udara.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Sepeda extends Kendaraan {
    constructor() {
        super(); // Memanggil konstruktor kelas dasar
    }

    bergerak() {
        console.log("Sepeda bergerak dengan pedal.");
    }
}

// Penggunaan
const pesawat = new Pesawat();
pesawat.bergerak(); // Output: Pesawat terbang di udara.

const sepeda = new Sepeda();
sepeda.bergerak(); // Output: Sepeda bergerak dengan pedal.
