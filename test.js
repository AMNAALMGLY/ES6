var_=require('lodash');
var arr=[1,2,3];
console.log("answer : "_without(arr,2));
var name1=prompt("Player one please enter your name ,blue");
var name2=prompt("Player two please enter your name ,red");

var counter=0;
var counter1=0;
var counter2=0;
var counter3=0;
var counter4=0;
var counter5=0;
var counter6=0;
var counter7=0;
$(document).ready(function () {



var tdPosition=0;
for (var i=0;i<7;i++){


  $('.col'+i).click(function(){
    var col = $(this).parent().children().index($(this));
    if (col==0){
      counter1++;
      tdPosition=(5-counter1)*7+col;
    }
  else if (col==1) {
    counter2++;
    tdPosition=(5-counter2)*7+col;
  }
  else if (col==2) {
    counter3++;
      tdPosition=(5-counter3)*7+col;
  }
  else if (col==3) {
    counter4++;
      tdPosition=(5-counter4)*7+col;
  }
  else if (col==4) {
    counter5++;
      tdPosition=(5-counter5)*7+col;
  }
  else if (col==5) {
    counter6++;
      tdPosition=(5-counter6)*7+col;
  }
  else  {
    counter7++;
      tdPosition=(5-counter7)*7+col;
  }


    if (counter%2===0){
      $('h3').text(name2+" your turn ,please pick a column to drop your Red chip.")
      $("td").eq(tdPosition).addClass('turnBlue');
      if (($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition+1).hasClass('turnBlue')&&$("td").eq(tdPosition+2).hasClass('turnBlue')&& $("td").eq(tdPosition+3).hasClass('turnBlue'))||($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition-1).hasClass('turnBlue')&&$("td").eq(tdPosition-2).hasClass('turnBlue')&& $("td").eq(tdPosition-3).hasClass('turnBlue'))||($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition-1).hasClass('turnBlue')&&$("td").eq(tdPosition+1).hasClass('turnBlue')&& $("td").eq(tdPosition+2).hasClass('turnBlue'))||($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition-2).hasClass('turnBlue')&&$("td").eq(tdPosition-1).hasClass('turnBlue')&& $("td").eq(tdPosition+1).hasClass('turnBlue'))){
        $('h1').text('Conguratulations blue chip  won! , referesh your browser to play again');
        $('h2').text('');
        $('h3').text('');
      }
      if (($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition+7).hasClass('turnBlue')&&$("td").eq(tdPosition+14).hasClass('turnBlue')&& $("td").eq(tdPosition+21).hasClass('turnBlue'))||($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition-7).hasClass('turnBlue')&&$("td").eq(tdPosition-14).hasClass('turnBlue')&& $("td").eq(tdPosition-21).hasClass('turnBlue'))||($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition-7).hasClass('turnBlue')&&$("td").eq(tdPosition+7).hasClass('turnBlue')&& $("td").eq(tdPosition+14).hasClass('turnBlue'))||($("td").eq(tdPosition).hasClass('turnBlue')&& $("td").eq(tdPosition-14).hasClass('turnBlue')&&$("td").eq(tdPosition-7).hasClass('turnBlue')&& $("td").eq(tdPosition+7).hasClass('turnBlue'))){
      $('h1').text('Conguratulations! blue chip won! , referesh your browser to play again');
      $('h2').text('');
      $('h3').text('');
    }}
    else  {



        $('h3').text(name1+" your turn ,please pick a column to drop your Blue chip.")
          $("td").eq(tdPosition).addClass('turnRed');
          if (($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition+1).hasClass('turnRed')&&$("td").eq(tdPosition+2).hasClass('turnRed')&& $("td").eq(tdPosition+3).hasClass('turnRed'))||($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition-1).hasClass('turnRed')&&$("td").eq(tdPosition-2).hasClass('turnRed')&& $("td").eq(tdPosition-3).hasClass('turnRed'))||($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition-1).hasClass('turnRed')&&$("td").eq(tdPosition+1).hasClass('turnRed')&& $("td").eq(tdPosition+2).hasClass('turnRed'))||($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition-2).hasClass('turnRed')&&$("td").eq(tdPosition-1).hasClass('turnRed')&& $("td").eq(tdPosition+1).hasClass('turnRed'))){
            $('h1').text('Conguratulations Red chip  won! , referesh your browser to play again');
            $('h2').text('');
            $('h3').text('');
          }
          if (($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition+7).hasClass('turnRed')&&$("td").eq(tdPosition+14).hasClass('turnRed')&& $("td").eq(tdPosition+21).hasClass('turnRed'))||($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition-7).hasClass('turnRed')&&$("td").eq(tdPosition-14).hasClass('turnRed')&& $("td").eq(tdPosition-21).hasClass('turnRed'))||($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition-7).hasClass('turnRed')&&$("td").eq(tdPosition+7).hasClass('turnRed')&& $("td").eq(tdPosition+14).hasClass('turnRed'))||($("td").eq(tdPosition).hasClass('turnRed')&& $("td").eq(tdPosition-14).hasClass('turnRed')&&$("td").eq(tdPosition-7).hasClass('turnRed')&& $("td").eq(tdPosition+7).hasClass('turnRed'))){
          $('h1').text('Conguratulations! Red chip won! , referesh your browser to play again');
          $('h2').text('');
          $('h3').text('');5

        }
    }

  //  $("this").eq(0).addClass('turnBlue');

    console.log("clicked");
    counter++;
  //  console.log(counter);
  //  console.log(col);

  });}





})


//function modify(){
  //var col = $(this).parent().children().index($(this));
//  if (counter%2==0){
//alert(clicked)
//  $('#table tr').eq(0).find('td').eq(col).addClass(turnBlue)
//  }
//  else {
//      $('#table tr').eq(row).find('td').eq(col).addClass(turnRed)
//  counter++;
//}
