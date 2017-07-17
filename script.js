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


    var key_literal = function(which) {
      calcDisplay.val(calcDisplay.val() + String.fromCharCode(which))
    }

    var oper_keys = {
      'C' : function() { calcDisplay.val(''); },
      'CE': function() { calcDisplay.val(calcDisplay.val().slice(0,-1)); },
      '='  : function() {
    try{
      calcDisplay.val(eval(calcDisplay.val() || 0))
    } catch (e) {
      oper_keys['C']();
    }
  }
};

    var key_ops = {
  '13'  : '=',   // Enter
  '8'   : 'CE',           // BS
  '27'  : 'C'             // Esc
   };
$.each(key_ops, function(k,fn){
  key_ops[k] = oper_keys[fn];
});

var key_map = $.extend(key_map,{
  '43'  : key_literal, // +
  '45'  : key_literal, // -
  '42'  : key_literal, // *
  '47'  : key_literal, // /
  '40'  : key_literal, // (
  '41'  : key_literal, // )
  '46'  : key_literal  // .
});

for(var i = 48; i < 58; i++){
  key_map[''+i] = key_literal;
}

$(document).keypress(function(e) {
  if(!e.ctrlKey && !e.altKey && !e.metaKey){
    if(e.which in key_map) key_map[e.which](e.which);
  }
});

$(document).keydown(function(e) {
  if(!e.ctrlKey && !e.altKey && !e.metaKey){
    if(e.keyCode in key_ops) key_ops[e.keyCode]();
  }
});

calcDisplay.keypress(function(e) {
  if(!e.ctrlKey && !e.altKey && !e.metaKey){
    if(!(e.which in key_map)){
      e.preventDefault();
    } else {
      e.stopPropagation();
    }
  }
});
});
