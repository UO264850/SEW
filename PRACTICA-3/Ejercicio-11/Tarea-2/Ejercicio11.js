class GeoLocalizacion {
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.errores.bind(this));
    }
    getPosicion(posicion){
        this.mensaje = "Petición correcta";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }
    getAltitud(){
        return this.altitud;
    }
    errores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite acceso a la ubicación"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información  no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Error desconocido"
            break;
        }
    }
    verTodo(){
        var datos='<ul><li>' + this.mensaje + '</li>'; 
        datos+='<li>Longitud: '+this.longitud +' grados</li>'; 
        datos+='<li>Latitud: '+this.latitud +' grados</li>';
        datos+='<li>Precisión de la latitud y longitud: '+ this.precision +' metros</li>';
        datos+='<li>Altitud: '+ this.altitude +' metros</li>';
        datos+='<li>Precisión de la altitud: '+ this.precisionAltitud +' metros</li>'; 
        datos+='<li>Rumbo: '+ this.rumbo +' grados</li>'; 
        datos+='<li>Velocidad: '+ this.velocidad +' metros/segundo</li></ul>';
        $('p').append(datos);
    }
}
var geoLoc = new GeoLocalizacion();