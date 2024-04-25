/*--- for announcement---*/
function closeAnnouncement() {
  var element = document.querySelector('.announcement');
  element.style.display = 'none';
}
/* BACK TO TOP BUTTON*/ 
window.addEventListener('scroll', function() {
    var backToTopAnchor = document.getElementById('back-to-top');
    if (window.pageYOffset > 100) { // Adjust the scroll position as needed
        backToTopAnchor.style.display = 'block';
    } else {
        backToTopAnchor.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
