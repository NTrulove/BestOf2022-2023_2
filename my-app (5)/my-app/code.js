var names = getColumn("Fast Food Nutrition", "Name");

// When clicked it will take the user to the homeScreen
onEvent("homeButton1","click", function(){
  setScreen("homeScreen");
});
onEvent("homeButton2","click", function(){
  setScreen("homeScreen");
});

// When clicked it will take the user to the mostScreen
onEvent("mostButton","click", function() {
  setScreen("mostScreen");
});

// When clicked it will take the user to the leastScreen
onEvent("leastButton","click", function() {
  setScreen("leastScreen");
});

// selects the category to get the data from, by using the categorySelection1 dropdown
//for the most amount
onEvent("categorySelection1","change", function(){
  findTheMost();
});

// Takes in an input of what category the user selects
// Prints the fast food with the most amount of that category
function findTheMost() {
 var input = getText("categorySelection1");
 var category  = getColumn("Fast Food Nutrition", input);
 var max =  0;
 var mostName;
 for(var i = 0; i < category.length; i++){
   if(category[i] > max) {
     max = category[i];
     mostName = names[i];
   }
 }
 setText("results1", ("The fast food with the most " + input) + " is " + mostName);
 
}

// selects the category to get the data from, by using the categorySelection2 dropdown
//for the least amount
onEvent("categorySelection2","change", function(){
  findTheLeast();
});

// Takes in an input of what category the user selects
// Prints the fast food with the least amount of that category
function findTheLeast() {
 var input = getText("categorySelection2");
 var category  = getColumn("Fast Food Nutrition", input);
 var least =  1000;
 var leastName;
 for(var i = 0; i < category.length; i++){
   if(category[i] < least) {
     least = category[i];
     leastName = names[i];
   }
 }
 setText("results2", ("The fast food with the least " + input) + " is " + leastName);
}
