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

/*
var skills = ["run", "walk", "sling"];
var bio = {
	"name": "Peter Parker 2",
	"role": "Slinger",
	"picture URL": "images/me.jpg",
	"welcome message": "Welcome",
	"skills": skills
};

$("#main").append(bio.name);
*/

var bio = {
	"name": "Peter Parker",
	"role": "Web slinger",
	"welcomeMessage": "Learning JavaSript",
	"contacts": {
		"mobile": 19001956,
		"email": "test@test.test",
		"github": "githubUs",
		"twitter": "@twitterN",
		"location":	"Sydney"
	},
	"skills": ["code","test","read","write"],
	"bioPic": "images/fry.jpg"
}

var work = {
	"jobs": [
		{
			"employer": "Student",
			"title": "Title A",
			"location": "Adelaide",
			"dates": "20/01/1900 - 20/04/1992",
			"description": "walking around"
		},
		{
			"employer": "Photographer",
			"title": "Title B",
			"location": "Melbourne",
			"dates": "20/04/1902 - 20/04/1994",
			"description": "sitting on chairs"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Project A",
			"dates": 1991,
			"description": "JavaSript typing",
			"images": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON","http://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/"]
		},
		{
			"title": "Project B",
			"dates": 1993,
			"description": "JavaSript typing",
			"images": ["https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiiyOO-laDMAhWG5KYKHfYUA7EQjRwIBw&url=https%3A%2F%2Fpixabay.com%2Fen%2Fbackground-image-colorful-art-967820%2F&psig=AFQjCNE-FqqeunyZmHUaNi64rF56QwCyJw&ust=1461343118053892"]
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Project B",
			"city": 1993,
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 1990,
			"url": "http:google.com"
		},
		{
			"name": "Project B",
			"city": 1993,
			"degree": "BA",
			"majors": ["CS"],
			"dates": 1991,
			"url": "http:google.com"
		}
	],
	"onlineCourses": [
		{
		"title": "Basic JS",
		"school": "Udacity",
		"dates": 2016,
		"url": "www.google.com"
		},
		{
		"title": "Web development",
		"school": "Udacity",
		"dates": 2016,
		"url": "www.google.com.vn"
		}
	]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}
displayWork();