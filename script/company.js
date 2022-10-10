
window.addEventListener("DOMContentLoaded", function () {

	var container = document.getElementById('map');
	var options = {
		center: new kakao.maps.LatLng(35.1773940969882, 126.8994936178828),
		level: 2
	};

	var map = new kakao.maps.Map(container, options);


	var markerPosition = new kakao.maps.LatLng(35.1773940969882, 126.8994936178828);

	var marker = new kakao.maps.Marker({
		position: markerPosition
	});
	marker.setMap(map);
})
