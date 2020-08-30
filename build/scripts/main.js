"use strict";

$( document ).ready( function() {

    // $( '#button' ).on( 'click', function() {

    //     alert ( 'Hello, I am jQuery!' )

    // });

    // $( 'ul .green' ).on( 'click', function() {

    //     alert ( 'Hello, I am jQuery!' )

    // });

    // $('h1').addClass('selected');
    // $('ul .green').addClass('selected');
    // $('h1 ~ p').addClass('selected');
    // $('h1 + p').addClass('selected');
    // $('p:first').addClass('selected');
    // $('p:eq(2)').addClass('selected');

    // $('.inner').addClass('selected');
    // $('.inner').parent().addClass('selected');
    // $('.block').children().addClass('selected');
    // $('li#second-list-item').closest('ul').addClass('selected');
    // $('#second-list-item').closest('li').addClass('selected');
    // $('.green').closest('ul').addClass('selected');
    // $('#second-list-item').parents().addClass('selected');
    // $('.block').find('p.inner').addClass('selected');

    // $('#button-1').on('click', function() {
    //     $('#topHeader').toggleClass('green');
    // });

    // $('#button-1').on('dblclick', function() {
    //     $('#topHeader').toggleClass('brown');
    // });

    // $('#testArea').on('mouseenter', function() {
    //     $('#testArea').toggleClass('orangeBg');
    // });

    // $('#testArea').on('mouseleave', function() {
    //     $('#testArea').toggleClass('orangeBg');
    // });

    // $('#inputName').on('focus', function() {
    //     $('#inputName').addClass('focus');
    // });

    // $('#inputName').on('blur', function() {
    //     $('#inputName').removeClass('focus');
    // });

    // $('#inputName').on('change', function(){
    //     $('#textHolder').text( $(this).val() )
    // });

    // $('#inputName').on('keyup', function(){
    //     $('#textHolder').text( $(this).val() )
    // });

    // $('#inputName').on('keyup', event => {
    //     if ( event.which == 27 ) {
    //         $('#textHolder').text('');
    //     };
    // });


    // $('#addGreen').on('click' , function() {
    //     $('#testBox').addClass('greenBg');
    // });

    // $('#removeGreen').on('click' , function () {
    //    $('#testBox').removeClass('greenBg');
    // });

    // $('#toggleGreen').on('click' , function () {
    //     $('#testBox').toggleClass('greenBg');
    // });

    // $('#customCSS').on('click' , function() {
    //     $('#testBox').css('border', '5px solid #00796B');
    // });


    // $('#customWidth').on('click' , function () {
    //     $('#testBox').animate({ 'width': '200px'}, 4000);
    // });

    // $('#customOpacity').on('click' , function () {
    //     $('#testBox').animate({'opacity': '0'}, 3000);
    // });

    // $('#hide').on('click', function (){
    //     $('#testBox').hide(2000);
    // });

    // $('#show').on('click' , function () {
    //    $('#testBox').show(2000); 
    // });

    // $('#hideAndShow').on('click', function () {
    //     $('#testBox').hide(2000).delay(3000).show(2000).delay(3000).hide(2000).show(500);
    // });

    // $('#fadeOut').on('click', function () {
    //     $('#testBox').fadeOut(2000);        
    // });

    // $('#fadeIn').on('click', function () {
    //     $('#testBox').fadeIn(2000);        
    // });

    // $('#fadeToggle').on('click', function () {
    //     $('#testBox').fadeToggle(2000);
    // });

    // $('#slideUp').on('click', function () {
    //     $('#testBox').slideUp(1000);
    // });

    // $('#slideDown').on('click', function () {
    //     $('#testBox').slideDown(1000);
    // });

    // $('#slideToggle').on('click', function () {
    //     $('#testBox').slideToggle(1000);
    // });


    // $('#formSum').on('submit', event => {
    //     event.preventDefault();
        
    //     var numberOne,
    //         numberTwo,
    //         summ;
        
    //     numberOne = $('#numberOne').val();
    //     numberOne = parseInt(numberOne);
        
    //     numberTwo = $('#numberTwo').val();
    //     numberTwo = parseInt(numberTwo);

    //     if( isNaN(numberOne)) {
    //         numberOne = 0;
    //     };

    //     if ( isNaN(numberTwo)) {
    //         numberTwo = 0;
    //     };

    //     summ = numberOne + numberTwo;

    //     $('#sumResult').text(summ);
    // });


    // var srcValue = $('#imgHolder img').attr('src');
    // // alert(srcValue);
    // var $carImg = $('#imgHolder img');
    // $('#imgHolder img').on('click', function() {
    //     $(this).attr('src', 'images/blue.png');
    // });

    // $('#colorsSelector .colorBlue').on('click', function() {
    //     $('#imgHolder img').attr('src', 'images/blue.png');
    // });

    // $('#colorsSelector .colorWhite').on('click', function() {
    //     $('#imgHolder img').attr('src', 'images/white.png');
    // });

    // $('#colorsSelector .colorRed').on('click', function() {
    //     $('#imgHolder img').attr('src', 'images/red.png');
    // });

    // $('#colorsSelector .colorBlack').on('click', function() {
    //     $('#imgHolder img').attr('src', 'images/black.png');
    // });

    // $('#colorsSelector .colorItem').on('click', function () {
    //     var imgPath = $(this).attr('data-image-path');
    //     console.log (imgPath);
    //     $('#imgHolder img').attr('src', imgPath);
    
    // $('#colorsSelector .colorItem').on('click', function () {
    //     var imgPath = $(this).attr('data-image-path');
    //     $carImg.fadeOut(200, function () {
    //         $carImg.attr('src', imgPath).fadeIn(200);
    //     });
    // });


    // $('#testBox').text('new text');
    
    // $('#testBox').html('<h4>new text</h4>');

    // var $newContent = $(
    //     '<h4>Новый заголовок</h4>' +
    //     '<p>Абзац с текстом</p>' +
    //     '<ul>' +
    //     '<li>Пункт 1</li>' +
    //     '<li>Пункт 2</li>' +
    //     '<li>Пункт 3</li>' +
    //     '</ul>'
    // );
    // $newContent.hide();
    // $('#testBox').html($newContent);
    // $('#testBox').on('click', function() {
    //     $newContent.fadeIn();
    // });

    // $('#testBox').prepend('<p>.prepend() - Добавить текст внутрь в начало элемента</p>');
    // $('#testBox').append('<p>.append() - Добавить текст внутрь в конец элемента</p>');
    // $('#testBox').before('<p>.before() - Добавить текст перед элементом</p>');
    // $('#testBox').after('<p>.after() - Добавить текст после элемента</p>');

    // $('#textNoWrap').wrap('<div class="pinkBorder"></div>');
    // $('#textInWrap').unwrap();

    // $('#toDeleteEmpty').empty();
    // $('#toDeleteRemove').remove();

    // $('#testBox').on('click', function() {
    //     var $cloneElement = $(this).clone();
    //     $cloneElement.addClass('greenBorder');
    //     $cloneElement.text('another text');
    //     $('#testBox').after($cloneElement);
    // });


    $('#colorsSelector .colorItem').on('click', function () {
        var $carImg = $('#imgHolder img');
        var imgPath = $(this).attr('data-image-path');
        $carImg.fadeOut(200, function () {
            $carImg.attr('src', imgPath).fadeIn(200);
        });
    });

    var modelSpecs,
        modelPrice,
        modelPriceUSD,
        modelSpecsHolder,
        modelPriceHolder,
        modelPriceUSDHolder;

    modelSpecsHolder = $('#modelSpecs');
    modelPriceHolder = $('#modelPrice');
    modelPriceUSDHolder = $('#modelPriceUSD');
    modelSpecs = '';
    modelPrice = 0;
    modelPriceUSD = 0;

    function calculatePrice() {
        modelPrice = parseInt( $('input[name=engine]:checked', '#autoForm').val() );
        modelPrice += parseInt( $('input[name=transmisson]:checked', '#autoForm').val());
        modelPrice += parseInt( $('input[name=package]:checked', '#autoForm').val());
        modelPriceHolder.text( modelPrice + ' рублей');
    };

    function compileSpecs() {
        modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
        modelSpecs += ', ' + $('input[name=transmisson]:checked + label', '#autoForm').text();
        modelSpecs += ', ' + $('input[name=package]:checked + label', '#autoForm').text() + '.';
        modelSpecsHolder.text( modelSpecs);
    };

    $('#autoForm input').on('change', function () {
        calculatePrice();
        compileSpecs();
        calculateUSD();
    });
    
    calculatePrice();
    compileSpecs();
    // calculateUSD();

    var currencyUrl = "https://www.cbr-xml-daily.ru/daily_json.js";
    var rurUsdRate = 0;
    $.getJSON(currencyUrl, function (data) {
        console.log(data.Valute.USD.Value);
        rurUsdRate = data.Valute.USD.Value;
        calculateUSD ();
    });

    function calculateUSD() {
        modelPriceUSD = modelPrice / rurUsdRate;
        modelPriceUSDHolder.text( '$ ' + modelPriceUSD.toFixed(0));
    }
    
    // function addSpace(nStr) {
    //     nStr += '';
    //     x = nStr.split('.');
    //     x1 = x[0];
    //     x2 = x.length > 1 ? '.' + x[1] : '';
    //     var rgx = /(\d+)(\d{3})/;
    //     while (rgx.test(x1)) {
    //         x1 = x1.replace(rgx, '$1' + ' ' + '$2');
    //     }
    //     return x1 + x2;
    // }

});