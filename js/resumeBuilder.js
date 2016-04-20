/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Peter Parker");

/*var awesomeThoughts = "I am Peter Parker and I am awesome!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome","fun");
$("#main").append(funThoughts);
console.log(awesomeThoughts);
console.log(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", "Peter Parker");
var formattedRole = HTMLheaderRole.replace("%data%", "Web slinger");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["run", "walk", "sling"];
var bio = {
	"name": "Peter Parker 2",
	"role": "Slinger",
	"picture URL": "images/me.jpg",
	"welcome message": "Welcome",
	"skills": skills
};

$("#main").append(bio.name);