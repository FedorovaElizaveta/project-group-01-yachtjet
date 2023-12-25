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
  
  link1.addEventListener('click', function () {
    closeModal();
    updateButtonVisibility();
});

link2.addEventListener('click', function () {
    closeModal();
    updateButtonVisibility();
});

link3.addEventListener('click', function () {
    closeModal();
    updateButtonVisibility();
});
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


// =================================  NAV BUTTON STYLES ================================================


document.addEventListener('DOMContentLoaded', function () {

 // =================================  GET NAV ELEMENTS ================================================
  
    var modalNavLinks = document.querySelectorAll('.mobile-menu-nav-link');

  // =================================  ADDING NAV EVENT ================================================
  
    modalNavLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {

        event.preventDefault();

// =================================  REMOVING CLASS FROM MODAL ================================================

        modalNavLinks.forEach(function (modalNavLinks) {
          modalNavLinks.classList.remove('current');
        });

// ==================================== ADDING CLASS TO MODAL ===========================================

        link.classList.add('current');

// ==================================== SMOUTH SCROLL ===========================================

        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });
});

  
  // =================================  TOGGLE BUTTONS ================================================

  
function toggleButtons() {
    var openButton = document.getElementById('openModalBtn');
    var closeButton = document.getElementById('closeModalBtn');

    openButton.classList.toggle('hidden-button');
    closeButton.classList.toggle('hidden-button');
}

document.getElementById('openModalBtn').addEventListener('click', function () {
    toggleButtons();
});

document.getElementById('closeModalBtn').addEventListener('click', function () {
    toggleButtons();
});

link1.addEventListener('click', function () {
    closeModal();
    toggleButtons();
});

link2.addEventListener('click', function () {
    closeModal();
    toggleButtons();
});

link3.addEventListener('click', function () {
    closeModal();
    toggleButtons();
});