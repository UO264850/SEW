class CanvasManager {
    constructor() {

    }

    loadCanvas() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');

        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(10, 10, 100, 100);
    }


}

var cm = new CanvasManager();

class HistoryManager {
    constructor() {

    }

    back() {
        window.history.back();
    }

    forward() {
        window.history.forward();
    }

    goTo() {
        var numPaginas = $('input[name=numero]').val();
        $('input[name=numero]').val('');
        window.history.go(numPaginas);
    }
}

var hm = new HistoryManager();

class QuotaManager {
    constructor() {

    }

    quota() {
        navigator.storageQuota.queryInfo("persistent").then(
            function (storageInfo) {
                $('p[title=espacio]').val('Espacio total: ' + storageInfo.quota);
            });
    }

    usage() {
        navigator.storageQuota.queryInfo("persistent").then(
            function (storageInfo) {
                $('p[title=espacio]').val('Espacio en uso: ' + storageInfo.usage);
            });
    }

    available() {
        navigator.storageQuota.queryInfo("persistent").then(
            function (storageInfo) {
                var espLibre = storageInfo.quota - storageInfo.usage;
                $('p[title=espacio]').val('Espacio disponible: ' + espLibre);
            });
    }
}

var sqm = new QuotaManager();