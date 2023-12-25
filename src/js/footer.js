var targetElement = document.getElementById(link.getAttribute('href').substring(1));
    if (targetElement) {
        targetElement.scrollIntoView({
        behavior: 'smooth',
    });
}
        