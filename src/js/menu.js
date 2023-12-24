// ==================================== ALL VARIABLES =================================================

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const link1 = document.getElementById('nav-link-1');
const link2 = document.getElementById('nav-link-2');
const link3 = document.getElementById('nav-link-3');

// ==================================== OPENING MODAL FUNCTION ========================================
function openModal() {
    modal.classList.add('is-open');
  }
  
// ================================= CLOSING MODAL FUNCTION ============================================
  function closeModal() {
    modal.classList.remove('is-open');
  }

  // ============================== ATTACHING CLICK EVENTS TO BUTTONS =================================
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  // ATTACHING CLICK EVENTS TO LINKS, SO THAT THE MODAL CLOSES WHEN WE WANT TO NAVIAGTE THROUGHT THE PAGE
  
  link1.addEventListener('click', closeModal);
  link2.addEventListener('click', closeModal);
  link3.addEventListener('click', closeModal);