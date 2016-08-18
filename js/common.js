$(document).ready(function() {

	$(".user_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_menu_button").click(function() {
		$(".main_menu ul").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Карусель
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
		autoHeight : true
	});
	owl.on(".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			$("#callback").fadeOut("fast", function(){
				$(this).before("<p><strong>Спасибо за заявку. Мы свяжемся с вами</strong></p>");
				$('#callback')[0].reset();
				setTimeout("$.fancybox.close()", 1500);
			});
		});
		return false;
	});

	$("#enter").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
				$.fancybox.close();
				$('#enter')[0].reset();
		});
		return false;
	});


	$("#check_in").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			var password = $("#password").val();
			var password_repeat = $("#password_repeat").val();
			if (password != password_repeat ) {
				alert ("Пароли не совпадают!");
			}
			else {
				$("#check_in").fadeOut("fast", function(){
					$(this).before("<p><strong>Добро пожаловать!</strong></p>");
					$('#check_in')[0].reset();
					setTimeout("$.fancybox.close()", 1500);
				});
			}
		});
		return false;
	});


/*
	$("#check_in").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			$("#check_in").fadeOut("fast", function(){
				$(this).before("<p><strong>Добро пожаловать!</strong></p>");
				setTimeout("$.fancybox.close()", 1500);
			});
		});
		return false;
	});




 $("#login_form").bind("submit", function() {

 if ($("#login_name").val().length < 1 || $("#login_pass").val().length < 1) {
 $("#login_error").show();
 $.fancybox.resize();
 return false;
 }

 $.fancybox.showActivity();

 $.ajax({
 type		: "POST",
 cache	: false,
 url		: "/data/login.php",
 data		: $(this).serializeArray(),
 success: function(data) {
 $.fancybox(data);
 }
 });

 return false;
 });
*/







	// Переход вверх
	// http://dedushka.org/uroki/5503.html
	jQuery('#scrollup img').mouseover( function(){
		jQuery( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0);
		return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('#scrollup').fadeIn('fast');
		} else {
			jQuery('#scrollup').fadeOut('fast');
		}
	});

});