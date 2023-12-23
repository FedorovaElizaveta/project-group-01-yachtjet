const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

// Event listener to open the modal
openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Event listener to close the modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Event listener to close the modal if clicked outside the modal content
// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });