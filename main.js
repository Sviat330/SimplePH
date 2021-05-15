$(document).ready(function(){
$('.mid_first').on('click',function(){
	if(!$(this).hasClass('blue')){
		$(this).addClass('blue');
		console.log('First click')
	}else{
		$(this).removeClass('blue');
		console.log('Second click')
	}
});
	$('.mid_first').on('click',function(){
	if(!$('.text_main1').hasClass('text_main')){
		$('.text_main1').addClass('text_main');
		console.log('First click')
	}else{
		$('.text_main1').removeClass('text_main');
		console.log('Second click')
	}
});
$('.mid_sec').on('click',function(){
	if(!$(this).hasClass('blue')){
		$(this).addClass('blue');
		console.log('First click')
	}else{
		$(this).removeClass('blue');
		console.log('Second click')
	}
});
	$('.mid_sec').on('click',function(){
	if(!$('.text_main2').hasClass('text_main')){
		$('.text_main2').addClass('text_main');
		console.log('First click')
	}else{
		$('.text_main2').removeClass('text_main');
		console.log('Second click')
	}
});
$('.mid_third').on('click',function(){
	if(!$(this).hasClass('blue')){
		$(this).addClass('blue');
		console.log('First click')
	}else{
		$(this).removeClass('blue');
		console.log('Second click')
	}
});
	$('.mid_third').on('click',function(){
	if(!$('.text_main3').hasClass('text_main')){
		$('.text_main3').addClass('text_main');
		console.log('First click')
	}else{
		$('.text_main3').removeClass('text_main');
		console.log('Second click')
	}
});
$('.mid_fourth').on('click',function(){
	if(!$(this).hasClass('blue')){
		$(this).addClass('blue');
		console.log('First click')
	}else{
		$(this).removeClass('blue');
		console.log('Second click')
	}
});
	$('.mid_fourth').on('click',function(){
	if(!$('.text_main4').hasClass('text_main')){
		$('.text_main4').addClass('text_main');
		console.log('First click')
	}else{
		$('.text_main4').removeClass('text_main');
		console.log('Second click')
	}
});
	$('button').click(function(){
		alert("На даний момент завантаження немоливе");
	});
	

});
