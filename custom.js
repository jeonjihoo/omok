let turn = "black";
let gameIs = "ready";

$('#open-setting').click(function (){
  $('.modal').slideDown();
  $('.settings').show();
  $('.suicide').hide();
})

$('#open-suicide').click(function (){
  $('.modal').slideDown();
  $('.suicide').show();
  $('.settings').hide();
})


$('.omok > .none').click(function (){
  if ( gameIs === "start" ) {
    if ( turn === "black") {
      $(this).attr('class','black');
      $('.turn > .black').attr('class','white');
      turn = "white";
    } else {
      $(this).attr('class','white');
      $('.turn > .white').attr('class','black');
      turn = "black";
    }
  } else if ( gameIs === "ready") {
    gameIs = "start";
    if ( turn === "black") {
      $(this).attr('class','black');
      $('.turn > .black').attr('class','white');
      turn = "white";
    } else {
      $(this).attr('class','white');
      $('.turn > .white').attr('class','black');
      turn = "black";
    }
  }
})

let black_timer = 300;
let black_min
let black_sec
let white_timer = 300;
let white_min
let white_sec

setInterval(() => {
  if ( gameIs === "start" && turn === "black" && black_timer != 0) {
    black_timer--;
  } else if ( gameIs === "start" && turn === "white" && white_timer != 0 ){
    white_timer--;
  }

  if ( black_timer == 0) {
    gameIs = "end"
  } else if ( white_timer == 0 ){
    gameIs = "end"
  }

  black_min = parseInt(black_timer / 60);
  black_sec = parseInt(black_timer % 60);
  white_min = parseInt(white_timer / 60);
  white_sec = parseInt(white_timer % 60);

  $('.black-time').text(black_min + ':' + String(black_sec).padStart(2, "0"));
  $('.white-time').text(white_min + ':' + String(white_sec).padStart(2, "0"));


}, 1000);