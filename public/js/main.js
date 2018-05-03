let socket = io();
$(document).ready(function(){
    socket.on("flashMessageService", (dados) => {
        var html = '<div class="alert ' + dados.type + ' alert-dismissible flash-messages">';
        html += '    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>';
        html += '    <h4><i class="icon fa ' + dados.icon + '"></i> ' + dados.title + '</h4>';
        html += '    ' + dados.body + '';
        html += '</div>';
        $(".content-wrapper").append(html);
    });

    // DROPDOWN
    $('.dropdown-submenu a.submenu').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
})