$(document).ready(function() {
  $("form#measurements").submit(function(event) {
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
  }

  if (side1 === side2 && side2 === side3) {
    $('#equilateral').show();
  
  } else if {
    (side1 === side2 ! side3)
    $('#isosceles').show();

  } else if {
    (side1 ! side2 ! side3)
    $('#scalene').show();

  } else {
    (side1 + side2 <= side3)
    $('#noTriangle').show();

  }
  event.preventDefault();

}