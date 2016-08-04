$(document).ready(function() {
	
	//PreLoad Page
	//window.resizeTo(250, 250);
	window.onload = load;
	function load(){
		setTimeout(function(){
        	$('#preloader').remove();
        	$('#wrapper').removeClass('oculto');
       		$('#wrapper').load('page.html');
    	}, 3000);
	}
});