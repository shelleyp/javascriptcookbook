require(["./one","./two"],function(one,two) {
         one.hi();
         two.hi('world');
         console.log("And that's all");
});
