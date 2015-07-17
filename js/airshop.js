function clearScreen() {
    $('body').append('<div id="clsOverlay" class="overlay"><a onclick="$(\'#clsOverlay\').remove();" class="btn" href="#">+</a></div>');
}

function showMenu() {
    var markup = '<div id="menuOverlay" class="overlay">\
        <header> \
        <div class="logo"></div> \
        <div class="title green">Menu</div> \
        </header> \
        <div class="text-center orange">Unloaded</div> \
        <div class="container pad10">\
         <a class="menu-item text-center"><span class="menu-icon tools-icon"></span><div class="menu-icon-text">Tools</div></a>\
         <a class="menu-item text-center"><span class="menu-icon suspend-icon"></span><div class="menu-icon-text">Suspend</div></a>\
         <a class="menu-item text-center"><span class="menu-icon calc-icon"></span><div class="menu-icon-text">Calculator</div></a>\
         <a class="menu-item text-center"><span class="menu-icon about-icon"></span><div class="menu-icon-text">About</div></a>\
         <a class="menu-item text-center"><span class="menu-icon nuke-icon"></span><div class="menu-icon-text">Clear Down</div></a>\
        </div>\
        <footer> \
        <a class="btn pink w30" href="javascript:hideMenu();">Back</a> \
        <a class="btn green w40" href="javascript:void();"></a> \
        <a class="btn pink w30" href="javascript:clearScreen();">Clear Screen</a> \
    </footer> \
    </div>';
    $('body').append(markup);
}

function hideMenu() {
    $('#menuOverlay').remove();
}

function hideOverlay() {
    $('.overlay:visible').hide();
}