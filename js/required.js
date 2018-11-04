$(document).ready(function() {
    // Sumir com todos os span's
    $("span").hide();
    // Aplica evento de blur (perda de foco) em todos os inputs
    $("input[type='text']").blur(function() {
        if ($(this).val().length == 0) {
            $(this).next().show();
        }
    });
    $("input[type='text']").focus(function() {
        $(this).next().hide();
    });
    $("input[type='password']").blur(function() {
        if ($(this).val().length == 0) {
            $(this).next().show();
        }
    });
    $("input[type='password']").focus(function() {
        $(this).next().hide();
    });

});