class FileManager {
    constructor() {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            document.write("<p>Este navegador NO soporta el API File y este programa puede no funcionar correctamente</p>");
        }

    }

    calcularTamañoArchivos() {
        var nBytes = 0,
            archivos = document.getElementById("archivo").files,
            nArchivos = archivos.length;
        for (var i = 0; i < nArchivos; i++) {
            nBytes += archivos[i].size;
        }
        var nombresTiposTamaños = "";
        for (var i = 0; i < nArchivos; i++) {
            nombresTiposTamaños += "<p>Archivo " + i + " = " + archivos[i].name + ", Tamaño: " + archivos[i].size + " bytes " + ", Tipo: " + archivos[i].type + "</p>"
            var tipo = archivos[i].name.split(".")[1];
            if (tipo.match(/text.*/) || tipo.match(/application.json/)) {
                this.printArchivo(archivos[i]);
            }
        }

        $("p[title=numero]").append(nArchivos);
        $("p[title=tamaño]").append(nBytes);
        $("p[title=tamaño]").append(" bytes");
        $("p[title=nombres]").append(nombresTiposTamaños);
    }
    printArchivo(archivo) {
        var reader = new FileReader();
        reader.onload = function (event) {
            $("p[title=contenido]").append("\n" + archivo.name + " :\n" + reader.result + "\n");
        }
        reader.readAsText(archivo);
        
    }
}

var fm = new FileManager();