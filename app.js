function init() {
    if (localStorage.getItem('theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    removeNavActive();
    $('#nav1').addClass('active');
    setTimeout(addAbout, 600);
    setTimeout(function(){$('#logo').addClass('active');}, 1050);
}


function addAbout() {
    setTimeout(function(){$('#nav1').addClass('visible');}, 0);
    setTimeout(function(){$('#nav2').addClass('visible');}, 50);
    setTimeout(function(){$('#nav3').addClass('visible');}, 100);
    setTimeout(function(){$('#name').addClass('visible');}, 200);
    setTimeout(function(){$('#handle').addClass('visible');}, 250);
    setTimeout(function(){$('#row1').addClass('visible');}, 350);
    setTimeout(function(){$('#row2').addClass('visible');}, 375);
    setTimeout(function(){$('#row3').addClass('visible');}, 400);
    setTimeout(function(){$('#row4').addClass('visible');}, 425);
}

function removeAbout() {
    setTimeout(function(){$('#name').removeClass('visible');}, 325);
    setTimeout(function(){$('#handle').removeClass('visible');}, 300);
    setTimeout(function(){$('#row1').removeClass('visible');}, 275);
    setTimeout(function(){$('#row2').removeClass('visible');}, 250);
    setTimeout(function(){$('#row3').removeClass('visible');}, 150);
    setTimeout(function(){$('#row4').removeClass('visible');}, 100);
}

function about() {
    removeNavActive();
    $('#nav1').addClass('active');
   addAbout();
}

function code() {
    removeNavActive()
    $('#nav2').addClass('active');
    removeAbout();
    setTimeout(function(){$('#nav1').removeClass('visible');}, 375);
    setTimeout(function(){$('#nav2').removeClass('visible');}, 400);
    setTimeout(function(){$('#nav3').removeClass('visible');}, 425);
    setTimeout(function(){location.href = 'https://www.github.com/echoingcat';}, 500);
}


function design() {
    removeNavActive()
    $('#nav3').addClass('active');
    removeAbout();
    setTimeout(function(){$('#nav1').removeClass('visible');}, 375);
    setTimeout(function(){$('#nav2').removeClass('visible');}, 400);
    setTimeout(function(){$('#nav3').removeClass('visible');}, 425);
    setTimeout(function(){location.href = 'https://www.behance.net/echoingcat';}, 500);
}

function go() {
    removeAbout();
    setTimeout(function(){$('#nav1').removeClass('visible');}, 375);
    setTimeout(function(){$('#nav2').removeClass('visible');}, 400);
    setTimeout(function(){$('#nav3').removeClass('visible');}, 425);
    setTimeout(function(){location.href = 'https://go.dev';}, 500);
}

function removeNavActive() {
    $('#nav1').removeClass('active');
    $('#nav2').removeClass('active');
    $('#nav3').removeClass('active');
}

function switchTheme() {
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

function switchThemeHelper() {
    removeAbout();
    setTimeout(function(){$('#nav1').removeClass('visible');}, 375);
    setTimeout(function(){$('#nav2').removeClass('visible');}, 400);
    setTimeout(function(){$('#nav3').removeClass('visible');}, 425);
    setTimeout(switchTheme, 600); 
    setTimeout(addAbout, 850);
}
