// Will contain "fetched" data
// Open trivia db url https://opentdb.com/api.php?amount=50&category=22&type=multiple
const countriesList = document.getElementById("countries");
let countries; 
countriesList.addEventListener("change", newCountrySelection);

// fetch API
fetch("https://restcountries.eu/rest/v2/all")
// Start with promises
    .then(response => response.json())
    .then(data => initialize(data))
    .catch(error => console.log("Error:", error));

function initialize(countriesData) {
    // Define countries
    countries = countriesData;
    // Create an empty string where you can add your option value in at random as a string
    let options = "";
    countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
    countriesList.innerHTML = options;
    // console.log(countriesList);
    // console.log(countriesList.value);
    // console.log(countriesList.length);
    // console.log(countriesList.selectedIndex);
    // console.log(countriesList[10].value);
    // console.log(countriesList[10].text);
    // Random index of one instance of the API call
    countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length);
    displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
    document.querySelector("#flag-container img").src = countryData.flag;
    // If the flag fails to load, have a backup plan
    document.querySelector("#flag-container img").alt = `flag of ${countryData.name}`;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(', ');
    document.getElementById("languages").innerHTML = countryData.languages.filter(l => l.name).map(l => `${l.name}`).join(', ');
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    document.getElementById("lat-long").innerHTML = countryData.latlng;
    initMap(countryData);
}

// Access Google Maps API
function initMap(country) {
    // Create a variable 
    let myLatLng = new google.maps.LatLng(country.latlng[0], country.latlng[1]);
    //object literal
    //instantiate map with mapOptions object
    let mapOptions = { 
        center: myLatLng,
        zoom: 4, 
        disableDefaultUI: true,
        mapTypeId: 'satellite',
        // heading: 90,
        // tilt: 45,
        // zoomControl: true,
        // panControl: true,
        // mapTypeControl: true,
        // scaleControl: true,
        // streetViewControl: true,
        // rotateControl: true,
        // overviewMapControl: true,
        // overviewMapControlOptions: {
        //     opened: true
        // }
    }

    let marker = new google.maps.Marker({
        position: myLatLng
    });

    // Create map
    let map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);
    // Set marker
    marker.setMap(map);

}
//call when page loads 
// google.maps.event.addDomListener(window, "load", getMap());

// Populate card and add the array of countries into the menu
function newCountrySelection(event) {
    displayCountryInfo(event.target.value);
}