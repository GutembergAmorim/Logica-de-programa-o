const container1 = document.getElementById('container1')
const container2 = document.getElementById('container2')

function changeBgBlue(){
    container1.classList.toggle('bgBlue')
    // container2.classList.toggle('bgBlue')
}

function changeBgBlack(){
    // container1.classList.toggle('bgBlack')
    container2.classList.toggle('bgBlack')
}

function openModal() {
    // modal.style.display = 'flex';
    modal.classList.remove('hidden')
    modal.classList.add('show')
}
  
function closeModal() {
    // modal.style.display = 'none';
    modal.classList.remove('show')
    modal.classList.add('hidden')
}

modal.addEventListener