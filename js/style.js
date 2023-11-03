// JavaScript Document


$(document).ready(function(){
	
	
	$('.titr').click(function(){
		var a = $(this).attr('data-p');
		$('.pa:not(#'+a+')').slideUp();
		$('#'+a).slideToggle();
		
		var r1= $(this).find('i').hasClass('rot');
		
		
		$('.titr h4').removeClass('acc');
		$('.titr i').removeClass('rot');
		
		
		
		if(r1==false){
			$(this).find('i').addClass('rot');
			$(this).find('h4').addClass('acc');
		}
		else{
			$(this).find('i').removeClass('rot');
			$(this).find('h4').removeClass('acc');
		}
	}); 
	
	
	
	$('.phone i').click(function(){
		
		$('#request').show(222);
		
	});
	
	
	$('.close').click(function(){
		
		$('#request').hide(222);
		
	});
	
	
	
	$('.sabad').mouseover(function(){
		
		$('.sabadekharid').show(500);
		
	});
	
	$('.sabad').mouseleave(function(){
		
		$('.sabadekharid').hide(500);
		
	});
	
	
	
	$('.dokme4 , .dokme3').click(function(){
		
		
//		var a = $(this).attr('data-sign');
		var a = $(this).data('sign');
		
		if(a=='up'){
			$('#signing').hide();
			$('#signup').show();
			$('.signup').addClass('asc');
			$('.signing').removeClass('asc');
		}
		else{
			$('#signing').show();
			$('#signup').hide();
			$('.signup').removeClass('asc');
			$('.signing').addClass('asc');
		}
		
		$('.sabtenam').show(222);
	});
	
	$('.close').click(function(){
			
		$('#request').hide(222);
		
	});
	
	
	
	$('.close2').click(function(){
		
		$('.sabtenam').hide(222);
		
	});
	
	
	
	$('.signing, .signup').click(function(){
		
		var a = $(this).hasClass('signup');
		
		if(a==true){
			$('#signing').hide(700);
			$('#signup').show(700);
			$('.signup').addClass('asc');
			$('.signing').removeClass('asc');
		}
		else{
			$('#signing').show(700);
			$('#signup').hide(700);
			$('.signup').removeClass('asc');
			$('.signing').addClass('asc');
		}
		
	});
	
	
	$(document).click(function(e){
		
		var a = e.originalEvent.path;
		
		
		if(a[0].className=='sabtenam'){
			$('.sabtenam').hide(222);
		}
		
	});
	
	
	
	$(document).click(function(e){
		
		var a = e.originalEvent.path;
		
		
		if(a[0].className=='request'){
			$('#request').hide(222);
		}
		
	});
	
	
	
	

	});









