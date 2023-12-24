const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const link1 = document.getElementById('nav-link-1');
const link2 = document.getElementById('nav-link-2');
const link3 = document.getElementById('nav-link-3');


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
  link1.addEventListener('click', closeModal);
  link2.addEventListener('click', closeModal);
  link3.addEventListener('click', closeModal);