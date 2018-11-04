$(document).ready(function() {
    $("span").hide();
    $('#salvar2').click(function() {
        //desabilitando o submit do form
        $("form").submit(function() { return false; });
        //atribuindo o valor do campo
        var sData = $("#data2").val();
        var sHora = $("#hora2").val();
        var sPeso = $("#peso2").val();
        // filtros

        var horaFilter = /^([0-1][0-9]|[2][0-3]):[0-5][0-9]$/;
        var pesoFilter = /^\d+?(.|,\d+)$/;
        var dataFilter = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[12][0-9]{3}$/;
        // se não for um e-mail valido não efetua o login
        if (!(pesoFilter.test(sPeso))) {
            $("#pesoTxt2").show()
                .text('Por favor, informe o seu peso.');
        } else if (!(horaFilter.test(sHora))) {
            $("#horaTxt2").show()
                .text('Por favor, informe a hora.');
        } else if (!(dataFilter.test(sData))) {
            $("#dataTxt2").show()
                .text('Por favor, informe a data.');
        } else {
            //se o e-mail estiver correto loga no sistema
            window.location = "peso.html";
        }
    });
    $('#data2').focus(function() {
        $("span").hide();
    });
});