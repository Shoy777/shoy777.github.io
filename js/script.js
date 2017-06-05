	( function( $ ) {
		
		/*RETORNAR ARRIBA*/
		$('.go-top').click(function(){
			$('body, html').animate({
				scrollTop: '0px'
			}, 3000);
		});
		$(window).scroll(function(){
			if( $(this).scrollTop() > 1000 ){
				$('.go-top').slideDown(500);
			} else {
				$('.go-top').slideUp(500);
			}
		});
		/*DESPLEGAR MENU*/
		$("#open-menu").click(function(){
			if($(window).width()<=768){
			$(".container-menu").slideToggle('fast', function() {
				if(!$(".search-form").is(":hidden")){
					$(".search-form").hide();
					$('.open-search').removeClass("fa-search-minus");
					$('.open-search').addClass("fa-search");
				}
				if ($('.container-menu').is(':hidden')) {
					$('body').removeClass("o-hidden");
					$('.nav-bar').removeClass("fixed-menu");
					$('.open-menu').removeClass("fa-remove");
					$('.open-menu').addClass("fa-bars");
				}else{
					$('body').addClass("o-hidden");
					$('.nav-bar').addClass("fixed-menu");
					$('.open-menu').removeClass("fa-bars");
					$('.open-menu').addClass("fa-remove");
				}
			});
			}
		});
		
		/*TARGET NAVBAR*/
		$('html').click(function(event) {
			var $target = $(event.target);
			if ($target.parents('.nav-bar').length == 0) {
				if(window.innerWidth<=768){
					$(".container-menu").slideUp();
					$('body').removeClass("o-hidden");
					$('.nav-bar').removeClass("fixed-menu");
					$('.open-menu').removeClass("fa-remove");
					$('.open-menu').addClass("fa-bars");
					$('.open-menu').removeClass("bg-26323F");
				}else{
					$('body').removeClass("o-hidden");
					$('.nav-bar').removeClass("fixed-menu");
				}
			}
		});
		$('body').click(function(event) {
			var $target = $(event.target);
			if ($target.parents('.nav-bar').length == 0) {
				if(window.innerWidth<=768){
					$(".container-menu").slideUp();
					$('body').removeClass("o-hidden");
					$('.nav-bar').removeClass("fixed-menu");
					$('.open-menu').removeClass("fa-remove");
					$('.open-menu').addClass("fa-bars");
					$('.open-menu').removeClass("bg-26323F");
				}else{
					$('body').removeClass("o-hidden");
					$('.nav-bar').removeClass("fixed-menu");
				}
			}
		});
		$(window).resize(function(){
			$('.nav-bar').removeClass("fixed-menu");
			$('body').removeClass("o-hidden");
			if(window.innerWidth>768){
				$(".container-menu").show();
			}
			else{
				$(".container-menu").hide();
			}
		});
		/*SCROLL DOWN*/
		$('a.toggle-bottom').click(function(e){
			e.preventDefault();
			$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 2000);
		});
		
		/*INIT WOW*/
		new WOW().init();
		/*SLIDER DISENOS*/
		$("#slider-diseno").owlCarousel({
			items : 4,
			paginationSpeed : 2000,
			loop:true,
			transitionStyle : "fade",
			autoPlay: 77700,
			navigation : true
		});
		
		/*SLIDER QUOTES*/
		$("#slider-quote").owlCarousel({
			slideSpeed : 200,
			paginationSpeed : 400,
			loop:true,
			singleItem:true ,
			transitionStyle : "fade",
			autoPlay:true,
			autoPlayTimeout:2000
		});
		
		$("header nav li a").click(function(e) {
			$("header nav li a.active").each(function() {
				$(this).removeClass("active");	
			});
			$(this).addClass("active");
		});
		
	})(jQuery);