

var map_styles = [{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#f0f6f7"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#dae7ed"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f7f9f9"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#cbd6dd"}]},{"featureType":"road.highway.controlled_access","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"weight":2},{"color":"#bebbbb"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#b7bcbe"},{"weight":1.2}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#d6dce3"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#d9e3e9"}]}];
var loadScript = (function (src,callback){
	var script = document.createElement("script");
	script.type = "text/javascript";
	if(callback) script.onload=callback;
	document.getElementsByTagName("head")[0].appendChild(script);
	script.src = src;
});

var initialize = (function () {
	var styledMap = new google.maps.StyledMapType(map_styles, {name: "Styled Map"});
	var position = new google.maps.LatLng(51.499902, 7.078529)
	var mapOptions = {
		zoom: 15,
		center: position,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: true,
		scrollwheel: false
	};

	if (document.body.querySelector('.section #map') !== null) {
		map_kontakt = new google.maps.Map(document.body.querySelector('.section #map'), mapOptions);
		map_kontakt.mapTypes.set('map_style', styledMap);
		map_kontakt.setMapTypeId('map_style');
		map_kontakt.panBy(0, 0);

		var marker = new google.maps.Marker({
		    position: position,
		    map: map_kontakt	
		});
	}

	if (document.body.querySelector('.footer_map #map') !== null) {
		map = new google.maps.Map(document.body.querySelector('.footer_map #map'), mapOptions);
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
		map.panBy(-200, 0);

		var marker = new google.maps.Marker({
		    position: position,
		    map: map	
		});
	}


});

loadScript('http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initialize', function(){});

