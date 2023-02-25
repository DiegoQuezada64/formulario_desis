jQuery(document).ready(function(){
    jQuery('#comunas').html('<option value="0">Seleccionar</option>');
    console.log("jquery funcionando");
    var idComuna = jQuery('#comunas').find(":selected").val();

    obtenerRegiones();
    obtenerCandidato();
    obtenerComunas(idComuna);

    jQuery('#regiones').on('change', function() {
        var idregion = jQuery('#regiones').val();
        var slcBaseComuna = '<option value="0">Seleccionar</option>';
        jQuery.ajax({
            type: "POST",
            url: "obtenerComunaBD.php",
            data:{
                
                idregion: idregion
            },
            success: function(response)
            {
                jQuery('#comunas').html(slcBaseComuna + response);
            }
        });
    });
    jQuery('#submit').on('click', function(e){
        e.preventDefault();

        enviarFormulario();
    });
})

function validaEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
}

function contieneNumeros(str) {

    return /[0-9]/.test(str);;
}

function enviarFormulario(){
    var nommbreApellido = jQuery("#nombre_apellido").val();
    var checked = $("#form input[type=checkbox]:checked").length;
    var isChecked = checked > 1;
    var alias = jQuery("#alias").val();

    if(nommbreApellido == ""){
        alert("nombre y apellido no debe ir blanco");
        return false;
    }
    if (alias.length < 5) {
        alert("el alias tiene menos de 5 caracteres");
        return false;
    }
    if (contieneNumeros(alias) == false) {
        alert("el alias debe contener letras y úmeros");
        return false;
    }
    if(jQuery("#rut").val() == ""){
        alert("el rut no debe estar vacio");
        return false;
    }
    if (Fn.validaRut( jQuery("#rut").val())== false ){
        alert("el rut ingresado no es valido");
        return false;
    }else{
        var rutValidado = jQuery("#rut").val();
    }
    if (jQuery("input[type='email']").val() == false ){
        alert("el email ingresado no es valido");
        return false;
    }
    if(isChecked){
        if (jQuery('#tv').is(':checked')) {
            jQuery('#tv').val('1');
            var tv = jQuery('#tv').val();
        }else{
            jQuery('#tv').val('0');
            var tv = jQuery('#tv').val();
        }
        if (jQuery('#web').is(':checked')) {
            jQuery('#web').val('1');
            var web = jQuery('#web').val();
        }else{
            jQuery('#web').val('0');
            var web = jQuery('#web').val();
        }
        if (jQuery('#redes').is(':checked')) {
            jQuery('#redes').val('1');
            var redes = jQuery('#redes').val();
        }else{
            jQuery('#redes').val('0');
            var redes = jQuery('#redes').val();
        }
        if (jQuery('#amigo').is(':checked')) {
            jQuery('#amigo').val('1');
            var amigo = jQuery('#amigo').val();
        }else{
            jQuery('#amigo').val('0');
            var amigo = jQuery('#amigo').val();
        }
    }else{
        alert("debe seleccionar al menos 2 opciones");
        return false;
    }

    jQuery.ajax({
        type: "POST",
        url: "insertar.php",
        data: {
            nombre_apellido: nommbreApellido,
            alias: alias,
            rut: rutValidado,
            email: jQuery("#email").val(),
            region: jQuery("#regiones option:selected").text(),
            comuna: jQuery("#comunas option:selected").text(),
            candidato: jQuery("#candidato option:selected").text(),
            web: parseInt(web),
            tv: parseInt(tv),
            redes: parseInt(redes),
            amigo: parseInt(amigo),

        },
        success: function(response){
            alert(response);
            limpiaInputs();
        }
    });

    return false;
}

function limpiaInputs(){
    jQuery("#nombre_apellido").val("");
    jQuery("#alias").val("");
    jQuery("#rut").val("");
    jQuery("#email").val("");
    jQuery('#regiones').val(0);
    jQuery('#comunas').val(0);
    jQuery('#candidato').val(0);
    jQuery( "#web" ).prop( "checked", false );
    jQuery( "#tv" ).prop( "checked", false );
    jQuery( "#redes" ).prop( "checked", false );
    jQuery( "#amigo" ).prop( "checked", false );

}

function obtenerRegiones(){
    var slcBaseRegion = '<option value="0">Seleccionar</option>';
    jQuery('#regiones').html(slcBaseRegion);
    jQuery.ajax({
        type: "GET",
        url: "obtenerRegionBD.php",

        success: function(response)
        {
            jQuery('#regiones').html(slcBaseRegion + response);
        }
    });
}

function obtenerCandidato(){
    var slcBaseCandidato = '<option value="0">Seleccionar</option>';
    jQuery('#candidato').html(slcBaseCandidato);
    jQuery.ajax({
        type: "GET",
        url: "obtenerCandidatosBD.php",

        success: function(response)
        {
            jQuery('#candidato').html(slcBaseCandidato + response);
        }
    });
}

function obtenerComunas(id){

    if(id != 0){
        console.log('no hay ID');
    }else{
        console.log('hay un 0');
    }

}

var Fn = {
	validaRut : function (rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}