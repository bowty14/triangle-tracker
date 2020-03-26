
  var typeOfTriangle = function(side1, side2, side3){
     if {
     return "noTriangle";
     if (side1 === side2 && side2 === side3) {
     return "equilateral";
     } else if  (side1 === side2 || side1 === side3 || side3 === side2) {
          return "isosceles";
        } else if {
        return "scalene";
        } 
  
        }
    
  

  $(document).ready(function () {
    $("form#measurements").submit(function (event) {
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
      event.preventDefault();
}