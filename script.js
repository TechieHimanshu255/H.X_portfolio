function openModal(title, text) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
  document.getElementById("modal").style.display = "grid";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
