class GasManager {
  constructor() {
    this.key = "kd8rnn67lqpv5b89c15nq4c12e2jiyc5yl1qy9099kw20ai6jhli8xm9dch7";
  }

  obtenerPreciosGas() {
    $.ajax({
      url: 'https://commodities-api.com/api/latest?access_key=' + this.key + '&base=NG&symbols=AUD,CAD,USD,JPY,EUR,KRW,CNY',
      dataType: 'jsonp',
      success: function (json) {
        $("ul").append("<li>Dólar Australiano: " + json.rates.AUD + "</li>");
        $("ul").append("<li>Dólar Canadiense: " + json.rates.CAD + "</li>");
        $("ul").append("<li>Dólar Estadounidense: " + json.rates.USD + "</li>");
        $("ul").append("<li>Yen: " + json.rates.JPY + "</li>");
        $("ul").append("<li>Euro: " + json.rates.EUR + "</li>");
        $("ul").append("<li>Won: " + json.rates.KWR + "</li>");
        $("ul").append("<li>Yuan: " + json.rates.CNY + "</li>");

      }
    });
  }
}
var gm = new GasManager();