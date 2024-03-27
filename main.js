$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        const valorinput = $("#tarefa").val();
        $("ul").append(`<li><span class="pendente">📍</span> ${valorinput}</li>`);
        $("#tarefa").val('');
        $('#botao-cancelar').click(function() {
        $('form').slideUp();

        $("ul").on('click', 'li', function(){
            $(this).toggleClass("linha-meio");
            $(this).toggleClass("checked");
            $(this).find(".pendente").toggleClass("hide");
            
        })

        
    });

});