// home
var butnMenu = document.getElementById('menu-btn-js');
var modalMenu = document.getElementById('modal');
var closeMenu = document.getElementById('close-btn-js');
butnMenu.onclick = function() {
     modalMenu.style.display= 'block';
     butnMenu.style.display = 'none';
     closeMenu.style.display = 'block';
}

closeMenu.onclick = function(){
    modalMenu.style.display = 'none';
    butnMenu.style.display = 'block';
    closeMenu.style.display = 'none';
}
