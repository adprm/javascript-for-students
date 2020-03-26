// JavaScript Switch Case
var days = prompt("Enter the day to check the course : ");
var inputScores = prompt("Enter your grades : ", 0);
var coursesSchedules = "";
var grades = "";
switch (days) {
    case "Monday":
        coursesSchedules = "Networking"
        break;
    case "Tuesday":
        coursesSchedules = "Programming"
        break;
    case "Wednesday":
        coursesSchedules = "Algorithm"
        break;
    case "Thursday":
        coursesSchedules = "Mathematics"
        break;
    case "Friday":
        coursesSchedules = "English Language"
        break;
    case "Saturday":
        coursesSchedules = "Technology"
        break;
    default:
        document.write("Incorrect input");
}

if (coursesSchedules == "") {
    document.write("There is no schedule<br>");
} else {
    document.write("Day course schedule " + days + " is " + coursesSchedules + "<br>");
}

switch (true) {
    case inputScores >= 90:
        grades = "A";
        break;
    case inputScores >= 80:
        grades = "B";
        break;
    case inputScores >= 70:
        grades = "C";
        break;
    case inputScores >= 60:
        grades = "D";
        break;
    default:
        grades = "E"
}
document.write("Your score " + inputScores + " then your grade " + grades);