// Mendapatkan elemen display
let display = document.getElementById('display');

// Menambahkan angka atau operator ke display
function appendToDisplay(value) {
    display.value += value;
}

// Menghapus semua isi display
function clearDisplay() {
    display.value = '';
}

// Menghapus karakter terakhir di display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil dari ekspresi di display
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
