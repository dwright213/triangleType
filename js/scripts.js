var triangleType = function(un, deux, trois) {

  var sideAry = [un, deux, trois]
  sideAry = sideAry.sort(function (a, b) {
    return b - a;
  });

  var equalCount = 0;

  if ((un === deux) && (deux === trois)) {
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
