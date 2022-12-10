class ElTiempo {
    constructor(){
        this.apikey = "119b0f001a0a4e4372dcaf3b82747a48";
    }

    cargarTiempo(poblacion){

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + poblacion + "&mode=xml&units=metric&lang=es&APPID=" + this.apikey;
        
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){

                var icono = $("weather", datos).attr("icon");
                var ciudad = $('city', datos).attr("name");
                var pais = $('country', datos).text();
                var lon = $('coord', datos).attr("lon");
                var lat = $('coord', datos).attr("lat");

                var zonaHoraria = new Date().getTimezoneOffset();
                var horaMedida = $('lastupdate', datos).attr("value");
                var hmMiliSeg1970 = Date.parse(horaMedida);
                hmMiliSeg1970 -= zonaHoraria * 60 * 1000;
                var hmLocal = (new Date(hmMiliSeg1970)).toLocaleTimeString("es-ES");
                var fmLocal = (new Date(hmMiliSeg1970)).toLocaleDateString("es-ES");

                var temp = $('temperature', datos).attr("value");
                var tempMin = $('temperature', datos).attr("min");
                var tempMax = $('temperature', datos).attr("max");
                var tempUnit = $('temperature', datos).attr("unit");
                var descripcion = $('weather', datos).attr("value");
                var clouds = $('clouds', datos).attr("value");
                var cloudsName = $('clouds', datos).attr("name");
                var visibilidad = $('visibility', datos).attr("value");
                var lluviaValue = $('precipitation', datos).attr("value");
                var lluviaMode = $('precipitation', datos).attr("mode");
                var velViento = $('speed', datos).attr("value");
                var viento = $('speed', datos).attr("name");
                var dirViento = $('direction', datos).attr("value");
                var codeViento = $('direction', datos).attr("code");
                var nDirViento = $('direction', datos).attr("name");
                var humedad = $('humidity', datos).attr("value");
                var humedadUnit = $('humidity', datos).attr("unit");
                var presion = $('pressure', datos).attr("value");
                var presionUnit = $('pressure', datos).attr("unit");
                
                var amanecer = $('sun', datos).attr("rise");  
                var aMiliSeg1970 = Date.parse(amanecer);
                aMiliSeg1970 -= zonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");

                var oscurecer = $('sun', datos).attr("set");
                var oMiliSeg1970 = Date.parse(oscurecer);
                oMiliSeg1970 -= zonaHoraria * 60 * 1000;
                var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");

                var aux = "Se muestran los datos para " + ciudad + ", " + pais + "(" + lat + ", " + lon + ").";
                
                aux += "<img src=\"http://openweathermap.org/img/w/"+ icono +".png\" alt=\"Icono tiempo actual\">";
                aux += "<ul><li>Se han tomado las medidas a las " + hmLocal + " el dia " + fmLocal + "</li>";
                aux += "<li>La temperatura actual es " + temp + "</li>";
                aux += "<li>La temperatura máxima es " + tempMax + tempUnit + ", y la mínima es " + tempMin + tempUnit +"</li>";
                aux += "<li>Nubosidad: " + clouds + ", " + cloudsName + "</li>";
                aux += "<li>Visibilidad: " + visibilidad + "</li>";
                aux += "<li>Precipitaciones: " + lluviaValue + ", " + lluviaMode + "</li>";
                aux += "<li>Descripción: " + descripcion + "</li>";
                aux += "<li>Nombre del viento: " + viento +"</li>";
                aux += "<li>Velocidad y dirección del viento: " + velViento + ", " + dirViento +"</li>";
                aux += "<li>Nombre de direccion del viento: " + nDirViento +"</li>";
                aux += "<li>Codigo del viento: " + codeViento +"</li>";
                aux += "<li>Humedad: " + humedad + humedadUnit + ", Presión: " + presion + presionUnit + "</li>";
                aux += "<li>Horario amanecer: "  + amanecerLocal + "</li>";
                aux += "<li>Horario anochecer: " + oscurecerLocal + "</li></ul>";
                
                $("p").html(aux);
                
                
            },
            error:function(){
                $("p").html("No se pudieron obtener los datos.");
            }

        });
    }

}
var elTiempo = new ElTiempo();