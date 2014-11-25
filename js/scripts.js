
$( init );
 
function init() {
  $('.square1, .square2, .square3, .square4').draggable({
  	cursor: 'move',

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
  };

  if (draggable.hasClass("correct")) {
    alert("hello");
  };

  

};

