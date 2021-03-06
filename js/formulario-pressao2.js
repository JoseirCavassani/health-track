$(document).ready(function() {
    $("span").hide();
    $('#salvar2').click(function() {
        //desabilitando o submit do form
        $("form").submit(function() { return false; });
        //atribuindo o valor do campo
        var sData = $("#data2").val();
        var sHora = $("#hora2").val();
        var sSis = $("#sis2").val();
        var sDia = $("#dia2").val();
        // filtros
        var horaFilter = /^([0-1][0-9]|[2][0-3]):[0-5][0-9]$/;
        var sisFilter = /^\d+?(.|,\d+)$/;
        var diaFilter = /^\d+?(.|,\d+)$/;
        var dataFilter = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[12][0-9]{3}$/;
        // validação de campos
        if (!(sisFilter.test(sSis))) {
            $("#sisTxt2").show()
                .text('Por favor, informe a pressão Sistólica');
        } else if (!(horaFilter.test(sHora))) {
            $("#horaTxt2").show()
                .text('Por favor, informe a hora.');
        } else if (!(dataFilter.test(sData))) {
            $("#dataTxt2").show()
                .text('Por favor, informe a data.');
        } else if (!(diaFilter.test(sDia))) {
            $("#diaTxt2").show()
                .text('Por favor, informe a pressão Diastólica.');
        } else {
            //se o e-mail estiver correto loga no sistema
            window.location = "pressao_arterial.html";
        }
    });
    $('#data2').focus(function() {
        $("span").hide();
    });
});