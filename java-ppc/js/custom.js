$(document).ready(function() {
  $('.image-link').magnificPopup({
  type: 'image',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title"></div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
   
});
});

$(document).ready(function() {
$('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title"></div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
   
});
});

jQuery(document).ready(function(e) {
    var s = (e(window), e("body")),
        a = e("header"),
        l = (a.outerHeight(!0), e("nav"));
    e(window).scroll(function() {
        e(this).scrollTop() > 1 ? e(".header").addClass("sticky") : e(".header").removeClass("sticky")
    });
    var i = e("#menu-toggle"),
        n = l.children("ul"),
        r = n.children("li:has(ul.sub-menu)"),
        d = e("ul.sub-menu"),
        t = d.children("li:has(ul.sub-menu)").children("a");
    r.addClass("parent").children("a").append(), t.addClass("parent"), i.click(function() {
        return n.slideToggle(200), e(this).children("i").toggleClass("active"), !1
    }), e(window).resize(function() {
        s.hasClass("mobile") || (n.removeAttr("style"), i.children("i").removeClass("active"))
    }), l.find(".menu-item").last("li").addClass("last")

	
});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});



