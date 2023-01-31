// Creating the function that will be called in index.html to calculate the grades
$(document).ready(function () {
    $("#btnCalculate").click(function () {
        // Creating variables for all of the different inputs and calculating each of their individual percentages
        var assign = $("#assignments").val() * 0.50;
        var quiz = $("#quizzes").val() * 0.10;
        var project = $("#projects").val() * 0.10;
        var intex = $("#intex").val() * 0.10;
        var midterm = $("#midterm").val() * 0.10;
        var final = $("#final").val() * 0.10;
        // Calculating their total percentage
        var total = assign + quiz + project + intex + midterm + final;
        var output = ' ';
        // Determining their letter grade based on their percentage
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
        //Assigning an ID so that this function can be called in index.html
        $("#print").text(output);
    });
});