$(window).on('load', function(){
    setTimeout(function() {
        $('.carouselParent').css({'display':'none'});
        $('.content').fadeIn();
        $('#mainDiv').removeClass('move');
    }, 700);
});


///////////////////////////////interactive back
(function() {
    $(".bg").interactive_bg({
        strength: 25,
        scale: 1.05,
        animationSpeed: "200ms",
        contain: true,
        wrapContent: false
    });
})();

////////////////////// change background size on window resize
(function() {
    $(window).resize(function() {
        $(".bg > .ibg-bg").css({
            width: $(window).outerWidth(),
            height: $(window).outerHeight()
        })
    });
})();

////////////mosaic on the name ///////////////////////////////////////

function randomNumber() {
    return Math.floor(Math.random() * 6000 + 1000);
}

function cssMagic() {
    setTimeout(function() {
        $('.name').addClass('shadowLasure');
    }, 0);
    setTimeout(function() {
        $('.name').removeClass('shadowLasure').addClass('shadowPink');
    }, 40);
    setTimeout(function() {
        $('.name').removeClass('shadowPink').addClass('shadowLasure');
    }, 80);
    setTimeout(function() {
        $('.name').removeClass('shadowLasure').addClass('shadowPink');
    }, 120);
    setTimeout(function() {
        $('.name').removeClass('shadowPink').addClass('shadowLasure1');
    }, 160);
    setTimeout(function() {
        $('.name').removeClass('shadowLasure1').addClass('shadowPink1');
    }, 200);
    setTimeout(function() {
        $('.name').removeClass('shadowPink1');
        start();
    }, 240);
}

start();

function start() {
    var interval = randomNumber();
    setTimeout(cssMagic, interval);
}


(function() {
    var timer;
    $('.name').mouseenter(function() {
        timer = setInterval(mosaic, 150);
    }).mouseleave(function() {
        clearInterval(timer);
    });

    function mosaic() {
        setTimeout(function() {
            $('.name').addClass('shadowLasure');
        }, 0);
        setTimeout(function() {
            $('.name').removeClass('shadowLasure').addClass('shadowPink');
        }, 50);
        setTimeout(function() {
            $('.name').removeClass('shadowPink');
        }, 100);
    }
})();

//////////// earthquake background /////////////////////////////
(function() {
    setTimeout(function() {
        $('.bg').addClass('tremorX');
    }, 1000);
    setTimeout(function() {
        $('.bg').removeClass('tremorX').addClass('tremorY');
    }, 1050);
    setTimeout(function() {
        $('.bg').removeClass('tremorY').addClass('tremorX');
    }, 1100);
    setTimeout(function() {
        $('.bg').removeClass('tremorX').addClass('tremorY');
    }, 1150);
    setTimeout(function() {
        $('.bg').removeClass('tremorY').addClass('tremorX');
    }, 1200);
    setTimeout(function() {
        $('.bg').removeClass('tremorX').addClass('tremorY');
    }, 1250);
    setTimeout(function() {
        $('.bg').removeClass('tremorY').addClass('tremorX');
    }, 1300);
    setTimeout(function() {
        $('.bg').removeClass('tremorX').addClass('tremorY');
    }, 1350);
    setTimeout(function() {
        $('.bg').removeClass('tremorY');
    }, 1400);

    setInterval(function() {
        setTimeout(function() {
            $('.bg').addClass('tremorX');
        }, 1000);
        setTimeout(function() {
            $('.bg').removeClass('tremorX').addClass('tremorY');
        }, 1050);
        setTimeout(function() {
            $('.bg').removeClass('tremorY').addClass('tremorX');
        }, 1100);
        setTimeout(function() {
            $('.bg').removeClass('tremorX').addClass('tremorY');
        }, 1150);
        setTimeout(function() {
            $('.bg').removeClass('tremorY').addClass('tremorX');
        }, 1200);

        setTimeout(function() {
            $('.bg').removeClass('tremorX').addClass('tremorY');
        }, 1250);
        setTimeout(function() {
            $('.bg').removeClass('tremorY').addClass('tremorX');
        }, 1300);
        setTimeout(function() {
            $('.bg').removeClass('tremorX').addClass('tremorY').addClass('tremorY');
        }, 1350);
        setTimeout(function() {
            $('.bg').removeClass('tremorY');
        }, 1400);
    }, 5000);
})();

//////////// ZOOM THE BACKGROUND //////////////////

(function() {
    setTimeout(function() {
        $('.bg').addClass('big');
    }, 400);
    setTimeout(function() {
        $('.bg').removeClass('big');
    }, 700);

    setInterval(function() {
        setTimeout(function() {
            $('.bg').addClass('big');
        }, 400);

        setTimeout(function() {
            $('.site-transition').removeClass('displayOff').addClass('displayOn');
        }, 400);
        setTimeout(function() {
            $('.site-transition').removeClass('displayOn').addClass('displayOff');
        }, 1300);

        setTimeout(function() {
            $('.bg').removeClass('big');
        }, 700);
    }, 20000);
})();


///////////////////// RANDOM LETTERS CHANGER ///////////////////////////
(function() {
    setTimeout(function() {
        var a = baffle('.name');
        a.set({
            characters: '_``KNRD4597',
            speed: 80
        });
        a.reveal(3000);
    }, 700);
    setTimeout(function() {
        $('.name').addClass('visible');
    }, 800);
})();

(function() {
    setTimeout(function() {
        var b = baffle('.title');
        b.set({
            characters: '¯__¯FRNT4597',
            speed: 100
        });
        b.reveal(3000);
    }, 3400);
    setTimeout(function() {
        $('.title').addClass('visible');
    }, 3500);

    setInterval(function() {
        setTimeout(function() {
            $('.title').addClass('visible');
            var b = baffle('.title');
            b.set({
                characters: '¯__¯FRNT4597',
                speed: 100
            });
            b.reveal(3000);
        }, 6500);
    }, 15000);
})();

////////////NOISES ON THE BACKGROUND //////////////
(function() {
    setTimeout(function() {
        $('.site-transition').addClass('displayOn');
    }, 2400);
    setTimeout(function() {
        $('.site-transition').removeClass('displayOn').addClass('displayOff');
    }, 3300);
})();


////////////////////////// MAIN DIVS APPEARING + BUTTONS APPEARING //////////
(function() {
    $('.bubbles').addClass('goOut');

    $('.bubble--1').mouseenter(function() {
        $('.bubble--1').css({
            "border": "1px solid hsla(0, 0%, 100%, .2)"
        });
        $('.bubbleShadow1').addClass('size-out visible');
    }).mouseleave(function() {
        $('.bubbleShadow1').removeClass('size-out');
        $('.bubble--1').css({
            "border": "0"
        });
    });
    $('.bubble--2').mouseenter(function() {
        $('.bubble--2').css({
            "border": "1px solid hsla(0, 0%, 100%, .2)"
        });
        $('.bubbleShadow2').addClass('size-out visible');
    }).mouseleave(function() {
        $('.bubbleShadow2').removeClass('size-out');
        $('.bubble--2').css({
            "border": "0"
        });
    });
    $('.bubble--3').mouseenter(function() {
        $('.bubble--3').css({
            "border": "1px solid hsla(0, 0%, 100%, .2)"
        });
        $('.bubbleShadow3').addClass('size-out visible');
    }).mouseleave(function() {
        $('.bubbleShadow3').removeClass('size-out');
        $('.bubble--3').css({
            "border": "0"
        });
    });
})();

//////////////////// CLICK EVENTS ON BUTTONS
$('.bubble--1').click(function() {
    $('.past').toggleClass('comeBackDivs');
    $('.future').removeClass('comeBackDivs');
    $('.hype').addClass('goAwayDivs');
});
$('.bubble--2').click(function() {
    $('.hype').toggleClass('goAwayDivs');
    $('.past').removeClass('comeBackDivs');
    $('.future').removeClass('comeBackDivs');
});
$('.bubble--3').click(function() {
    $('.future').toggleClass('comeBackDivs');
    $('.past').removeClass('comeBackDivs');
    $('.hype').addClass('goAwayDivs');
});

/////////////////////////// AUTO TYPING /////////////
(function(){
$("#mainDiv").typeIt({
     speed: 50,
     autoStart: true
})

.tiPause(1000)
.tiSettings({speed: 50})
.tiType('Connection estabilished.')
.tiPause(1000)
.tiBreak()
.tiType('...')
.tiPause(1000)
.tiBreak()
.tiType('Receiving an unidentified SOS signal.')
.tiPause(1000)
.tiBreak()
.tiSettings({speed: 10})
.tiType('Mothership: ')
.tiPause(1000)
.tiSettings({speed: 50})
.tiType('Order 937.')
.tiPause(1000)
.tiBreak()
.tiSettings({speed: 10})
.tiType('Mothership: ')
.tiPause(1000)
.tiSettings({speed: 50})
.tiType('Bring back life form.')
.tiPause(1000)
.tiBreak()
.tiSettings({speed: 10})
.tiType('Mothership: ')
.tiPause(1000)
.tiSettings({speed: 50})
.tiType('Priority One.')
.tiPause(1000)
.tiBreak()
.tiSettings({speed: 10})
.tiType('Mothership: ')
.tiPause(1000)
.tiSettings({speed: 50})
.tiType('All other priorities rescinded.')
.tiPause(1000)
.tiBreak()
.tiSettings({speed: 10})
.tiType("Mothership: ")
.tiPause(1000)
.tiSettings({speed: 50})
.tiType("I can't lie to you about your chances, but… ")
.tiPause(1000)
.tiType("you have my sympathies.")
.tiPause(1000)
.tiBreak()
.tiType('...')
.tiPause(2000)
.tiBreak()
.tiType('Connection lost.')
})();
