var smallmenu = document.getElementById ('smallmenu');
var altura = 140;
window.addEventListener ('scroll', function() {
'use strict';
if (window.pageYOffset > altura) {
  smallmenu.classList.add('scrolled');
} else {
  smallmenu.classList.remove('scrolled');
}
});
