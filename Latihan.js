// Mendefinisikan Kelas
class Mobil {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
    }

    // Metode
    jalan() {
        console.log(`${this.merk} berwarna ${this.warna} sedang melaju di jalan.`);
    }
}

// Pewarisan
class MobilBalap extends Mobil {
    constructor(merk, warna, kecepatanMaksimal) {
        super(merk, warna); // Memanggil konstruktor kelas induk
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    // Overriding Metode
    jalan() {
        console.log(`${this.merk} berwarna ${this.warna} dengan kecepatan maksimal ${this.kecepatanMaksimal} km/jam.`);
    }
}

// Membuat Objek
const mobil1 = new Mobil('SkyLine', 'Biru Putih');
mobil1.jalan();
const mobilBalap1 = new MobilBalap('Supra MK5', 'Hitam', 500);
mobilBalap1.jalan();
