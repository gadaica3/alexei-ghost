// Menu mobile
var ButtonShowMenu = document.getElementById('js-ShowMenu'),
    ButtonHiddenMenu = document.getElementById('js-HiddenMenu'),
    menu = document.getElementById('js-Menu'),
    ButtonShowSearch = document.getElementById('js-ShowSearch'),
    ButtonHiddenSearch = document.getElementById('js-HiddenSearch'),
    search = document.getElementById('js-SearchMenu')

var showMenu = function(){
  menu.classList.add('menu-active');
  ButtonShowMenu.style.display = 'none';
  ButtonHiddenMenu.style.display = 'block';
}

var hiddenMenu = function(){
  console.log('click')
  menu.classList.remove('menu-active');
  ButtonShowMenu.style.display = 'block';
  ButtonHiddenMenu.style.display = 'none';
}

ButtonShowMenu.addEventListener('click', showMenu);

ButtonHiddenMenu.addEventListener('click', hiddenMenu);

// SearchFix

var showSearchMenu = function(){
  search.classList.add('showSearch','zoomIn');
}

var hiddenSearchMenu = function(){
  search.classList.remove('showSearch');
}

ButtonShowSearch.addEventListener('click',showSearchMenu);

ButtonHiddenSearch.addEventListener('click', hiddenSearchMenu);

$("#search-field").ghostHunter({
    results         : "#Results-GhostSearch",
    onKeyUp         : true,
    result_template : '<a href="{{link}}" class="SearchFix-resultLink"><span><i class="fa fa-caret-right" aria-hidden="true"></i></span> {{title}}</a>'
});
