"use strict";

var compact = function compact(array) {
  return array.filter(function (element) {
    return !!element;
  });
};

var originalArray = [0, 1, false, 2, '', 3];
var compactedArray = compact(originalArray);
console.log("\nHere is the original array: ".concat(originalArray, "\nAnd here is the compacted array: ").concat(compactedArray, "\n"));