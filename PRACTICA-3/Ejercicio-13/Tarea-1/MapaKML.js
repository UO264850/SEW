class FileManager {

    constructor() {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            document.write("<p>¡¡¡ Este navegador NO soporta el API File y este programa puede no funcionar correctamente !!!</p>");
        }

        this.points = new Array();
    }

    subirKML() {
        var ficheroProcesado = document.getElementsByName("subirKml")[0].files[0];
        var lugares = $("Placemark", ficheroProcesado);
        for(var i =0; i<lugares.length; i++){
            var coord = $("Point coordinates", lugares[i]).value().split(",");
            var lat = coord[0];
            var lon = coord[1];
            this.points.push(new Point(lat, lon));
        };

        this.cargarMapa();
    }

    cargarMapa() {
        //poner mapa con centro en oviedo
        var mymap = L.map('map').setView([43.3547222222, -5.85111111111], 7);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoidW8yNjQ4NTAiLCJhIjoiY2tpOHA0YzFnMDd1NzJybW44cnlwYzY3byJ9.cZyMLJPxJr5mc9PczSz5IQ'
        }).addTo(mymap);

        //cargar puntos
        this.points.forEach(point => {
            L.marker([point.lon, point.lat]).addTo(mymap);
        })  
    }

}

class Point {
    constructor(lat, lon) {
        this.lat = lat;
        this.lon = lon;
    }
}

var fileManager = new FileManager();
