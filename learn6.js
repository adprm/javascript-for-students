// JavaScript Switch Case
var days = prompt("Masukkan hari untuk cek mata kuliah : ");
var inputScores = prompt("Masukkan nilai anda : ", 0);
var coursesSchedules = "";
var grades = "";
switch (days) {
    case "senin":
        coursesSchedules = "Networking"
        break;
    case "selasa":
        coursesSchedules = "Programming"
        break;
    case "rabu":
        coursesSchedules = "Algorithm"
        break;
    case "kamis":
        coursesSchedules = "Mathematics"
        break;
    case "jumat":
        coursesSchedules = "English Language"
        break;
    case "sabtu":
        coursesSchedules = "Technology"
        break;
    default:
        document.write("Input salah");
}

if (coursesSchedules == "") {
    document.write("Tidak ada schedule<br>");
} else {
    document.write("Jadwal mata kuliah hari " + days + " adalah " + coursesSchedules + "<br>");
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
document.write("Nilai anda " + inputScores + " maka grade anda " + grades);