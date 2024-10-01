// Implementasi penggunaan kelas Mahasiswa
public class Main {
    // Definisi kelas Mahasiswa sebagai kelas statis
    public static class Mahasiswa {
        // Atribut kelas
        private String nama;
        private String nim;
        private String jurusan;

        // Konstruktor kelas untuk inisialisasi objek
        public Mahasiswa(String nama, String nim, String jurusan) {
            this.nama = nama;
            this.nim = nim;
            this.jurusan = jurusan;
        }

        // Metode untuk mendapatkan nama mahasiswa
        public String getNama() {
            return nama;
        }

        // Metode untuk mengubah nama mahasiswa
        public void setNama(String nama) {
            this.nama = nama;
        }

        // Metode untuk menampilkan aktivitas belajar
        public void belajar() {
            System.out.println(nama + " sedang belajar.");
        }
    }

    public static void main(String[] args) {
        // Membuat objek Mahasiswa
        Mahasiswa mahasiswa1 = new Mahasiswa("Juned", "723762", "Informatika");
        Mahasiswa mahasiswa2 = new Mahasiswa("Kriting", "123723", "Sarjana Mancing");

        // Menggunakan metode objek
        mahasiswa1.belajar();  // Output: Budi sedang belajar.
        mahasiswa2.belajar();  // Output: Ani sedang belajar.
    }
}
