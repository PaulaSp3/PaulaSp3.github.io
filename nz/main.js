/*Neuseelandreise Skript */
// einzeilger Kommentar

/*Link von Leaflet Startseite*/
/*L: Klasse Leaflet (map: methode)*/
let lat = -39.49
let lng = 176.90
let zoom = 10
let map = L.map('map' /*Referenz zu div id=map*/ ).setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    /*Dictionary*/
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup('<h3>Napier</h3>')
    .openPopup();