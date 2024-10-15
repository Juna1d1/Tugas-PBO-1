// Kelas abstrak menggunakan pola abstrak
class Transportasi {
    constructor(jenis) {
        if (new.target === Transportasi) {
            throw new Error("Kelas Transportasi adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak yang harus diimplementasikan
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Implementasi kelas turunan
class Kereta extends Transportasi {
    constructor() {
        super('Kereta');
    }

    bergerak() {
        return `${this.jenis} bergerak di rel.`;
    }
}

// Implementasi kelas turunan
class Pesawat extends Transportasi {
    constructor() {
        super('Pesawat');
    }

    bergerak() {
        return `${this.jenis} terbang di udara.`;
    }
}

// View class (now it logs to console)
class TransportasiView {
    render(transportasi) {
        return transportasi.bergerak();  // Simply return the string
    }
}

// Controller class (now it logs to console)
class TransportasiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanTransportasi() {
        const kereta = new this.model.Kereta();
        const pesawat = new this.model.Pesawat();

        // Output to the console instead of manipulating the DOM
        console.log(this.view.render(kereta));
        console.log(this.view.render(pesawat));
    }
}

// Inisialisasi dan Penggunaan
const transportasiController = new TransportasiController({ Kereta, Pesawat }, new TransportasiView());
transportasiController.tampilkanTransportasi();
