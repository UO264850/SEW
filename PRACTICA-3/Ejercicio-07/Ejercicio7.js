class Manager {
    constructor() {
    }
    mostrar() {
        $("img").show();
    }
    ocultar() {
        $("img").hide();
    }
    cambiar(url) {
        $("img").attr("src", url);
    }
    add() {
        var nombreElemento = $("input[name=nuevoElemento]").val();
        $("ul").append("<li>" + nombreElemento.toString() + "</li>");
        $("input[name=nuevoElemento]").val('')
    }
    vaciar() {
        $("ul").empty();
    }
    mostrarLista() {
        $("h3").show();
        $("ul").show();
    }
    ocultarLista() {
        $("ul").hide();
    }
    calcularFilasColumnas() {
        var total_filas = 0;
        var total_columnas = 0;

        $('table tbody').find('tr').each(function () {     
            total_filas++;
        });
        $('table thead tr').find('th').each(function () {     
            total_columnas++;
        });
        
        $("input[name=totalFilas]").val(total_filas);
        $("input[name=totalColumnas]").val(total_columnas);
    }
    analizarDoc(){
        $("*", document.body).each(function() {
            var eltPadre = $(this).parent().get(0).tagName;
            $("p[title=resumen]").append("Elemento padre : "  + eltPadre.toString() + " elemento : " + $(this).get(0).tagName.toString() +". ");
        });
    }
}
var manager = new Manager();