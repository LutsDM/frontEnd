document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Отключить переход по ссылке
      const dropdownContent = button.nextElementSibling;
      dropdownContent.classList.toggle('show');
    });
  });

  // Закрытие всех dropdown при клике вне
  window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn')) {
      document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('show');
      });
    }
  });