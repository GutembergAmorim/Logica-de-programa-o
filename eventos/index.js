const btnBlue = document.getElementById("btnBlue");
const btnBlack = document.getElementById("btnBlack");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const btnOpenModal = document.getElementById("openModal");
const btnCloseModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

function changeBgColorToBlue() {
  container1.classList.toggle("bgBlue");
}

function changeBgColorToBlack() {
  container2.classList.toggle("bgBlack");
}

function openModal() {
  // modal.style.display = 'flex';
  modal.classList.remove("hidden");
  modal.classList.add("show");
}

function closeModal() {
  // modal.style.display = 'none';
  modal.classList.remove("show");
  modal.classList.add("hidden");
}

modal.addEventListener("click", closeModal);
btnBlue.addEventListener("click", changeBgColorToBlue);
btnBlack.addEventListener("click", changeBgColorToBlack);
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
