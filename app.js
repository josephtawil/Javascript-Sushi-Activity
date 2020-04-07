var string = "sushi";
var food = confirm("Do you like " + string+"?");
var type = prompt("What kind of " + string + " do you like?");
console.log(food);
console.log(type);
alert(food);
alert(type);

if(food == true)
{
    var type = prompt("What kind of " + string + " do you like?");
    console.log("OOOHHHH that's so yummy!!!");
    alert("OOOOOOHHHH that's so yummy!!!!");
}
else
{
    console.log("You're nasty");
    alert("You're nasty");
}