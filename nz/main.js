/*Neuseelandreise Skript */
// einzeilger Kommentar

/*Link von Leaflet Startseite*/
/*L: Klasse Leaflet (map: methode)*/
var map = L.map('map' /*Referenz zu div id=map*/ ).setView([-39.49, 176.90], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    /*Dictionary*/
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-39.49, 176.90]).addTo(map)
    .bindPopup('<h3>Napier</h3>')
    .openPopup();