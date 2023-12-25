document.addEventListener('DOMContentLoaded', function () {

  
    var navLinks = document.querySelectorAll('.nav-list-link');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {

        event.preventDefault();


        navLinks.forEach(function (navLink) {
          navLink.classList.remove('current');
        });


        link.classList.add('current');


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
  
