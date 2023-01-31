$(document).ready(function () {
    $("#btnCalculate").click(function () {
        var assign = $("#assignments").val() * 0.50;
        var quiz = $("#quizzes").val() * 0.10;
        var project = $("#projects").val() * 0.10;
        var intex = $("#intex").val() * 0.10;
        var midterm = $("#midterm").val() * 0.10;
        var final = $("#final").val() * 0.10;
        var total = assign + quiz + project + intex + midterm + final;
        var output = 'hi';
        if (total >= 90) {
            output = 'A';
        } else if (total >= 80) {
            output = 'B';
        } else if (total >= 70) {
            output = 'C';
        } else if (total >= 60) {
            output = 'D';
        } else {
            output = 'F';
        }
        $("#print").text(output);
    });
});