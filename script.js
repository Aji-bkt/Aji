// Load saat buka
window.onload = function () {
  const data = localStorage.getItem("pesan");
  if (data) {
    document.getElementById("listPesan").innerHTML = data;
  }
};

// Simpan tiap tambah pesan
function tambahPesan() {
  const input = document.getElementById("inputPesan");
  const list = document.getElementById("listPesan");

  if (input.value.trim() === "") return;

  const div = document.createElement("div");
  div.className = "pesan";
  div.innerHTML = `
    ${input.value}
    <span class="hapus" onclick="hapusPesan(this)">X</span>
  `;

  list.appendChild(div);

  // simpan ke localStorage
  localStorage.setItem("pesan", list.innerHTML);

  input.value = "";
}

function hapusPesan(el) {
  el.parentElement.remove();
  localStorage.setItem("pesan", document.getElementById("listPesan").innerHTML);
}