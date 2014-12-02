
$( document ).ready(function() {

  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

  var myArray = ['one','two','three','four','five'];
  newArray = shuffle(myArray);

  $(".square1").addClass(newArray[0]).attr('id', newArray[0]);
  $(".square2").addClass(newArray[1]).attr('id', newArray[1]);
  $(".square3").addClass(newArray[2]).attr('id', newArray[2]);
  $(".square4").addClass(newArray[3]).attr('id', newArray[3]);
  $(".square5").addClass(newArray[4]).attr('id', newArray[4]);

});



$( init );
 
function init() {
  $('.square1, .square2, .square3, .square4, .square5').draggable({
  	cursor: 'move',
    stack: '.ui-draggable',
    revert: true

  });

  $('.destination1, .destination2, .destination3, .destination4, .destination5').droppable({
  	drop: handleDropEvent,

  });
 


};



function handleDropEvent( event, ui ) {
  var draggable = ui.draggable;

  var destNumber = $(this).attr('id');
  var boxNumber = $(draggable).attr('id');



  if (destNumber == boxNumber) {
  	$(draggable).addClass("correct");
    $(draggable).addClass("answer");
    draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.draggable( 'option', 'revert', false );
    draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  };

  if ($('.square1').hasClass("correct") && $('.square2').hasClass("correct") && $('.square3').hasClass("correct") && $('.square4').hasClass("correct") && $('.square5').hasClass("correct")) {
    document.getElementById('video').play();
  };

  

};

