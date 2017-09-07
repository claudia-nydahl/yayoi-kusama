$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['home', 'about', 'works', 'infinity-rooms']
	});
});

$('#japanese-music').trigger('load');
$(document).ready(function() {
	$('#japanese-music').trigger('play');
});

var clicks = 0;

$('.sound-button').click(function () {
   clicks++;

   var x = (clicks / 2);

   if (x % 1 == 0) {
       $('#japanese-music').trigger("play");
   } else {
       $('#japanese-music').trigger("pause");
   }
});

$('.info-icon').click(function() {
	$('.intro').toggle();
	$('.about-info').toggle();
	$('.expo-info').toggle();
});

$(document).ready(function($){
	$("#myPano").pano({
		img: "./img/pumpkin-panorama-2.jpg"
	});
});

$('.nav-button').click(function() {
	$('.drop-menu').animate({width:'toggle'});
});

$('.cross-button').click(function() {
	$('.drop-menu').animate({width:'toggle'});
});

$(".early-life").hover(function () {
    $(this).css("width", "45%");
    $('.slides p').css("margin-left", "46%");
}, function () {
    $(this).css("width", "35%");
    $('.slides p').css("margin-left", "36%");
});

$(".early-work").hover(function () {
    $(this).css("width", "45%");
    $('.slides p').css("margin-left", "46%");
}, function () {
    $(this).css("width", "35%");
    $('.slides p').css("margin-left", "36%");
});

$(".net-paintings").hover(function () {
    $(this).css("width", "45%");
    $('.slides p').css("margin-left", "46%");
}, function () {
    $(this).css("width", "35%");
    $('.slides p').css("margin-left", "36%");
});

$(".infinity-rooms").hover(function () {
    $(this).css("width", "45%");
    $('.slides p').css("margin-left", "46%");
}, function () {
    $(this).css("width", "35%");
    $('.slides p').css("margin-left", "36%");
});

$(document).ready(function($){
	$("#myPano2").pano({
		img: "./img/infinity-room-panorama.png"
	});
});
