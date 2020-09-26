'use strict';

$(function(){
	// #で始まるリンクをクリックしたら実行されます
	$('a[href^="#"]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒で記述
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	//今日の日付データを作成する
	var today = new Date();
	//来年1月1日の日付データを作成する
	var startday= new Date("2019/8/12");
	//来年1月1日－今日のミリ秒を計算し、日にちに換算する
	var day = Math.ceil((today-startday)/(60*60*24*1000));
	$('#ruby_stady').text(day);

	// $(window).on('load', function() {
	$("body").removeClass("preload");
	// });


	var _window = $(window),
	_header = $('.header_nav'),
	heroBottom;

	_window.on('scroll',function(){
		heroBottom = $('.hero').height();
		if(_window.scrollTop() > heroBottom){
			$('.header_nav').addClass('fixed');
		}
		else{
			$('.header_nav').removeClass('fixed');
		}
	});

	_window.trigger('scroll');

	$('.Toggle').click(function() {
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$('.NavMenu').addClass('active'); //クラスを付与
		} else {
			$('.NavMenu').removeClass('active'); //クラスを外す
		}
	});

	$('.socialBtn li a').click(function(){
		window.open(this.href,'popup','width=600,height=300');
		return false;
	});


});
