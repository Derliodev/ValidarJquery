var process = 0;


/* Validador Nombre */
$(function () {
    $('#nombre').on('blur', function () {
        var nombre = $('#nombre').val();
        if (nombre == null || nombre.length == 0) {
            alert('ERROR: El campo nombre no debe ir vacío');
            $('#nombre').addClass('error');
            $('#nombre').removeClass('exito');
        } else {
            $('#nombre').removeClass('error');
            $('#nombre').addClass('exito');
            process = 1;
        }
    })
});

/* Validador Apellido */
$(function () {
    $('#apellido').on('blur', function () {
        var apellido = $('#apellido').val();
        if (apellido == null || apellido.length == 0) {
            alert('ERROR: El campo apellido no debe ir vacío');
            $('#apellido').addClass('error');
            $('#apellido').removeClass('exito');
        } else {
            $('#apellido').removeClass('error');
            $('#apellido').addClass('exito');
            process = 1;
        }
    })
});

/* Validador Direccion */
$(function () {
    $('#direccion').on('blur', function () {
        var direccion = $('#direccion').val();
        if (direccion == null || direccion.length == 0) {
            alert('ERROR: El campo direccion no debe ir vacío');
            $('#direccion').addClass('error');
            $('#direccion').removeClass('exito');
        } else {
            $('#direccion').removeClass('error');
            $('#direccion').addClass('exito');
            process = 1;
        }
    })
});

/* Validador Correo */
$(function () {
    $('#email').on('blur', function () {
        var mail = $('#email').val();
        if (mail.length == 0) {
            alert('ERROR: El campo email no debe ir vacío');
            $('#email').addClass('error');
            $('#email').removeClass('exito');
        } else if ($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            alert('ERROR: Debe ingresar un correo valido');
            $('#email').addClass('error');
            $('#email').removeClass('exito');
        } else {
            $('#email').removeClass('error');
            $('#email').addClass('exito');
            process = 1;
        }
    })
});

/* Validador Medidas */
$(function () {
    $('#ancho').on('blur', function () {
        var ancho = $('#ancho').val();
        if (ancho.length == 0) {
            alert('ERROR: Debe ingresar ancho');
            $('#ancho').addClass('error');
            $('#ancho').removeClass('exito');
        }else if (ancho <= 0) {
            alert('ERROR: Ancho debe ser mayor a 0');
            $('#ancho').addClass('error');
            $('#ancho').removeClass('exito');
        }else {
            $('#ancho').removeClass('error');
            $('#ancho').addClass('exito');
            process = 1;
        }
    })
    $('#largo').on('blur', function () {
        var largo = $('#largo').val();
        if (largo.length == 0) {
            alert('ERROR: Debe ingresar largo');
            $('#largo').addClass('error');
            $('#largo').removeClass('exito');
        }else if (largo <= 0) {
            alert('ERROR: Largo debe ser mayor a 0');
            $('#largo').addClass('error');
            $('#largo').removeClass('exito');
        } else {
            $('#largo').removeClass('error');
            $('#largo').addClass('exito');
            process = 1;
        }
    })
});

/* Set Precio */
const currency = function(number){
    return new Intl.NumberFormat('es-CL', {style: 'currency',currency: 'CLP', minimumFractionDigits: 0}).format(number);
};

/* Validador Boton */
$(function () {
    $('.boton').on('click', function (){
        if(process == 0){
            alert('Ingrese todos los datos solicitados')
        }else if(process == 1){
            var ancho = $('#ancho').val();
            var largo = $('#largo').val();
            var mtrs = largo * ancho;
            var total = mtrs * 900
            $('#mtrs').text(mtrs);
            $('#total').text(currency(total));
        }
    })    
});

