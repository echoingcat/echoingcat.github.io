function init() {
    if (localStorage.getItem('data-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    document.documentElement.setAttribute('language', 'english');
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

function removeNavActive() {
    $('#nav1').removeClass('active');
    $('#nav2').removeClass('active');
    $('#nav3').removeClass('active');
}

function switchTheme() {
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
}

function switchThemeHelper() {
    removeAbout();
    setTimeout(function(){$('#nav1').removeClass('visible');}, 375);
    setTimeout(function(){$('#nav2').removeClass('visible');}, 400);
    setTimeout(function(){$('#nav3').removeClass('visible');}, 425);
    setTimeout(function(){$('.theme').removeClass('active');}, 450);
    setTimeout(function(){$('.language').removeClass('active');}, 475);
    setTimeout(switchTheme, 600); 
    if (localStorage.getItem('data-theme') == 'dark') {
        setTimeout(function(){$('.theme').text('Light');}, 650);
    } else {
        setTimeout(function(){$('.theme').text('Dark');}, 650);
    }
    setTimeout(addAbout, 850);
}

function catalan() {
    $('#nav1').text("Sobre");
    $('#nav2').text("Codi");
    $('#nav3').text("Disseny");
    $('#row1').text("Informàtica a TU Wien.");
    $('#row2').text("Experiència amb Java, JS, HTML, CSS.");
    $('#row3').text("Passió pel disseny gràfic.");
    $('#row4').text("Actualment aprenent Go.");
    localStorage.setItem('language', 'catalan')
}

function english() {
    $('#nav1').text("About");
    $('#nav2').text("Code");
    $('#nav3').text("Design");
    $('#row1').text("Computer Science at TU Wien.");
    $('#row2').text("Experience with Java, JS, HTML, CSS.");
    $('#row3').text("Passion for Graphic Design.");
    $('#row4').text("Currently learning Go.");
    localStorage.setItem('language', 'english')
}

function switchLanguage() {
    removeAbout();
    setTimeout(function(){$('#nav1').removeClass('visible');}, 375);
    setTimeout(function(){$('#nav2').removeClass('visible');}, 400);
    setTimeout(function(){$('#nav3').removeClass('visible');}, 425);
    setTimeout(function(){$('.theme').removeClass('active');}, 450);
    setTimeout(function(){$('.language').removeClass('active');}, 475);
    if (localStorage.getItem('language') == 'catalan') {
        setTimeout(english, 700);
        setTimeout(function(){$('.language').text('Catalan');}, 650);
    } else {
        setTimeout(catalan, 700); 
        setTimeout(function(){$('.language').text('English');}, 650);
    }
    setTimeout(addAbout, 850);
}

function popup() {
    setTimeout(function(){$('.theme').toggleClass('active');}, 50);
    setTimeout(function(){$('.language').toggleClass('active');}, 100);
}

