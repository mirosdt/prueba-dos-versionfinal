const modal = document.getElementById('modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const toggleButton = document.getElementById("boton-tema");

openModalButton.onclick = () => modal.style.display = 'flex';
closeModalButton.onclick = () => modal.style.display = 'none';

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});