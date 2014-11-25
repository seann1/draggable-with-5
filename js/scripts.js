
$( init );
 
function init() {
  $('.square1, .square2, .square3, .square4').draggable({
  	cursor: 'move',
    stack: '.ui-draggable'

  });

  $('.destination1, .destination2, .destination3, .destination4').droppable({
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
    draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  };

  if ($('.square1').hasClass("correct") && $('.square2').hasClass("correct") && $('.square3').hasClass("correct") && $('.square4').hasClass("correct")) {
    document.getElementById('video').play();
  };

  

};

