
function addAndRound(value1,value2) {
    return Math.round(value1 + value2);
}

test( "testing addAndRound", function() {
  equal(6, addAndRound(3.55, 2.33), "checking valid");
  ok(addAndRound("three", "4.12"), "checking NaN");
});


