$(document).ready(function() {
    $("span").hide();
    $('#salvar').click(function() {
        //desabilitando o submit do form
        $("form").submit(function() { return false; });
        //atribuindo o valor do campo
        var sData = $("#data").val();
        var sHora = $("#hora").val();
        var sCaloria = $("#caloria").val();
        // filtros
        var horaFilter = /^([0-1][0-9]|[2][0-3]):[0-5][0-9]$/;
        var caloriaFilter = /^\d+?(.|,\d+)$/;
        var dataFilter = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[12][0-9]{3}$/;
        // se não for um e-mail valido não efetua o login
        if (!(caloriaFilter.test(sCaloria))) {
            $("#caloriaTxt").show()
                .text('Por favor, informe a quantidade de calorias.');
        } else if (!(horaFilter.test(sHora))) {
            $("#horaTxt").show()
                .text('Por favor, informe a hora.');
        } else if (!(dataFilter.test(sData))) {
            $("#dataTxt").show()
                .text('Por favor, informe a data.');
        } else {
            //se o e-mail estiver correto loga no sistema
            window.location = "atividade_fisica.html";
        }
    });
    $('#data').focus(function() {
        $("span").hide();
    });
});