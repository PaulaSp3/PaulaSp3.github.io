/*Neuseelandreise Skript */
// einzeilger Kommentar

/*Link von Leaflet Startseite*/
/*L: Klasse Leaflet (map: methode)*/
let lat = -39.49;
let lng = 176.90;
let zoom = 10;

// array: []
let coords = [-39.49, 176.90];

// In Konsole anzeigen: in Webseite F12
console.log(coords[0]);
console.log(coords.length);
console.log('text');
console.log(`latitude = ${lat}`);
console.log(ETAPPEN);
console.log(ETAPPEN[0])
console.log(ETAPPEN[0].titel);
console.log(ETAPPEN[0].github);



let popup = `
    <h3> ${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[0].lng}°</li>
        <li>geogr. Breite: ${ETAPPEN[0].lat}°</li>
        <li><a href = "${ETAPPEN[0].wikipedia}">Wikipedia-Link </a> </li>
        <li><a href ="https:/github/ +${ETAPPEN[0].github}">User </a> </li>
    </ul>
`;

let map = L.map('map' /*Referenz zu div id=map*/ ).setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    /*Dictionary*/
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(coords).addTo(map)
    .bindPopup(popup)
    .openPopup();