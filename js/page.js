$(document).ready(function() {
	function disableselect(e){ // No Seleccionar
		return false
	}
	function reEnable(){
		return true
	}
	document.onselectstart=new Function ("return false")
	if (window.sidebar){
	document.onmousedown=disableselect
	document.onclick=reEnable
	}
	document.oncontextmenu = function(){return false;} //No Clic derecho

	//efectos de seleccion para Menu1
 	$('.nav .menu1').click(function(){
        $('.nav .menu1').removeClass('active1');
        $(this).addClass('active1');
    });
    
    //Popover Sesion
    $('.link-sesion').webuiPopover({content:'Cerrar sesion', animation:'pop'});
    //carga por defecto
    $('.aside').load('vistas/tablero/menu2.html');
    $('.main').load('vistas/tablero/base.html');
});