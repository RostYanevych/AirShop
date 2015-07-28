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
         <a class="menu-item text-center" onclick="YTsystem.suspend();"><span class="menu-icon suspend-icon"></span><div class="menu-icon-text">Suspend</div></a>\
         <a class="menu-item text-center"><span class="menu-icon calc-icon"></span><div class="menu-icon-text">Calculator</div></a>\
         <a class="menu-item text-center"><span class="menu-icon about-icon"></span><div class="menu-icon-text">About</div></a>\
         <a class="menu-item text-center"><span class="menu-icon nuke-icon"></span><div class="menu-icon-text">Clear Down</div></a>\
         <a href="buttons_test.html" class="menu-item text-center"><span class="menu-icon nuke-icon"></span><div class="menu-icon-text">Buttons test</div></a>\
        </div>\
        <footer> \
        <button class="btn pink w30" onclick="hideMenu();">Back</button> \
        <button class="btn green w40"></button> \
        <button class="btn pink w30" onclick="clearScreen();">Clear Screen</button> \
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

//$(document).on('tap click', 'button[href]', function(e) {
$(document).on('click', 'button[href]', function(e) {
    //e.stopPropagation();
    console.log('click on button with href', e);
    location.href = $(e.currentTarget).attr('href');
}).on('mousedown', '.btn', function(e) {
    //console.log('touchstart mousedown', e.currentTarget);
    $(e.currentTarget).addClass('pressed');
}).on('mouseup', '.btn', function (e) {
    //console.log('touchend mouseup', e.currentTarget);
    $(e.currentTarget).removeClass('pressed');
});

//document.body.addEventListener('touchstart', function() {}, false);
