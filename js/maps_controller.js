

var map_styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
var loadScript = (function (src,callback){
	var script = document.createElement("script");
	script.type = "text/javascript";
	if(callback) script.onload=callback;
	document.getElementsByTagName("head")[0].appendChild(script);
	script.src = src;
});

var initialize = (function () {
	var styledMap = new google.maps.StyledMapType(map_styles, {name: "Styled Map"});
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(51.4885741, 7.1316589),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		scrollwheel: false
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
});

loadScript('http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initialize', function(){});