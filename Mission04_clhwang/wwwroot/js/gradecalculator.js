$("$btnSend").click(function () {
    var assign = $('input[name = "assignments"]').val() * 0.50;
    var quiz = $('input[name = "quizzes"]').val() * 0.10;
    var project = $('input[name = "projects"]').val() * 0.10;
    var intex = $('input[name = "quizzes"]').val() * 0.10;
    var midterm = $('input[name = "midterm"]').val() * 0.10;
    var final = $('input[name = "final"]').val() * 0.10;
    var total = assign + quiz + project + intex + midterm + final
    var output = 'hi'
    if (total >= 90) {
        output = 'A'
    } else if (total >= 80) {
        output = 'B'
    } else if (total >= 70) {
        output = 'C'
    } else if (total >= 60) {
        output = 'D'
    } else {
        output = 'F'
    }
    $("#print").html(output)
})