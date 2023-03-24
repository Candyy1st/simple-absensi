// Tangkap Element absensi_form
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

// Array penampung data absensi
let absensi_data = [];

// Menambah Event Listener submit ke element absensi_form
absensi_form.addEventListener('submit', (event) => {
  // Mencegah form dari reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;

  // Validasi mini
  if (fullname == '') {
    alert('Silahkan Masukkan Nama Lengkap');
    return;
  }

  // Push data object ke dalam array absensi_data
  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  // reset input field
  event.target.fullname.value = '';

  // Panggil function render to Html
  renderToHtml();
});

// Function untuk render data array ke div root
function renderToHtml() {
  // reset element div root
  root.innerHTML = '';

  // Mapping array to Html element
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span> ${i + 1}. &nbsp ${e.nama_lengkap} </span> 
      <span> ${e.waktu} ${e.tanggal} </span>
    </div>
    `;
  });
}

// Function Delete
function handleDelete(index) {
  // Delete 1 data dari array
  absensi_data.splice(index, 1);

  // render kembali data dalam array ke html
  renderToHtml();
}
