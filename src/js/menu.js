// ==================================== ALL VARIABLES =================================================

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('myModal');
const link1 = document.getElementById('nav-link-1');
const link2 = document.getElementById('nav-link-2');
const link3 = document.getElementById('nav-link-3');
const myBody = document.getElementById('our-body');

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

// ==================================== ADDING CLASS TO BODY ===========================================

function addClassToBody() {
  myBody.classList.add('modal-is-open');
}

openModalBtn.addEventListener('click', addClassToBody);

// =================================  REMOVING CLASS FROM BODY ================================================

function removeClassFromBody() {
  myBody.classList.remove('modal-is-open');
}

closeModalBtn.addEventListener('click', removeClassFromBody);
link1.addEventListener('click', removeClassFromBody);
link2.addEventListener('click', removeClassFromBody);
link3.addEventListener('click', removeClassFromBody);



