
  
function typeOfTriangle(side1, side2, side3){
     if (side1 + side2 <= side3) {
       return "Well well well. Look what we have here. A scalene triangle!";
     } else if (side1 === side2 && side2 === side3) {
      return "This is an equilateral triangle.";
     } else if  (side1 === side2 || side1 === side3 || side3 === side2) {
      return "Would you look at that? This is an isosceles triangle.";
     } else {
      alert("What are you doing?! A+B must be =<C");
     }
  };



  $(document).ready(function () {
    $("form#measurements").submit(function(event) {
      event.preventDefault();

      var side1 = parseInt($("input#side1").val());
      var side2 = parseInt($("input#side2").val());
      var side3 = parseInt($("input#side3").val());
      var result = typeOfTriangle(side1,side2,side3);

      $("#result").append(result);
    })
  })
