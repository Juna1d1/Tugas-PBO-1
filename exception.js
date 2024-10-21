function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

console.log(bagi(100, 30));
console.log(bagi(210, 12));
