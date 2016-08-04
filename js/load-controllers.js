//Funciones
$(document).ready(function() {

	//clic en Menu1 carga para el Menu2
	$( "#tablero" ).click(function(){
		$('.aside').load('vistas/tablero/menu2.html');
		$('.main').load('vistas/tablero/base.html');
	});
	$( "#admision" ).click(function(){
		$('.aside').load('vistas/admision/menu2.html');
		$('.main').load('vistas/admision/menu2/admisionEstudiante.html');
	});
	$( "#estudiantes" ).click(function(){
		$('.aside').load('vistas/estudiantes/menu2.html');
		$('.main').load('vistas/estudiantes/base.html');
	});
	$( "#docentes" ).click(function(){
		$('.aside').load('vistas/docentes/menu2.html');
		$('.main').load('vistas/docentes/base.html');
	});
	$( "#horario" ).click(function(){
		$('.aside').load('vistas/horario/menu2.html');
		$('.main').load('vistas/horario/base.html');
	});
	$( "#logros" ).click(function(){
		$('.aside').load('vistas/logros/menu2.html');
		$('.main').load('vistas/logros/base.html');
	});
	$( "#permisos" ).click(function(){
		$('.aside').load('vistas/permisos/menu2.html');
		$('.main').load('vistas/permisos/base.html');
	});
	$( "#informes" ).click(function(){
		$('.aside').load('vistas/informes/menu2.html');
		$('.main').load('vistas/informes/base.html');
	});


	// //Clic en menu2 carga main
	// $("#admisionEstudiante").click(function(){
	// 	//$('.aside').load('vistas/informes/menu2.html');
	// 	$('.main').load('vistas/admision/menu2/admisionEstudiante.html');
	// });
	// $("#admisionDocente").click(function(){
	// 	//$('.aside').load('vistas/informes/menu2.html');
	// 	$('.main').load('vistas/admision/menu2/admisionDocente.html');
	// });
});
