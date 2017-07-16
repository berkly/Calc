$(document).ready(function () {

    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcButton = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__c');
    var calcEqual = calc.find('.calculator__key--equal');
    var calcPersent = calc.find('.calculator__persent');
    var calcSpace = calc.find('.calculator__ce');

    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    });

    calcSpace.on('click', function () { 
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

    calcPersent.on('click', function() {
        calcDisplay.val(calcDisplay.val() / 100);
    });

});