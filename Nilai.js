class NilaiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            return this.view.render(rataRata);
        } catch (error) {
            return this.view.renderError(error.message);
        }
    }
}

// Model Nilai
class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

// View Nilai
class NilaiView {
    render(rataRata) {
        return `Rata-rata nilai: ${rataRata}`;
    }

    renderError(error) {
        return `Error: ${error}`;
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, new NilaiView()); // instance dari NilaiView

console.log(nilaiController.tampilkanRataRata([80, 90, 100, 75, 85, 100]));  // Menampilkan rata-rata
console.log(nilaiController.tampilkanRataRata([]));             // Menampilkan error: Data nilai tidak valid atau kosong.
