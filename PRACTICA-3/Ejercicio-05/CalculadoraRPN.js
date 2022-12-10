class CalculadoraRPN {
    constructor() {
        this.pila = new Array();
        this.procesKey();
    }
    push() {
        var valor = document.getElementById('pantalla').value;
        this.pila.push(valor);
        this.updateExpresion();
        document.getElementById('pantalla').value = '';
    }
    pop() {
        return this.pila.pop();
    }
    write(valor) {
        var str = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = str + valor;
    }
    sin() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.sin(number));
            this.updateExpresion();
        }
    }
    cos() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.cos(number));
            this.updateExpresion();
        }
    }
    tan() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.tan(number));
            this.updateExpresion();
        }
    }
    asin() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.asin(number));
            this.updateExpresion();
        }
    }
    acos() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.acos(number));
            this.updateExpresion();
        }
    }
    atan() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.atan(number));
            this.updateExpresion();
        }
    }
    logaritmo() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.log(number));
            this.updateExpresion();
        }
    }
    raiz() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(Math.sqrt(number));
            this.updateExpresion();
        }
    }
    unodivx() {
        if (this.pila.length >= 1) {
            var number = this.pop();
            this.pila.push(1 / number);
            this.updateExpresion();
        }
    }
    pi() {
        this.write(Math.PI);
    }
    limpiarRes() {
        document.getElementById('pantalla').value = '';
    }
    limpiar() {
        this.limpiarRes();
        this.pila = new Array();
        this.updateExpresion();
    }
    borrar() {
        var val = document.getElementById('pantalla').value;
        if (val.length > 0) {
            document.getElementById('pantalla').value = val.slice(0, -1);
        }
    }
    division() {
        if (this.pila.length >= 2) {
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1 / number2);
            this.updateExpresion();
        }
    }
    multiplicacion() {
        if (this.pila.length >= 2) {
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1 * number2);
            this.updateExpresion();
        }
    }
    resta() {
        if (this.pila.length >= 2) {
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1 - number2);
            this.updateExpresion();
        }
    }
    suma() {
        if (this.pila.length >= 2) {
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1 + number2);
            this.updateExpresion();
        }
    }

    updateExpresion() {
        var expresion = '';
        var number;
        for (number = 0; number < this.pila.length; number++) {
            expresion += this.pila[number] + ' ';
        }
        document.getElementById('expresion').value = expresion;
    }

    procesKey() {
        document.addEventListener('keydown', (event) => {
            var tecla = event.key;
            switch (tecla) {
                case "0":
                    this.write("0");
                    break;
                case "1":
                    this.write("1");
                    break;
                case "2":
                    this.write("2");
                    break;
                case "3":
                    this.write("3");
                    break;
                case "4":
                    this.write("4");
                    break;
                case "5":
                    this.write("5");
                    break;
                case "6":
                    this.write("6");
                    break;
                case "7":
                    this.write("7");
                    break;
                case "8":
                    this.write("8");
                    break;
                case "9":
                    this.write("9");
                    break;
                case "Enter":
                    this.push();
                    break;
                case ".":
                    this.write(".");
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
                    this.limpiar();
                    break;
                case "b":
                    this.borrar();
                    break;
                case "m":
                    this.mrc();
                    break;
                case "r":
                    this.raiz();
                    break;
                case "q":
                    this.sin();
                    break;
                case "w":
                    this.cos();
                    break;
                case "e":
                    this.tan();
                    break;
                case "a":
                    this.asin();
                    break;
                case "s":
                    this.acos();
                    break;
                case "d":
                    this.atan();
                    break;

            }
        });
    }
}
var calc = new CalculadoraRPN();