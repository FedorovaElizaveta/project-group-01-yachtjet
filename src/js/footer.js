document.addEventListener('DOMContentLoaded', function () {

  
    var footNavLinks = document.querySelectorAll('.nav-link-footer');

    footNavLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {

        event.preventDefault();


        footNavLinks.forEach(function (footNavLinks) {
          footNavLinks.classList.remove('current');
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
  
