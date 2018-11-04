$(document).ready(function() {
    $("span").hide();
    $('#logar').click(function() {
        //desabilitando o submit do form
        $("form").submit(function() { return false; });
        //atribuindo o valor do campo
        var sEmail = $("#email").val();
        // filtros
        var emailFilter = /^.+@.+\..{2,}$/;
        var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/

        // se não for um e-mail valido não efetua o login
        if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)) {
            $("#emailTxt").show()
                .text('Por favor, informe um email válido.');
        } else if ($("#senha").val().length == 0) {
            $("#senhaTxt").show()
                .text('Por favor, informe a senha.');
        } else {
            //se o e-mail estiver correto loga no sistema
            window.location = "dashboard.html";
        }
    });
    $('#email').focus(function() {
        $("span").hide();
    });
});