/*Neuseelandreise Skript */
// einzeilger Kommentar

/*Link von Leaflet Startseite*/
/*L: Klasse Leaflet (map: methode)*/
let lat = -39.49;
let lng = 176.90;
let zoom = 10;

// array: []
let coords = [-39.49, 176.90];

/*
// In Konsole anzeigen: in Webseite F12
console.log(coords[0]);
console.log(coords.length);
console.log('text');
console.log(`latitude = ${lat}`);
console.log(ETAPPEN);
console.log(ETAPPEN[0])
console.log(ETAPPEN[0].titel);
console.log(ETAPPEN[0].github);
*/


let popup = `
    <h3> ${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[0].lng}°</li>
        <li>geogr. Breite: ${ETAPPEN[0].lat}°</li>
        <li><a href = "${ETAPPEN[0].wikipedia}">Wikipedia-Link </a> </li>
        <li><a href ="https://${ETAPPEN[0].github}.github.io/nz/">Link zur Etappenseite </a> </li>
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

// Alle Etappenziele anzeigen
for (let etappe of ETAPPEN){

    let popup = `
    <h3> ${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
        <li>geogr. Länge: ${etappe.lng}°</li>
        <li>geogr. Breite: ${etappe.lat}°</li>
        <li><a href = "${etappe.wikipedia}">Wikipedia-Link </a> </li>
        <li><a href ="https://${etappe.github}.github.io/nz/">Link zur Etappenseite </a> </li>
    </ul>
`;
    //console.log(etappe);
    L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
}

//Hütten anzeigen
for (let hut of HUTS) 
{
let popup = `
    <h3>${hut.name}</h3>
    `;    
L.circleMarker([hut.lat, hut.lng]).addTo(map).bindPopup(popup);
}
