class ElTiempo {
    constructor(){
        this.apikey = "119b0f001a0a4e4372dcaf3b82747a48";
    }

    cargarTiempo(poblacion){

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + poblacion + ",ES&units=metric&lang=es&APPID=" + this.apikey;
        
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(obtenido){
                var aux = "Se muestran los datos para " + obtenido.name + ", " + obtenido.sys.country + "(" + obtenido.coord.lat + ", " + obtenido.coord.long + ").";
                
                aux += "<img src=\"http://openweathermap.org/img/w/"+ obtenido.weather[0].icon+".png\" alt=\"Icono tiempo actual\">";
                aux += "<ul><li>La temperatura actual es " + obtenido.main.temp + "</li>";
                aux += "<li>La temperatura máxima es " + obtenido.main.temp_max + ", y la mínima es " + obtenido.main.temp_min +"</li>";
                aux += "<li>Nubosidad: " + obtenido.clouds.all + "</li>";
                aux += "<li>Descripción: " + obtenido.weather[0].description + "</li>";
                aux += "<li>Velocidad y dirección del viento" + obtenido.wind.speed + ", " + obtenido.wind.deg +"</li>";
                aux += "<li>Humedad: " + obtenido.main.humidity + ", Presión: " + obtenido.main.pressure + "</li>";
                aux += "<li>Horario amanecer: "  + new Date(obtenido.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                aux += "<li>Horario anochecer: " + new Date(obtenido.sys.sunset *1000).toLocaleTimeString() + "</li></ul>";
                
                $("p").html(aux);
                
                
            },
            error:function(){
                $("p").html("No se pudieron obtener los datos.");
            }

        });
    }

}
var elTiempo = new ElTiempo();