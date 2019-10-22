$(document).ready(function () {

    let getSet = $('#getset');
    console.log(getSet);


    let jsObject = {
        name: 'Zorica',
        lastName: 'Mijatovic',

        sum: function (a, b) {
            return a + b;
        },
        getName: function () {
            return this.name;
        }
    };

    console.log(jsObject.name);
    console.log(jsObject.sum(3, 5));

    console.log(jsObject.getName());

    let tag = $('div').eq(0);
    console.log(tag);

    let someHtml = $('#getset').html();
    console.log(someHtml);

    let someText = $('#getset h2').text();
    console.log(someText);

    let sameValue = $('#getset .form-control').val();
    console.log(sameValue);

    let sameAttr = $('#getset a.btn').attr('href');
    console.log(sameAttr);

    let someColor = $('#getset').css('background-color');
    console.log(someColor);

    $('#getset h2').html('<span>This is added html</span>');

    $('#getset .paragraph').text('This is added text');

    $('#getset .form-control').val('Zorica');

    $('#getset a').attr('href', 'https://cubes.edu.rs');

    $('#getset a').css({
        backgroundColor: 'red',
        color: 'black',
        fontSize: '2rem'
    });




    //events

    $('.event-action button.btn-secondary:first-of-type').click(function () {
        $('.events p').css('color', 'red');
    });

    $('.event-action button.btn-secondary:nth-of-type(2)').click(function () {
        $('.events p.lead').css('color', 'blue');
    });
    $('.event-action button.btn-secondary:last-of-type').click(function () {
        $('.events h2').css('color', 'purple');
    });

    $('.change-me').click(function () {
        $(this).css('color', 'red');
    });


    $('select.form-control').change(function () {
        let city = $(this).val();
        $('.city span').text(city);
    });

    $('.propagation').click(function () {
        alert('Message');
    });

    $('.propagation h2').click(function () {
        event.stopPropagation();
    });

    $('.propagation s').click(function () {
        e.stopPropagation();
        e.preventDefault(); // sprecava izvrsavanje redirecta preko href-a
    });

    // $('.action-group button').click(function(){
    //     $(this).css('color', 'yellow');
    // });

    $('.action-group').on('click', 'button', function () {
        $(this).css('color', 'yellow');
    });


    //DOM manipulation

    $('.insert-elements').click(function () {
        // $('.section-header').before('<hr>'); // pre div-a
        // $('.section-header').after('<hr>'); // posle div-a
        // $('.section-header').prepend('<h2>Teacher</h2>'); // unutar div-a na pocetku

        // $('.section-header').append('<i>Cubes</i>');  // unutar div-a na kraju

        $('.section-header').before('<hr>').after('<hr>').prepend('<h2>Teacher</h2>').append('<i>Cubes</i>');
    });

    $('.remove-text').click(function () {
        $('.text').remove();  // brise ceo element i njegov sadrzaj
    });

    $('.empty-content').click(function () {
        $('.remove-content h2').empty(); // brise sadrzaj taga
    });

    let student = [
        'Marko Matkovic',
        'Janko Jankovic',
        'Petar Petrovic'
    ];

    for (let x of student) {
        $('.student-list').append('<li>' + x + '</li>');
    }

    //SHOW HIDE HTML ELEMENTS

    // $('.hide-div-1').click(function(){
    //     $('.example').css('display', 'none');
    // });

    // $('.show-div-1').click(function(){
    //     $('.example').css('display', 'block');
    // });

    $('.hide-div-1').click(function () {
        // $('.example').hide(); // slow- 600ms, fast - 200ms, default is 400ms
        $('.example1').hide(3000, function () {
            alert('finish');
        });
    });

    $('.show-div-1').click(function () {
        $('.example1').show(2000);

    });

    $('.toggle-div-1').click(function () {
        $('.example1').toggle(1000);

    });

    $('.hide-div-2').click(function () {
        $('.example2').slideUp(2000);

    });

    $('.show-div-2').click(function () {
        $('.example2').slideDown(2000);

    });

    $('.toggle-div-2').click(function () {
        $('.example2').slideToggle(1000);

    });

    $('.hide-div-3').click(function () {
        $('.example3').fadeOut(2000);

    });

    $('.show-div-3').click(function () {
        $('.example3').fadeIn(2000);

    });

    $('.toggle-div-3').click(function () {
        $('.example3').fadeToggle(1000);

    });

    //CLASS MANIPULATION

    //hasClass(className) provera da li element ima klasu, reyultat je boolien
    //addClass(className) dodaje klasu elementu
    //removeClass(className) brise klasu elementa
    //toggleClass(clasName) proverava da li element ima klasu, ako ima brise je ako nema dodaje je

    $('.action .btn-dark').click(function () {
        $('.card').addClass('night-mode p-4');
    });

    $('.action .btn-success').click(function () {
        $('.card').removeClass('night-mode p-4');
    });

    $('.action .btn-warning').click(function () {
        $('.card').toggleClass('night-mode p-4');
    });

    $('.action .far').click(function () {
        $(this).toggleClass('fa-times-circle fa-check-circle');
    });

    //  if($('.card').hasClass('night-mode')){
    //      alert('NIGHT');
    //  }else{
    //     alert('DAY');
    //  }



    //TRAVERSING

    // ANCESTORS
    // parent()
    // parents(selector)
    // parentsUp(selector)
    // closest(slector)

    //$('.ancestors span').parent().css('border-color', 'red'); samo prvom roditelju

    //$('.ancestors span').parents().css('border-color', 'red'); // svim roditeljima

    //$('.ancestors span').parents('ul').css('border-color', 'red'); 
    //$('.ancestors span').parentsUntil('div').css('border-color', 'red'); 
    //$('.ancestors span').closest('div').css('border-color', 'red'); 

    $('.ancestors span').click(function () {
        $(this).parent().css('border-color', 'red');
    });

    //DESCENDENT
    //children(Oseelector)
    //find(selector)

    //$('.descendants').children().css('border-color', 'red');
    //$('.descendants').children('p').css('border-color', 'red');
    //$('.descendants').find('span').css('border-color', 'red');

    //SIBLINGS

    //siblings(selector)
    //next(selector)
    //nextAll(selector)
    //nextUntil(selector) svi sledeci do odredjenog 
    //prev(selector)
    //prevAll(selector)
    //prevUntil(selector)

    $('.descendants h2').next('p').css('border-color', 'red');

    //DIMENSIONS
    //GET                                          SET
    //width();                                   width(value);
    //height();                                  height(value);
    //innerWidth();                              innerWidth(value);
    //outerWidth();                              outerWidth(value, true);
    //outerHeight();                             outerHeight(value);
    //outerHeight(true) sa marginom 


    // position: 
    //GET                                           SET 
    // .offset()                                 .offset({top:value, left:value})
    // .offset().top
    // .offset().left
    //  .scrollLeft();                           .scrollLeft(value);
    // .scrollTop();                             .scrollTop(value);

    $(window).scroll(function () {
        console.log($(this).scrollTop());
    });


    function displayAside() {

        let windowWidth = $(window).width();

        if (windowWidth < 768) {
            $('.aside').hide();
        } else {
            $('.aside').show();
        }
    }

    displayAside();

    $(window).resize(function () {
        displayAside();
    });

});
