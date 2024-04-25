document.addEventListener("DOMContentLoaded", function() {
  const readMoreBtns = document.querySelectorAll('.read-more');
  
  readMoreBtns.forEach(function(readMoreBtn) {
    readMoreBtn.addEventListener('click', function() {
      const extraInfo = this.parentElement.querySelector('.extra-info');
      extraInfo.classList.toggle('show');
      if (extraInfo.classList.contains('show')) {
        readMoreBtn.textContent = 'Read less';
      } else {
        readMoreBtn.textContent = 'Read more';
      }
    });
  });
});
