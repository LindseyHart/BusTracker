
async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();

mapboxgl.accesstoken = 'pk.eyJ1IjoibGluZHpoYXJ0IiwiYSI6ImNsZ2U5NDVvdDBydjUzcnM5NTQzNDNvN2UifQ.4GIKRQcutzGPw6Ru3xE9KA';

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://stles/mapbox/streets-v11',
	center: [-71.101,42.358],
	zoom: 10
})
