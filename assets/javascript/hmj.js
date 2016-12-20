// alert("hello world");

// $("#name").text('Hi!')


// function greetMe(yourName) {
//   alert("Hello YOu " + yourName);
// }

// greetMe("World");




$( "#target" ).keydown(function() {
  alert( "Ok this how keydown works" );
});



$( "#other" ).click(function() {
  $( "#target" ).keydown();
});



$( "#other" ).click(function() {
  alert( "Ok this how keydown works" );
});