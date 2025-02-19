document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Menghindari refresh halaman saat submit form

    const username = document.getElementById('yat21').value;
    const password = document.getElementById('0354').value;

    // Validasi sederhana
    if (username === '' || password === '') {
        alert('Harap isi semua kolom!');
    } else {
        // Jika login berhasil, alihkan ke halaman dashboard
        window.location.href = "https://drive.google.com/drive/folders/14YpERpBPBQxd8qOwB2wu5ifuV0DCxNbN"; // Ganti dengan alamat halaman tujuan
    }
});
