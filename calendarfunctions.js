// --------------------- BEGIN calendar section ---------------------

// $("td.entry").click(function(e) {
//   var str = $(this).text();

//   $(".entry").css( "border", "1px 1px black" );
//   //$(this).attr("","SomeID");
//   console.log(this);
// });

var slot1 = document.getElementById('slot1');

function selectBox(obj) {
  obj.style.border = "1px 1px black";
  console.log("HELLO");
}

slot1.addEventListener('click', selectBox(slot1));