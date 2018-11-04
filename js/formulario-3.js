$(document).ready(function() {
    $("span").hide();
    $('#logar').click(function() {
        //desabilitando o submit do form
        $("form").submit(function() { return false; });
        //atribuindo o valor do campo
        var sEmail = $("#email").val();
        var sData = $("#data").val();
        var sAltura = $("#altura").val();
        // filtros
        var emailFilter = /^.+@.+\..{2,}$/;
        var illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
        var dataFilter = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[12][0-9]{3}$/;
        var alturaFilter = /[0-9]{0,10}[,]{1,1}[0-9]{0,4}$/;

        // se não for um e-mail valido não efetua o login
        if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)) {
            $("#emailTxt").show()
                .text('Por favor, informe um email válido.');
        } else if ($("#senha").val().length == 0) {
            $("#senhaTxt").show()
                .text('Por favor, informe a senha.');
        } else if ($("#nome").val().length == 0) {
            $("#nomeTxt").show()
                .text('Por favor, informe o seu nome completo.');
        } else if (!(dataFilter.test(sData)) || $("#data").val().length == 0) {
            $("#dataTxt").show()
                .text('Por favor, informe a sua data de nascimento.');
        } else if (!(alturaFilter.test(sAltura)) || $("#altura").val().length == 0) {
            $("#alturaTxt").show()
                .text('Por favor, informe a sua altura.');
        } else {
            //se o e-mail estiver correto loga no sistema
            window.location = "dashboard.html";
        }
    });
    $('#email').focus(function() {
        $("span").hide();
    });
});