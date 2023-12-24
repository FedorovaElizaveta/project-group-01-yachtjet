document.addEventListener('DOMContentLoaded', function () {

  // Отримуємо всі елементи навігації
  
    var navLinks = document.querySelectorAll('.nav-list-link');

  // Додаємо обробник подій для кожного елемента навігації
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {

        // Відміняємо стандартну дію посилання (перехід за посиланням)

        event.preventDefault();

        // Видаляємо клас "active" у всіх елементів навігації

        navLinks.forEach(function (navLink) {
          navLink.classList.remove('current');
        });

        // Додаємо клас "active" тільки до натисканого елемента

        link.classList.add('current');

        // Отримуємо id посилання та прокручуємо до відповідного елемента на сторінці

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
  