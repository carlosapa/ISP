/*=== set equal the heights of the splitted content ===*/

var set_heights = (function (win, doc, $) {

	'use strict'; 
	
	var parents = $('.splited_content:not(.js_not_equal)');
	var responsive_limit = 900;
	
	var getter = (function (els) {
		var top_height = 0;
		els.each(function (i, e) {
			var height = $(e).height();
			top_height = (height > top_height) ? height : top_height;
		});	
		return top_height;
	});

	var setter = (function (els, h) {
		els.each(function (i, e) {
			$(e).css('height', '');
			$(e).css('height', h + 'px');
		});
	});

	var _init = (function () {
		parents.each(function(i, e) {
			var items = $(e).find('.splited_content__item');
			var height = getter(items);
			setter(items, height);
		});		
	});

	var _reset = (function () {
		parents.each(function(i, e) {
			var items = $(e).find('.splited_content__item');
			items.each(function (i, e) {
				$(e).css('height', '');
			});
		});		
	});

	//onload
	if ($(win).width() > responsive_limit) { _init(); }
	

	//onresize
	$(win).on('resize', function () {
		var w_width = $(win).width();
		if (w_width > responsive_limit) { _init(); }	else {
			_reset();
		}	
	});
	
//}(window, document, jQuery));
});
set_heights(window, document, jQuery);

/*=== init anythingslider for the jumbotron slider ===*/

var init_slider = (function (win, doc, $) {

	'use strict'; 
	$('.slider_items').anythingSlider({
		expand: true,
		resizeContents: true,
		buildArrows: false,
		buildNavigation: false,
 		buildStartStop: false, 
 		infiniteSlides: true,
 		hashTags: false,
 		animationTime: 800, 
	});

	// build custom arrows
	var next_arr = $('.slider_next > img');
	var back_arr = $('.slider_back > img');
	var slider = $('.slider_items').data('AnythingSlider');


	next_arr.on('click touchstart', function (e) {
		slider.goForward(true);
	});

	back_arr.on('click touchstart', function (e) {
		slider.goBack(true);
	});

	// build custom navigation
	var navi_items = $('.slider_navi_item');

	navi_items.each(function (i, e) {
		$(e).on('click touchstart', function (ev) {
			var index = $(ev.target).closest('.slider_navi_item').attr('data-slider-panel');
			slider.gotoPage(index, true, function (slider) {
				actualizeNavi(index-1)
			}, 0);
		})
	});

	$('.slider_items').bind('slide_complete', function (e, slider) {
		var index = slider.currentPage;
		actualizeNavi(index-1);
	})

	var actualizeNavi = function (i) {
		navi_items.each(function () {
			$(this).removeClass('active');
		});
		navi_items.eq(i).addClass('active');
	};

}(window, document, jQuery));


/*=== init colorbox in projects page ===*/

var init_colorbox = (function (w, d, $) {
	'use strict'; 

	if ($('.cboxElement').length > 0) {

		var project_box = $('.proyect_pics');
		var project_length = project_box.length;

		for (var i = 1; i < project_length + 1; i++) {

			$('.group' + i + ', .iframe.group' + i).colorbox({
				rel:'group' + i, 
				transition:"none",
				width:"70%", 
				height:"70%", 
				scrolling: false,
				fixed: true,
				reposition: false,
				onOpen: function (e) {
					
					$(colorbox).addClass('box_in');
					$(colorbox).removeClass('box_out');
					$(colorbox).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
						$(colorbox).removeClass('box_in');
					});

					$(cboxOverlay).addClass('fade_in');
					$(cboxOverlay).removeClass('fade_out');
					$(cboxOverlay).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
						$(colorbox).removeClass('fade_in');
					});
				}, 
				onCleanup: function (e) {
					
					$(colorbox).addClass('box_out');
					$(colorbox).removeClass('box_in');
					$(colorbox).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
						$(colorbox).removeClass('box_out');
					});

					$(cboxOverlay).addClass('fade_out');
					$(cboxOverlay).removeClass('fade_in');
					$(cboxOverlay).on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
						$(colorbox).removeClass('fade_out');
					});
				},
				onLoad: function () {
					
					console.log(this);
				}
			});

			$('.iframe.group' + i).colorbox({
				iframe: true
			});
		
		}

		//localisation: 

		jQuery.extend(jQuery.colorbox.settings, {
			current: "Bild {current} von {total}",
			previous: "Zurück",
			next: "Vor",
			close: "Schließen",
			xhrError: "Dieser Inhalt konnte nicht geladen werden.",
			imgError: "Dieses Bild konnte nicht geladen werden.",
			slideshowStart: "Slideshow starten",
			slideshowStop: "Slideshow anhalten"
		});

		//$(cboxOverlay).on('click', function () { return false; });
	}

//}(window, document, jQuery));
});

init_colorbox(window, document, jQuery);

/*=== Smooth scrolling to anchors ===*/

var smooth_anchors = (function (win, doc, $) {
	'use strict'; 

	var trigger = '.anchor_jump';
	var anchors = $(trigger);
	var smooth_scrooll_to = function (hash_tag) {
	
		if (location.hash !== '') {

			var hash = location.hash.replace('#_', '');
			var target = $('a[name="' + hash + '"]');
			
			if (target.length) {
				
				
				$(win).on('DOMContentLoaded', function (e) {	
					window.setTimeout( function () {
						$('html,body').animate({ scrollTop: target.offset().top - 100 }, 1500, 'easeInOutQuad', null); 
						return false; 
					}, 400);

				});
			}			
		}
	};

	//on load
	smooth_scrooll_to(location.hash);

	anchors.each(function (ind, elem) {

		$(elem).on('click touchstart', function (ev) {
			
			ev.preventDefault();
			
			var anchor_hash = $(this).attr('href');
			var anchor_hash_position = anchor_hash.indexOf('#');

			if (anchor_hash_position < 0) return false;

			var anchor_hash_tag = anchor_hash.substring(anchor_hash_position + 1);
			var url = anchor_hash.substring(0, anchor_hash_position);

			//is in page or in another page

			if ($('a[name="' + anchor_hash_tag + '"]').length > 0) {
				smooth_scrooll_to(anchor_hash_tag);
			} else {
				win.location.href = url + '#_' + anchor_hash_tag;
			}
		})
	});

}(window, document, jQuery));


/*=== Load new posts onscroll ===*/

var infinite_scroll = (function (win, doc, $) {
	'use strict';

	var object_to_append_to = $('.section_body');
	var load_already = 1;

	if (!$('body').hasClass('projekte')) return false;

	$(win).on('scroll', function (e) {
		if ($(window).scrollTop() + $(window).height() == $(document).height()) {
			request_new_posts(7, 10);
		}
	});

	var request_new_posts = function (_in, _how) {
		
		if (load_already <= 0) return false;

		var ajax = $.ajax({
			type: 'POST',
			url: 'tmpl/xhr_request.php',
			data: { last_post: _in, posts_to_load: _how }
		})

		.success( function (data) {
			var obj = $.parseJSON(data);
			window.setTimeout(function() {
				for (var i in obj) {
					$(obj[i]).appendTo(object_to_append_to);
				}

				init_colorbox(window, document, jQuery);
				set_heights(window, document, jQuery);

			}, 500);
			load_already--;
		});
	};

}(window, document, jQuery));


/*=== Show menu dropdown ===*/

var show_menu = (function (win, doc, $) {

	var menu = $('.head_navigation__responsive');
	var toggle = $('.navigation__toggle');
	var classes = ['in', 'out'];
	var animating = false;

	toggle.on('click', function (e) {

		if (!animating) {

			if (menu.hasClass(classes[0])) {
				menu.toggleClass(classes[0]);
				menu.toggleClass(classes[1]);
				animating = true;
			
			} else if (menu.hasClass(classes[1])) {
				menu.toggleClass(classes[1]);
				menu.toggleClass(classes[0]);
				animating = true;
			
			} else {
				menu.addClass(classes[0]);
				animating = true;
			}

		}

	});

	menu.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
		animating = false;
	})

}(window, document, jQuery));




















