jQuery(document).ready(function () {
	jQuery('#vmap').vectorMap(
		{
			map: 'usa_en',
			backgroundColor: '#fff',
			borderColor: '#fff',
			borderOpacity: 0.25,
			borderWidth: 3.5,
			color: 'rgba(255,0,0,.1)',
			enableZoom: false,
			// hoverColor: 'rgba(255,0,0,.5)',
			hoverOpacity: 0.5,
			normalizeFunction: 'linear',
			scaleColors: ['red', 'blue'],
			selectedColor: 'rgba(255,0,0,.5)',
			selectedRegions: null,
			showTooltip: false,
			// onRegionClick: function (element, code, region) {
			// 	var message = 'You clicked "'
			// 		+ region
			// 		+ '" which has the code: '
			// 		+ code.toUpperCase();

			// 	alert(message);
			// }
		});
});