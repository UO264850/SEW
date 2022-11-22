class Calculadora {
    constructor() {
        this.numeroEnMemoria = new Number('0');
        this.wasMrcLastKey = 0;
        this.pantalla = "";
        this.operador = null;
        this.procesKey();
    }

    checkScreen() {
        if (document.getElementById('pantalla').value == 'Error' || document.getElementById('pantalla').value == '0') {
            this.borrar();
        }
    }

    igual() {
        this.checkScreen();
        var str = document.getElementById('pantalla').value;

        try {
            document.getElementById('pantalla').value = eval(str);
        } catch (err) {
            document.getElementById('pantalla').value = 'Error';
        }

    }
    mrc() {
        if (this.wasMrcLastKey == 1) {
            this.wasMrcLastKey = 0;
            document.getElementById('pantalla').value = this.numeroEnMemoria;
            this.numeroEnMemoria = Number('0');
        }
        else {
            this.wasMrcLastKey = 1;
            this.numeroEnMemoria = document.getElementById('pantalla').value;
            document.getElementById('pantalla').value = '0';
        }
    }
    mmenos() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = Number.parseInt(document.getElementById('pantalla').value);
        try {
            this.numeroEnMemoria -= Number.parseInt(numeroPantalla);
        } catch (err) {
            document.getElementById('pantalla').value = 'Error';
        }
    }
    mmas() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = Number.parseInt(document.getElementById('pantalla').value);
        try {
            this.numeroEnMemoria += Number.parseInt(numeroPantalla);
        } catch (err) {
            document.getElementById('pantalla').value = 'Error';
        }
    }

    digitos(num) {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla.toString() + num.toString();
    }

    division() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '/';
    }
    multiplicacion() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '*';
    }
    resta() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '-';
    }
    suma() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '+';
    }
    punto() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '.';
    }
    borrar() {
        this.wasMrcLastKey = 0;
        document.getElementById('pantalla').value = '';
    }
    masmenos(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str!=''){
            try {
                document.getElementById('pantalla').value = eval(str);
                document.getElementById('pantalla').value = '-' + str;
            } catch (err) {
                document.getElementById('pantalla').value = 'Error';
            }
        }
    }
    raiz(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Number.sqrt(0);
        } else{ 
            try {
                document.getElementById('pantalla').value = Number.sqrt(eval(str));
            } catch (err) {
                document.getElementById('pantalla').value = 'Error';
            }
        }
    }

    porcentaje(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = "0";
        } else{
            try {
                document.getElementById('pantalla').value = eval(str / 100);
            } catch (err) {
                document.getElementById('pantalla').value = 'Error';
            }
        }
    }

    procesKey() {
        document.addEventListener('keydown', (event) => {
            var tecla = event.key;
            switch (tecla) {
                case "0":
                    this.digitos("0");
                    break;
                case "1":
                    this.digitos("1");
                    break;
                case "2":
                    this.digitos("2");
                    break;
                case "3":
                    this.digitos("3");
                    break;
                case "4":
                    this.digitos("4");
                    break;
                case "5":
                    this.digitos("5");
                    break;
                case "6":
                    this.digitos("6");
                    break;
                case "7":
                    this.digitos("7");
                    break;
                case "8":
                    this.digitos("8");
                    break;
                case "9":
                    this.digitos("9");
                    break;
                case "Enter":
                    this.igual();
                    break;
                case ".":
                    this.punto();
                    break;
                case "+":
                    this.suma();
                    break;
                case "-":
                    this.resta();
                    break;
                case "x":
                    this.multiplicacion();
                    break;
                case "/":
                    this.division();
                    break;
                case "c":
                    this.borrar();
                    break;
                case "m":
                    this.mrc();
                    break;
                case "r":
                    this.raiz();
                    break;

            }
        });
    }
}
var calc = new Calculadora();