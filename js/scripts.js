var triangleType = function(sideOne, sideTwo, sideThree) {

  var equalSidesCount = 0;
  var triangleSides = [sideOne, sideTwo, sideThree];

  triangleSides.sort(function (b, a) {
    return a - b;
  });

  if (triangleSides[0] > (triangleSides[1] + triangleSides[2])) {
    return "invalid"
  }

  else if ((sideOne === sideTwo) && (sideTwo === sideThree)) {
    return "equilateral"
  }

  else {
      for (var i = 0; i < 2; i++) {

      triangleSides.forEach(function(side) {

        if ((side === triangleSides[i]) && (triangleSides.indexOf(side) !== i) && (equalSidesCount === 0)) {
          equalSidesCount++;
        }

      })
    }

    if (equalSidesCount === 1) {
      return "isosceles"

    } else {
      return "scalene"
    }
  }
}

$(document).ready(function() {
  $("form#sideForm").submit(function(event) {

    var sides = [sideA, sideB, sideC]

    if ((sideA < 1 ) || (sideB < 1 ) || (sideC < 1 )) {
      alert("What you are doing is illegal and we won't allow it.");
      return false;
    }

    var result = triangleType(sides[0], sides[1], sides[2]);

    $("#results").empty();

    $("#results").append(result);

    event.preventDefault();
  });
});
