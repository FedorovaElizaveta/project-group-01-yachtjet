const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');

function openModal() {
    modal.classList.add('is-open');
  }
  
  // Function to close the modal
  function closeModal() {
    modal.classList.remove('is-open');
  }

  // Attach click event listeners to the buttons
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);