var triangleType = function(un, deux, trois) {

  var sideAry = [un, deux, trois]

  var equalCount = 0;

  if (sideAry[0] > (sideAry[1] + sideAry[2])) {
    return "invalid"
  }

  else if ((un === deux) && (deux === trois)) {
    return "equilateral"

  }

  else {
      for (var i = 0; i < 2; i++) {

      sideAry.forEach(function(side) {

        if ((side === sideAry[i]) && (sideAry.indexOf(side) !== i) && (equalCount === 0)) {
          equalCount++;
        }

      })
    }
    if (equalCount === 1) {
      return "isosceles"

    } else {
      return "scalene"

    }


  }


}



$(document).ready(function() {
  $("form#sideForm").submit(function(event) {


    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    var sides = [sideA, sideB, sideC]

    sides = sides.sort(function (a, b) {
      return b - a;
    });



    if ((sideA < 1 ) || (sideB < 1 ) || (sideC < 1 )) {
      alert("What you are doing is illegal and we won't allow it.");
      return false;
    }

    var result = triangleType(sideA, sideB, sideC);

    $("#results").empty();


    $("#results").append(result);
    
    event.preventDefault();
  });
});
