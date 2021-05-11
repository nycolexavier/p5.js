function setup() {
    var km = milesToKm(26.3);
    printLn(km);
    var km2 = milesToKm(100);
    printLn(km2);
  }
  
  function milesToKm(miles) {
    var km = miles * 1.6;
  }