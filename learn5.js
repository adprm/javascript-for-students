// JavaScript If Else If
var score = prompt("Masukkan nilai anda : ");
var grade = "";
if (score == 90) grade = "A";
else if (score == 80) grade = "B";
else if (score == 70) grade = "C";
else if (score == 60) grade = "D";
else grade = "E";

document.write("Nilai anda = " + score + " maka nilai mutu anda : " + grade);