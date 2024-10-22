// Controller Nilai
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

    tampilkanPembagian(a, b) {
        try {
            const hasilBagi = this.model.bagi(a, b);
            return this.view.render(hasilBagi);
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

    static bagi(a, b) {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    }
}

// View Nilai
class NilaiView {
    render(data) {
        return `Hasil: ${data}`;
    }

    renderError(error) {
        return `Error: ${error}`;
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, new NilaiView()); // instance dari NilaiView

// Menampilkan rata-rata
console.log(nilaiController.tampilkanRataRata([80, 90, 100, 75, 85, 100]));  
// Menampilkan error: Data nilai tidak valid atau kosong
console.log(nilaiController.tampilkanRataRata([])); 
// Menampilkan hasil pembagian
console.log(nilaiController.tampilkanPembagian(100, 30)); 
// Menampilkan error pembagian dengan nol
console.log(nilaiController.tampilkanPembagian(210, 0)); 
