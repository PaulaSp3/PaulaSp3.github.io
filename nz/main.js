/*Neuseelandreise Skript */
// einzeilger Kommentar

/*Link von Leaflet Startseite*/
/*L: Klasse Leaflet (map: methode)*/

let zoom = 10;

// array: []
let coords = [ETAPPEN[12].lat,ETAPPEN[12].lng];

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


let map = L.map('map' /*Referenz zu div id=map*/ ).setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    /*Dictionary*/
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Alle Etappenziele anzeigen
for (let etappe of ETAPPEN) {

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
    let navClass = "etappenLink"
    let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);

    if(etappe.nr == 13){
        mrk.openPopup();
        navClass = "etappenLink etappeAktuell"
    }

    //Etappennavigation erweitern
    let link = `<a href = "https://${etappe.github}.github.io/nz/" class="${navClass}" title="${etappe.titel}">${etappe.nr}</a>`;
    //Verbindung zur id nav_etappe (in html-Seite)
    document.querySelector("#nav_etappe").innerHTML += link
}

//Hütten anzeigen

//auf Variablen zugreifen mit ${} wenn man innerhal <> ist

for (let hut of HUTS) {
    let popup = `
    <h3>${hut.name}</h3>
    <h4>${hut.region}</h4>
    <hr> 
    <p>${hut.info}</p>
    <img src = "${hut.image}" alt = "Bild der Hütte">
    <hr>
    <a href= "${hut.link}" target="Neuseeland">Link zur Hütte</a>
    `;
    let statusColor;
    if (hut.open == true) {statusColor = "green";        
    } else{
        statusColor = "red";
    }

    L.circleMarker([hut.lat, hut.lng], {color: statusColor}).addTo(map).bindPopup(popup);
}