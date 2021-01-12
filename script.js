var subjectList = document.querySelector(".subjects");
var profile = document.querySelector(".profile");
var profileButton = document.querySelector(".profile-button");
var profileDetails = document.querySelector(".profile-details");
var studentInterests = "";

var mySubjects = ["Introduction","Design 1", "Web and Communications Technology","HTML and CSS","Project Methodology","Programming Foundations","JavaScript 1","Interaction Design","Content Management Systems"];

for(var i = 0; i < mySubjects.length; i++){
    subjectList.innerHTML += "<li>" + mySubjects[i] + "</li>";
}

var studentProfile = {
    name: "Bob Smith",
    age: 36,
    interests: ["Chess","Walking","Music"]
}

for(var i = 0; i < studentProfile.interests.length; i++){
    studentInterests += "<li>" + studentProfile.interests[i] + "</li>";
}

profileDetails.innerHTML = "<h3>" + studentProfile.name + "</h3><p>Student's age is " + studentProfile.age + " and their interest's are <ul>" + studentInterests + "</ul>";

profileButton.addEventListener("click", function(){
    if(profile.style.display === "block"){
        profileButton.innerText = "View Profile";
        profile.style.display = "none";
    }
    else {
        profileButton.innerText = "Hide Profile";
        profile.style.display = "block";
    }
})