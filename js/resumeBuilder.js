/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {

    "name": "David Sabalete",

    "role": "Analyst Developer",

    "contacts": {
        "mobile": "667-067-856",
        "email": "dsabalete@gmail.com",
        "github": "dsabalete",
        "twitter": "@dsabalete",
        "location": "Sant Cugat"
    },

    "welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",

    "skills": [
        "awesomeness",
        "delivering things",
        "cryogenic sleep",
        "saving the universe"
    ],

    "bioPic": "http://www.gravatar.com/avatar/e6c872e72ca6f73d3a5f6396faadfd11?s=200",

    display: function () {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts, #footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts, #footerContacts").append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts, #footerContacts").append(formattedTwitter);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts, #footerContacts").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedLocation);

        var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBiopic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            var formattedSkill = "";
            for (var i = 0; i < bio.skills.length; i++) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }

    }
};

var education = {
    "schools": [
        {
            "name": "Nova Southeastern University",
            "location": "Fort Lauderdale, FL",
            "degree": "Master",
            "majors": ["CS"],
            "dates": 2013,
            "url": "http://example.com"
        }, {
            "name": "Eckerd Collage",
            "location": "Saint Petersburg, FL",
            "degree": "BA",
            "majors": ["CS"],
            "dates": 2003,
            "url": "http://example.com"
        }
    ],

    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": 2014,
            "url": "https://www.udacity.com/course/ud804"
        }
    ],

    display: function () {

        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(schoolName);

            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(schoolDegree);

            var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(schoolDates);

            var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(schoolLocation);

            var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(schoolMajor);
        }

        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);

            for (clas in education.onlineCourses) {
                var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[clas].title);
                var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[clas].school);
                $(".education-entry:last").append(title + school);

                var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[clas].dates);
                $(".education-entry:last").append(dates);

                var url = HTMLonlineURL.replace("%data%", education.onlineCourses[clas].url);
                $(".education-entry:last").append(url);
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Capitole Consulting",
            "title": "Analyst Programmer",
            "location": "Sant Cugat",
            "dates": "July 2016 - Future",
            "description": "Analysing tool for automatic migrations"
        },
        {
            "employer": "FIATC",
            "title": "Programmer",
            "location": "Barcelona",
            "dates": "July 2003 - 2016",
            "description": "Programming web applications for insurance company"
        }
    ],

    display: function () {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            $(".work-entry:last").append(formattedEmployer + formattedJobTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }

};

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso talegggio when the cheese comes out everybody's happy.",
            "images": [
                "http://images.freeimages.com/images/previews/d3d/sign-post-1312967.jpg",
                "http://images.freeimages.com/images/previews/368/rescue-boat-1449778.jpg"
            ]
        }
    ],

    display: function () {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};


bio.display();
education.display();
work.display();
projects.display();

function inName(_names) {
    var name = _names.trim().split(" ");
    console.log(name);
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);