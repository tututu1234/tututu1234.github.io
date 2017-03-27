$(function() {

	//	index
	var list = $(".theEarth>ul>li");
	for(var i = 0; i < list.length; i++) {
		if(i % 2 == 0) {
			$(".theEarth>ul>li").eq(i).mouseenter(function() {
				$(this).stop().animate({
					"margin-left": 10 + "px"
				}, "slow");
				$(".detail").eq($(this).index()).fadeIn();
			}).mouseleave(function() {
				$(".detail").eq($(this).index()).fadeOut();
				$(this).stop().animate({
					"margin-left": 0
				}, "slow");
			})
		} else {
			$(".theEarth>ul>li").eq(i).mouseenter(function() {
				$(this).stop().animate({
					"margin-left": -10 + "px"
				}, "slow");
				$(".detail").eq($(this).index()).fadeIn();
			}).mouseleave(function() {
				$(".detail").eq($(this).index()).fadeOut();
				$(this).stop().animate({
					"margin-left": 0
				}, "slow");
			})
		}
	}

	// about-rightnav
	$(".about_nav>li>a").click(function() {
		$(this).addClass("nav_active").parents().siblings().children().removeClass("nav_active");
		$(".mainbox").eq($(this).parents().index()).addClass("box_active").siblings().removeClass("box_active");
	})

	//worker-banner
	var picNum = $(".slides li");
	var n = 0;
	//next
	$("#next").click(function() {
		clearInterval(timer);
		n++;
		if(n > picNum.length - 1) {
			n = 0;
		}
		picNum.eq(n).fadeIn().siblings().fadeOut();
		m = n;
	}).mouseleave(function(){
		bannerChange();
	});
	//prev
	$("#prev").click(function() {
		clearInterval(timer);
		n--;
		if(n < 0) {
			n = picNum.length - 1;
		}
		picNum.eq(n).fadeIn().siblings().fadeOut();
		m = n;
	}).mouseleave(function(){
		bannerChange();
	});
	//auto
	var timer = null;
	var m = 0;

	function bannerChange() {
		timer = setInterval(function() {
			m++;
			if(m > picNum.length - 1) {
				m = 0;
			}
			picNum.eq(m).fadeIn().siblings().fadeOut();
		}, 1000);
	}
	
	bannerChange();
	
	//develop

})