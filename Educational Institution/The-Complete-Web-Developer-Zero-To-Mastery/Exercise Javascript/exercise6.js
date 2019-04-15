var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();
array.sort();
array.push("kiwi");
array.shift("Apples");
array.reverse();

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

array2[1][1][0];